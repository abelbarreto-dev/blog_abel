import { findPostBySlugCached } from "@/lib/post/queries";
import { notFound } from "next/navigation";

type SinglePostProps = {
    slug: string;
};

export const SinglePost = async ({slug}: SinglePostProps) => {
    const post = await findPostBySlugCached(slug).catch(() => notFound());

    return (
        <div>
            <p>{post.content}</p>
        </div>
    );
};
