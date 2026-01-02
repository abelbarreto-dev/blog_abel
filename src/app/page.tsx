import { PostLists } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";
import { PostFeature } from "@/components/PostFeature";

export default async function HomePage() {
    return (
        <>
            <Suspense fallback={<SpinLoader />}>
                <PostFeature />
            </Suspense>

            <Suspense fallback={<SpinLoader />}>
                <PostLists />
            </Suspense>
        </>
    );
}
