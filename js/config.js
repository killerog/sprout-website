// Configuration for web app
const CONFIG = {
  APP_NAME: 'Sprout for YNAB',
  WORKER_URL: '[WORKER_URL]', // Replace with your Cloudflare Worker URL
  CLIENT_ID: '[CLIENT_ID]', // Replace with your YNAB OAuth client ID
  YNAB_API_URL: 'https://api.youneedabudget.com/v1/budgets/',
  YNAB_OAUTH_URL: 'https://app.youneedabudget.com/oauth/authorize',
  REDIRECT_URI: window.location.origin + '/login.html'
};

// Make CONFIG globally available
window.CONFIG = CONFIG;

