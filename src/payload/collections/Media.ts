// src/payload/collections/Media.ts
import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true, // Allow public read access for media files
  },
  upload: {
    staticURL: '/media', // files served at /media/...
    staticDir: 'public/media',  // ✅ Changed to public/media for Next.js dev server
  },
  admin: {
    useAsTitle: 'alt',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
};
