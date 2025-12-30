"use client";

import clsx from "clsx";

export const Header = () => {
    return (
        <h1
            className={clsx([
                "text-6xl",
                "font-bold text-blue-500",
                "hover:text-blue-50",
                "hover:bg-blue-500 cursor-pointer",
                "transition duration-300",
            ])}
            onClick={() => alert(123)}
        >
            Texto do meu Título
        </h1>
    );
};
