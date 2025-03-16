
import React from 'react';
import { FAQ_ITEMS } from './constants';
import { motion } from 'framer-motion';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <motion.div 
      className="w-full max-w-3xl mx-auto py-8 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">❓ FAQs (Frequently Asked Questions)</h2>
      
      <Accordion type="single" collapsible className="w-full">
        {FAQ_ITEMS.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-medium text-slate-800">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-slate-600">
              <div dangerouslySetInnerHTML={{ 
                __html: item.answer.replace(
                  /<a\s+href=['"]([^'"]+)['"]\s+target=['"]_blank['"]\s+rel=['"]noopener noreferrer['"]>(.*?)<\/a>/g, 
                  '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline inline-flex items-center">$2 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="ml-0.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>'
                )
              }} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      
      <div className="mt-8 pt-4 border-t border-slate-200 text-center text-sm text-slate-600">
        <p className="mb-2">
          Thank you for using Text to Handwriting! You can follow me on X or Instagram <a href="https://twitter.com/aayushSh2003" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@aayushSh2003</a>
        </p>
        <p className="mb-2">
          Do star the <a href="https://github.com/aayushsh2003/canvas-calligraphy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center">Canvas- Calligraphy GitHub Repository <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="ml-0.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a> and If you're using it for writing assignments, make sure you use it at your own risk!
        </p>
        <p>
          If it fails and your teacher finds this tool, ask them to star my GitHub as well :D
        </p>
        <p className="mt-4 font-medium">
          ~ Aayush Sharma (<a href="https://www.instagram.com/aayushsh2003/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center">@aayushsh2003 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="ml-0.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>)
        </p>
      </div>
    </motion.div>
  );
};

export default FAQSection;
