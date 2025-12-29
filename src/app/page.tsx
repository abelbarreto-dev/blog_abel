import clsx from "clsx";

export default function HomePage() {
    return (
        <div>
            <h1
                className={clsx([
                    "text-6xl",
                    "font-bold text-blue-500",
                    "hover:text-blue-50",
                    "hover:bg-blue-500 cursor-pointer",
                    "transition duration-300",
                ])}
            >
                Texto do meu Título
            </h1>
        </div>
    );
}
