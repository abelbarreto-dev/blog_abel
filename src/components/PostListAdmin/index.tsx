import { findAllPostAdmin } from "@/lib/post/queries/admin";

export const PostListAdmin = async () => {
    const posts = await findAllPostAdmin();

    return (
        <div className="py-16 text-16">
            {posts.map((post) => {
                return <p key={post.id}>{post.title}</p>;
            })}
        </div>
    );
};
