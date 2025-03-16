
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Footer from '../components/home/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Lightbulb, Download, Shield, FileText } from 'lucide-react';

const Documentation = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Helmet>
        <title>Documentation - Handwriting Converter</title>
        <meta name="description" content="Documentation for the Handwriting Converter application, including user guides and tutorials." />
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
          <div className="bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-8 text-white">
            <motion.h1 
              className="text-3xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Documentation
            </motion.h1>
            <motion.p
              className="text-blue-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Learn how to use our Handwriting Converter effectively
            </motion.p>
          </div>
          
          <div className="p-6 lg:p-8 prose prose-slate max-w-none">
            <motion.div {...fadeIn} transition={{ delay: 0.3 }}>
              <div className="flex items-start gap-3 mb-6 bg-blue-50 p-4 rounded-lg">
                <BookOpen className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-bold text-blue-800 mb-2">Getting Started</h2>
                  <p className="text-slate-700">Welcome to the Text to Handwriting Converter! This documentation will help you understand how to use all features of the application.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
              <h3 className="flex items-center text-lg font-semibold text-slate-800 mt-6 mb-3">
                <span className="bg-blue-100 text-blue-700 w-7 h-7 rounded-full inline-flex items-center justify-center mr-2 flex-shrink-0">1</span>
                Basic Usage
              </h3>
              <ol className="list-none pl-9 space-y-2">
                <li className="relative">
                  <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-blue-200"></div>
                  Navigate to the Converter page
                </li>
                <li className="relative">
                  <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-blue-300"></div>
                  Type or paste your text in the input panel
                </li>
                <li className="relative">
                  <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-blue-400"></div>
                  Customize your handwriting using the options in the customization panel
                </li>
                <li className="relative">
                  <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-blue-500"></div>
                  Download your handwriting as an image or PDF
                </li>
              </ol>
            </motion.div>
            
            <motion.div {...fadeIn} transition={{ delay: 0.5 }}>
              <div className="flex items-start gap-3 mt-8 mb-4">
                <Lightbulb className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-slate-800">Customization Options</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-9">
                <div className="bg-slate-50 p-3 rounded-lg">
                  <p className="font-medium text-slate-700">Handwriting Style</p>
                  <p className="text-sm text-slate-600">Choose from various handwriting styles or upload your own font</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg">
                  <p className="font-medium text-slate-700">Paper Type</p>
                  <p className="text-sm text-slate-600">Select ruled, plain, or graph paper</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg">
                  <p className="font-medium text-slate-700">Ink Color</p>
                  <p className="text-sm text-slate-600">Choose from preset colors or create a custom color</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg">
                  <p className="font-medium text-slate-700">Paper Color</p>
                  <p className="text-sm text-slate-600">Choose from white, cream, blue, yellow, or green paper</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg">
                  <p className="font-medium text-slate-700">Margins</p>
                  <p className="text-sm text-slate-600">Toggle margins on or off</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg">
                  <p className="font-medium text-slate-700">Letter Spacing</p>
                  <p className="text-sm text-slate-600">Adjust spacing between letters for a more natural look</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div {...fadeIn} transition={{ delay: 0.6 }}>
              <div className="flex items-start gap-3 mt-8 mb-4">
                <Download className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-slate-800">Using Custom Handwriting</h3>
              </div>
              <p className="text-slate-700 mb-2 pl-9">To use your own handwriting:</p>
              <ol className="list-decimal pl-12 space-y-1 text-slate-700">
                <li>Create a font from your handwriting using a service like <a href="https://www.calligraphr.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">Calligraphr</a></li>
                <li>Download the font as a .ttf file</li>
                <li>Click "Upload your handwriting font" in the customization panel</li>
                <li>Select your .ttf file</li>
              </ol>
            </motion.div>
            
            <motion.div {...fadeIn} transition={{ delay: 0.7 }} className="mt-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-100">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Tips & Tricks</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>For the most natural look, use letter spacing to adjust the gap between characters in custom fonts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>Add a title to make your document look more authentic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>Use different paper colors for different types of documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>Try different handwriting styles to find the one that best matches your own</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div {...fadeIn} transition={{ delay: 0.8 }} className="mt-8">
              <div className="flex items-start gap-3 mb-4">
                <Shield className="h-6 w-6 text-violet-600 mt-1 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-slate-800">Additional Resources</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-9">
                <a href="https://github.com/aayushsh2003/canvas-calligraphy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-4 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
                  <FileText className="h-5 w-5 text-slate-700" />
                  <span className="text-slate-800 font-medium">GitHub Repository</span>
                </a>
                <Link to="/privacy-policy" className="flex items-center gap-2 p-4 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
                  <Shield className="h-5 w-5 text-slate-700" />
                  <span className="text-slate-800 font-medium">Privacy Policy</span>
                </Link>
                <Link to="/terms-of-service" className="flex items-center gap-2 p-4 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
                  <FileText className="h-5 w-5 text-slate-700" />
                  <span className="text-slate-800 font-medium">Terms of Service</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Documentation;
