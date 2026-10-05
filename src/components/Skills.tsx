import Reveal from './Reveal'

const skillGroups = [
  {
    title: 'Software Development',
    number: '01',
    skills: [
      'Python',
      'JavaScript',
      'TypeScript',
      'React',
      'HTML',
      'CSS',
      'Git',
      'GitHub',
    ],
  },
  {
    title: 'Cybersecurity & Networking',
    number: '02',
    skills: [
      'TCP/IP',
      'Wireshark',
      'ICMP',
      'ARP',
      'Network Analysis',
      'Cybersecurity Fundamentals',
    ],
  },
  {
    title: 'Embedded & Engineering',
    number: '03',
    skills: [
      'Arduino',
      'C++',
      'Sensors',
      'Servo Control',
      'Embedded Systems',
      'Robotics',
    ],
  },
  {
    title: 'Exploring',
    number: '04',
    skills: [
      'AI',
      'LLMs',
      'Cloud',
      'Full-Stack Development',
      'Entrepreneurship',
      'Product Building',
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <Reveal>
        <div className="skills-header">
          <div>
            <p className="section-label">
              03 / Capabilities
            </p>

            <h2>
              Technologies I use
              <span> and continue to explore.</span>
            </h2>
          </div>

          <p className="skills-intro">
            My focus is not just learning tools individually, but understanding
            how software, networks, hardware and emerging technologies connect
            together to create useful systems.
          </p>
        </div>
      </Reveal>

      <div className="skills-matrix">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.title}
            delay={index * 0.07}
          >
            <article className="skill-group">
              <div className="skill-group-top">
                <span className="skill-number">
                  {group.number}
                </span>

                <h3>{group.title}</h3>
              </div>

              <div className="skill-items">
                {group.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Skills