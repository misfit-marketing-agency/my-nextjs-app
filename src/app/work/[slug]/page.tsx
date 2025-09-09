import { Metadata } from "next";
import { notFound } from "next/navigation";
import slug from "slug";

import WorkMain from "./_components";
import { detailedWorks as works } from "@/lib/data/work";
import siteMetadata from "@/lib/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function WorkPage({ params }: Props) {
  const { slug: paramsSlug } = await params;
  const work = works.find(({ name }) => paramsSlug === slug(name));

  if (!work) {
    return notFound();
  }

  return <WorkMain work={work} />;
}

export async function generateStaticParams() {
  try {
    return works.map(({ name }) => ({
      slug: slug(name),
    }));
  } catch (error: unknown) {
    const message = error instanceof Error ? error?.message : error;
    console.log("error ", message);

    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug: paramSlug } = await params;

  const work = works.find((work) => slug(work.name) === paramSlug);

  if (!work) return notFound();

  const url = `${siteMetadata.siteUrl}/work/${paramSlug}`;

  return {
    title: work.name,
    description: work.description,
    openGraph: {
      title: work.name,
      description: work.description,
      images: work.images.map(({ path }) => `${siteMetadata.siteUrl}${path}`),
      url,
    },
    alternates: {
      canonical: url,
    },
  };
}
