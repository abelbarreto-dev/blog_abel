import { postRepository } from "@/repositories/post";
import { unstable_cache } from "next/cache";
import { cache } from "react";

export const findAllPublishedPostsCached = unstable_cache(
    cache(async () => await postRepository.findAllPublished()),
    ["post"],
    {
        tags: ["post"],
    }
);

export const findPostBySlugCached = (slug: string) =>
    unstable_cache(
        cache(
            async (slug: string) =>
                await postRepository.findBySlugPublished(slug)
        ),
        ["post"],
        {
            tags: ["post"],
        }
    )(slug);
