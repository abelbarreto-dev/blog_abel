import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { drizzleDb } from "@/db/drizzle";
import { postsTable } from "@/db/drizzle/schemas";
import { desc, eq } from "drizzle-orm";

export class DrizzlePostRepository implements PostRepository {
    async findAll(): Promise<PostModel[]> {
        const query = drizzleDb.select().from(postsTable);

        query.orderBy(desc(postsTable.createdAt));

        return await query;
    }
    async findAllPublished(): Promise<PostModel[]> {
        const query = drizzleDb
            .select()
            .from(postsTable)
            .where(eq(postsTable.published, true));

        query.orderBy(desc(postsTable.createdAt));

        return await query;
    }
    async findById(id: string): Promise<PostModel> {
        const post = await drizzleDb.query.posts.findFirst({
            where: (post, { eq }) => eq(post.id, id),
        });

        if (!post) throw new Error("Post Not Found");

        return post;
    }
    async findBySlugPublished(slug: string): Promise<PostModel> {
        const post = await drizzleDb.query.posts.findFirst({
            where: (post, { eq, and }) =>
                and(eq(post.slug, slug), eq(post.published, true)),
        });

        if (!post) throw new Error("Post Not Found");

        return post;
    }
}
