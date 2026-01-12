import { postRepository } from "@/repositories/post";
import { unstable_cache } from "next/cache";
import { cache } from "react";

export const findAllPublishedPostsCached = cache(
    unstable_cache(
        async () => await postRepository.findAllPublished(),
        ["post"],
        {
            tags: ["post"],
        }
    )
);

export const findPostBySlugCached = cache((slug: string) =>
    unstable_cache(
        async (slug: string) => await postRepository.findBySlugPublished(slug),
        [`post-${slug}`],
        { tags: [`post-${slug}`] }
    )(slug)
);
