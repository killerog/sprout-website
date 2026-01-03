// Shared utilities and header/footer includes

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

// Simple markdown to HTML converter (basic support)
function markdownToHtml(markdown) {
  let html = markdown;
  
  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  
  // Bold
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
  
  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2">$1</a>');
  
  // Line breaks
  html = html.replace(/\n\n/gim, '</p><p>');
  html = '<p>' + html + '</p>';
  
  // Lists (basic)
  html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
  
  return html;
}

// Get header HTML
function getHeader() {
  return `
    <header class="header">
      <div class="header-container container">
        <section>
          <a class="logo" href="/" aria-label="Sprout for YNAB">
            <img src="/assets/images/logo.svg" alt="Sprout for YNAB logo" />
          </a>
        </section>
        <nav class="nav" aria-label="Header links">
          <a href="/faq.html">FAQ</a>
          <div class="download">
            <a class="button outline" href="/#download">Download</a>
          </div>
        </nav>
      </div>
    </header>
  `;
}

// Get footer HTML
function getFooter() {
  const year = new Date().getFullYear();
  return `
    <footer class="footer">
      <div class="container">
        <nav class="links" aria-label="Footer links">
          <div class="links-group">
            <div class="links-heading">Download</div>
            <a class="link" href="[CHROME_URL]">Google Chrome</a>
            <a class="link" href="[FIREFOX_URL]">Firefox</a>
            <a class="link" href="[EDGE_URL]">Microsoft Edge</a>
          </div>
          <div class="links-group">
            <div class="links-heading">Support</div>
            <a class="link" href="/updates.html">Updates</a>
            <a class="link" href="/privacy.html">Privacy Policy</a>
            <a class="link" href="mailto:[SUPPORT_EMAIL]">Contact</a>
          </div>
        </nav>
        <p class="affiliation-text">YNAB is a trademark of You Need A Budget LLC. Sprout for YNAB is not affiliated with YNAB.</p>
        <p class="copyright-text">&copy; 2021-${year}.</p>
      </div>
    </footer>
  `;
}

// Get banner HTML (if not on shutdown or home page)
function getBanner(currentPath) {
  if (currentPath === '/shutdown.html' || currentPath === '/' || currentPath === '/index.html') {
    return '';
  }
  return `
    <div class="banner container" role="alert">
      <span>Sprout for YNAB will make a restart in 2026.</span>
      <a href="/shutdown.html">Read more</a>
    </div>
  `;
}

