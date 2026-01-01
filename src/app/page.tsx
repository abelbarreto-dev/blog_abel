import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostLists } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";
import { PostFeature } from "@/components/PostFeature";

export default async function HomePage() {
    return (
        <Container>
            <Header />

            <Suspense fallback={<SpinLoader />}>
                <PostFeature />
            </Suspense>

            <Suspense fallback={<SpinLoader />}>
                <PostLists />
            </Suspense>

            <footer>
                <p className="text-6xl font-bold text-center py-8">
                    Aqui é o Footer
                </p>
            </footer>
        </Container>
    );
}
