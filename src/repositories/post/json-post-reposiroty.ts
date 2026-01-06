import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
    ROOT_DIR,
    "src",
    "db",
    "seed",
    "posts.json"
);
const ENCODE = "utf-8";
const SIMULATE_WAIT = 0;

export class JsonPostRepository implements PostRepository {
    private async simulateWait() {
        if (SIMULATE_WAIT <= 0) {
            return;
        }

        await new Promise((resolve) => setTimeout(resolve, SIMULATE_WAIT));
    }

    private async readFromDisk(): Promise<PostModel[]> {
        const jsonContent = await readFile(JSON_POSTS_FILE_PATH, ENCODE);

        const { posts } = JSON.parse(jsonContent);

        return posts;
    }

    async findAll(): Promise<PostModel[]> {
        return await this.readFromDisk();
    }

    async findAllPublished(): Promise<PostModel[]> {
        await this.simulateWait();

        const posts = await this.readFromDisk();

        return posts.filter((post) => post.published);
    }

    async findById(id: string): Promise<PostModel> {
        const posts = await this.findAllPublished();

        const foundPost = posts.find((post) => post.id === id);

        if (!foundPost) throw new Error("Post Not Found For Id");

        return foundPost;
    }

    async findBySlugPublished(slug: string): Promise<PostModel> {
        const posts = await this.findAllPublished();

        const foundPost = posts.find((post) => post.slug === slug);

        if (!foundPost) throw new Error("Post Not Found For Slug");

        return foundPost;
    }
}
