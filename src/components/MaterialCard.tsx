"use client";

interface MaterialCardProps {
  image: string;
  title: string;
  description: string;
  className?: string;
}

export default function MaterialCard({
  image,
  title,
  description,
  className = "",
}: MaterialCardProps) {
  return (
    <div
      className={`p-0 md:p-6 flex flex-col items-center text-center ${className}`}
      style={{ backgroundColor: "var(--st-bg-card-secondary)" }}
    >
      <div className="-mt-14">
        <img
          src={image}
          alt={title}
          className="w-[420px] md:h-[260px] object-contain rounded shadow-[0px_0px_42px_4px_#00000044]"
        />
        <h3
          className="text-2xl md:text-3xl font-awesome leading-10 md:leading-16"
          style={{ color: "var(--st-text-primary)" }}
        >
          {title}
        </h3>
        <p
          className="p-4 md:p-0 md:mt-3 text-base max-w-[420px]"
          style={{ color: "var(--st-text-secondary)" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
