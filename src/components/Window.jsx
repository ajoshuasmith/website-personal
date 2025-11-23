const PRIMARY_MOUSE_BUTTON = 0

function Window({ title, children, position, onDrag, onFocus, zIndex, width = 360 }) {
  const handlePointerDown = (event) => {
    if (event.button !== undefined && event.button !== PRIMARY_MOUSE_BUTTON) {
      return
    }
    onFocus()
    const startX = event.clientX
    const startY = event.clientY
    const originX = position.x
    const originY = position.y

    const handlePointerMove = (moveEvent) => {
      moveEvent.preventDefault()
      const nextX = originX + (moveEvent.clientX - startX)
      const nextY = originY + (moveEvent.clientY - startY)
      onDrag({ x: nextX, y: nextY })
    }

    const handlePointerUp = () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
      window.removeEventListener('pointercancel', handlePointerUp)
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp)
    window.addEventListener('pointercancel', handlePointerUp)
  }

  return (
    <section
      className="win95-window"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex,
        width,
      }}
      onPointerDown={onFocus}
    >
      <header className="win95-titlebar" onPointerDown={handlePointerDown}>
        <span className="win95-title">{title}</span>
        <div className="win95-controls" aria-hidden="true">
          <button type="button" className="win95-control" tabIndex={-1}>
            _
          </button>
          <button type="button" className="win95-control" tabIndex={-1}>
            □
          </button>
          <button type="button" className="win95-control win95-control--danger" tabIndex={-1}>
            ×
          </button>
        </div>
      </header>
      <div className="win95-body">{children}</div>
    </section>
  )
}

export default Window

