import { postRepository } from "@/repositories/post";
import { ImageCover } from "../ImageCover";
import { PostSummary } from "../PostSummary";

export const PostLists = async () => {
    const posts = await postRepository.findAll();

    return (
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
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
