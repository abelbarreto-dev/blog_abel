import { findPostBySlugCached } from "@/lib/post/queries";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PostHeading } from "../PostHeading/index";
import { PostDate } from "../PostDate";
import { SafeMarkdown } from "../SafeMarkdown/inde";

type SinglePostProps = {
    slug: string;
};

export const SinglePost = async ({ slug }: SinglePostProps) => {
    const post = await findPostBySlugCached(slug).catch(() => notFound());

    return (
        <article className="mb-16">
            <header className="group font-extrabold flex flex-col gap-4 mb-4">
                <Image
                    className="rounded-x"
                    src={post.coverImageUrl}
                    width={1200}
                    height={720}
                    alt={post.title}
                />

                <PostHeading url={`/post/${post.slug}`}>
                    {post.title}
                </PostHeading>
                <p className="font-normal">
                    {post.author} | {<PostDate createdAt={post.createdAt} />}
                </p>
            </header>

            <p className="text-xl italic mb-4 text-slate-600">{post.excerpt}</p>

            <SafeMarkdown markdown={post.content} />
        </article>
    );
};
