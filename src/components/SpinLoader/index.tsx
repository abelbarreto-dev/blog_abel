import clsx from "clsx";

type SpinLodaderProps = {
    className?: string;
}

export const SpinLoader = (
    { className = ""}: SpinLodaderProps
) => {
    const classes = clsx(
        "flex",
        "items-center",
        "justify-center",
        className,
    );

    return (
        <div className={classes}>
            <div
                className={clsx(
                    "w-10 h-10",
                    "border-5 border-slate-900 border-t-transparent",
                    "rounded-full",
                    "animate-spin"
                )}
            >
            </div>
            <p className="pl-2 text-4xl">Aguarde</p>
        </div>
    );
};
