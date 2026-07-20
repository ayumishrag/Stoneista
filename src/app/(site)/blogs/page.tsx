// src/app/(site)/blogs/page.tsx
import Link from "next/link";

async function getPosts() {
  const res = await fetch(
    "http://localhost:3000/api/posts?sort=-publishedAt&depth=2",
    {
      cache: "no-store",
    }
  );

  const data = await res.json();
  console.log("data is ", data);

  // Workaround: Manually fetch media objects if featuredImage is just an ID
  const postsWithMedia = await Promise.all(
    data.docs.map(async (post: any) => {
      if (post.featuredImage && typeof post.featuredImage === "number") {
        // featuredImage is just an ID, fetch the full media object
        try {
          const mediaRes = await fetch(
            `http://localhost:3000/api/media/${post.featuredImage}`,
            { cache: "no-store" }
          );
          const mediaData = await mediaRes.json();
          return {
            ...post,
            featuredImage: mediaData,
          };
        } catch (error) {
          console.error(`Failed to fetch media for post ${post.id}:`, error);
          return post;
        }
      }
      return post;
    })
  );

  return postsWithMedia;
}

export default async function BlogsPage() {
  const posts = await getPosts();

  
  posts.forEach((post: any, index: number) => {
    console.log(`Post ${index}:`, post.title);
    console.log(`Post ${index} featuredImage:`, post.featuredImage);
    console.log(`Post ${index} featuredImage.url:`, post.featuredImage?.url);
  });

  return (
    <div className="max-w-5xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-white">Blogs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {posts.map((post: any) => (
          <div
            key={post.id}
            className="bg-stone-800 p-5 rounded-xl shadow hover:shadow-lg transition"
          >
            {post.featuredImage?.filename && (
              <img
                src={`/media/${post.featuredImage.filename}`}
                alt={post.featuredImage.alt || post.title}
                className="w-full h-60 rounded-lg object-cover mb-4"
              />
            )}

            {/* DEBUG */}
            {/* <div className="bg-yellow-900 p-2 mb-2 text-xs">
              <p>Has featuredImage: {post.featuredImage ? 'YES' : 'NO'}</p>
              <p>Has filename: {post.featuredImage?.filename ? 'YES' : 'NO'}</p>
              <p>Filename value: {post.featuredImage?.filename || 'MISSING'}</p>
              <pre>{JSON.stringify(post.featuredImage, null, 2)}</pre>
            </div> */}

            <h2 className="text-2xl font-semibold text-white">
              <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
            </h2>

            {post.excerpt && (
              <p className="text-gray-300 mt-2">{post.content}</p>
            )}

            <Link
              href={`/blogs/${post.slug}`}
              className="text-blue-400 block mt-4 hover:text-blue-300 transition-colors"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
