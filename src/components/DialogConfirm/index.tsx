import clsx from "clsx";
import { Button } from "../Button";
import { BanIcon, CheckIcon } from "lucide-react";

type DialogConfirmProps = {
    title: string;
    message: React.ReactNode;
    disabled: boolean;
    onConfirm: () => void;
    onCancel: () => void;
};

export const DialogConfirm = ({ title, message, onCancel, onConfirm, disabled }: DialogConfirmProps) => {
    const handleCancel = () => {
        if (disabled) return;

        onCancel();
    }

    return (
        <div
            className={clsx(
                "fixed bg-black/50 inset-0",
                "backdrop-blur-xs",
                "flex items-center justify-center",
                "z-50 text-center",
            )}
            onClick={handleCancel}
        >
            <div
                className={clsx(
                    "z-51",
                    "bg-slate-100",
                    "max-w-2xl p-6 rounded-2xl mx-6",
                    "flex flex-col gap-4",
                    "shadow-lg shadow-black/30",
                )}
                onClick={e => e.stopPropagation()}
            >
                <h3 className="font-extrabold text-xl">{title}</h3>
                <p>{message}</p>
                <div className="flex items-center justify-around gap-2">
                    <Button variant="ghost" size="md" onClick={onCancel} autoFocus disabled={disabled}>
                        <BanIcon />
                        Cancelar
                    </Button>
                    <Button variant="default" size="md" onClick={onConfirm}>
                        <CheckIcon />
                        OK
                    </Button>
                </div>
            </div>
        </div>
    );
};
