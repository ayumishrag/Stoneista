import React from "react";
import { LOCATIONS_DATA, LocationData } from "@/constant/locations";
import { Metadata } from "next";
import LocationPageClient from "./LocationPageClient";
import { notFound } from "next/navigation";

interface LocationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return LOCATIONS_DATA.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = LOCATIONS_DATA.find((loc) => loc.slug === slug);

  if (!location) {
    return {
      title: "Location Not Found | Stoneista",
      description: "The requested location page could not be found.",
    };
  }

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: location.metaTitle,
      description: location.metaDescription,
    },
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = LOCATIONS_DATA.find((loc) => loc.slug === slug);

  if (!location) {
    notFound();
  }

  return <LocationPageClient location={location} />;
}

