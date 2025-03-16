
import React from 'react';
import { motion } from 'framer-motion';
import { DEVELOPER_INFO } from '../handwriting/constants';
import { Github, Linkedin, Twitter, Instagram, ExternalLink, Briefcase, GraduationCap, UserCheck } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const DeveloperInfo = () => {
  const iconMap = {
    github: <Github className="h-5 w-5" />,
    linkedin: <Linkedin className="h-5 w-5" />,
    twitter: <Twitter className="h-5 w-5" />,
    instagram: <Instagram className="h-5 w-5" />
  };

  return (
    <motion.section 
      className="w-full py-16 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Meet the Developer</h2>
        
        <div className="flex flex-col items-center text-center">
          <motion.div 
            className="mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
          >
            <Avatar className="w-40 h-40 border-4 border-blue-500">
              <AvatarImage src={DEVELOPER_INFO.photoUrl} alt={DEVELOPER_INFO.name} className="object-cover" />
              <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-5xl font-bold text-white">
                {DEVELOPER_INFO.name.split(' ').map(name => name[0]).join('')}
              </AvatarFallback>
            </Avatar>
          </motion.div>
          
          <motion.h3 
            className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {DEVELOPER_INFO.name}
          </motion.h3>
          
          <motion.p 
            className="text-lg text-purple-600 font-medium mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            {DEVELOPER_INFO.role}
          </motion.p>
          
          <motion.p 
            className="text-gray-600 max-w-2xl mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            {DEVELOPER_INFO.bio}
          </motion.p>
          
          <motion.div 
            className="flex gap-4 mb-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            {DEVELOPER_INFO.profiles.map((profile, index) => (
              <a 
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-600 transition-colors"
                aria-label={`${profile.platform} profile`}
              >
                {iconMap[profile.icon as keyof typeof iconMap]}
              </a>
            ))}
            
            <a 
              href={DEVELOPER_INFO.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-600 transition-colors"
              aria-label="Portfolio website"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 w-full">
            <motion.div 
              className="p-6 bg-blue-50 rounded-lg"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0 }}
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                  <Briefcase className="h-6 w-6" />
                </div>
              </div>
              <h4 className="font-semibold mb-2 text-lg">Experience</h4>
              <div className="space-y-2 text-gray-600 text-sm">
                {DEVELOPER_INFO.experience.map((exp, index) => (
                  <div key={index} className="py-1">
                    <p className="font-medium text-slate-700">{exp.role}</p>
                    <p>{exp.company}</p>
                    <p className="text-xs text-slate-500">{exp.period}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-purple-50 rounded-lg"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1 }}
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                  <GraduationCap className="h-6 w-6" />
                </div>
              </div>
              <h4 className="font-semibold mb-2 text-lg">Education</h4>
              <div className="space-y-1 text-gray-600 text-sm">
                {DEVELOPER_INFO.education.map((edu, index) => (
                  <div key={index} className="py-1">
                    <p className="font-medium text-slate-700">{edu.degree}</p>
                    <p>{edu.institution}</p>
                    {edu.location && <p>{edu.location}</p>}
                    <p className="text-xs text-slate-500">{edu.period}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-amber-50 rounded-lg"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-amber-100 rounded-full text-amber-600">
                  <UserCheck className="h-6 w-6" />
                </div>
              </div>
              <h4 className="font-semibold mb-2 text-lg">Skills</h4>
              <div className="space-y-2 text-gray-600 text-sm">
                {DEVELOPER_INFO.skills.map((skill, index) => (
                  <p key={index} className="py-1">{skill}</p>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="w-full max-w-2xl p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg text-left"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.3 }}
          >
            <h4 className="font-semibold mb-3 text-center">About This Project</h4>
            <p className="text-sm text-gray-600 mb-3">
              The Text to Handwriting Converter was created as a personal project to help students and professionals 
              create authentic-looking handwritten documents from digital text. The tool focuses on providing 
              realistic handwriting styles with extensive customization options.
            </p>
            <p className="text-sm text-gray-600">
              Built with React, TypeScript, and Fabric.js, this project demonstrates modern web development 
              practices while providing a practical utility for everyday use.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default DeveloperInfo;
