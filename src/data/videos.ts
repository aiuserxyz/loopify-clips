
import { Video } from "../types/video";

// Sample data for demonstration
export const sampleVideos: Video[] = [
  {
    id: "1",
    url: "https://assets.mixkit.co/videos/preview/mixkit-spinning-around-the-earth-29351-large.mp4",
    thumbnail: "https://assets.mixkit.co/videos/preview/mixkit-spinning-around-the-earth-29351-large.mp4",
    title: "Earth from Space",
    username: "cosmonaut",
    likes: 432,
    loops: 1200,
    description: "Breathtaking view of our planet from orbit",
    userAvatar: "https://i.pravatar.cc/150?img=3",
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString()
  },
  {
    id: "2",
    url: "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4",
    thumbnail: "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4",
    title: "Ocean Waves",
    username: "beachlover",
    likes: 287,
    loops: 890,
    description: "Relaxing waves crashing on the shore",
    userAvatar: "https://i.pravatar.cc/150?img=5",
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString()
  },
  {
    id: "3",
    url: "https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4",
    thumbnail: "https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4",
    title: "Spring Blooms",
    username: "naturephotos",
    likes: 198,
    loops: 540,
    description: "Beautiful flowers blooming in spring",
    userAvatar: "https://i.pravatar.cc/150?img=8",
    createdAt: new Date(Date.now() - 3600000 * 72).toISOString()
  },
  {
    id: "4",
    url: "https://assets.mixkit.co/videos/preview/mixkit-white-sand-beach-and-palm-trees-1564-large.mp4",
    thumbnail: "https://assets.mixkit.co/videos/preview/mixkit-white-sand-beach-and-palm-trees-1564-large.mp4",
    title: "Tropical Paradise",
    username: "travelguru",
    likes: 356,
    loops: 920,
    description: "Escape to this beautiful tropical beach",
    userAvatar: "https://i.pravatar.cc/150?img=12",
    createdAt: new Date(Date.now() - 3600000 * 96).toISOString()
  },
  {
    id: "5",
    url: "https://assets.mixkit.co/videos/preview/mixkit-small-waterfall-in-the-middle-of-a-forest-5040-large.mp4",
    thumbnail: "https://assets.mixkit.co/videos/preview/mixkit-small-waterfall-in-the-middle-of-a-forest-5040-large.mp4",
    title: "Forest Waterfall",
    username: "hikerlife",
    likes: 245,
    loops: 670,
    description: "Hidden waterfall deep in the forest",
    userAvatar: "https://i.pravatar.cc/150?img=20",
    createdAt: new Date(Date.now() - 3600000 * 120).toISOString()
  }
];
