"use client";

import clsx from "clsx";
import { CircleXIcon, FileTextIcon, HouseIcon, MenuIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function MenuAdmin () {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const navClasses = clsx(
        "bg-slate-900 text-slate-100 rounded-lg",
        "flex flex-col mb-8",
        "sm:flex-row sm:flex-wrap",
        !isOpen && "h-10 overflow-hidden",
        "sm:overflow-visble sm:h-auto",
    );

    const linkClasses = clsx(
        "[&>svg]:w-[16px] [&>svg]:h-[16px] px-4",
        "flex items-center justify-start gap-2",
        "transition hover:bg-slate-800",
        "rounded-lg",
        "h-10",
        "shrink-0",
        "cursor-pointer",
    );

    const openCloseBtnClasses = clsx(
        linkClasses,
        "text-blue-200 italic",
        "sm:hidden"
    );

    return (
        <nav className={navClasses}>
            <button className={openCloseBtnClasses} onClick={() => setIsOpen(s => !s)}>
                {!isOpen && (
                    <>
                        <MenuIcon />
                        Menu
                    </>
                )}

                {isOpen && (
                    <>
                        <CircleXIcon />
                        Fechar
                    </>
                )}
            </button>

            <a href="/" target="_blank" className={linkClasses}>
            <HouseIcon />
            Home</a>

            <Link href={"/admin/post"} className={linkClasses}>
            <FileTextIcon />
            Posts</Link>

            <Link href={"/admin/post/new"} className={linkClasses}>
            <PlusIcon />
            Criar Post
            </Link>
        </nav>
    );
}