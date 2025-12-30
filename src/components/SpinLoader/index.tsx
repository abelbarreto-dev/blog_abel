import clsx from "clsx";

type SpinLodaderProps = {
    containerClasses?: string;
}

export const SpinLoader = (
    { containerClasses = ""}: SpinLodaderProps
) => {
    const classes = clsx(
        "flex",
        "items-center",
        "justify-center",
        containerClasses
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
        </div>
    );
};
