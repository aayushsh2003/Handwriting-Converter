
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { toast } from 'sonner';
import { jsPDF } from 'jspdf';
import HandwritingCanvas from './HandwritingCanvas';
import TextInputPanel from './handwriting/TextInputPanel';
import CustomizationPanel from './handwriting/CustomizationPanel';
import DownloadPreview from './handwriting/DownloadPreview';
import Footer from './home/Footer';
import FAQSection from './handwriting/FAQSection';
import { getSelectedFont, getSelectedInkColor, getSelectedPageColor } from './handwriting/constants';

const HandwritingConverter: React.FC = () => {
  const [text, setText] = useState('');
  const [font, setFont] = useState('caveat');
  const [pageColor, setPageColor] = useState('white');
  const [inkColor, setInkColor] = useState('black');
  const [pageType, setPageType] = useState('ruled');
  const [customInkColor, setCustomInkColor] = useState('#000000');
  const [showMargins, setShowMargins] = useState(true);
  const [customBackground, setCustomBackground] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showDownloadPreview, setShowDownloadPreview] = useState(false);
  const [letterSpacing, setLetterSpacing] = useState('normal');
  const [title, setTitle] = useState('');
  const [showTitle, setShowTitle] = useState(false);
  const [customFontFamily, setCustomFontFamily] = useState<string | null>(null);
  const [customFontUrl, setCustomFontUrl] = useState<string | null>(null);
  const canvasRef = useRef<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const fontInputRef = useRef<HTMLInputElement>(null);

  const handleCanvasTextChange = (newText: string) => {
    setText(newText);
  };

  const handleCustomFontUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Create a URL for the font file
      const fontUrl = URL.createObjectURL(file);
      
      // Create a style element to define the font-face
      const style = document.createElement('style');
      style.textContent = `
        @font-face {
          font-family: 'CustomHandwriting';
          src: url('${fontUrl}') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
      `;
      document.head.appendChild(style);
      
      // Store the font URL so we can revoke it when needed
      if (customFontUrl) {
        URL.revokeObjectURL(customFontUrl);
      }
      
      setCustomFontUrl(fontUrl);
      setCustomFontFamily('CustomHandwriting');
      setFont('custom-font');
      
      toast.success('Custom font uploaded successfully!');
    }
  };

  const handleDownload = () => {
    if (canvasRef.current) {
      setShowDownloadPreview(true);
      
      if (!showDownloadPreview) {
        const canvas = canvasRef.current;
        const dataUrl = canvas.toDataURL({
          format: 'png',
          quality: 1.0
        });
        
        const link = document.createElement('a');
        link.download = 'handwritten-note.png';
        link.href = dataUrl;
        link.click();
        
        toast.success('Your handwritten note has been downloaded!');
      }
    } else {
      toast.error('Canvas not available. Please try again.');
    }
  };

  const handleDownloadAllPages = () => {
    if (canvasRef.current) {
      const pages = canvasRef.current.getAllPages();
      
      if (pages.length === 1) {
        const link = document.createElement('a');
        link.download = 'handwritten-note.png';
        link.href = pages[0];
        link.click();
      } else {
        pages.forEach((pageDataUrl: string, index: number) => {
          const link = document.createElement('a');
          link.download = `handwritten-note-page-${index + 1}.png`;
          link.href = pageDataUrl;
          link.click();
          
          setTimeout(() => {}, 100);
        });
      }
      
      setShowDownloadPreview(false);
      toast.success('Your handwritten notes have been downloaded!');
    }
  };

  const exportAsPdf = () => {
    if (canvasRef.current) {
      try {
        const pages = canvasRef.current.getAllPages();
        if (pages.length === 0) {
          toast.error('No content to export');
          return;
        }

        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'px',
          format: [600, 800]
        });

        // Add each page to the PDF
        pages.forEach((pageDataUrl: string, index: number) => {
          if (index > 0) {
            pdf.addPage();
          }
          pdf.addImage(pageDataUrl, 'PNG', 0, 0, 600, 800);
        });

        // Save the PDF
        pdf.save('handwritten-document.pdf');
        toast.success('PDF exported successfully!');
      } catch (error) {
        console.error('Error exporting PDF:', error);
        toast.error('Failed to export PDF. Please try again.');
      }
    }
  };

  const selectedFont = getSelectedFont(font);
  const selectedInkColor = getSelectedInkColor(inkColor, customInkColor);
  const selectedPageColor = getSelectedPageColor(pageColor);

  return (
    <>
      <div className="container max-w-6xl py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-xl font-bold">Preview</h2>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <HandwritingCanvas 
                text={text}
                fontFamily={selectedFont}
                inkColor={selectedInkColor}
                pageColor={selectedPageColor}
                pageType={pageType}
                showMargins={showMargins}
                customBackground={customBackground || undefined}
                onTextChange={isEditing ? handleCanvasTextChange : undefined}
                ref={canvasRef}
                title={title}
                showTitle={showTitle}
                letterSpacing={letterSpacing}
                customFontFamily={customFontFamily || undefined}
              />
            </div>

            {showDownloadPreview && (
              <DownloadPreview 
                text={text}
                fontFamily={selectedFont}
                inkColor={selectedInkColor}
                pageColor={selectedPageColor}
                pageType={pageType}
                showMargins={showMargins}
                customBackground={customBackground || undefined}
                onClose={() => setShowDownloadPreview(false)}
                onDownload={handleDownloadAllPages}
                title={title}
                showTitle={showTitle}
                letterSpacing={letterSpacing}
                customFontFamily={customFontFamily || undefined}
              />
            )}
          </div>

          <div className="w-full md:w-1/3 flex flex-col gap-5">
            <TextInputPanel 
              text={text}
              setText={setText}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />

            <CustomizationPanel 
              font={font}
              setFont={setFont}
              pageColor={pageColor}
              setPageColor={setPageColor}
              inkColor={inkColor}
              setInkColor={setInkColor}
              pageType={pageType}
              setPageType={setPageType}
              customInkColor={customInkColor}
              setCustomInkColor={setCustomInkColor}
              showMargins={showMargins}
              setShowMargins={setShowMargins}
              customBackground={customBackground}
              setCustomBackground={setCustomBackground}
              fileInputRef={fileInputRef}
              letterSpacing={letterSpacing}
              setLetterSpacing={setLetterSpacing}
              title={title}
              setTitle={setTitle}
              showTitle={showTitle}
              setShowTitle={setShowTitle}
              exportAsPdf={exportAsPdf}
              fontInputRef={fontInputRef}
              onCustomFontUpload={handleCustomFontUpload}
            />
            
            <Button 
              onClick={handleDownload} 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Download className="mr-2 h-4 w-4" /> Download as PNG
            </Button>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-slate-50 rounded-lg border border-slate-200">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <span className="text-2xl">🤓</span>
            Guide to add your own handwriting
          </h3>
          <div className="mt-3 text-slate-700">
            <p>To use your handwriting, you will have to generate a font from your handwriting.</p>
            <ol className="list-decimal ml-6 mt-2 space-y-1">
              <li>Visit websites like <a href="https://www.calligraphr.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Calligraphr</a> that let you create fonts from your handwriting.</li>
              <li>Download your handwriting as a .ttf file</li>
              <li>Upload it using the 'Upload your handwriting font' button in the customization section</li>
              <li>The font will be automatically applied to your text</li>
            </ol>
            <p className="mt-2 text-sm text-slate-500">Note: Custom fonts will only be available for the current session.</p>
          </div>
        </div>
        
        {/* Adding the FAQ Section */}
        <div className="mt-8">
          <FAQSection />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HandwritingConverter;
