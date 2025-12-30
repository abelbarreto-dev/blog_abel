import { Container } from "@/components/Container";
import { PostLists } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
    return (
        <Container>
            <header>
                <h1 className="text-6xl font-bold text-center py-8">
                    Aqui é a Header
                </h1>
            </header>

            <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                sed fuga accusamus quam quis, est iusto odit debitis quae
                tenetur tempora cumque doloribus ducimus accusantium, corporis
                distinctio quo alias deleniti esse atque magni tempore ea!
                Nihil, porro voluptatum aliquid minus dolores omnis. Ex modi
                illum beatae eveniet suscipit, perferendis ducimus illo in odio.
                Illo, maiores sit officiis aliquid aperiam totam natus, vitae
                sequi inventore dolorem numquam cum voluptatum itaque?
                Reiciendis similique atque id? Officia alias obcaecati
                accusantium enim ipsa repudiandae pariatur rerum fugit cum
                architecto quam velit necessitatibus inventore, impedit optio
                odit consequatur mollitia suscipit fugiat corrupti! A omnis
                neque magnam sint at molestiae optio, sunt consequuntur corrupti
                expedita. Veritatis temporibus at ducimus illum, harum fugiat
                dolor odit voluptate! Cumque libero eos laborum reiciendis,
                blanditiis consequatur veritatis, voluptate quis, temporibus
                alias minus nesciunt incidunt. Ipsa id ipsum voluptatum, ab
                similique non reprehenderit optio sapiente atque! Nostrum
                dolores distinctio repudiandae a dolor doloribus qui tempora
                ipsum labore, iure possimus voluptates corrupti rem sequi odio
                atque architecto eius voluptatem quaerat explicabo! Debitis
                optio omnis delectus sequi possimus repellat magnam ea
                voluptatibus. Dicta nulla tenetur minima! Quo tempora nemo quod
                non aperiam adipisci explicabo repellat asperiores hic, quasi
                facere necessitatibus, sapiente molestiae rem aliquam minus cum
                labore minima consectetur consequatur accusantium quae. Tenetur
                eos, perspiciatis quaerat omnis accusantium vero animi earum
                unde ab magnam molestias facere! Vitae laborum natus ipsam et
                doloremque veniam, beatae fugiat incidunt tenetur quae, ex hic!
                Eum vero inventore veniam omnis libero eligendi tenetur saepe et
                eaque. Harum enim nesciunt impedit. Harum aut magnam ab
                necessitatibus iusto dolores non consequatur voluptate molestiae
                dolorum beatae voluptatum, tenetur minus temporibus excepturi
                impedit corrupti odio iure sint, amet sit quas atque dolore.
                Amet impedit, autem beatae, ex a vitae nisi repudiandae
                asperiores ipsam, blanditiis ipsa. Fugiat atque recusandae,
                magnam ullam sequi reiciendis?
            </p>

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
