// src/payload/payload.config.ts


import path from 'path';
import { buildConfig } from 'payload';
import { nodemailerAdapter } from '@payloadcms/email-nodemailer';
import { sqliteAdapter } from '@payloadcms/db-sqlite';

import { Users } from './collections/Users';
import { Media } from './collections/Media';
import { Posts } from './collections/Posts';

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || 'super-secret-key-123456',  // FIX MISSING SECRET
  admin: {
    user: Users.slug,
    components: {
      graphics: {
        Logo: '@/payload/components/Logo#Logo',
        Icon: '@/payload/components/Icon#Icon',
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
      host: "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
  }),
})