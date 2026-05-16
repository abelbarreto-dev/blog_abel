import { Button } from "@/components/Button";
import { InputCheckbox } from "@/components/InputCheckbox";
import { InputText } from "@/components/InputText";
import { HeartIcon } from "lucide-react";

export default async function AdminAddPostPage() {
    return (
        <form action="" className="mb-16">
            <div className="flex flex-col gap-6">
            <div className="py-16 text-6xl flex flex-wrap items-center gap-4">AdminAddPostPage
                <Button variant="default" size="sm"><HeartIcon />Mire</Button>
                <Button variant="ghost" size="md"><HeartIcon />Mire</Button>
                <Button variant="danger" size="lg"><HeartIcon />Mire</Button>
            </div>

            <div>
                <InputCheckbox inputName="mireee" labelText="Felizes Para Sempre" />
            </div>

            <div className="flex flex-col gap-6">
                <InputText labelText="Abel" placeholder="Mirian, eu te amo!" />
                <InputText labelText="Abel" placeholder="Mirian, eu te amo!" />

                <InputText labelText="Abel" placeholder="Mirian, eu te amo!" disabled/>
                <InputText labelText="Abel" defaultValue="Mirian, eu te amo!" placeholder="Mirian, eu te amo!" disabled/>
                <InputText labelText="Abel" placeholder="Mirian, eu te amo! Reading..." readOnly/>
            </div>

            <div className="mt-4">
                <Button className="w-full" variant="default" size="md">Enviar</Button>
            </div>
        </div>
        </form>
    );
}
