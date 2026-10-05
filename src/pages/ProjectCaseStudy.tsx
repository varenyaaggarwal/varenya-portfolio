import {
    Link,
    Navigate,
    useParams,
  } from 'react-router-dom'
  
  import {
    getProject,
  } from '../data/projects'
  
  function ProjectCaseStudy() {
    const { slug } = useParams()
  
    const project =
      slug
        ? getProject(slug)
        : undefined
  
    if (!project) {
      return (
        <Navigate
          to="/"
          replace
        />
      )
    }
  
    return (
      <main className="case-study">
        <section className="case-hero">
          <div className="case-topline">
            <Link
              to="/"
              data-cursor="BACK"
            >
              ← Back home
            </Link>
  
            <span>
              {project.number}
            </span>
          </div>
  
          <p className="section-label">
            {project.category}
          </p>
  
          <h1>
            {project.title}
          </h1>
  
          <p className="case-intro">
            {project.shortDescription}
          </p>
  
          <div className="case-tech">
            {project.tech.map(
              (tech) => (
                <span key={tech}>
                  {tech}
                </span>
              )
            )}
          </div>
        </section>
  
        <section className="case-visual">
          <div>
            {project.visualText}
          </div>
        </section>
  
        <section className="case-content">
          <div className="case-row">
            <span>01 / Overview</span>
  
            <div>
              <h2>
                Understanding the project
              </h2>
  
              <p>
                {project.overview}
              </p>
            </div>
          </div>
  
          <div className="case-row">
            <span>02 / Challenge</span>
  
            <div>
              <h2>
                The problem
              </h2>
  
              <p>
                {project.challenge}
              </p>
            </div>
          </div>
  
          <div className="case-row">
            <span>03 / Approach</span>
  
            <div>
              <h2>
                How I approached it
              </h2>
  
              <p>
                {project.approach}
              </p>
            </div>
          </div>
  
          <div className="case-row">
            <span>04 / Result</span>
  
            <div>
              <h2>
                What came out of it
              </h2>
  
              <p>
                {project.result}
              </p>
            </div>
          </div>
        </section>
  
        <section className="case-next">
          <p>
            NEXT
          </p>
  
          <Link
            to="/#projects"
            data-cursor="BACK"
          >
            Explore more work ↗
          </Link>
        </section>
      </main>
    )
  }
  
  export default ProjectCaseStudy