"use server";

import { asyncDelay } from "@/utils/async-delay";
import { logColor } from "@/utils/log-color";

export const deletePostAction = async (id: string) => {
    await asyncDelay(2000);
    logColor("" + id);
};
