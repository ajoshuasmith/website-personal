import './App.css'

function App() {
  return (
    <div className="app" role="main">
      <header className="header">
        <h1>Hi, I'm Joshua</h1>
        <p className="tagline">I tinker and solve things</p>
      </header>

      <nav className="nav">
        <a 
          href="https://infosec.exchange/@joshuasmith" 
          target="_blank" 
          rel="me noopener noreferrer"
          aria-label="Mastodon"
          className="nav-icon"
        >
          <img src="/logos/mastodon.svg" alt="" width="24" height="24" aria-hidden="true" />
        </a>
        <a 
          href="https://blog.ajoshuasmith.com" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Blog"
          className="nav-icon"
        >
          <img src="/logos/ghost.svg" alt="" width="24" height="24" aria-hidden="true" />
        </a>
        <a 
          href="mailto:inquiry@ajoshuasmith.com" 
          rel="noopener noreferrer"
          aria-label="Email"
          className="nav-icon"
        >
          <img src="/logos/fastmail.svg" alt="" width="24" height="24" aria-hidden="true" />
        </a>
        <a 
          href="https://github.com/ajoshuasmith" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="nav-icon"
        >
          <img src="/logos/github.png" alt="" width="24" height="24" aria-hidden="true" />
        </a>
      </nav>

      <footer className="footer">
        <p>Made with ❤️ and 🍺 by Joshua.</p>
      </footer>
    </div>
  )
}

export default App
