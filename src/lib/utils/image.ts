import { getPlaiceholder } from "plaiceholder";
import fs from "fs/promises";
import path from "path";

export async function getBlurDataURL(imagePath: string) {
  try {
    let buffer;
    if (imagePath.startsWith("/")) {
      const filePath = path.join(process.cwd(), "public", imagePath);
      buffer = await fs.readFile(filePath);
    } else {
      const response = await fetch(imagePath);
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`);
      }
      buffer = Buffer.from(await response.arrayBuffer());
    }

    const { base64, metadata } = await getPlaiceholder(buffer);
    return { base64, metadata };
  } catch (error) {
    console.error("error ", error);
    return null;
  }
}
