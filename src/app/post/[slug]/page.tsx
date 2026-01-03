import { findPostBySlugCached } from "@/lib/post/queries";
import { notFound } from "next/navigation";

type Slug = {
    slug: string;
};

type PostSlugProps = {
    params: Promise<Slug>;
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
