import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import {
  DefaultRichTextFeatures,
  UploadFeature,
} from "@payloadcms/richtext-lexical";

export const Posts: CollectionConfig = {
  slug: "posts",

  access: {
    read: () => true,
  },

  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "publishedAt"],
  },

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",

      unique: true,
      admin: {
        hidden: true, // Hide slug in Admin UI
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            // If slug already exists, use it
            if (value) return value;

            // Generate slug automatically from title
            if (data?.title) {
              return data.title
                .toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^\w-]+/g, "");
            }

            return value;
          },
        ],
      },
    },

    {
      name: "heading",
      type: "textarea",
    },
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
      maxDepth: 2, // Allow depth parameter to populate the full media object
    },
    {
      name: "content",
      type: "richText",

      // ⭐ FIXED — Image Upload Plugin added
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          UploadFeature({
            collections: {
              media: {
                fields: [
                  {
                    name: "caption",
                    type: "text",
                  },
                ],
              },
            },
          }),
        ],
      }),

      required: true,
    },

    {
      name: "publishedAt",
      type: "date",
      required: true,
      defaultValue: () => new Date().toISOString(),
    },
  ],
};
