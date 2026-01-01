import { ImageCover } from "../ImageCover";
import { PostHeading } from "../PostHeading";

export const PostFeature = () => {
    const slug = "anything";
    const postLink = `/post/${slug}`;

    return (
        <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
            <ImageCover src={"/images/bryen_0.png"} url={postLink} priority={true} />

            <div className="flex flex-col gap-4 sm:justify-center">
                <time
                    dateTime={new Date().toDateString()}
                    className="text-slate-600 block text-sm/tight"
                >
                    {new Date().toLocaleDateString()}
                </time>

                <PostHeading url={postLink} as={"h1"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </PostHeading>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta quia quidem voluptatum sapiente saepe. Excepturi
                    soluta corporis fuga, sit commodi libero ipsum harum aliquam
                    suscipit veritatis rerum! Vel magni, voluptas harum earum
                    ipsa assumenda corrupti qui libero ducimus numquam? Quia hic
                    odio maxime? Ea voluptatem excepturi voluptate optio minus
                    rem eveniet nihil quia quae totam obcaecati ex, cum tenetur
                    quas? Quaerat odit debitis, ut porro reprehenderit eum
                    dolore ipsa sed veniam necessitatibus iure quis maxime ipsum
                    illum voluptas vitae vel? Accusantium nemo sapiente placeat
                    ex facilis, ratione animi possimus assumenda vel nam cumque
                    facere odit. Necessitatibus inventore fugit aut nulla!
                </p>
            </div>
        </section>
    );
};
