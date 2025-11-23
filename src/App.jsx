import BrowserWindow from './components/BrowserWindow'
import './App.css'

function App() {
  return (
    <div className="desktop" role="main">
      <BrowserWindow />

      <footer className="taskbar" aria-label="Windows 95 inspired taskbar">
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
      </footer>
    </div>
  )
}

export default App
