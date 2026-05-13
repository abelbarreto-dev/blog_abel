import { ErrorMessage } from "../ErrorMessage";
import { ImageCover } from "../ImageCover";
import { PostSummary } from "../PostSummary";
import { findAllPublishedPostsCached } from "@/lib/post/queries/public";

export const PostFeature = async () => {
    const posts = await findAllPublishedPostsCached();
    const post = posts[0];

    if (posts.length < 1) return <ErrorMessage contentTitle="Ops! :/" content="Ainda não criamos nenhum post!"/>;

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
