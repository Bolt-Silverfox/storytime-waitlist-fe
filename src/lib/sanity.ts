import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { PortableTextBlock } from "@portabletext/types";

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

// FAQ Types and Functions
export interface SanityFaqCategory {
  _id: string;
  title: string;
  slug: { current: string };
  order: number;
}

export interface SanityFaq {
  _id: string;
  question: string;
  answer: string;
  order: number;
  category: {
    _id: string;
    title: string;
    slug: { current: string };
  } | null;
}

export async function getFaqCategories(): Promise<SanityFaqCategory[]> {
  return sanityClient.fetch(`
    *[_type == "faqCategory"] | order(order asc) {
      _id,
      title,
      slug,
      order
    }
  `);
}

export async function getFaqs(): Promise<SanityFaq[]> {
  return sanityClient.fetch(`
    *[_type == "faq"] | order(order asc) {
      _id,
      question,
      answer,
      order,
      category->{
        _id,
        title,
        slug
      }
    }
  `);
}

// Terms and Conditions Types and Functions
export interface SanityTermsAndConditions {
  _id: string;
  heading: string;
  index: string;
  contentType: "paragraph" | "list";
  paragraph: string | null;
  listItems: string[] | null;
  order: number;
}

export async function getTermsAndConditions(): Promise<
  SanityTermsAndConditions[]
> {
  return sanityClient.fetch(`
    *[_type == "termsAndConditions"] | order(order asc) {
      _id,
      heading,
      index,
      contentType,
      paragraph,
      listItems,
      order
    }
  `);
}
