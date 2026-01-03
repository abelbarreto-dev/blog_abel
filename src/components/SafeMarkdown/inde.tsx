import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

type SafeMarkdownProps = {
    markdown: string;
};

export const SafeMarkdown = ({ markdown }: SafeMarkdownProps) => {
    return (
        <div>
            <ReactMarkdown rehypePlugins={[rehypeSanitize]} remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </div>
    );
};
