
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Upload } from "lucide-react";
import { useVideoUpload } from "@/hooks/useVideoUpload";

const UploadButton = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const { file, setFile, preview, isUploading, handleUpload } = useVideoUpload();

  const handleSubmit = async () => {
    if (!file) {
      toast.error("Please select a video to upload");
      return;
    }

    if (!title.trim()) {
      toast.error("Please add a title");
      return;
    }

    try {
      await handleUpload(title, description);
      toast.success("Video uploaded successfully!");
      setOpen(false);
      resetForm();
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("Upload failed. Please try again.");
    }
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setFile(null);
  };

  return (
    <>
      <Button 
        onClick={() => setOpen(true)} 
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 rounded-full w-14 h-14 p-0 shadow-lg bg-brand hover:bg-brand-hover"
      >
        <Upload size={24} />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px] bg-card text-card-foreground border-border">
          <DialogHeader>
            <DialogTitle>Upload a looping clip</DialogTitle>
            <DialogDescription>
              Create a short video clip that will loop endlessly
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label 
                htmlFor="video-upload" 
                className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-muted/50 transition ${
                  preview ? "border-brand" : "border-muted-foreground/30"
                }`}
              >
                {preview ? (
                  <video 
                    src={preview} 
                    className="w-full h-40 object-cover rounded" 
                    controls
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-40">
                    <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Click to upload a video (MP4, WebM)
                    </p>
                  </div>
                )}
                <input
                  id="video-upload"
                  type="file"
                  accept="video/mp4,video/webm"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) setFile(file);
                  }}
                />
              </label>
            </div>

            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">
                Title
              </label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a title for your clip"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Description (optional)
              </label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add a description"
                rows={3}
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleSubmit}
              disabled={isUploading || !file}
            >
              {isUploading ? "Uploading..." : "Upload"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UploadButton;
