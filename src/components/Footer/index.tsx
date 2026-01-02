import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="text-center pb-16">
            <p>
                Copywright © {new Date().getFullYear()} |{" "}
                <strong>
                    <Link href="/">The Abel Blog</Link>
                </strong>
            </p>
        </footer>
    );
};
