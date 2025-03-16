
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { MoveRight, Feather, Sparkles, PenTool, Download, LayoutGrid, Check } from 'lucide-react';
import DeveloperInfo from '../components/home/DeveloperInfo';
import Footer from '../components/home/Footer';

const Index = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const featureItems = [
    {
      icon: <Feather className="h-10 w-10 text-blue-500" />,
      title: "Beautiful Handwriting",
      description: "Convert your digital text into realistic handwritten notes with multiple styles to choose from."
    },
    {
      icon: <PenTool className="h-10 w-10 text-purple-500" />,
      title: "Customize Everything",
      description: "Change paper type, ink color, margins, and more to create your perfect handwritten document."
    },
    {
      icon: <LayoutGrid className="h-10 w-10 text-amber-500" />,
      title: "Multi-page Support",
      description: "Automatically splits your content into multiple pages with proper pagination and navigation."
    },
    {
      icon: <Download className="h-10 w-10 text-green-500" />,
      title: "Export Options",
      description: "Download as individual PNG images or as a complete PDF document with all your handwritten pages."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "High School Teacher",
      text: "This tool has been a game-changer for creating personalized feedback for my students. The handwriting looks incredibly realistic!"
    },
    {
      name: "Michael Chen",
      role: "University Student",
      text: "I use this to convert my typed notes to handwritten format. It helps me review material more effectively since it looks like I wrote it myself."
    },
    {
      name: "Priya Patel",
      role: "Content Creator",
      text: "The customization options are amazing. I can match my actual handwriting style pretty closely which is perfect for my work."
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Handwriting Converter - Transform Digital Text to Handwritten Notes</title>
        <meta name="description" content="Convert your digital text into beautiful, customizable handwritten notes. Perfect for students, teachers, and professionals." />
        <meta name="keywords" content="handwriting converter, text to handwriting, handwritten notes, digital to handwritten" />
      </Helmet>
      
      <header className="bg-white border-b shadow-sm">
        <div className="container py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Text to Handwriting Converter
          </h1>
          <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
            Transform your digital text into authentic handwritten notes in seconds
          </p>
        </div>
      </header>
      
      <main>
        <motion.div 
          className="flex flex-col items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Section */}
          <section className="w-full bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
            <div className="container max-w-6xl">
              <motion.div 
                className="flex flex-col md:flex-row items-center gap-8 mb-8"
                variants={itemVariants}
              >
                <div className="flex-1 space-y-6">
                  <h2 className="text-4xl font-bold text-slate-800">Create Authentic Handwritten Notes</h2>
                  <p className="text-slate-600 text-lg">
                    Perfect for creating study materials, personalized letters, or adding a human touch to digital documents.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-slate-700">Multiple handwriting styles that look just like real handwriting</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-slate-700">Customizable paper types, margins, and ink colors</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-slate-700">Multi-page support with PDF export capability</p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => navigate('/converter')}
                    className="group bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start Converting Now
                    <MoveRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <motion.div 
                  className="flex-1 border-4 border-white rounded-xl shadow-xl overflow-hidden bg-white"
                  initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
                  animate={{ opacity: 1, scale: 1, rotate: 2 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                >
                  <img 
                    src="/placeholder.svg" 
                    alt="Handwriting Preview" 
                    className="w-full h-auto"
                  />
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Feature Section */}
          <section className="w-full py-16 bg-white">
            <div className="container max-w-6xl">
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold text-center mb-10 text-slate-800">
                  Everything You Need For Perfect Handwritten Notes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {featureItems.map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="bg-slate-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                      whileHover={{ y: -5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-semibold mb-2 text-slate-800">{feature.title}</h3>
                      <p className="text-slate-600">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
          
          {/* Testimonials Section */}
          <section className="w-full py-16 bg-slate-50">
            <div className="container max-w-6xl">
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold text-center mb-10 text-slate-800">
                  What Our Users Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <motion.div 
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                      whileHover={{ y: -5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="mb-4">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-yellow-400">★</span>
                          ))}
                        </div>
                      </div>
                      <p className="text-slate-700 mb-4 italic">"{testimonial.text}"</p>
                      <div>
                        <p className="font-semibold text-slate-800">{testimonial.name}</p>
                        <p className="text-sm text-slate-500">{testimonial.role}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
          
          {/* CTA Section */}
          <motion.section 
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16"
            variants={itemVariants}
          >
            <div className="container max-w-6xl">
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold">Ready to Try It Yourself?</h2>
                <p className="text-lg max-w-2xl mx-auto">
                  Convert your digital text to handwriting in just a few clicks. Customize the style, paper, and ink to create the perfect handwritten document.
                </p>
                <Button 
                  onClick={() => navigate('/converter')}
                  variant="secondary" 
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-slate-100 mt-4"
                >
                  Start Converting <MoveRight className="ml-2" />
                </Button>
              </div>
            </div>
          </motion.section>
          
          {/* Developer Info Section */}
          <DeveloperInfo />
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
