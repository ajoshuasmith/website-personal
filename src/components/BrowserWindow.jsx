import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

const toolbarButtons = [
  { label: 'Back', symbol: '◀' },
  { label: 'Forward', symbol: '▶' },
  { label: 'Stop', symbol: '■' },
  { label: 'Refresh', symbol: '↻' },
  { label: 'Home', symbol: '⌂' },
]

const sections = [
  { id: 'about', title: 'About', Component: About },
  { id: 'skills', title: 'Skills & Focus', Component: Skills },
  { id: 'projects', title: 'Recent Projects', Component: Projects },
  { id: 'contact', title: 'Contact', Component: Contact },
]

function BrowserWindow() {
  return (
    <section className="browser-window" aria-label="Joshua Smith portfolio browser">
      <header className="browser-titlebar">
        <span>Joshua Smith — Portfolio</span>
        <div className="browser-titlebar__controls" aria-hidden="true">
          <button type="button" className="browser-control">
            _
          </button>
          <button type="button" className="browser-control">
            □
          </button>
          <button type="button" className="browser-control browser-control--danger">
            ×
          </button>
        </div>
      </header>

      <div className="browser-toolbar">
        <div className="browser-toolbar__buttons" role="group" aria-label="Browser navigation">
          {toolbarButtons.map((btn) => (
            <button key={btn.label} type="button" className="toolbar-button" aria-label={btn.label}>
              <span aria-hidden="true">{btn.symbol}</span>
              {btn.label}
            </button>
          ))}
        </div>
        <label className="browser-address" htmlFor="address-bar">
          Address
          <input id="address-bar" value="https://ajoshuasmith.com" readOnly />
        </label>
      </div>

      <div className="browser-tabs">
        {sections.map((section) => (
          <a key={section.id} href={`#${section.id}`} className="browser-tab">
            {section.title}
          </a>
        ))}
      </div>

      <div className="browser-body">
        {sections.map((section) => {
          const { Component } = section
          return (
            <article key={section.id} id={section.id} className="browser-section">
              <header className="browser-section__header">
                <h2>{section.title}</h2>
              </header>
              <Component />
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default BrowserWindow

