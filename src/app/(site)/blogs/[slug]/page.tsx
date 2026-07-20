 

import { lexicalHTML } from "@payloadcms/richtext-lexical";

async function getPost(slug: string) {
  try {
    const res = await fetch(
      `http://localhost:3000/api/posts?where[slug][equals]=${slug}&depth=2`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      console.error("Failed to fetch post:", res.status, res.statusText);
      return null;
    }

    const data = await res.json();
    return data.docs && data.docs.length > 0 ? data.docs[0] : null;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return <div className="text-white p-10">Blog not found.</div>;
  }

  let htmlContent = "";
  try {
    if (post.content?.root?.children) {
      htmlContent = post.content.root.children
        .map((node: any) => {
          if (node.type === "paragraph") {
            const text =
              node.children?.map((child: any) => child.text).join("") || "";
            return `<p>${text}</p>`;
          }
          // Add more node types here if needed (headings, etc.)
          return "";
        })
        .join("");
    }
  } catch (e) {
    console.error("Rendering failed", e);
    htmlContent = "<p>Error loading content.</p>";
  }

  return (
    <div className="w-full bg-black">
    <div className="max-w-4xl mx-auto py-12 px-4 text-white bg-black">
      {post.featuredImage?.url && (
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="w-full h-80 object-cover rounded-lg mb-8"
        />
      )}

      {/* <h1 className="text-4xl font-bold mb-6">{post.title}</h1> */}
      <h1 className="text-4xl font-bold mb-6">{post.heading}</h1>
      {/* <p className="text-xl font-bold mb-6">{post.content}</p> */}

      <div
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
    </div>
  );
}
