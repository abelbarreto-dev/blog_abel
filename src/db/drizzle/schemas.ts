import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const postsTable = sqliteTable("posts", {
    id: text("id").primaryKey(),
    title: text("title").notNull(),
    slug: text("slug").notNull().unique(),
    excerpt: text("excerpt").notNull(),
    content: text("content").notNull(),
    coverImageUrl: text("cover_image_url").notNull(),
    author: text("author").notNull(),
    published: integer("published", { mode: "boolean" }).notNull(),
    createdAt: text("created_at").notNull(),
    updatedAt: text("updated_at").notNull(),
});

export type PostTableSelectMode = InferSelectModel<typeof postsTable>;
export type PostTableInsertMode = InferInsertModel<typeof postsTable>;
