import { notFound } from "next/navigation";

import { allLegals } from "content-collections";

import { Wrapper } from "@/components/section-builders";

import { LegalMdxRenderer } from "./legal-mdx-renderer";

export const dynamicParams = false;

export async function generateStaticParams() {
    return allLegals.map((legalDoc) => ({
        slug: legalDoc.slug,
    }));
}

export default async function LegalSlugPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;

    const doc = allLegals.find((legalDoc) => legalDoc.slug === slug);
    if (!doc) notFound();

    return (
        <div className="mb-20 mt-12 space-y-6">
            <h1 className="text-center text-5xl font-bold text-brand-orange-500">
                {doc.title}
            </h1>
            <Wrapper className="px-6">
                <div className="prose prose-xl prose-headings:font-bold prose-p:font-medium prose-p:leading-7 prose-p:my-4 prose-li:my-2 prose-li:leading-7 prose-li:font-medium min-w-full">
                    <LegalMdxRenderer content={doc.content.mdx} />
                </div>
            </Wrapper>
        </div>
    );
}
