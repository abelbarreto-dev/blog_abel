"use client";

import { deletePostAction } from "@/actions/post/delete-post-action";
import clsx from "clsx";
import { Trash2Icon } from "lucide-react";
import { useTransition } from "react";

type DeletePostButtonProps = {
    id: string;
    title: string;
};

export const DeletePostButton = ({ id, title }: DeletePostButtonProps) => {
    const [pending, startTransition] = useTransition();

    const handleDelete = async () => {
        startTransition(async () => await deletePostAction(id));
    }

    return (
        <button
            className={clsx(
                "text-red-500 transition",
                "cursor-pointer",
                "[&_svg]:w-4 [&_svg]:h-4",
                "hover:scale-120 text-red-700",
                "disabled:text-slate-600 disabled:cursor-not-allowed"
            )}
            aria-label={`Apagar Post: ${title}`}
            title={`Apagar Post: ${title}`}
            type="submit"
            onClick={handleDelete}
            disabled={pending}
        >
            <Trash2Icon />
        </button>
    );
};
