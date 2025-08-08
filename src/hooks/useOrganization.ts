import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { OrganizationData } from '@/types/interview';

export const useOrganization = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const saveOrganization = async (formData: {
    organizationName: string;
    email: string;
    totalEmployees: number;
    industry: string;
    departments: string[];
  }) => {
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase
        .from('organizations')
        .insert({
          organization_name: formData.organizationName,
          contact_email: formData.email,
          total_employees: formData.totalEmployees,
          industry: formData.industry,
          departments: formData.departments
        })
        .select()
        .single();

      if (error) {
        toast({
          title: "Error",
          description: "Failed to save organization data. Please try again.",
          variant: "destructive"
        });
        console.error('Supabase error:', error);
        return { success: false, error };
      }

      toast({
        title: "Success",
        description: "Organization setup completed successfully!"
      });

      console.log('Organization saved:', data);
      return { success: true, data };
    } catch (error) {
      console.error('Error saving organization:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
      return { success: false, error };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    saveOrganization,
    isSubmitting
  };
};