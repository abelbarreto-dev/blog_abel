import { findPostBySlugCached } from "@/lib/post/queries";
import { Metadata } from "next";
import { notFound } from "next/navigation";

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

    const post = await findPostBySlugCached(slug).catch(() => notFound());

    return (
        <div>
            <p>{post?.content}</p>
        </div>
    );
}
