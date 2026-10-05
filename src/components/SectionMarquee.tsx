function SectionMarquee() {
    const text =
      'BUILDING • LEARNING • EXPERIMENTING • SHIPPING • '
  
    return (
      <section
        className="section-marquee"
        aria-hidden="true"
      >
        <div className="marquee-track">
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </div>
      </section>
    )
  }
  
  export default SectionMarquee