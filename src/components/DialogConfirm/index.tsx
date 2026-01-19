import clsx from "clsx";

type DialogConfirmProps = {
    title: string;
    message: string;
};

export const DialogConfirm = ({ title, message }: DialogConfirmProps) => {
    return (
        <div
            className={clsx(
                "fixed bg-black/50 inset-0",
                "backdrop-blur-xs",
                "flex items-center justify-center",
                "z-50 text-center",
            )}
        >
            <div
                className={clsx(
                    "z-51",
                    "bg-slate-100",
                    "max-w-2xl p-6 rounded-2xl mx-6",
                    "flex flex-col gap-4",
                    "shadow-lg shadow-black/30",
                )}
            >
                <h3 className="font-extrabold text-xl">{title}</h3>
                <p>{message}</p>
                <div className="flex items-center justify-around gap-2">
                    <button
                        className={clsx(
                            "bg-slate-300 text-slate-950 hover:bg-slate-400 transition",
                            "flex items-center justify-center",
                            "py-2 px-4 rounded-lg",
                            "cursor-pointer",
                        )}
                        autoFocus
                    >
                        Cancelar
                    </button>
                    <button
                        className={clsx(
                            "bg-blue-500 text-slate-50 hover:bg-blue-600 transition",
                            "flex items-center justify-center",
                            "py-2 px-4 rounded-lg",
                            "cursor-pointer",
                        )}
                    >
                        Ok
                    </button>
                </div>
            </div>
        </div>
    );
};
