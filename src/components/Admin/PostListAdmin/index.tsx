import { findAllPostAdmin } from "@/lib/post/queries/admin";
import clsx from "clsx";
import Link from "next/link";
import { DeletePostButton } from "../DeletePostButton";
import { ErrorMessage } from "../../ErrorMessage";

export const PostListAdmin = async () => {
    const posts = await findAllPostAdmin();

    if (posts.length < 1) return <ErrorMessage contentTitle="Ops! :/" content="Nenhum posts encontrado!" />

    return (
        <div className="mb-16 text-16">
            {posts.map((post) => {
                return (
                    <div
                        className={clsx(
                            "py-2 px-2",
                            !post.published && "bg-slate-300",
                            "flex gap-2 items-center justify-between",
                        )}
                        key={post.id}
                    >
                        <Link href={"/admin/post/" + post.id}>
                            {post.title}
                        </Link>
                        {!post.published && (
                            <span className="text-xs text-slate-600 italic">
                                (Não Publicado)
                            </span>
                        )}

                        <DeletePostButton id={post.id} title={post.title} />
                    </div>
                );
            })}
        </div>
    );
};
