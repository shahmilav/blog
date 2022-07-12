# My Personal Blog
![Eleventy](https://img.shields.io/badge/Eleventy-696969?style=for-the-badge&logo=eleventy&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-696969?style=for-the-badge&logo=netlify&logoColor=white)

View live [here](https://milavblog.netlify.app).

---

## Tools used
- [Eleventy](https://www.11ty.dev/) as the site generator
- [Netlify](https://netlify.app/) for hosting
- [DarkmodeJS](https://darkmodejs.learn.uno) for an easy dark mode implementation
- [PrismJS](https://prismjs.com/) for syntax highlighting in code blocks

## How it works
I simply have to edit/create markdown (`.md`) files in `./src/posts/`. This links the file to the [posts](https://milavblog.netlify.app/posts/) page. 
Posts need to have basic frontmatter.

```markdown
---
title: "Post name"
layout: "posts.njk"
tags: ['tag1', 'tag2']
---

## Content starts here.
Hello, world!
```
