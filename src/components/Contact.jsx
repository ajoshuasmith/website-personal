function Contact() {
  return (
    <article className="window-section">
      <p>Let’s connect if you’re looking for a systems leader who can steady delivery while modernizing the stack.</p>
      <ul className="contact-list">
        <li>
          <span>Email:</span>{' '}
          <a href="mailto:joshuasmith@am.ne" rel="noopener noreferrer">
            joshuasmith@am.ne
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
        <li>
          <span>LinkedIn:</span>{' '}
          <a href="https://www.linkedin.com/in/the-joshuasmith/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/the-joshuasmith
          </a>
        </li>
      </ul>
      <small className="contact-note">Employer names intentionally redacted for public portfolio.</small>
    </article>
  )
}

export default Contact

