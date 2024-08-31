import { Metadata } from 'next'
import UpdatePost from '@components/post/post'
import markdownToHtml from '@lib/markdownToHtml'
import { Suspense } from 'react'
import { getAllPosts, getFaq, getPrivacyPolicy } from '@lib/api'
import DateFormatter from '@components/date-formatter'
import { EXTENSION_NAME } from '@lib/constants'

export const metadata: Metadata = {
  title: `FAQ - ${EXTENSION_NAME}`
}

export default async function Updates() {
  const faq = getFaq();
  const content = await markdownToHtml(faq.content);

  return (
    <article className="container container-narrow">
      <h1>Frequently Asked Questions</h1>
      <div>Last updated: <DateFormatter dateString={faq.date}></DateFormatter></div>
      <div dangerouslySetInnerHTML={{__html: content}}></div>
      <h2>Still have a question?</h2>
      <p>If you have any other questions, please send an email to <a href="mailto:[SUPPORT_EMAIL]">[SUPPORT_EMAIL]</a> and I'll do my best to get back to you. Thanks!</p>
    </article>
  )
}