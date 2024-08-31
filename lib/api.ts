import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_updates')
const privacyDirectory = join(process.cwd(), "_privacy");
const faqDirectory = join(process.cwd(), "_faq");
const closureDirectory = join(process.cwd(), "_closure");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getClosure() {
  const fullPath = join(closureDirectory, "closure.md");
  return getMarkdownFile("closure", fullPath, ["title", "date", "content"]);
}

export function getFaq() {
  const fullPath = join(faqDirectory, "faq.md");
  return getMarkdownFile("faq", fullPath, ["title", "date", "content"]);
}

export function getPrivacyPolicy() {
  const fullPath = join(privacyDirectory, "privacy.md");
  return getMarkdownFile("privacy", fullPath, ["title", "date", "content"]);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  return getMarkdownFile(realSlug, fullPath, fields);
}

function getMarkdownFile(realSlug: string, fullPath: string, fields: string[] = []) {
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items

}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
