import { postRepository } from "@/repositories/post";
import { unstable_cache } from "next/cache";
import { cache } from "react";

export const findAllPublishedPostsCached = unstable_cache(
    cache(async () => await postRepository.findAllPublished()),
    ["posts"],
    {
        tags: ["posts"],
    }
);

export const findPostBySlugCached = (slug: string) =>
    unstable_cache(
        cache(
            async (slug: string) =>
                await postRepository.findBySlugPublished(slug)
        ),
        [`post-${slug}`],
        {
            tags: [`post-${slug}`],
        }
    )(slug);

export const findPostByIdCached = cache(
    unstable_cache(
        async (id: string) => await postRepository.findById(id),
        ["post"],
        {
            tags: ["post"],
        }
    )
);
