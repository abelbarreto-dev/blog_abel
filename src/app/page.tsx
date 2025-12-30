import { PostLists } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react"

export default async function HomePage() {
    return (
        <div>
            <header><h1 className="text-6xl font-bold text-center py-8">Aqui é a Header</h1></header>

            <Suspense fallback={<SpinLoader />}>
                <PostLists />
            </Suspense>

            <footer><p className="text-6xl font-bold text-center py-8">Aqui é o Footer</p></footer>
        </div>
    );
}
