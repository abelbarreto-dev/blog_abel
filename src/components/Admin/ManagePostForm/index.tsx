"use client";

import { Button } from "@/components/Button";
import { InputCheckbox } from "@/components/InputCheckbox";
import { InputText } from "@/components/InputText";

type FormProps = {} & React.ComponentProps<"form">;

export function ManagePostForm({
    ...props
}: FormProps) {
    return (
        <form action="" className="mb-16" { ...props }>
            <div className="flex flex-col gap-6">

                <div>
                    <InputCheckbox inputName="liberdade" labelText="Felizes Para Sempre" />
                </div>

                <div className="flex flex-col gap-6">
                    <InputText labelText="Abel" placeholder="Escreva aqui" />
                    <InputText labelText="Abel" placeholder="Escreva aqui" />

                    <InputText labelText="Abel" placeholder="Escreva aqui" disabled />
                    <InputText labelText="Abel" defaultValue="Escreva aqui" placeholder="Escreva aqui" disabled />
                    <InputText labelText="Abel" placeholder="Escreva aqui Reading..." readOnly />
                </div>

                <div className="mt-4">
                    <Button className="w-full" variant="default" size="md">Enviar</Button>
                </div>
            </div>
        </form>
    );
}