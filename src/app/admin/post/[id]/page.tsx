export const dynamic = "force-dynamic";

type AdminPostPageProps = {
    params: Promise<{ id: string }>;
};

export default async function AdminPostPage({ params }: AdminPostPageProps) {
    const { id } = await params;

    return <div className="py-16 text-6xl">AdminLoginPage {id}</div>;
}
