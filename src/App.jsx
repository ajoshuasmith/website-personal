import BrowserWindow from './components/BrowserWindow'
import './App.css'

function App() {
  return (
    <div className="desktop" role="main">
      <div className="desktop__intro" role="complementary">
        <p>Joshua Smith — Director of Technology, service manager & senior systems engineer.</p>
        <p>Helps technology partners steady delivery, document processes, and automate operations.</p>
        <span className="desktop__status">
          Currently focused on service quality, compliance, and remote-first enablement.
        </span>
      </div>

      <BrowserWindow />

      <footer className="taskbar" aria-label="Windows 98 inspired taskbar">
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
