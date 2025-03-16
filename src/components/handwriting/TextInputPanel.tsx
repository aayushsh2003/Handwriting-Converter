
import React from 'react';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { PenSquare, Type } from 'lucide-react';
import { motion } from 'framer-motion';

interface TextInputPanelProps {
  text: string;
  setText: (value: string) => void;
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
}

const TextInputPanel: React.FC<TextInputPanelProps> = ({
  text,
  setText,
  isEditing,
  setIsEditing
}) => {
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <motion.div 
      className="bg-white rounded-lg p-5 shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-2 mb-4">
        <Type className="h-5 w-5 text-blue-500" />
        <h2 className="text-xl font-bold">Your Text</h2>
      </div>
      
      <div className="flex items-center mb-4 justify-between bg-slate-50 p-3 rounded-lg">
        <div className="flex items-center gap-2">
          <PenSquare className={`h-4 w-4 ${isEditing ? 'text-blue-500' : 'text-gray-400'}`} />
          <Label htmlFor="editToggle" className="font-medium">Edit directly on canvas</Label>
        </div>
        <Switch 
          id="editToggle" 
          checked={isEditing}
          onCheckedChange={setIsEditing}
        />
      </div>
      
      <Textarea 
        placeholder="Type or paste your text here..." 
        className="min-h-32 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all"
        value={text}
        onChange={handleTextChange}
        disabled={isEditing}
      />
      
      {isEditing && (
        <p className="text-sm text-blue-600 mt-2 italic">
          Editing mode active: Click on the canvas to edit text directly
        </p>
      )}
    </motion.div>
  );
};

export default TextInputPanel;
