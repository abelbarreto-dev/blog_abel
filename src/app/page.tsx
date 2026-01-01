import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostLists } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";
import { PostHeading } from "@/components/PostHeading";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
    return (
        <Container>
            <Header />

            <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
                <Link
                    href=""
                    className={"w-full h-full overflow-hidden rounded-xl"}
                >
                    <Image
                        className="group-hover:scale-105 transition border w-full h-full object-cover object-center"
                        src={"/images/bryen_0.png"}
                        width={1200}
                        height={768}
                        alt="Titulo da Postagem"
                        priority
                    />
                </Link>
                <div className="flex flex-col gap-4 sm:justify-center">
                    <time
                        dateTime={new Date().toDateString()}
                        className="text-slate-600 block text-sm/tight"
                    >
                        {new Date().toLocaleDateString()}
                    </time>

                    <PostHeading url={""} as={"h1"}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </PostHeading>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dicta quia quidem voluptatum sapiente saepe. Excepturi
                        soluta corporis fuga, sit commodi libero ipsum harum
                        aliquam suscipit veritatis rerum! Vel magni, voluptas
                        harum earum ipsa assumenda corrupti qui libero ducimus
                        numquam? Quia hic odio maxime? Ea voluptatem excepturi
                        voluptate optio minus rem eveniet nihil quia quae totam
                        obcaecati ex, cum tenetur quas? Quaerat odit debitis, ut
                        porro reprehenderit eum dolore ipsa sed veniam
                        necessitatibus iure quis maxime ipsum illum voluptas
                        vitae vel? Accusantium nemo sapiente placeat ex facilis,
                        ratione animi possimus assumenda vel nam cumque facere
                        odit. Necessitatibus inventore fugit aut nulla!
                    </p>
                </div>
            </section>

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
