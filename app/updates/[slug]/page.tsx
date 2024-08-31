import { getAllPosts, getPostBySlug } from '@lib/api'
import markdownToHtml from '@lib/markdownToHtml'
import UpdatePost from '@components/post/post'
import Link from 'next/link'

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts(['slug']);
 
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Update({ params }: Props) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
  ])
  const content = await markdownToHtml(post.content || '')
  return (
    <article className="container container-narrow">
      <h1>Update History</h1>
      <UpdatePost
        title={post.title}
        date={post.date}
        content={content}
      />
    </article>
  )
}