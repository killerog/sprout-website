import { Metadata } from 'next'
import { EXTENSION_NAME } from '@lib/constants'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `404 Page not found - ${EXTENSION_NAME}`
}

export default function NotFound() {
  return (
    <div className="container container-narrow">
      <h1>404 - Page not found</h1>
      <p>The URL you have entered does not exist.</p>
      <Link className="button outline" href="/">Go home</Link>
    </div>
  )
}