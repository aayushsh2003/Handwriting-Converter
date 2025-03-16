
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Footer from '../components/home/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, AlertTriangle, CheckCircle, BookOpen, MessageSquare } from 'lucide-react';
import { DOCUMENTATION } from '../components/handwriting/constants';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Helmet>
        <title>Terms of Service - Handwriting Converter</title>
        <meta name="description" content="Terms of Service for the Handwriting Converter application." />
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-8 text-white">
            <div className="flex items-center gap-3 mb-2">
              <FileText className="h-8 w-8 text-white" />
              <motion.h1 
                className="text-3xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Terms of Service
              </motion.h1>
            </div>
            <motion.p
              className="text-blue-100"
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
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-slate-800 m-0">Acceptance of Terms</h3>
                </div>
                <div className="pl-9">
                  <p className="text-slate-700">
                    By using the Text to Handwriting Converter, you agree to these Terms of Service.
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
                  <BookOpen className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-slate-800 m-0">Description of Service</h3>
                </div>
                <div className="pl-9">
                  <p className="text-slate-700">
                    The Text to Handwriting Converter allows users to convert digital text into handwriting-like output 
                    for various purposes.
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
                  <AlertTriangle className="h-6 w-6 text-amber-500" />
                  <h3 className="text-xl font-bold text-slate-800 m-0">Responsible Use</h3>
                </div>
                <div className="pl-9">
                  <p className="text-slate-700">
                    Users are responsible for how they use this service. While we designed this tool to help with legitimate needs 
                    like creating personalized content, we don't endorse using it for deception or academic dishonesty.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="mb-8 bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100"
              >
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-amber-800 m-0">Student Disclaimer</h3>
                </div>
                <p className="text-slate-700 mb-3">
                  Attention students! If you're using this to convert your homework, just remember: it's all fun and games 
                  until your teacher recognizes Times New Roman disguised as "handwriting." Use at your own risk, and if 
                  you get caught, please tell your teacher our app needs more stars on GitHub. 😅
                </p>
                <p className="text-slate-700 italic border-l-4 border-amber-300 pl-3">
                  If you're thinking of submitting that "handwritten" essay that took you 2 minutes to generate, 
                  just remember - teachers were students once too. They know all the tricks, probably better than you do!
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-slate-800 m-0">Intellectual Property</h3>
                </div>
                <div className="pl-9">
                  <p className="text-slate-700">
                    All content, design, and functionality of the Text to Handwriting Converter are the property of the developer 
                    and are protected by copyright laws.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="mt-10 p-6 bg-blue-50 rounded-xl border border-blue-100"
              >
                <h3 className="text-xl font-bold text-blue-800 mb-3">Contact Us</h3>
                <p className="text-slate-700">
                  If you have questions about these Terms, please contact us at{' '}
                  <a 
                    href="mailto:aayushsharma4437@gmail.com" 
                    className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
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

export default TermsOfService;
