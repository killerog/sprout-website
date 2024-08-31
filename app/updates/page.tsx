import { Metadata } from 'next'
import UpdatePost from '@components/post/post'
import markdownToHtml from '@lib/markdownToHtml'
import { getAllPosts } from '@lib/api'
import { EXTENSION_NAME } from '@lib/constants'

export const metadata: Metadata = {
  title: `Update History - ${EXTENSION_NAME}`
}

export default async function Updates() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'content',
  ]);

  return (
    <article className="container container-narrow">
      <h1 className="heading">Update History</h1>
        {allPosts.map(async (post) => {
          const content = await markdownToHtml(post.content || '')
          return (
            <UpdatePost
              title={post.title}
              date={post.date}
              content={content}
            />
          )}
        )}
    </article>
  )
}