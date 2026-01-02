import { ImageCover } from "../ImageCover";
import { PostSummary } from "../PostSummary";

export const PostFeature = () => {
    const slug = "anything";
    const postLink = `/post/${slug}`;

    return (
        <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
            <ImageCover
                src={"/images/bryen_0.png"}
                url={postLink}
                priority={true}
            />

            <PostSummary
                postHeading={"h1"}
                postLink={postLink}
                postTitle={"Rotina matinal de pessoas altamente eficazes"}
                postExcerpt={"O Next.js também é uma boa escolha para quem quer se preocupar com performance e SEO."}
                createdAt={"2025-04-08T00:24:38.616Z"}
            />
        </section>
    );
};
