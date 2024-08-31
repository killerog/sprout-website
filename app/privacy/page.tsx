import { Metadata } from 'next'
import markdownToHtml from '@lib/markdownToHtml'
import { getPrivacyPolicy } from '@lib/api'
import DateFormatter from '@components/date-formatter'
import { EXTENSION_NAME } from '@lib/constants'

export const metadata: Metadata = {
  title: `Privacy Policy - ${EXTENSION_NAME}`
}

export default async function Updates() {
  const policy = getPrivacyPolicy();
  const content = await markdownToHtml(policy.content);

  return (
    <article className="container container-narrow">
      <h1>Privacy Policy</h1>
      <div>Last updated: <DateFormatter dateString={policy.date}></DateFormatter></div>
      <div dangerouslySetInnerHTML={{__html: content}}></div>
    </article>
  )
}