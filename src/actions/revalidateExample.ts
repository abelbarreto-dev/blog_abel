'use server';

import { revalidateTag } from "next/cache";

export const revalidateExampleAction = async (formData: FormData) => {
    const data = formData.get("data") || null;
    console.log("estou em uma server action", data);

    revalidateTag("post-os-desafios-do-trabalho-remoto-moderno");
};
