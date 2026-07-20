// src/lib/payload.ts
import { getPayload } from "payload";
import configPromise from "@payload-config"; // or "@/payload.config" depending on your setup

let cachedPayload: Awaited<ReturnType<typeof getPayload>> | null = null;

export async function getPayloadClient() {
  if (cachedPayload) return cachedPayload;

  const config = await configPromise;
  const payload = await getPayload({ config });

  cachedPayload = payload;
  return payload;
}