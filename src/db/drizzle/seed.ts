import { JsonPostRepository } from "@/repositories/post/json-post-reposiroty";
import { PostRepository } from "@/repositories/post/post-repository";
import { postsTable } from "./schemas";
import { drizzleDb } from ".";

(async () => {
    const jsonPostsRepositories: PostRepository = new JsonPostRepository();

    const posts = await jsonPostsRepositories.findAll();

    try {
        await drizzleDb.delete(postsTable); // WARNING! Clean Database!
        await drizzleDb.insert(postsTable).values(posts);
    } catch (e) {
        console.error(e);
    }
})();
