import { useMemo, useState } from 'react'
import Window from './components/Window'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

const windowsConfig = [
  { id: 'about', title: 'About Joshua', Component: About, defaultPosition: { x: 48, y: 120 }, width: 360 },
  { id: 'skills', title: 'Skills & Focus', Component: Skills, defaultPosition: { x: 440, y: 60 }, width: 420 },
  { id: 'projects', title: 'Recent Work', Component: Projects, defaultPosition: { x: 120, y: 380 }, width: 420 },
  { id: 'contact', title: 'Contact', Component: Contact, defaultPosition: { x: 520, y: 350 }, width: 320 },
]

function App() {
  const initialPositions = useMemo(
    () =>
      windowsConfig.reduce((acc, win) => {
        acc[win.id] = { ...win.defaultPosition }
        return acc
      }, {}),
    [],
  )

  const initialZ = useMemo(
    () =>
      windowsConfig.reduce((acc, win, index) => {
        acc[win.id] = index + 1
        return acc
      }, {}),
    [],
  )

  const [positions, setPositions] = useState(initialPositions)
  const [zIndices, setZIndices] = useState(initialZ)

  const bringToFront = (id) => {
    setZIndices((current) => {
      const levels = Object.values(current)
      const maxZ = levels.length ? Math.max(...levels) : 0
      return { ...current, [id]: maxZ + 1 }
    })
  }

  const handleDrag = (id, nextPosition) => {
    setPositions((current) => ({
      ...current,
      [id]: nextPosition,
    }))
  }

  return (
    <div className="desktop" role="main">
      <div className="desktop__intro" role="complementary">
        <p>Joshua Smith — Director of Technology, service manager & senior systems engineer.</p>
        <p>Helps technology partners steady delivery, document processes, and automate operations.</p>
        <span className="desktop__status">
          Currently focused on service quality, compliance, and remote-first enablement.
        </span>
      </div>

      {windowsConfig.map((win) => {
        const { Component } = win
        return (
          <Window
            key={win.id}
            title={win.title}
            position={positions[win.id]}
            onDrag={(newPosition) => handleDrag(win.id, newPosition)}
            onFocus={() => bringToFront(win.id)}
            zIndex={zIndices[win.id]}
            width={win.width}
          >
            <Component />
          </Window>
        )
      })}

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
          <a href="https://www.linkedin.com/in/the-joshuasmith/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <span className="taskbar__clock">Ready</span>
      </footer>
    </div>
  )
}

export default App
