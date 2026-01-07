'use server';

import { revalidatePath } from "next/cache";

export const revalidateExampleAction = async (formData: FormData) => {
    const data = formData.get("data") || null;
    console.log("estou em uma server action", data);

    revalidatePath(`${data}`);
};
