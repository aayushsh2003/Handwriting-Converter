import React, { useEffect, useRef, forwardRef, useImperativeHandle, useState } from 'react';
import { fabric } from 'fabric';
import { getLetterSpacing } from './handwriting/constants';

interface HandwritingCanvasProps {
  text: string;
  fontFamily: string;
  inkColor: string;
  pageColor: string;
  pageType: string;
  showMargins: boolean;
  customBackground?: string;
  onTextChange?: (text: string) => void;
  title?: string;
  showTitle?: boolean;
  letterSpacing?: string;
  customFontFamily?: string;
}

const HandwritingCanvas = forwardRef<any, HandwritingCanvasProps>(
  ({ 
    text, 
    fontFamily, 
    inkColor, 
    pageColor, 
    pageType, 
    showMargins, 
    customBackground, 
    onTextChange,
    title = '',
    showTitle = false,
    letterSpacing = 'normal',
    customFontFamily
  }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fabricCanvasRef = useRef<fabric.Canvas | null>(null);
    const [pages, setPages] = useState<fabric.Canvas[]>([]);
    const [activePage, setActivePage] = useState(0);
    const [textObjects, setTextObjects] = useState<fabric.Textbox[]>([]);
    const [titleObject, setTitleObject] = useState<fabric.Textbox | null>(null);
    
    const PAGE_WIDTH = 600;
    const PAGE_HEIGHT = 800;
    const LEFT_MARGIN = showMargins ? 60 : 20;
    const RIGHT_MARGIN = showMargins ? 40 : 20;
    const TOP_MARGIN = showTitle ? 80 : 40;
    const LINE_HEIGHT = fontFamily === 'handwriting-apple' ? 50 : 40;
    const CONTENT_WIDTH = PAGE_WIDTH - LEFT_MARGIN - RIGHT_MARGIN;
    const LINES_PER_PAGE = Math.floor((PAGE_HEIGHT - TOP_MARGIN * 2) / LINE_HEIGHT);
    
    useImperativeHandle(ref, () => ({
      toDataURL: (options?: any) => {
        return fabricCanvasRef.current?.toDataURL(options);
      },
      getAllPages: () => {
        const canvases: fabric.Canvas[] = [];
        const storedPages = document.querySelectorAll('.handwriting-page-canvas');
        
        storedPages.forEach((pageCanvas) => {
          const pageId = pageCanvas.getAttribute('data-page');
          const pageIndex = pageId ? parseInt(pageId) : 0;
          const canvas = new fabric.Canvas(pageCanvas as HTMLCanvasElement);
          canvases[pageIndex] = canvas;
        });
        
        return canvases.map(canvas => canvas.toDataURL({ format: 'png', quality: 1.0 }));
      },
      exportAsPdf: () => {
        return pages.map(page => page.toDataURL({ format: 'png', quality: 1.0 }));
      }
    }));
    
    useEffect(() => {
      if (canvasRef.current && !fabricCanvasRef.current) {
        const canvas = new fabric.Canvas(canvasRef.current, {
          width: PAGE_WIDTH,
          height: PAGE_HEIGHT,
          backgroundColor: pageColor,
          isContentEditable: true,
        });
        
        fabricCanvasRef.current = canvas;
        setPages([canvas]);
        
        canvas.on('text:changed', (e) => {
          if (e.target && onTextChange) {
            const allText = getAllTextFromCanvas(canvas);
            onTextChange(allText);
          }
        });
        
        return () => {
          canvas.dispose();
          fabricCanvasRef.current = null;
        };
      }
    }, []);
    
    useEffect(() => {
      if (!fabricCanvasRef.current) return;
      
      if (customBackground) {
        fabric.Image.fromURL(customBackground, (img) => {
          img.scaleToWidth(PAGE_WIDTH);
          if (img.getScaledHeight() < PAGE_HEIGHT) {
            img.scaleToHeight(PAGE_HEIGHT);
          }
          
          fabricCanvasRef.current?.setBackgroundImage(img, 
            fabricCanvasRef.current.renderAll.bind(fabricCanvasRef.current), {
            top: 0,
            left: 0,
            originX: 'left',
            originY: 'top'
          });
        });
      } else {
        fabricCanvasRef.current.backgroundImage = null;
        fabricCanvasRef.current.setBackgroundColor(pageColor, () => {
          fabricCanvasRef.current?.renderAll();
        });
      }
    }, [pageColor, customBackground]);
    
    useEffect(() => {
      if (!fabricCanvasRef.current || !showTitle) return;
      
      const canvas = fabricCanvasRef.current;
      
      if (titleObject) {
        canvas.remove(titleObject);
        setTitleObject(null);
      }
      
      if (title) {
        const textObj = new fabric.Textbox(title, {
          left: PAGE_WIDTH / 2,
          top: 30,
          fontSize: 36,
          fontWeight: 'bold',
          angle: 0,
          fill: inkColor,
          fontFamily: getFontName(fontFamily, customFontFamily),
          textAlign: 'center',
          originX: 'center',
          width: PAGE_WIDTH - 80,
          selectable: true,
          editable: true,
          charSpacing: getLetterSpacing(letterSpacing) * 20
        });
        
        canvas.add(textObj);
        setTitleObject(textObj);
        canvas.renderAll();
      }
    }, [title, showTitle, inkColor, fontFamily, letterSpacing, customFontFamily]);
    
    useEffect(() => {
      if (!fabricCanvasRef.current) return;
      
      const canvas = fabricCanvasRef.current;
      
      const objectsToRemove = canvas.getObjects().filter(obj => 
        obj.data && (obj.data.type === 'ruleLine' || obj.data.type === 'graphLine' || obj.data.type === 'marginLine')
      );
      
      objectsToRemove.forEach(obj => canvas.remove(obj));
      
      if (showMargins) {
        const leftMarginLine = new fabric.Line([LEFT_MARGIN, 0, LEFT_MARGIN, PAGE_HEIGHT], {
          stroke: '#d0d0d0',
          strokeWidth: 1,
          selectable: false,
          evented: false,
          data: { type: 'marginLine' }
        });
        canvas.add(leftMarginLine);
        
        const rightMarginLine = new fabric.Line([PAGE_WIDTH - RIGHT_MARGIN, 0, PAGE_WIDTH - RIGHT_MARGIN, PAGE_HEIGHT], {
          stroke: '#f0f0f0',
          strokeWidth: 1,
          selectable: false,
          evented: false,
          data: { type: 'marginLine' }
        });
        canvas.add(rightMarginLine);
        
        const topMarginLine = new fabric.Line([0, TOP_MARGIN/2, PAGE_WIDTH, TOP_MARGIN/2], {
          stroke: '#f0f0f0',
          strokeWidth: 1,
          selectable: false,
          evented: false,
          data: { type: 'marginLine' }
        });
        canvas.add(topMarginLine);
      }
      
      if (pageType === 'ruled') {
        for (let i = TOP_MARGIN; i < PAGE_HEIGHT; i += LINE_HEIGHT) {
          const line = new fabric.Line([0, i, PAGE_WIDTH, i], {
            stroke: '#a0bce0',
            selectable: false,
            evented: false,
            data: { type: 'ruleLine' }
          });
          canvas.add(line);
        }
      } else if (pageType === 'graph') {
        for (let i = 20; i < PAGE_HEIGHT; i += 20) {
          const line = new fabric.Line([0, i, PAGE_WIDTH, i], {
            stroke: '#c8d8e8',
            selectable: false,
            evented: false,
            data: { type: 'graphLine' }
          });
          canvas.add(line);
        }
        
        for (let i = 20; i < PAGE_WIDTH; i += 20) {
          const line = new fabric.Line([i, 0, i, PAGE_HEIGHT], {
            stroke: '#c8d8e8',
            selectable: false,
            evented: false,
            data: { type: 'graphLine' }
          });
          canvas.add(line);
        }
      }
      
      if (textObjects.length > 0) {
        textObjects.forEach(textObj => {
          if (textObj) {
            textObj.set({
              fill: inkColor,
              fontFamily: getFontName(fontFamily, customFontFamily),
              charSpacing: getLetterSpacing(letterSpacing) * 20
            });
          }
        });
      }
      
      if (titleObject) {
        titleObject.set({
          fill: inkColor,
          fontFamily: getFontName(fontFamily, customFontFamily),
          charSpacing: getLetterSpacing(letterSpacing) * 15
        });
      }
      
      canvas.renderAll();
    }, [pageType, showMargins, inkColor, fontFamily, letterSpacing, showTitle, TOP_MARGIN, customFontFamily]);
    
    useEffect(() => {
      if (!fabricCanvasRef.current) return;
      
      const canvas = fabricCanvasRef.current;
      
      const existingTextObjects = canvas.getObjects().filter(obj => 
        (obj.type === 'text' || obj.type === 'textbox') && obj !== titleObject
      );
      existingTextObjects.forEach(obj => canvas.remove(obj));
      
      setTextObjects([]);
      
      if (!text) return;
      
      const lines = text.split('\n');
      const totalPages = Math.ceil(lines.length / LINES_PER_PAGE);
      
      if (totalPages > pages.length) {
        const newPagesCount = totalPages - pages.length;
        const newPages = [...pages];
        
        for (let i = 0; i < newPagesCount; i++) {
          newPages.push(null as any);
        }
        
        setPages(newPages);
      }
      
      const startLine = activePage * LINES_PER_PAGE;
      const endLine = Math.min(startLine + LINES_PER_PAGE, lines.length);
      const pageLines = lines.slice(startLine, endLine);
      
      let yPosition = TOP_MARGIN;
      let newTextObjects: fabric.Textbox[] = [];
      
      pageLines.forEach(line => {
        const baseSize = fontFamily === 'handwriting-apple' ? 22 : 26;
        const baseAngle = 0;
        
        const textObj = new fabric.Textbox(line, {
          left: LEFT_MARGIN,
          top: yPosition + (Math.random() * 2 - 1),
          fontSize: baseSize + (Math.random() * 2 - 1),
          fontWeight: 'normal',
          angle: baseAngle + (Math.random() * 0.5 - 0.25),
          fill: inkColor,
          fontFamily: getFontName(fontFamily, customFontFamily),
          width: CONTENT_WIDTH,
          selectable: true,
          editable: true,
          charSpacing: getLetterSpacing(letterSpacing) * 20
        });
        
        canvas.add(textObj);
        newTextObjects.push(textObj);
        
        yPosition += LINE_HEIGHT + (Math.random() * 4 - 2);
      });
      
      setTextObjects(newTextObjects);
      canvas.renderAll();
    }, [text, activePage, TOP_MARGIN, letterSpacing, customFontFamily]);
    
    useEffect(() => {
      if (!fabricCanvasRef.current) return;
      
      if (textObjects.length > 0) {
        textObjects.forEach(textObj => {
          if (textObj) {
            textObj.set({
              fill: inkColor,
              fontFamily: getFontName(fontFamily, customFontFamily),
              charSpacing: getLetterSpacing(letterSpacing) * 20
            });
          }
        });
      }
      
      if (titleObject) {
        titleObject.set({
          fill: inkColor,
          fontFamily: getFontName(fontFamily, customFontFamily),
          charSpacing: getLetterSpacing(letterSpacing) * 15
        });
      }
      
      fabricCanvasRef.current.renderAll();
    }, [inkColor, fontFamily, letterSpacing, textObjects, customFontFamily]);
    
    const getAllTextFromCanvas = (canvas: fabric.Canvas) => {
      const textObjects = canvas.getObjects().filter(obj => 
        (obj.type === 'text' || obj.type === 'textbox') && obj !== titleObject
      );
      return textObjects.map(obj => (obj as fabric.Textbox).text).join('\n');
    };
    
    const renderPage = (pageIndex: number) => {
      const canvasElement = document.createElement('canvas');
      canvasElement.className = 'handwriting-page-canvas';
      canvasElement.setAttribute('data-page', pageIndex.toString());
      canvasElement.width = PAGE_WIDTH;
      canvasElement.height = PAGE_HEIGHT;
      
      const pageCanvas = new fabric.Canvas(canvasElement, {
        width: PAGE_WIDTH,
        height: PAGE_HEIGHT,
        backgroundColor: pageColor,
        isContentEditable: false,
      });
      
      if (customBackground) {
        fabric.Image.fromURL(customBackground, (img) => {
          img.scaleToWidth(PAGE_WIDTH);
          if (img.getScaledHeight() < PAGE_HEIGHT) {
            img.scaleToHeight(PAGE_HEIGHT);
          }
          
          pageCanvas.setBackgroundImage(img, pageCanvas.renderAll.bind(pageCanvas), {
            top: 0,
            left: 0,
            originX: 'left',
            originY: 'top'
          });
        });
      } else {
        pageCanvas.setBackgroundColor(pageColor, () => {
          pageCanvas.renderAll();
        });
      }
      
      if (pageType === 'ruled') {
        for (let i = TOP_MARGIN; i < PAGE_HEIGHT; i += LINE_HEIGHT) {
          const line = new fabric.Line([0, i, PAGE_WIDTH, i], {
            stroke: '#a0bce0',
            selectable: false,
            evented: false,
            data: { type: 'ruleLine' }
          });
          pageCanvas.add(line);
        }
      } else if (pageType === 'graph') {
        for (let i = 20; i < PAGE_HEIGHT; i += 20) {
          const line = new fabric.Line([0, i, PAGE_WIDTH, i], {
            stroke: '#c8d8e8',
            selectable: false,
            evented: false,
            data: { type: 'graphLine' }
          });
          pageCanvas.add(line);
        }
        
        for (let i = 20; i < PAGE_WIDTH; i += 20) {
          const line = new fabric.Line([i, 0, i, PAGE_HEIGHT], {
            stroke: '#c8d8e8',
            selectable: false,
            evented: false,
            data: { type: 'graphLine' }
          });
          pageCanvas.add(line);
        }
      }
      
      if (showMargins) {
        const leftMarginLine = new fabric.Line([LEFT_MARGIN, 0, LEFT_MARGIN, PAGE_HEIGHT], {
          stroke: '#d0d0d0',
          strokeWidth: 1,
          selectable: false,
          evented: false,
          data: { type: 'marginLine' }
        });
        pageCanvas.add(leftMarginLine);
        
        const rightMarginLine = new fabric.Line([PAGE_WIDTH - RIGHT_MARGIN, 0, PAGE_WIDTH - RIGHT_MARGIN, PAGE_HEIGHT], {
          stroke: '#f0f0f0',
          strokeWidth: 1,
          selectable: false,
          evented: false,
          data: { type: 'marginLine' }
        });
        pageCanvas.add(rightMarginLine);
        
        const topMarginLine = new fabric.Line([0, TOP_MARGIN/2, PAGE_WIDTH, TOP_MARGIN/2], {
          stroke: '#f0f0f0',
          strokeWidth: 1,
          selectable: false,
          evented: false,
          data: { type: 'marginLine' }
        });
        pageCanvas.add(topMarginLine);
      }
      
      if (showTitle && pageIndex === 0 && title) {
        const titleObj = new fabric.Textbox(title, {
          left: PAGE_WIDTH / 2,
          top: 30,
          fontSize: 36,
          fontWeight: 'bold',
          angle: 0,
          fill: inkColor,
          fontFamily: getFontName(fontFamily, customFontFamily),
          textAlign: 'center',
          originX: 'center',
          width: PAGE_WIDTH - 80,
          selectable: false,
          editable: false,
          charSpacing: getLetterSpacing(letterSpacing) * 15
        });
        
        pageCanvas.add(titleObj);
      }
      
      if (text) {
        const lines = text.split('\n');
        const startLine = pageIndex * LINES_PER_PAGE;
        const endLine = Math.min(startLine + LINES_PER_PAGE, lines.length);
        const pageLines = lines.slice(startLine, endLine);
        
        let yPosition = TOP_MARGIN;
        
        pageLines.forEach(line => {
          const baseSize = fontFamily === 'handwriting-apple' ? 22 : 26;
          const baseAngle = 0;
          
          const textObj = new fabric.Textbox(line, {
            left: LEFT_MARGIN,
            top: yPosition + (Math.random() * 2 - 1),
            fontSize: baseSize + (Math.random() * 2 - 1),
            fontWeight: 'normal',
            angle: baseAngle + (Math.random() * 0.5 - 0.25),
            fill: inkColor,
            fontFamily: getFontName(fontFamily, customFontFamily),
            width: CONTENT_WIDTH,
            selectable: false,
            editable: false,
            charSpacing: getLetterSpacing(letterSpacing) * 20
          });
          
          pageCanvas.add(textObj);
          yPosition += LINE_HEIGHT + (Math.random() * 4 - 2);
        });
      }
      
      pageCanvas.renderAll();
      
      const updatedPages = [...pages];
      updatedPages[pageIndex] = pageCanvas;
      setPages(updatedPages);
      
      return pageCanvas;
    };
    
    const nextPage = () => {
      if (activePage < pages.length - 1) {
        setActivePage(activePage + 1);
        
        if (!pages[activePage + 1]) {
          renderPage(activePage + 1);
        }
      }
    };
    
    const prevPage = () => {
      if (activePage > 0) {
        setActivePage(activePage - 1);
      }
    };
    
    return (
      <div className="flex flex-col items-center">
        <div className="page" style={{ width: PAGE_WIDTH, height: PAGE_HEIGHT, backgroundColor: pageColor }}>
          <canvas ref={canvasRef} />
        </div>
        
        {pages.length > 1 && (
          <div className="flex gap-4 mt-4 items-center">
            <button 
              onClick={prevPage} 
              disabled={activePage === 0}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Previous Page
            </button>
            <span>Page {activePage + 1} of {pages.length}</span>
            <button 
              onClick={nextPage} 
              disabled={activePage === pages.length - 1}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Next Page
            </button>
          </div>
        )}
        
        <div className="hidden">
          {Array.from({ length: pages.length }).map((_, index) => (
            <canvas key={index} className="handwriting-page-canvas" data-page={index} />
          ))}
        </div>
      </div>
    );
  }
);

HandwritingCanvas.displayName = 'HandwritingCanvas';
export default HandwritingCanvas;

const getFontName = (fontFamily: string, customFontFamily?: string): string => {
  if (customFontFamily && fontFamily === 'custom-font') {
    return 'CustomHandwriting';
  }
  
  const fontMap: Record<string, string> = {
    'handwriting': 'Caveat',
    'handwriting-apple': 'Homemade Apple',
    'handwriting-indie': 'Indie Flower',
    'handwriting-dancing': 'Dancing Script',
    'handwriting-sacramento': 'Sacramento',
    'handwriting-kalam': 'Kalam',
    'handwriting-satisfy': 'Satisfy',
    'handwriting-architect': 'Architects Daughter',
    'handwriting-schoolbell': 'Schoolbell',
    'handwriting-just-me': 'Just Me Again Down Here',
    'handwriting-nanum': 'Nanum Pen Script',
    'handwriting-sriracha': 'Sriracha',
    'handwriting-patrick': 'Patrick Hand',
    'handwriting-gloria': 'Gloria Hallelujah',
    'handwriting-my': 'MyHandwriting',
    'handwriting-kids': 'KidsHandwriting',
    'handwriting-professional': 'ProfessionalScript'
  };
  
  return fontMap[fontFamily] || 'Caveat';
};
