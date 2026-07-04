import XLSX from 'xlsx';

export default async function handler(req, res) {
  // Only allow GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Token-gate access
  const authHeader = req.headers['authorization'] || '';
  const token = authHeader.replace('Bearer ', '').trim() || req.query.token;
  const expectedToken = process.env.EXPORT_TOKEN;

  if (!expectedToken || token !== expectedToken) {
    return res.status(401).json({ error: 'Unauthorized: Invalid export token' });
  }

  const googleSheetUrl = process.env.GOOGLE_SHEET_URL;
  if (!googleSheetUrl) {
    return res.status(500).json({ error: 'Server configuration error: GOOGLE_SHEET_URL not set' });
  }

  try {
    // Append the action and a secret query parameter if secure retrieval is set up on the Google Script
    const fetchUrl = `${googleSheetUrl}?action=getLeads&secret=${process.env.GOOGLE_SCRIPT_SECRET || ''}`;
    const response = await fetch(fetchUrl);

    if (!response.ok) {
      throw new Error(`Google Sheets responded with status ${response.status}`);
    }

    const leads = await response.json();
    if (!Array.isArray(leads)) {
      throw new Error('Invalid response format from spreadsheet service');
    }

    // Build Excel file in-memory using SheetJS
    const ws = XLSX.utils.json_to_sheet(leads);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Leads');

    const excelBuffer = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });

    // Stream the binary buffer
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="GetFound_Leads.xlsx"');
    return res.status(200).send(excelBuffer);
  } catch (error) {
    console.error('Export failed:', error);
    return res.status(500).json({ error: 'Failed to retrieve or generate leads export' });
  }
}
