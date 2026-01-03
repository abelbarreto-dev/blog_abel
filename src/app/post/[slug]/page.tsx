import { SinglePost } from "@/components/SinglePost";
import { SpinLoader } from "@/components/SpinLoader";
import { findPostBySlugCached } from "@/lib/post/queries";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type Slug = {
    slug: string;
};

type PostSlugProps = {
    params: Promise<Slug>;
};

export const generateMetadata = async ({
    params,
}: PostSlugProps): Promise<Metadata> => {
    const { slug } = await params;

    const post = await findPostBySlugCached(slug).catch(() => notFound());

    return {
        title: post.title,
        description: post.excerpt,
    };
};

export default async function PostSlugPage({ params }: PostSlugProps) {
    const { slug } = await params;

    return (
        <Suspense fallback={<SpinLoader className="min-h-20 mb-16"/>}>
            <SinglePost slug={slug} />
        </Suspense>
    );
}
