// Node 18+ has global fetch, no import required

// Simple in-memory rate limiting fallback for single instance
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5; // max 5 submissions per window per IP

function isRateLimited(ip) {
  const now = Date.now();
  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, [now]);
    return false;
  }
  const timestamps = rateLimitMap.get(ip).filter(t => now - t < RATE_LIMIT_WINDOW);
  if (timestamps.length >= MAX_REQUESTS) {
    return true;
  }
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return false;
}

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Rate Limiting
  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'anonymous';
  if (isRateLimited(clientIp)) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  const { name, email, phone, website, service, budget, message } = req.body || {};

  // Validation
  if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const googleSheetUrl = process.env.GOOGLE_SHEET_URL;
  if (!googleSheetUrl) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const payload = {
    name,
    email,
    phone,
    website: website || '',
    service: service?.trim() || 'General Enquiry',
    budget: budget?.trim() || 'N/A',
    message,
    submittedAt: new Date().toLocaleString()
  };

  try {
    const response = await fetch(googleSheetUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'addLead', data: payload })
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Google Sheets responded with status ${response.status}: ${errText}`);
    }

    return res.status(200).json({ success: true, message: 'Lead submitted successfully' });
  } catch (error) {
    console.error('Submission to Google Sheets failed:', error);
    return res.status(500).json({ error: 'Failed to save lead. Please try again.' });
  }
}
