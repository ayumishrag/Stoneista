// src/payload/payload.config.ts


import path from 'path';
import { buildConfig } from 'payload';
import { nodemailerAdapter } from '@payloadcms/email-nodemailer';
import { sqliteAdapter } from '@payloadcms/db-sqlite';

import { Users } from './collections/Users';
import { Media } from './collections/Media';
import { Posts } from './collections/Posts';

import { Logo } from './components/Logo';
import { Icon } from './components/Icon';

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || 'super-secret-key-123456',  // FIX MISSING SECRET
  admin: {
    user: Users.slug,
    components: {
      graphics: {
        Logo,
        Icon,
      },
    },
  },

  collections: [Users, Media, Posts],
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL as string,
      authToken: process.env.DATABASE_AUTH_TOKEN,
    },
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  email: nodemailerAdapter({
    defaultFromAddress: 'no-reply@stoneista.com',
    defaultFromName: 'Stone Ista',
    transportOptions: {
      host: "smtp.gmail.com",   // e.g. "smtp.gmail.com" or "smtp-relay.brevo.com"
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,                 // true if you use port 465
      auth: {
        user: "edquestsocial@gmail.com", // SMTP username
        pass: "rklwbmncxmsiqtxi", // SMTP password or API key
      },
    },
  }),
})