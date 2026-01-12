import { ImageCover } from "../ImageCover";
import { PostSummary } from "../PostSummary";
import { findAllPublishedPostsCached } from "@/lib/post/queries/public";

export const PostLists = async () => {
    const posts = await findAllPublishedPostsCached();

    return (
        <div className="gap-8 mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {posts.slice(1).map((post) => {
                const postLink = `/post/${post.slug}`;

                return (
                    <section
                        className="flex flex-col group gap-4"
                        key={post.id}
                    >
                        <ImageCover
                            src={post.coverImageUrl}
                            url={postLink}
                            priority={false}
                        />

                        <PostSummary
                            postHeading={"h2"}
                            postLink={postLink}
                            postTitle={post.title}
                            postExcerpt={post.excerpt}
                            createdAt={post.createdAt}
                        />
                    </section>
                );
            })}
        </div>
    );
};
