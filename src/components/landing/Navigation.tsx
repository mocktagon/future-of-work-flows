
import React from 'react';
import { Button } from '@/components/ui/button';
import { Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white/90 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
              <Brain className="h-6 w-6 text-white" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur animate-pulse"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">AI Readiness</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => navigate('/science')}
              className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium hover:scale-105"
            >
              Science
            </button>
            <button 
              onClick={() => navigate('/resources')}
              className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium hover:scale-105"
            >
              Resources
            </button>
            <Button 
              onClick={() => navigate('/assessment')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Assessment
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
