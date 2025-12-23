import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
fix: use PortableTextBlock type for post body fieldfix: use PortableTextBlock type for post body fieldfix: use PortableTextBlock type for post body fieldimport type { PortableTextBlock } from "@portabletext/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

export const sanityClient = createClient({
  projectId: "mb4prkvm",
  dataset: "resources",
  useCdn: true,
  apiVersion: "2025-12-23",
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Check if an image source has an actual asset
export function hasImageAsset(source: SanityImageSource | null): boolean {
  if (!source) return false;
  return !!(source.asset || source._ref || source.url);
}

export interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string | null;
  mainImage: SanityImageSource | null;
  previewImage: SanityImageSource | null;
  body: PortableTextBlock[];
  author: {
    name: string;
  } | null;
  tags: string[] | null;
  createdAt: string | null;
}

export async function getPosts(): Promise<SanityPost[]> {
  return sanityClient.fetch(`
    *[_type == "post"] | order(createdAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      previewImage,
      body,
      author->{name},
      tags,
      createdAt
    }
  `);
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  return sanityClient.fetch(
    `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      previewImage,
      body,
      author->{name},
      tags,
      createdAt
    }
  `,
    { slug },
  );
}
