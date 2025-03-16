
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Feather, Heart, ExternalLink, Mail, MapPin, Github } from 'lucide-react';
import { DEVELOPER_INFO, DOCUMENTATION } from '../handwriting/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <Feather className="h-6 w-6 text-blue-400" />
              <h3 className="text-2xl font-bold">Handwriting Converter</h3>
            </div>
            <p className="text-slate-300 text-sm max-w-md">
              Transform your digital text into beautiful, customizable handwritten notes with ease. 
              Perfect for students, teachers, and professionals who want to add a personal touch to their digital content.
            </p>
            <div className="flex items-center text-sm text-slate-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-red-500" />
              <span>by {DEVELOPER_INFO.name}</span>
            </div>
            
            <div className="pt-4 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${DEVELOPER_INFO.email}`} className="hover:text-white transition-colors">
                  {DEVELOPER_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin className="h-4 w-4" />
                <span>{DEVELOPER_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Github className="h-4 w-4" />
                <a 
                  href={DEVELOPER_INFO.profiles.find(p => p.platform === "GitHub")?.url || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center"
                >
                  {DEVELOPER_INFO.profiles.find(p => p.platform === "GitHub")?.url?.split('github.com/')[1]}
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg border-b border-slate-800 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/converter" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Handwriting Converter
                </Link>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-1 group"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('/handwriting-samples.zip', '_blank');
                  }}
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Download Samples <ExternalLink className="h-3.5 w-3.5 ml-1" />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg border-b border-slate-800 pb-2">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href={DEVELOPER_INFO.profiles.find(p => p.platform === "GitHub")?.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  GitHub Repository <ExternalLink className="h-3.5 w-3.5 ml-1" />
                </a>
              </li>
              <li>
                <Link 
                  to="/documentation"
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Documentation <ExternalLink className="h-3.5 w-3.5 ml-1" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy-policy"
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Privacy Policy <ExternalLink className="h-3.5 w-3.5 ml-1" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms-of-service"
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Terms of Service <ExternalLink className="h-3.5 w-3.5 ml-1" />
                </Link>
              </li>
              <li>
                <a 
                  href="https://fabricjs.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Fabric.js <ExternalLink className="h-3.5 w-3.5 ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Handwriting Converter. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-slate-400 hover:text-white transition-colors text-sm">
              Privacy
            </Link>
            <Link to="/terms-of-service" className="text-slate-400 hover:text-white transition-colors text-sm">
              Terms
            </Link>
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
