
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Rocket, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const FinalCTA = () => {
  const navigate = useNavigate();

  return (
    <div className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 text-center relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-8">
            Your AI Transformation 
            <span className="block mt-2">Starts Now</span>
          </h2>
          <p className="text-2xl text-blue-100 mb-12 font-light leading-relaxed">
            Join <span className="font-semibold text-white">500+</span> organizations that have already mapped their AI readiness journey. 
            Don't let another quarter pass without AI strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-5 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 rounded-xl"
              onClick={() => navigate('/assessment')}
            >
              <Rocket className="mr-3 h-6 w-6" />
              Start Free Assessment
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-5 text-lg font-semibold transition-all duration-500 hover:scale-105 rounded-xl backdrop-blur-sm"
              onClick={() => navigate('/science')}
            >
              Learn The Science
              <ChevronRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
          <div className="flex items-center justify-center gap-8 text-blue-200 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              No signup required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Complete in 60 minutes
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Instant results
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
