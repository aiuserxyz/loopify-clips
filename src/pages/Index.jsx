
import { useState } from "react";
import Header from "@/components/Header";
import VideoFeed from "@/components/VideoFeed";
import UploadButton from "@/components/UploadButton"; 
import { sampleVideos } from "@/data/videos";

const Index = () => {
  const [videos, setVideos] = useState(sampleVideos);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container max-w-lg mx-auto pt-4">
        <VideoFeed videos={videos} />
      </main>
      
      <UploadButton />
    </div>
  );
};

export default Index;
