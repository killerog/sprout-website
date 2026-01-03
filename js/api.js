// API functions for web app
// Worker handles authentication via cookies automatically
const API = {
  // Check if user is authenticated (has refresh token cookie)
  isAuthenticated() {
    const cookies = document.cookie.split(';').reduce((acc, cookie) => {
      const [key, value] = cookie.trim().split('=');
      acc[key] = value;
      return acc;
    }, {});
    return !!cookies.refreshToken;
  },

  // Get request to YNAB API via worker
  // Worker handles token refresh automatically via cookies
  async getRequest(endpoint, budgetId = '') {
    let url;
    if (budgetId) {
      url = `${CONFIG.WORKER_URL}/api/v2/budget?id=${budgetId}`;
    } else {
      url = `${CONFIG.WORKER_URL}/api/v2/budgets`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    });
    
    return response;
  },

  // Post request to YNAB API via worker
  // Worker handles token refresh automatically via cookies
  async postRequest(endpoint, budgetId, data) {
    const url = `${CONFIG.WORKER_URL}/api/v2/transaction`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        id: budgetId,
        transaction: data
      })
    });
    
    return response;
  },

  // Initiate OAuth flow
  initiateOAuth() {
    const state = this.generateState();
    localStorage.setItem('oauth_state', state);
    
    const params = new URLSearchParams({
      client_id: CONFIG.CLIENT_ID,
      redirect_uri: CONFIG.REDIRECT_URI,
      response_type: 'code',
      state: state
    });
    
    const authUrl = `${CONFIG.YNAB_OAUTH_URL}?${params.toString()}`;
    window.location.href = authUrl;
  },

  // Generate random state for OAuth
  generateState() {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return array[0].toString(36);
  },

  // Handle OAuth callback
  async handleOAuthCallback(code, state) {
    const savedState = localStorage.getItem('oauth_state');
    if (savedState !== state) {
      throw new Error('Invalid state parameter');
    }
    
    localStorage.removeItem('oauth_state');
    
    // Exchange code for tokens via worker
    const response = await fetch(`${CONFIG.WORKER_URL}/api/v2/oauth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        code: code,
        redirect_uri: CONFIG.REDIRECT_URI
      })
    });
    
    if (!response.ok) {
      throw new Error('OAuth token exchange failed');
    }
    
    // Cookies are set by the worker
    return true;
  }
};

// Make API globally available
window.API = API;
