import { findAllPostAdmin } from "@/lib/post/queries/admin";
import { Trash2Icon } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

export const PostListAdmin = async () => {
    const posts = await findAllPostAdmin();

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

                        <button
                            className={clsx(
                                "text-red-500 transition",
                                "cursor-pointer",
                                "[&_svg]:w-4 [&_svg]:h-4",
                                "hover:scale-120 text-red-700",
                            )}
                            aria-label={`Apagar Post: ${post.title}`}
                            title={`Apagar Post: ${post.title}`}
                        >
                            <Trash2Icon />
                        </button>
                    </div>
                );
            })}
        </div>
    );
};
