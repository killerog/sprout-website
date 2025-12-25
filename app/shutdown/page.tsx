import { Metadata } from 'next'
import markdownToHtml from '@lib/markdownToHtml'
import { getClosure } from '@lib/api'
import { EXTENSION_NAME } from '@lib/constants'

export const metadata: Metadata = {
  title: `Shutting Down - ${EXTENSION_NAME}`
}

export default async function Updates() {
  const faq = getClosure();
  const content = await markdownToHtml(faq.content);

  return (
    <article className="container container-narrow">
      <h1>Sprout for YNAB will make a restart in 2026</h1>
      <div dangerouslySetInnerHTML={{__html: content}}></div>
    </article>
  )
}