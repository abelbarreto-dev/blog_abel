import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { drizzleDb } from "@/db/drizzle";
import { postsTable } from "@/db/drizzle/schemas";
import { desc, eq } from "drizzle-orm";
import { logColor } from "@/utils/log-color";
import { asyncDelay } from "@/utils/async-delay";
import { SIMULATE_WAIT } from "@/lib/constants/constants";

export class DrizzlePostRepository implements PostRepository {
    async findAll(): Promise<PostModel[]> {
        logColor("FindAll", Date.now());
        await asyncDelay(SIMULATE_WAIT, true);

        const query = drizzleDb.select().from(postsTable);

        query.orderBy(desc(postsTable.createdAt));

        return await query;
    }
    async findAllPublished(): Promise<PostModel[]> {
        logColor("FindAll Published", Date.now());
        await asyncDelay(SIMULATE_WAIT, true);

        const query = drizzleDb
            .select()
            .from(postsTable)
            .where(eq(postsTable.published, true));

        query.orderBy(desc(postsTable.createdAt));

        return await query;
    }
    async findById(id: string): Promise<PostModel> {
        logColor("FindById", Date.now());
        await asyncDelay(SIMULATE_WAIT, true);

        const post = await drizzleDb.query.posts.findFirst({
            where: (post, { eq }) => eq(post.id, id),
        });

        if (!post) throw new Error("Post Not Found");

        return post;
    }
    async findBySlugPublished(slug: string): Promise<PostModel> {
        logColor("FindBySlugPublished", Date.now());
        await asyncDelay(SIMULATE_WAIT, true);

        const post = await drizzleDb.query.posts.findFirst({
            where: (post, { eq, and }) =>
                and(eq(post.slug, slug), eq(post.published, true)),
        });

        if (!post) throw new Error("Post Not Found");

        return post;
    }
}
