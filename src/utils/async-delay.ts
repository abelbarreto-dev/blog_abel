import { logColor } from "./log-color";

export const asyncDelay = async (
    remainingTime: number = 0,
    verbose = false
) => {
    if (remainingTime <= 0) {
        return;
    }

    if (verbose) {
        logColor(`Delay for ${remainingTime/1000}s`);
        return;
    }

    await new Promise((resolve) => setTimeout(resolve, remainingTime));
};
