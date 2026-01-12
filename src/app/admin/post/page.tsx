import { findAllPostAdmin } from "@/lib/post/queries/admin";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Administrador",
};

export default async function AdminPostPage() {
    const posts = await findAllPostAdmin();

    return (
        <div className="py-16 text-16">
            {posts.map((post) => {
                return <p key={post.id}>{post.title}</p>;
            })}
        </div>
    );
}
