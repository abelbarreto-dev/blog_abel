import { PostHeading } from "../PostHeading";
import { PostDate } from "../PostDate";

type PostSummaryProps = {
    postHeading: "h1" | "h2";
    postLink: string;
    postTitle: string;
    postExcerpt: string;
    createdAt: string;
};

export const PostSummary = ({ postHeading, postLink, postTitle, postExcerpt, createdAt }: PostSummaryProps) => {
    return (
        <div className="flex flex-col gap-4 sm:justify-center">
            <PostDate createdAt={createdAt}/>

            <PostHeading url={postLink} as={postHeading}>
                {postTitle}
            </PostHeading>

            <p>{postExcerpt}</p>
        </div>
    );
};
