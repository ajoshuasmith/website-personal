import { useState, useEffect } from 'react'
import BrowserWindow from './components/BrowserWindow'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : false
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
    document.documentElement.classList.toggle('dark-mode', isDarkMode)
  }, [isDarkMode])

  return (
    <div className={`desktop ${isDarkMode ? 'dark-mode' : ''}`} role="main">
      <header className="taskbar" aria-label="Windows 95 inspired taskbar">
        <button type="button" className="start-button" aria-disabled="true">
          <span className="start-button__flag" aria-hidden="true" />
          Start
        </button>
        <div className="taskbar__links">
          <a href="https://blog.ajoshuasmith.com" target="_blank" rel="noopener noreferrer">
            blog.ajoshuasmith.com
          </a>
          <a href="https://github.com/ajoshuasmith" target="_blank" rel="noopener noreferrer">
            github.com/ajoshuasmith
          </a>
        </div>
        <button
          type="button"
          className="dark-mode-toggle"
          onClick={() => setIsDarkMode(!isDarkMode)}
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? '☀' : '☽'}
        </button>
      </header>

      <BrowserWindow />
    </div>
  )
}

export default App
