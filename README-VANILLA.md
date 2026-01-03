# Vanilla HTML/CSS/JS Version

This is a simplified version of the Sprout for YNAB website converted from Next.js to vanilla HTML/CSS/JavaScript.

## Structure

- `index.html` - Landing page
- `faq.html` - FAQ page
- `privacy.html` - Privacy policy
- `updates.html` - Update history
- `shutdown.html` - Shutdown notice
- `404.html` - 404 error page
- `changelog.html` - Redirects to updates
- `app.html` - Web app for adding transactions (TODO)
- `login.html` - OAuth callback handler (TODO)

- `css/styles.css` - All styles
- `js/` - JavaScript files:
  - `config.js` - Configuration (update WORKER_URL and CLIENT_ID)
  - `api.js` - API integration with Cloudflare Worker
  - `shared.js` - Shared utilities
  - Component files (TODO)

## Setup

1. Update `js/config.js` with your:
   - `WORKER_URL` - Your Cloudflare Worker URL
   - `CLIENT_ID` - Your YNAB OAuth client ID

2. Deploy the static files to your web server

3. Make sure your Cloudflare Worker has your website domain in `VALID_ORIGINS`

## TODO

- [ ] Create app.html with transaction form
- [ ] Create login.html for OAuth callback
- [ ] Port JavaScript components (amount, autocomplete, flag)
- [ ] Add CSS for app components
- [ ] Test OAuth flow
- [ ] Test transaction submission

