# My Notes

A personal knowledge system for coding problems, interview preparation, and project documentation.

Built with Astro, Markdown, and Docker.

---

## Overview

This project is a lightweight, structured knowledge base for:

- recording LeetCode problem solutions
- practicing interview explanations and communication
- documenting personal projects
- organizing technical concepts and reusable code snippets

Unlike a traditional blog, this site is optimized for:

- fast writing
- structured thinking
- efficient review
- clean content organization

---

## Features

- Markdown-based content management
- Multiple content collections
- Clean and minimal UI
- Topic and tag organization
- Dedicated sections for problems, projects, interview notes, concepts, and snippets
- Static site generation with Astro
- Docker-ready deployment with Nginx

---

## Content Structure

All content is written in Markdown and organized into collections:

```text
src/content/
  problems/           # LeetCode solutions and coding notes
  interview-notes/    # Behavioral answers, coding explanations, project storytelling
  projects/           # Personal or academic project write-ups
  concepts/           # Core technical concepts and patterns
  snippets/           # Reusable code templates
```

## Local Development
Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the site:

```bash
npm run build
```

## Docker
Build the site:
```bash
docker build -t my-notes .
```

Run the container:
```bash
docker run -p 8080:80 my-notes
```

