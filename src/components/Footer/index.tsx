import Link from "next/link";

const currentYear = async () => {
    "use cache";

    return new Date().getFullYear();
}

export const Footer = () => {
    return (
        <footer className="text-center pb-16">
            <p>
                Copywright © {currentYear()} |{" "}
                <strong>
                    <Link href="/">The Abel Blog</Link>
                </strong>
            </p>
        </footer>
    );
};
