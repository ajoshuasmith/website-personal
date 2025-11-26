import './App.css'

function App() {
  return (
    <div className="app" role="main">
      <header className="header">
        <h1>Hi, I'm Joshua. I tinker and solve things</h1>
      </header>

      <nav className="nav">
        <a 
          href="https://infosec.exchange/@joshuasmith" 
          target="_blank" 
          rel="me noopener noreferrer"
          aria-label="Mastodon"
          className="nav-icon"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M23.264 6.457c-.736.326-1.527.547-2.357.646.847-.508 1.498-1.312 1.804-2.27-.793.47-1.67.812-2.606.996-.747-.797-1.812-1.293-2.993-1.293-2.266 0-4.103 1.837-4.103 4.103 0 .322.036.635.107.935-3.408-.171-6.431-1.803-8.461-4.28-.353.606-.556 1.312-.556 2.064 0 1.424.724 2.679 1.825 3.415-.673-.021-1.306-.206-1.861-.514v.052c0 1.988 1.415 3.647 3.293 4.023-.344.094-.707.144-1.081.144-.265 0-.522-.026-.773-.074.522 1.63 2.038 2.816 3.833 2.848-1.404 1.1-3.174 1.756-5.093 1.756-.331 0-.657-.019-.979-.057 1.816 1.164 3.976 1.843 6.299 1.843 7.559 0 11.691-6.266 11.691-11.691 0-.178-.004-.355-.012-.531.803-.58 1.499-1.304 2.049-2.128z"/>
          </svg>
        </a>
        <a 
          href="https://blog.ajoshuasmith.com" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Blog"
          className="nav-icon"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
        </a>
        <a 
          href="mailto:inquiry@ajoshuasmith.com" 
          rel="noopener noreferrer"
          aria-label="Email"
          className="nav-icon"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </a>
        <a 
          href="https://github.com/ajoshuasmith" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="nav-icon"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
        </a>
      </nav>

      <footer className="footer">
        <p>Made with ❤️ and ☕ by Joshua.</p>
      </footer>
    </div>
  )
}

export default App
