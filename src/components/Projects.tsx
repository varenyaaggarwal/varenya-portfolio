import {
    useEffect,
    useRef,
  } from 'react'
  
  import {
    Link,
  } from 'react-router-dom'
  
  import gsap from 'gsap'
  
  import Reveal from './Reveal'
  
  import {
    projects,
  } from '../data/projects'
  
  function Projects() {
    const sectionRef =
      useRef<HTMLElement | null>(null)
  
    useEffect(() => {
      const section =
        sectionRef.current
  
      if (!section) return
  
      const visuals =
        section.querySelectorAll<HTMLElement>(
          '.project-visual'
        )
  
      const cleanups:
        Array<() => void> = []
  
      visuals.forEach((visual) => {
        const card =
          visual.closest<HTMLElement>(
            '.project-showcase'
          )
  
        const title =
          card?.querySelector<HTMLElement>(
            '.project-info h3'
          )
  
        const onMove = (
          event: MouseEvent
        ) => {
          const rect =
            visual.getBoundingClientRect()
  
          const x =
            (event.clientX -
              rect.left) /
            rect.width
  
          const y =
            (event.clientY -
              rect.top) /
            rect.height
  
          visual.style.setProperty(
            '--project-x',
            `${x * 100}%`
          )
  
          visual.style.setProperty(
            '--project-y',
            `${y * 100}%`
          )
  
          gsap.to(visual, {
            rotateY:
              (x - 0.5) * 7,
            rotateX:
              (y - 0.5) * -7,
            scale: 1.025,
            transformPerspective: 1100,
            duration: 0.45,
            ease: 'power3.out',
          })
  
          if (title) {
            gsap.to(title, {
              x: 10,
              duration: 0.35,
              ease: 'power3.out',
            })
          }
        }
  
        const onLeave = () => {
          gsap.to(visual, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.8,
            ease: 'elastic.out(1, 0.4)',
          })
  
          if (title) {
            gsap.to(title, {
              x: 0,
              duration: 0.55,
              ease: 'power3.out',
            })
          }
        }
  
        visual.addEventListener(
          'mousemove',
          onMove
        )
  
        visual.addEventListener(
          'mouseleave',
          onLeave
        )
  
        cleanups.push(() => {
          visual.removeEventListener(
            'mousemove',
            onMove
          )
  
          visual.removeEventListener(
            'mouseleave',
            onLeave
          )
        })
      })
  
      return () => {
        cleanups.forEach(
          (cleanup) => cleanup()
        )
      }
    }, [])
  
    return (
      <section
        id="projects"
        ref={sectionRef}
        className="section projects-section"
      >
        <Reveal>
          <div className="projects-header">
            <div>
              <p className="section-label">
                02 / Selected Work
              </p>
  
              <h2>
                Projects that turn
                <span>
                  {' '}
                  ideas into systems.
                </span>
              </h2>
            </div>
  
            <p className="projects-intro">
              Selected work across
              software, embedded systems
              and networking, presented
              as real engineering case
              studies rather than isolated
              code samples.
            </p>
          </div>
        </Reveal>
  
        <div className="projects-showcase">
          {projects.map(
            (project, index) => (
              <Reveal
                key={project.slug}
                delay={index * 0.08}
              >
                <article
                  className={`project-showcase ${
                    index % 2 === 1
                      ? 'project-reverse'
                      : ''
                  }`}
                >
                  <Link
                    to={`/projects/${project.slug}`}
                    className="project-visual"
                    data-cursor="VIEW CASE"
                  >
                    <span className="project-number">
                      {project.number}
                    </span>
  
                    <div className="project-visual-content">
                      <span>
                        {project.visualText}
                      </span>
                    </div>
  
                    <span className="project-case-label">
                      VIEW CASE STUDY ↗
                    </span>
                  </Link>
  
                  <div className="project-info">
                    <p className="project-category">
                      {project.category}
                    </p>
  
                    <h3>
                      {project.title}
                    </h3>
  
                    <p className="project-description">
                      {
                        project.shortDescription
                      }
                    </p>
  
                    <div className="project-tech">
                      {project.tech.map(
                        (item) => (
                          <span key={item}>
                            {item}
                          </span>
                        )
                      )}
                    </div>
  
                    <div className="project-links">
                      <Link
                        to={`/projects/${project.slug}`}
                        data-cursor="VIEW CASE"
                      >
                        Case Study ↗
                      </Link>
  
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          data-cursor="CODE"
                        >
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          )}
        </div>
      </section>
    )
  }
  
  export default Projects