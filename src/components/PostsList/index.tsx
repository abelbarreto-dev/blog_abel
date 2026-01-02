import { postRepository } from "@/repositories/post";
import { ImageCover } from "../ImageCover";
import { PostHeading } from "../PostHeading";
import { formatDatetime, formatRelativeDate } from "@/utils/format-datetime";

export const PostLists = async () => {
    const posts = await postRepository.findAll();

    return (
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
                const postLink = `/post/${post.slug}`;

                return (
                    <section className="flex flex-col group gap-4" key={post.id}>
                        <ImageCover
                            src={post.coverImageUrl}
                            url={postLink}
                            priority={false}
                        />

                        <div className="flex flex-col gap-4 sm:justify-center">
                            <time
                                dateTime={post.createdAt}
                                className="text-slate-600 block text-sm/tight"
                                title={formatRelativeDate(post.createdAt)}
                            >
                                {formatDatetime(post.createdAt)}
                            </time>

                            <PostHeading url={""} as={"h1"}>
                                {post.title}
                            </PostHeading>

                            <p>
                                {post.excerpt}
                            </p>
                        </div>
                    </section>
                );
            })}
        </div>
    );
};
