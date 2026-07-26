import type { WorkItem } from "../lib/schema";

export const reels: WorkItem[] = [
  {
    id: "reel-01",
    title: "Product launch reel",
    category: "reel",
    format: "video-9x16",
    video: {
      mp4: "/work/reel-01.mp4",
      poster: "/work/reel-01.jpg",
    },
    durationSec: 12,
    featured: true,
    instagramUrl: "https://www.instagram.com/reel/DS1hjWwkg1Sv87Xs0sh2r3tDWHunVh4YRt6SmI0",
  },
  {
    id: "reel-02",
    title: "Event highlights",
    category: "reel",
    format: "video-9x16",
    video: {
      mp4: "/work/reel-02.mp4",
      poster: "/work/reel-02.jpg",
    },
    durationSec: 15,
    featured: false,
    instagramUrl: "https://www.instagram.com/om.polkat.patil/",
  },
  {
    id: "reel-03",
    title: "Brand story",
    category: "reel",
    format: "video-9x16",
    video: {
      mp4: "/work/reel-03.mp4",
      poster: "/work/reel-03.jpg",
    },
    durationSec: 10,
    featured: false,
    instagramUrl: "https://www.instagram.com/om.polkat.patil/",
  },
  {
    id: "reel-04",
    title: "Behind the scenes",
    category: "reel",
    format: "video-9x16",
    video: {
      mp4: "/work/reel-04.mp4",
      poster: "/work/reel-04.jpg",
    },
    durationSec: 8,
    featured: false,
    instagramUrl: "https://www.instagram.com/om.polkat.patil/",
  },
  {
    id: "reel-05",
    title: "Customer testimonial",
    category: "reel",
    format: "video-9x16",
    video: {
      mp4: "/work/reel-05.mp4",
      poster: "/work/reel-05.jpg",
    },
    durationSec: 14,
    featured: false,
    instagramUrl: "https://www.instagram.com/om.polkat.patil/",
  },
  {
    id: "reel-06",
    title: "Cinematic brand film",
    category: "reel",
    format: "video-9x16",
    video: {
      mp4: "/work/reel-06.mp4",
      poster: "/work/reel-06.jpg",
    },
    durationSec: 20,
    featured: false,
    instagramUrl: "https://www.instagram.com/om.polkat.patil/",
  },
];

export const films: WorkItem[] = [
  // {
  //   id: "film-01",
  //   title: "Brand film",
  //   category: "film",
  //   format: "video-16x9",
  //   video: {
  //     mp4: "/work/film-01.mp4",
  //     poster: "/work/film-01.jpg",
  //   },
  //   durationSec: 90,
  //   featured: true,
  //   instagramUrl: "https://www.youtube.com/@Ompolkat_patil",
  // },
  // {
  //   id: "film-02",
  //   title: "Event highlight",
  //   category: "event",
  //   format: "video-16x9",
  //   video: {
  //     mp4: "/work/film-02.mp4",
  //     poster: "/work/film-02.jpg",
  //   },
  //   durationSec: 60,
  //   featured: false,
  //   instagramUrl: "https://www.youtube.com/@Ompolkat_patil",
  // },
  // {
  //   id: "film-03",
  //   title: "Ad creative",
  //   category: "ads",
  //   format: "video-16x9",
  //   video: {
  //     mp4: "/work/film-03.mp4",
  //     poster: "/work/film-03.jpg",
  //   },
  //   durationSec: 30,
  //   featured: false,
  //   instagramUrl: "https://www.youtube.com/@Ompolkat_patil",
  // },
];

export const websites: WorkItem[] = [
  {
    id: "site-01",
    title: "Restaurant landing page",
    category: "website",
    format: "site",
    image: "/work/site-01.jpg",
    featured: true,
  },
  {
    id: "site-02",
    title: "Fitness coach website",
    category: "website",
    format: "site",
    image: "/work/site-02.jpg",
    featured: false,
  },
];

// YouTube channel info for embedding
export const youtubeChannel = {
  handle: "@Ompolkat_patil",
  url: "https://www.youtube.com/@Ompolkat_patil",
  // Replace these with actual video IDs from the channel
  videoIds: ["4a8U-D0YYbk", "YSsi4dfbumM", "59wmqwM9pRY"], // TODO: Update with real video IDs
};

// Instagram profile info
export const instagramProfile = {
  handle: "om.polkat.patil",
  url: "https://www.instagram.com/om.polkat.patil/",
};
// POLKAT-164: refine theme toggle icon
