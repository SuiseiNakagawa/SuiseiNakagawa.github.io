type ExperienceItem = {
  organization: string
  role: string
  dateRange: string
  bullets: string[]
}

const experiences: ExperienceItem[] = [
  {
    organization: 'National Institute of Advanced Industrial Science and Technology (AIST)',
    role: 'Research Intern',
    dateRange: 'June 2026 – Present',
    bullets: [
      'Conducting computer vision research on event cameras, working with asynchronous event-based visual data.',
      'Building a neural network backbone for event-based vision tasks.'
    ]
  },
  {
    organization: 'Universidad de Buenos Aires',
    role: 'Research Assistant',
    dateRange: 'October 2025 – June 2026',
    bullets: [
      'Conducted exploratory data analysis on large-scale categorical datasets to support probabilistic record linkage modeling.',
      'Contributed to a first-author manuscript in preparation, including drafting and communicating methodological results.',
      'Designed and ran simulation studies to validate model behavior and assess robustness under varying assumptions.',
      'Evaluated model performance using interpretable accuracy metrics and likelihood-based diagnostics.'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 md:px-10 border-t border-[#E0DDD6]">
      <div className="max-w-container mx-auto">

        {/* Section heading */}
        <div className="mb-10 reveal">
          <p className="t-meta text-accent mb-2">Experience</p>
          <h2 className="t-section-heading section-heading-accent">Research Experience</h2>
        </div>

        {experiences.map((experience, index) => (
          <div key={`${experience.organization}-${experience.dateRange}`} className={index === 0 ? 'reveal mb-6' : 'reveal'}>
            <article className="entry-card p-6 md:p-7">
              {/* Details */}
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h3 className="font-serif text-[1.15rem] font-semibold text-ink leading-tight">
                      {experience.organization}
                    </h3>
                    <p className="t-small-body mt-0.5 text-accent-light font-medium">
                      {experience.role}
                    </p>
                  </div>
                  <span className="t-label whitespace-nowrap">
                    {experience.dateRange}
                  </span>
                </div>

                {/* Bullet points */}
                <ul className="mt-2 flex flex-col gap-2.5" role="list">
                  {experience.bullets.map((text, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-3">
                      <span className="bullet-dot mt-[0.52em]" aria-hidden="true" />
                      <span className="t-small-body">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </article>
          </div>
        ))}

      </div>
    </section>
  )
}
