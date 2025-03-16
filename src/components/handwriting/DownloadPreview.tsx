
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import HandwritingCanvas from '../HandwritingCanvas';

interface DownloadPreviewProps {
  text: string;
  fontFamily: string;
  inkColor: string;
  pageColor: string;
  pageType: string;
  showMargins: boolean;
  customBackground?: string;
  onClose: () => void;
  onDownload: () => void;
  title?: string;
  showTitle?: boolean;
  letterSpacing?: string;
  customFontFamily?: string;
}

const DownloadPreview: React.FC<DownloadPreviewProps> = ({
  text,
  fontFamily,
  inkColor,
  pageColor,
  pageType,
  showMargins,
  customBackground,
  onClose,
  onDownload,
  title = '',
  showTitle = false,
  letterSpacing = 'normal',
  customFontFamily
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-4xl w-full">
        <h3 className="text-lg font-bold mb-4">Download Preview</h3>
        <div className="flex flex-wrap gap-4 justify-center max-h-[70vh] overflow-auto p-2">
          <div className="border border-gray-200 shadow-sm">
            <HandwritingCanvas 
              text={text}
              fontFamily={fontFamily}
              inkColor={inkColor}
              pageColor={pageColor}
              pageType={pageType}
              showMargins={showMargins}
              customBackground={customBackground}
              title={title}
              showTitle={showTitle}
              letterSpacing={letterSpacing}
              customFontFamily={customFontFamily}
            />
          </div>
        </div>
        <div className="flex gap-4 justify-end mt-6">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onDownload}>
            <Download className="mr-2 h-4 w-4" /> Download All Pages
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DownloadPreview;
