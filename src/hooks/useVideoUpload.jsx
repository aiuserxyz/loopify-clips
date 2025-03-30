
import { useState } from "react";
import { toast } from "sonner";

export const useVideoUpload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  // When file changes, create preview URL
  const handleFileChange = (file) => {
    if (file) {
      // Create object URL for preview
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    } else {
      setPreview(null);
    }
    setFile(file);
  };

  // Handle upload function
  const handleUpload = async (title, description) => {
    if (!file) return;

    setIsUploading(true);
    
    try {
      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, this would be an API call to save the file
      // For now, just display a success toast
      toast.success("Video uploaded successfully!");
      
      // Clean up preview URL
      if (preview) {
        URL.revokeObjectURL(preview);
      }
      
      return true;
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Failed to upload video");
      return false;
    } finally {
      setIsUploading(false);
    }
  };

  return {
    file,
    setFile: handleFileChange,
    preview,
    isUploading,
    handleUpload
  };
};
