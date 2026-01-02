import { formatDatetime, formatRelativeDate } from "@/utils/format-datetime";
import { PostHeading } from "../PostHeading";

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
            <time
                dateTime={createdAt}
                className="text-slate-600 block text-sm/tight"
                title={formatRelativeDate(createdAt)}
            >
                {formatDatetime(createdAt)}
            </time>

            <PostHeading url={postLink} as={postHeading}>
                {postTitle}
            </PostHeading>

            <p>{postExcerpt}</p>
        </div>
    );
};
