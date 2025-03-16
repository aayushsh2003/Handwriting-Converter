
import React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Palette, 
  File,
  FileType,
  ImageIcon,
  PlusCircle,
  Indent,
  Download,
  Heading,
  Type,
  Upload
} from 'lucide-react';
import { FONTS, PAPER_COLORS, INK_COLORS, PAGE_TYPES, LETTER_SPACING_OPTIONS } from './constants';

interface CustomizationPanelProps {
  font: string;
  setFont: (value: string) => void;
  pageColor: string;
  setPageColor: (value: string) => void;
  inkColor: string;
  setInkColor: (value: string) => void;
  pageType: string;
  setPageType: (value: string) => void;
  customInkColor: string;
  setCustomInkColor: (value: string) => void;
  showMargins: boolean;
  setShowMargins: (value: boolean) => void;
  customBackground: string | null;
  setCustomBackground: (value: string | null) => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
  letterSpacing: string;
  setLetterSpacing: (value: string) => void;
  title: string;
  setTitle: (value: string) => void;
  showTitle: boolean;
  setShowTitle: (value: boolean) => void;
  exportAsPdf: () => void;
  fontInputRef: React.RefObject<HTMLInputElement>;
  onCustomFontUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomizationPanel: React.FC<CustomizationPanelProps> = ({
  font,
  setFont,
  pageColor,
  setPageColor,
  inkColor,
  setInkColor,
  pageType,
  setPageType,
  customInkColor,
  setCustomInkColor,
  showMargins,
  setShowMargins,
  customBackground,
  setCustomBackground,
  fileInputRef,
  letterSpacing,
  setLetterSpacing,
  title,
  setTitle,
  showTitle,
  setShowTitle,
  exportAsPdf,
  fontInputRef,
  onCustomFontUpload
}) => {
  const handleCustomBackgroundUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomBackground(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const clearCustomBackground = () => {
    setCustomBackground(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const getSelectedPageColor = () => {
    const colorMap = {
      'white': '#ffffff',
      'cream': '#f8f5e6',
      'blue': '#f5f9ff'
    };
    
    return colorMap[pageColor as keyof typeof colorMap] || '#ffffff';
  };

  return (
    <div className="bg-white rounded-lg p-5 shadow-md">
      <h2 className="text-xl font-bold mb-4">Customize</h2>
      
      <div className="grid gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <FileType size={18} />
            <Label htmlFor="font-select">Handwriting Style</Label>
          </div>
          <Select value={font} onValueChange={setFont}>
            <SelectTrigger id="font-select">
              <SelectValue placeholder="Select font" />
            </SelectTrigger>
            <SelectContent>
              {FONTS.map((fontOption) => (
                <SelectItem key={fontOption.id} value={fontOption.id}>
                  <span className={fontOption.className}>{fontOption.name}</span>
                </SelectItem>
              ))}
              <SelectItem value="custom-font">Custom Font</SelectItem>
            </SelectContent>
          </Select>

          {font === 'custom-font' && (
            <div className="mt-2 p-2 border rounded border-dashed border-gray-300">
              <Label className="block mb-2">Upload Your Handwriting Font</Label>
              <div className="flex items-center gap-2">
                <input 
                  type="file" 
                  accept=".ttf,.otf" 
                  className="hidden" 
                  ref={fontInputRef}
                  onChange={onCustomFontUpload}
                />
                <Button size="sm" variant="outline" onClick={() => fontInputRef.current?.click()}>
                  <Upload className="h-4 w-4 mr-1" /> Browse TTF File
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Upload a .ttf file of your custom handwriting font
              </p>
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Type size={18} />
            <Label htmlFor="letter-spacing-select">Letter Spacing</Label>
          </div>
          <Select value={letterSpacing} onValueChange={setLetterSpacing}>
            <SelectTrigger id="letter-spacing-select">
              <SelectValue placeholder="Select letter spacing" />
            </SelectTrigger>
            <SelectContent>
              {LETTER_SPACING_OPTIONS.map((option) => (
                <SelectItem key={option.id} value={option.id}>
                  {option.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Heading size={18} />
            <Label htmlFor="title-toggle">Document Title</Label>
          </div>
          <div className="flex flex-col gap-2 p-2 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Checkbox 
                id="title-toggle" 
                checked={showTitle}
                onCheckedChange={(checked) => setShowTitle(checked as boolean)}
              />
              <Label htmlFor="title-toggle">Show title</Label>
            </div>
            {showTitle && (
              <input
                type="text"
                placeholder="Enter title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            )}
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <File size={18} />
            <Label htmlFor="page-type-select">Page Type</Label>
          </div>
          <Select value={pageType} onValueChange={setPageType}>
            <SelectTrigger id="page-type-select">
              <SelectValue placeholder="Select page type" />
            </SelectTrigger>
            <SelectContent>
              {PAGE_TYPES.map((type) => (
                <SelectItem key={type.id} value={type.id}>
                  {type.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Indent size={18} />
            <Label htmlFor="margin-toggle">Show Margins</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox 
              id="margin-toggle" 
              checked={showMargins}
              onCheckedChange={(checked) => setShowMargins(checked as boolean)}
            />
            <Label htmlFor="margin-toggle">Enable paper margins</Label>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <ImageIcon size={18} />
            <Label>Custom Background</Label>
          </div>
          <div className="flex flex-col gap-2">
            <input 
              type="file" 
              accept="image/*" 
              className="hidden" 
              ref={fileInputRef}
              onChange={handleCustomBackgroundUpload}
            />
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => fileInputRef.current?.click()}
              >
                Upload Background
              </Button>
              {customBackground && (
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={clearCustomBackground}
                >
                  ✕
                </Button>
              )}
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Palette size={18} />
            <Label htmlFor="page-color-select">Page Color</Label>
          </div>
          <Select value={pageColor} onValueChange={setPageColor}>
            <SelectTrigger id="page-color-select">
              <SelectValue placeholder="Select page color" />
            </SelectTrigger>
            <SelectContent>
              {PAPER_COLORS.map((color) => (
                <SelectItem key={color.id} value={color.id}>
                  <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full bg-${color.value}`} 
                        style={{ background: getSelectedPageColor() }} />
                    {color.name}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Palette size={18} />
            <Label htmlFor="ink-color-select">Ink Color</Label>
          </div>
          <div className="flex gap-2">
            <Select value={inkColor} onValueChange={setInkColor}>
              <SelectTrigger id="ink-color-select" className="flex-1">
                <SelectValue placeholder="Select ink color" />
              </SelectTrigger>
              <SelectContent>
                {INK_COLORS.map((color) => (
                  <SelectItem key={color.id} value={color.id}>
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full bg-${color.value}`} 
                          style={{ background: color.id === 'black' ? '#000000' : color.id === 'blue' ? '#0046b5' : '#cb0000' }} />
                      {color.name}
                    </div>
                  </SelectItem>
                ))}
                <SelectItem value="custom">Custom Color</SelectItem>
              </SelectContent>
            </Select>
            
            {inkColor === 'custom' && (
              <input 
                type="color" 
                value={customInkColor}
                onChange={(e) => setCustomInkColor(e.target.value)}
                className="w-10 h-10 p-1 border rounded"
              />
            )}
          </div>
        </div>
        
        <Button 
          onClick={exportAsPdf} 
          className="w-full bg-green-600 hover:bg-green-700 text-white mt-4"
        >
          <Download className="mr-2 h-4 w-4" /> Export as PDF
        </Button>
      </div>
    </div>
  );
};

export default CustomizationPanel;
