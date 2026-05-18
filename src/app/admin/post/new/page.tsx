import { ManagePostForm } from "@/components/Admin/ManagePostForm";

export const dynamic = "force-dynamic";

export default async function AdminAddPostPage() {
    return (
        <>
            <ManagePostForm />
        </>
    );
}
