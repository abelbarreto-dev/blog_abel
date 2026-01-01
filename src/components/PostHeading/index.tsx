import Link from "next/link";

type PostHeadingProps = {
    children: React.ReactNode;
    url: string;
    as?: "h1" | "h2";
};

export const PostHeading = ({
    children,
    url,
    as: Title = "h2",
}: PostHeadingProps) => {
    const headingClassesMap = {
        h1: "text-2xl/tight font-extrabold sm:text-4xl",
        h2: "text-2xl/tight font-extraboldl",
    };

    return (
        <Title className={headingClassesMap[Title]}>
            <Link href={url} className="group-hover:text-slate-600 transition">{children}</Link>
        </Title>
    );
};
