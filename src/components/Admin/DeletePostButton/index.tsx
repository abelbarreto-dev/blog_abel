"use client";

import { deletePostAction } from "@/actions/post/delete-post-action";
import { DialogConfirm } from "@/components/DialogConfirm";
import clsx from "clsx";
import { Trash2Icon } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "react-toastify";

type DeletePostButtonProps = {
    id: string;
    title: string;
};

export const DeletePostButton = ({ id, title }: DeletePostButtonProps) => {
    const [pending, startTransition] = useTransition();
    const [showDialog, setShowDialog] = useState<boolean>(false);

    const deletingPost = async () => {
        toast.dismiss();

        startTransition(async () => {
            const result = await deletePostAction(id);

            setShowDialog(false);

            if (result.error) {
                toast.error(`Erro: ${result.error}`);
                return;
            }

            toast.success("Post apagado com sucesso!");
        });
    }

    const handleDelete = async () => {
        setShowDialog(true);
    }

    return (
        <>
            {showDialog && <DialogConfirm
                onCancel={() => setShowDialog(false)}
                onConfirm={deletingPost}
                title="Excluir Postagem" message={`Tem certeza que deseja excluir este post: ${title}`}
                disabled={pending}
            />}
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
        </>
    );
};
