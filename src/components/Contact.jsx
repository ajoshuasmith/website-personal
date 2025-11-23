function Contact() {
  return (
    <article className="window-section">
      <p>Let’s connect if you’re looking for a systems leader who can steady delivery while modernizing the stack.</p>
      <ul className="contact-list">
        <li>
          <span>Email:</span>{' '}
          <a href="mailto:inquiry@ajoshuasmith.com" rel="noopener noreferrer">
            inquiry@ajoshuasmith.com
          </a>
        </li>
        <li>
          <span>Blog:</span>{' '}
          <a href="https://blog.ajoshuasmith.com" target="_blank" rel="noopener noreferrer">
            blog.ajoshuasmith.com
          </a>
        </li>
        <li>
          <span>GitHub:</span>{' '}
          <a href="https://github.com/ajoshuasmith" target="_blank" rel="noopener noreferrer">
            github.com/ajoshuasmith
          </a>
        </li>
      </ul>
    </article>
  )
}

export default Contact

