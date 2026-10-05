import Reveal from './Reveal'

function Contact() {
  return (
    <section
      id="contact"
      className="section contact-section"
    >
      <Reveal>
        <div className="contact-grid">
          <div className="contact-left">
            <p className="section-label">
              05 / Contact
            </p>

            <h2>
              Have an idea?
              <span>
                {' '}
                Let’s build something meaningful.
              </span>
            </h2>

            <p className="contact-description">
              I’m open to internships,
              collaborations, freelance work,
              technical projects and conversations
              around software, cybersecurity, AI and
              entrepreneurship.
            </p>
          </div>

          <div className="contact-right">
            <p className="contact-small">
              Start a conversation
            </p>

            <a
              href="mailto:varenyaaggarwal.work@gmail.com"
              className="contact-email"
              data-cursor="EMAIL"
            >
              varenyaaggarwal.work@gmail.com ↗
            </a>

            <div className="contact-links">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                data-cursor="OPEN"
              >
                LinkedIn ↗
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                data-cursor="CODE"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.instagram.com/varenyaaggarwal/"
                target="_blank"
                rel="noreferrer"
                data-cursor="OPEN"
              >
                Instagram ↗
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                data-cursor="RESUME"
              >
                Resume ↗
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="footer-line" />

      <footer className="footer">
        <p>
          © 2026 Varenya Aggarwal
        </p>

        <p>
          Software Engineering • Sydney
        </p>
      </footer>
    </section>
  )
}

export default Contact