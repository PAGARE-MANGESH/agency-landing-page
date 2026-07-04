import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft, ArrowRight, Phone } from 'lucide-react';
import { FadeUp } from '../utils/animations.jsx';

export default function Blog() {
  const [selectedPostId, setSelectedPostId] = useState(null); // null means show list

  const posts = [
    {
      id: 1,
      category: 'GMB Optimization',
      date: '15/1/2024',
      title: '5 Common Mistakes Businesses Make on Google My Business',
      excerpt: 'Your Google My Business profile is often the first impression customers get. Yet many businesses unknowingly make mistakes that hurt their visibility.',
      author: 'Get Found Team',
      readTime: '5 min read',
      content: (
        <div className="space-y-6 text-slate-650 dark:text-slate-350 text-sm sm:text-base leading-relaxed text-left">
          <p>Your Google My Business profile is often the first impression customers get. Yet many businesses unknowingly make mistakes that hurt their visibility.</p>
          
          <h3 className="text-lg font-bold text-[#0A1931] dark:text-white mt-8 mb-4">Top 5 Mistakes to Avoid</h3>
          
          <ol className="space-y-4 list-decimal pl-4">
            <li>
              <strong>Missing or Inaccurate Business Info</strong>
              <p className="mt-1 text-slate-500 dark:text-slate-400">Ensure your name, address, phone number, and hours are always updated. Inconsistent information confuses both Google and your customers.</p>
            </li>
            <li>
              <strong>Ignoring Reviews</strong>
              <p className="mt-1 text-slate-500 dark:text-slate-400">Respond to all reviews—both good and bad. It shows engagement and builds trust with potential customers.</p>
            </li>
            <li>
              <strong>Low-Quality Photos</strong>
              <p className="mt-1 text-slate-500 dark:text-slate-400">Use clear, well-lit images to make your business stand out. Photos can increase engagement by up to 42%.</p>
            </li>
            <li>
              <strong>No Business Description</strong>
              <p className="mt-1 text-slate-500 dark:text-slate-400">Don't skip this! Use relevant keywords to describe your services and what makes you unique.</p>
            </li>
            <li>
              <strong>Not Using Posts or Updates</strong>
              <p className="mt-1 text-slate-500 dark:text-slate-400">Use the GMB post feature to promote offers, events, or news. Regular posts keep your profile active and engaging.</p>
            </li>
          </ol>

          <h3 className="text-lg font-bold text-[#0A1931] dark:text-white mt-8 mb-3">Conclusion</h3>
          <p>Fix these mistakes and you'll notice better rankings and more customer engagement. Need help optimizing your GMB profile? Contact Get Found today!</p>
        </div>
      )
    },
    {
      id: 2,
      category: 'Local SEO',
      date: '10/1/2024',
      title: 'What Is Google My Business and Why Is It Crucial for Local SEO?',
      excerpt: 'Google My Business (GMB) is a free tool from Google that helps businesses manage their presence on Search and Maps. If you\'re a local business, it\'s a must-have.',
      author: 'Get Found Team',
      readTime: '4 min read',
      content: (
        <div className="space-y-6 text-slate-650 dark:text-slate-350 text-sm sm:text-base leading-relaxed text-left">
          <p>Google My Business (GMB) is a free tool from Google that helps businesses manage their presence on Search and Maps. If you're a local business, it's a must-have.</p>
          
          <h3 className="text-lg font-bold text-[#0A1931] dark:text-white mt-8 mb-4">Why It Matters</h3>
          <ul className="space-y-3 list-disc pl-4">
            <li><strong>Appears in Local Search & Maps</strong> - Your business shows up when people search for services near them</li>
            <li><strong>Increases Trust with Reviews & Photos</strong> - Customer reviews and business photos build credibility</li>
            <li><strong>Boosts Clicks, Calls & Visits</strong> - Direct contact options make it easy for customers to reach you</li>
            <li><strong>Improves Local SEO Without a Website</strong> - Even without a website, you can rank in local searches</li>
          </ul>

          <h3 className="text-lg font-bold text-[#0A1931] dark:text-white mt-8 mb-4">Key Features of GMB</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-slate-800 dark:text-slate-200">Business Information</h4>
              <p className="text-slate-500 dark:text-slate-400 mt-1">Display your address, phone number, hours, and website link prominently in search results.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 dark:text-slate-200">Customer Reviews</h4>
              <p className="text-slate-500 dark:text-slate-400 mt-1">Collect and respond to customer reviews to build trust and improve your local ranking.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 dark:text-slate-200">Photos and Videos</h4>
              <p className="text-slate-500 dark:text-slate-400 mt-1">Showcase your business with high-quality images that attract potential customers.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 dark:text-slate-200">Posts and Updates</h4>
              <p className="text-slate-500 dark:text-slate-400 mt-1">Share news, offers, and events directly on your GMB profile to keep customers engaged.</p>
            </div>
          </div>

          <div className="bg-[#0055DF]/5 border border-[#0055DF]/10 rounded-2xl p-5 my-6">
            <h5 className="font-bold text-[#0055DF] dark:text-blue-400 uppercase tracking-widest text-xs mb-1">Bonus Tip</h5>
            <p className="text-slate-650 dark:text-slate-350 text-sm">Optimizing your GMB profile is often more effective than spending on ads—especially for service-based businesses.</p>
          </div>

          <h3 className="text-lg font-bold text-[#0A1931] dark:text-white mt-8 mb-3">Conclusion</h3>
          <p>If you're not on GMB, your competitors are winning. Set it up or get help from an expert like Get Found to maximize your local visibility.</p>
        </div>
      )
    }
  ];

  const activePost = posts.find(p => p.id === selectedPostId);

  return (
    <section id="blog" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <AnimatePresence mode="wait">
          {!selectedPostId ? (
            // LIST VIEW
            <motion.div
              key="list-view"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
            >
              {/* Back to Home Link */}
              <div className="flex justify-center mb-6">
                <a 
                  href="#home" 
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0055DF] hover:underline uppercase tracking-wider"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Home</span>
                </a>
              </div>

              {/* Title & Subheading */}
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#0055DF] dark:text-blue-400 leading-tight tracking-tight uppercase">
                  Local SEO Blog
                </h2>
                <p className="mt-4 text-[#64748B] dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                  Expert insights, tips, and strategies to help your local business dominate Google search results
                </p>
              </div>

              {/* Blog Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {posts.map(post => (
                  <motion.div
                    key={post.id}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="flex flex-col justify-between p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-[0_15px_40px_rgba(0,0,0,0.02)] text-left"
                  >
                    <div>
                      {/* Category and Date Header */}
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 text-[11px] font-bold bg-blue-50 dark:bg-blue-900/30 text-[#0055DF] dark:text-blue-400 rounded-full">
                          {post.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-slate-400 dark:text-slate-500 text-xs font-semibold">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                      </div>

                      {/* Post Title */}
                      <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#0A1931] dark:text-white mb-3 hover:text-[#0055DF] transition-colors leading-snug">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Card Footer metadata & Read More Link */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-800/60 mt-auto">
                      <div className="flex flex-col gap-1 text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                        <span className="inline-flex items-center gap-1">
                          <User className="w-3.5 h-3.5" />
                          {post.author}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      
                      <button
                        onClick={() => {
                          setSelectedPostId(post.id);
                          window.scrollTo({ top: document.getElementById('blog').offsetTop - 80, behavior: 'smooth' });
                        }}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0055DF] hover:underline uppercase tracking-wider"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            // DETAIL VIEW
            <motion.div
              key="detail-view"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl mx-auto"
            >
              {/* Back to Blog Button */}
              <div className="flex items-center mb-6">
                <button
                  onClick={() => {
                    setSelectedPostId(null);
                    window.scrollTo({ top: document.getElementById('blog').offsetTop - 80, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0055DF] hover:underline uppercase tracking-wider"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Blog</span>
                </button>
              </div>

              {/* Detail Heading */}
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-[#0A1931] dark:text-white leading-[1.2] mb-6 text-left">
                {activePost.title}
              </h2>

              {/* Meta tags bar */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pb-6 border-b border-slate-100 dark:border-slate-800/80 mb-8 text-xs font-semibold text-slate-400 dark:text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <User className="w-4 h-4 text-[#0055DF]" />
                  <span>{activePost.author}</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#0055DF]" />
                  <span>{activePost.date}</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#0055DF]" />
                  <span>{activePost.readTime}</span>
                </span>
              </div>

              {/* Post Content */}
              <div className="prose dark:prose-invert max-w-none mb-12">
                {activePost.content}
              </div>

              {/* Bottom CTA Banner */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full rounded-2xl bg-[#0055DF]/[0.02] dark:bg-slate-900/40 border border-[#0055DF]/10 p-6 sm:p-8 text-center text-slate-800 dark:text-slate-200 mt-12 shadow-sm"
              >
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#0A1931] dark:text-white mb-2">
                  Ready to Optimize Your Local SEO?
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm max-w-lg mx-auto mb-6">
                  Get expert help from Get Found to dominate your local search results and attract more customers.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <motion.a 
                    href="tel:7039821730"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0055DF] text-white font-bold rounded-xl shadow-md hover:bg-blue-600 transition-all text-xs sm:text-sm tracking-wide w-full sm:w-auto"
                  >
                    <Phone className="w-4 h-4 fill-current" />
                    <span>Call Now: 7039821730</span>
                  </motion.a>

                  <motion.a 
                    href="https://wa.me/917039821730"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#00A884] text-white font-bold rounded-xl shadow-md hover:bg-[#009675] transition-all text-xs sm:text-sm tracking-wide w-full sm:w-auto"
                  >
                    <span>Chat on WhatsApp</span>
                  </motion.a>
                </div>
              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
