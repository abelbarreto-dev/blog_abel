import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

type ImageCoverProps = {
    src: string;
    url: string;
    priority: boolean;
    linkClasses?: string;
    imageClasses?: string;
};

export const ImageCover = ({
    src,
    url,
    priority,
    linkClasses = "",
    imageClasses = "",
}: ImageCoverProps) => {
    return (
        <Link
            href={url}
            className={clsx(
                "w-full h-full overflow-hidden rounded-xl",
                linkClasses
            )}
        >
            <Image
                className={clsx(
                    "group-hover:scale-105 transition border w-full h-full object-cover object-center",
                    imageClasses
                )}
                src={src}
                width={1200}
                height={768}
                alt="Image Post Cover"
                priority={priority}
            />
        </Link>
    );
};
