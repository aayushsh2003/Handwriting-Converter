
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Footer from '../components/home/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Eye, Cookie } from 'lucide-react';
import { DOCUMENTATION } from '../components/handwriting/constants';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Helmet>
        <title>Privacy Policy - Handwriting Converter</title>
        <meta name="description" content="Privacy Policy for the Handwriting Converter application." />
      </Helmet>
      
      <div className="container max-w-4xl py-12 px-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link to="/" className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors bg-white/80 px-3 py-2 rounded-lg shadow-sm">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-md overflow-hidden"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-8 text-white">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="h-8 w-8 text-white" />
              <motion.h1 
                className="text-3xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Privacy Policy
              </motion.h1>
            </div>
            <motion.p
              className="text-indigo-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Last updated: {new Date().toLocaleDateString()}
            </motion.p>
          </div>
          
          <div className="p-6 lg:p-8">
            <div className="prose prose-slate max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Lock className="h-6 w-6 text-indigo-600" />
                  <h3 className="text-xl font-bold text-slate-800 m-0">Information We Collect</h3>
                </div>
                <div className="pl-9">
                  <p className="text-slate-700">
                    We don't collect any personal information when you use the Text to Handwriting Converter. 
                    Any text you input or images you generate remain in your browser and are not transmitted to our servers.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="h-6 w-6 text-indigo-600" />
                  <h3 className="text-xl font-bold text-slate-800 m-0">Custom Fonts</h3>
                </div>
                <div className="pl-9">
                  <p className="text-slate-700">
                    When you upload custom fonts, they are stored locally in your browser for the current session only 
                    and are not transmitted to our servers.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Cookie className="h-6 w-6 text-indigo-600" />
                  <h3 className="text-xl font-bold text-slate-800 m-0">Cookies</h3>
                </div>
                <div className="pl-9">
                  <p className="text-slate-700">
                    We may use cookies to improve your experience. You can set your browser to refuse all or some browser cookies, 
                    but this may limit functionality.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="h-6 w-6 text-indigo-600" />
                  <h3 className="text-xl font-bold text-slate-800 m-0">Third-Party Services</h3>
                </div>
                <div className="pl-9">
                  <p className="text-slate-700">
                    We may use third-party services like Google Fonts for font loading, which may collect usage data 
                    according to their own privacy policies.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-10 p-6 bg-indigo-50 rounded-xl border border-indigo-100"
              >
                <h3 className="text-xl font-bold text-indigo-800 mb-3">Contact Us</h3>
                <p className="text-slate-700">
                  If you have questions about this Privacy Policy, please contact us at{' '}
                  <a 
                    href="mailto:aayushsharma4437@gmail.com" 
                    className="text-indigo-600 hover:text-indigo-800 transition-colors font-medium"
                  >
                    aayushsharma4437@gmail.com
                  </a>.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
