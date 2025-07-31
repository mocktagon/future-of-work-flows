import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Share } from 'lucide-react';

interface ReportActionsProps {
  activeTab: string;
  onExport: (reportType: string) => void;
  onShare: (reportType: string) => void;
}

const ReportActions = ({ activeTab, onExport, onShare }: ReportActionsProps) => {
  return (
    <div className="flex items-center gap-2">
      <Button 
        variant="outline" 
        size="sm"
        onClick={() => onExport(activeTab)}
        className="flex items-center gap-2"
      >
        <Download className="h-4 w-4" />
        Export
      </Button>
      <Button 
        variant="outline" 
        size="sm"
        onClick={() => onShare(activeTab)}
        className="flex items-center gap-2"
      >
        <Share className="h-4 w-4" />
        Share
      </Button>
    </div>
  );
};

export default ReportActions;