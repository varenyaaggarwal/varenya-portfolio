import Reveal from './Reveal'

function About() {
  return (
    <section id="about" className="section about-section">
      <Reveal>
        <div className="about-grid">
          <div className="about-heading">
            <p className="section-label">01 / About</p>

            <h2>
              Building at the intersection of
              <span> software, security and ideas.</span>
            </h2>
          </div>

          <div className="about-content">
            <p className="about-lead">
              I'm Varenya Aggarwal, a Software Engineering student at the
              University of Sydney with interests across software development,
              cybersecurity, AI, networking and entrepreneurship.
            </p>

            <p>
              I enjoy turning ideas into working products, understanding how
              technology behaves under the hood, and building projects that
              solve real problems rather than just existing as coursework.
            </p>

            <p>
              Alongside university, I'm developing my technical portfolio,
              exploring business ideas, and continuously improving how I build,
              communicate and think.
            </p>

            <div className="about-focus">
              <p className="focus-label">
                Currently focused on
              </p>

              <div className="focus-list">
                <span>Full-stack development</span>
                <span>Cybersecurity</span>
                <span>AI & LLMs</span>
                <span>Networking</span>
                <span>Entrepreneurship</span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="about-stats">
        <Reveal delay={0.05}>
          <div className="stat-card">
            <span className="stat-number">01</span>
            <p>Software Engineering degree</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="stat-card">
            <span className="stat-number">05+</span>
            <p>Technical domains explored</p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="stat-card">
            <span className="stat-number">03+</span>
            <p>Portfolio projects</p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="stat-card">
            <span className="stat-number">∞</span>
            <p>Things still to build</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About