import { formatDatetime, formatRelativeDate } from "@/utils/format-datetime";

type PostDateProps = {
    createdAt: string;
};

export const PostDate = ({ createdAt }: PostDateProps) => {
    return (
        <time
            dateTime={createdAt}
            className="text-slate-600 text-sm/tight"
            title={formatRelativeDate(createdAt)}
        >
            {formatDatetime(createdAt)}
        </time>
    );
};
