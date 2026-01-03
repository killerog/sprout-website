// Main app logic for transaction form
// TODO: Port components from extension (amount, autocomplete, flag)

let currentBudgetId = null;
let currentBudgetName = null;
let appState = {
  accounts: [],
  payees: [],
  categories: [],
  currencyFormat: null,
  transactionAmount: 0,
  transactionAmountInflow: false,
  transactionAccountId: null,
  transactionPayeeId: null,
  transactionCategoryId: null,
  transactionMemo: null,
  transactionDate: null,
  transactionFlag: null,
  transactionCleared: false
};

// Initialize app
(async () => {
  // Check authentication
  if (!API.isAuthenticated()) {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('login-prompt').style.display = 'block';
    return;
  }

  // Load budgets
  try {
    const response = await API.getRequest('budgets');
    if (!response.ok) {
      throw new Error('Failed to load budgets');
    }
    const budgets = await response.json();
    
    if (budgets.length === 0) {
      showError('No budgets found');
      return;
    }
    
    // For now, use first budget (TODO: add budget selector)
    currentBudgetId = budgets[0].id;
    currentBudgetName = budgets[0].name;
    
    // Load budget data
    await loadBudgetData();
    
  } catch (error) {
    console.error('Error:', error);
    showError(error.message);
  }
})();

async function loadBudgetData() {
  try {
    const response = await API.getRequest('budget', currentBudgetId);
    if (!response.ok) {
      throw new Error('Failed to load budget data');
    }
    const data = await response.json();
    
    appState.accounts = data.accounts || [];
    appState.payees = data.payees || [];
    appState.categories = data.categoryGroups || [];
    appState.currencyFormat = data.settings?.currency_format || null;
    
    // Set default date
    const offset = (new Date()).getTimezoneOffset() * 60000;
    appState.transactionDate = (new Date(Date.now() - offset)).toISOString().split('T')[0];
    document.getElementById('date-input').value = appState.transactionDate;
    
    // Show form
    document.getElementById('loading').style.display = 'none';
    document.getElementById('budget-name').textContent = currentBudgetName;
    document.getElementById('transaction-form').style.display = 'block';
    
    // TODO: Initialize components
    // - Amount component
    // - Autocomplete components (account, payee, category)
    // - Flag component
    
  } catch (error) {
    console.error('Error loading budget:', error);
    showError(error.message);
  }
}

function showError(message) {
  document.getElementById('loading').style.display = 'none';
  document.getElementById('error').style.display = 'block';
  document.getElementById('error-message').textContent = message;
}

// TODO: Implement transaction submission
async function submitTransaction() {
  // TODO: Collect form data and submit via API.postRequest
}

