import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full pt-20 px-4 md:px-20 min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-white text-2xl mb-4">Location Not Found</h1>
        <p className="text-[#c5c5c5] mb-6">
          The location page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="text-white underline hover:text-[#c5c5c5] transition-colors"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
}

