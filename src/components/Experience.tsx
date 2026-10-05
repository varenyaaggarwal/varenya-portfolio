import Reveal from './Reveal'

const experiences = [
  {
    period: '2026 — Present',
    type: 'Education',
    title: 'Bachelor of Engineering Honours',
    subtitle: 'Software Engineering — University of Sydney',
    description:
      'Building foundations across software engineering, programming, networking, embedded systems and professional engineering practice.',
  },
  {
    period: '2026',
    type: 'Projects',
    title: 'Technical Project Development',
    subtitle: 'Software • Networking • Embedded Systems',
    description:
      'Developing hands-on projects involving Python applications, robotics, network analysis and modern web technologies.',
  },
  {
    period: 'Ongoing',
    type: 'Freelance',
    title: 'Web Development & Digital Projects',
    subtitle: 'Independent Work',
    description:
      'Exploring website development, digital products and client-oriented technology solutions while developing practical product-building skills.',
  },
  {
    period: 'Ongoing',
    type: 'Entrepreneurship',
    title: 'Product & Business Exploration',
    subtitle: 'Ideas • Validation • Execution',
    description:
      'Learning how to identify problems, validate ideas and turn technology-driven concepts into useful products and potential businesses.',
  },
]

function Experience() {
  return (
    <section
      id="experience"
      className="section experience-section"
    >
      <Reveal>
        <div className="experience-header">
          <div>
            <p className="section-label">
              04 / Journey
            </p>

            <h2>
              Learning by building,
              <span> experimenting and shipping.</span>
            </h2>
          </div>

          <p className="experience-intro">
            My journey combines formal engineering education with practical
            projects, independent learning and experimentation across
            technology and entrepreneurship.
          </p>
        </div>
      </Reveal>

      <div className="experience-list">
        {experiences.map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * 0.06}
          >
            <article className="experience-item">
              <div className="experience-index">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="experience-period">
                <span>{item.period}</span>
                <p>{item.type}</p>
              </div>

              <div className="experience-main">
                <h3>{item.title}</h3>

                <h4>{item.subtitle}</h4>

                <p>{item.description}</p>
              </div>

              <div className="experience-arrow">
                ↗
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Experience