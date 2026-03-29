import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const problems = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.md",
    base: "./src/content/problems",
  }),
  schema: z.object({
    title: z.string(),
    leetcodeId: z.number(),
    difficulty: z.enum(["Easy", "Medium", "Hard"]),
    topics: z.array(z.string()),
    status: z.enum(["todo", "reviewing", "done", "mastered"]),
    summary: z.string().optional(),
    companies: z.array(z.string()).optional(),
    source: z.string().optional(),
    createdAt: z.string(),
    updatedAt: z.string().optional(),
  }),
});

const interviewNotes = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.md",
    base: "./src/content/interview",
  }),
  schema: z.object({
    title: z.string(),
    category: z.enum([
      "behavioral",
      "coding",
      "project",
      "system-design",
      "resume",
      "general",
    ]),
    tags: z.array(z.string()),
    status: z.enum(["draft", "active", "archived"]),
    summary: z.string().optional(),
    createdAt: z.string(),
    updatedAt: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.md",
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    role: z.string().optional(),
    stack: z.array(z.string()).optional(),
    tags: z.array(z.string()),
    status: z.enum(["draft", "active", "archived"]),
    summary: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    createdAt: z.string(),
    updatedAt: z.string().optional(),
  }),
});

const concepts = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.md",
    base: "./src/content/concepts",
  }),
  schema: z.object({
    title: z.string(),
    area: z.enum([
      "algorithms",
      "data-structures",
      "system-design",
      "backend",
      "frontend",
      "general",
    ]),
    tags: z.array(z.string()),
    summary: z.string().optional(),
    createdAt: z.string(),
    updatedAt: z.string().optional(),
  }),
});

const snippets = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.md",
    base: "./src/content/snippets",
  }),
  schema: z.object({
    title: z.string(),
    language: z.enum([
      "python",
      "cpp",
      "java",
      "javascript",
      "typescript",
      "sql",
      "bash",
      "other",
    ]),
    tags: z.array(z.string()),
    summary: z.string().optional(),
    createdAt: z.string(),
    updatedAt: z.string().optional(),
  }),
});

export const collections = {
  problems,
  interviewNotes,
  projects,
  concepts,
  snippets,
};