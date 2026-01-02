import { ImageCover } from "../ImageCover";
import { PostSummary } from "../PostSummary";
import { findAllPublishedPosts } from "@/lib/post/queries";

export const PostFeature = async () => {
    const posts = await findAllPublishedPosts();
    const post = posts[0];

    const postLink = `/post/${post.slug}`;

    return (
        <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
            <ImageCover
                src={post.coverImageUrl}
                url={postLink}
                priority={true}
            />

            <PostSummary
                postHeading={"h1"}
                postLink={postLink}
                postTitle={post.title}
                postExcerpt={post.excerpt}
                createdAt={post.createdAt}
            />
        </section>
    );
};
