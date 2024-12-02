# Sprout for YNAB website

This app is the official website for Sprout for YNAB, containing a landing page for the extension leading to links of the extension on storefronts, update history, privacy policy and FAQ. It utilizes Remark to convert Markdown files to HTML for the update history, privacy policy and FAQ pages. The app is based off of the [Next.js Blog Starter repo](https://github.com/vercel/next.js/tree/canary/examples/blog-starter)

This version does contain the closure page and banner notice components, but the repo reflects the state of the website before the closure notice.

## Technologies
- React 18
- Next.js 14
- Remark

## Setup
The following URL references in code will need to be updated:
- `SUPPORT_EMAIL` Email address for support requests
- `CHROME_URL` Chrome Web Store listing
- `FIREFOX_URL` Firefox Add-Ons listing
- `EDGE_URL` Microsoft Edge Add-Ons listing

## Remark/Articles
The app uses Remark to read Markdown files which will then be put onto the site as articles in the HTML. Update History, FAQ, Privacy Policy and the Closure Notice all use this system.

### Recommended Format
```
---
title: '[TITLE]'
date: 'yyyy-mm-dd'
---
## Content starts
Highest level heading should be `<h2>` in the Markdown file (##) as the post component contains an `<h1>` based on title in file

Title and Date are required for sorting in update history
```

### Update History
Updates will pull all of the markdown files in the `_updates` directory and show all of them in order of latest update (based on date) at the URL `/updates`, but can also pull a single update at `/updates/[version]` (eg `/updates/1.1.4`). Your file names should be the version number with the `.md` extension

## Install
```
npm install
```
## Dev Environment
```
npm run dev
```
## Build and Deploy
```
npm run build
```
App will output to `out` folder which can be deployed as a static site.

## License
MIT