import { clsx } from "clsx";
import { useId } from "react";

type InputCheckboxProps = {
    inputName: string;
    labelText?: string;
    type?: "checkbox";
} & React.ComponentProps<"input">;

export function InputCheckbox ({
    inputName,
    labelText = "",
    type="checkbox",
    ...props
}: InputCheckboxProps) {
    const id = useId();

    return (
        <div className="flex gap-3">
            <input {...props} type={type} name={inputName} id={id} className={clsx(
                "w-4 h-4 outline-none focus:ring-2 focus:ring-blue-500",
                "text-sm",
                "items-center",
                props.className
            )}/>
            {labelText && <label htmlFor={id}>{labelText}</label>}
        </div>
    );
}
