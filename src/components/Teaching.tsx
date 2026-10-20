type TeachingItem = {
  institution: string
  role: string
  dateRange: string
  courses?: string
  bullets: string[]
}

const teaching: TeachingItem[] = [
  {
    institution: 'Minerva University',
    role: 'Teaching Assistant',
    dateRange: 'September 2024 – Present',
    courses: 'Formal Analyses (introductory mathematics and programming), Single and Multivariable Calculus, Modeling of Complex Systems, Machine Learning',
    bullets: [
      'Support 150+ students in developing algorithmic and statistical reasoning through one-on-one debugging and structured written feedback.',
      'Revised the machine learning course to incorporate recent developments in AI research.',
      'Designed Python assignments (NumPy, pandas) centered on reproducible data analysis and the interpretation of statistical results.',
      'Built automated test pipelines that check the correctness and robustness of students\u2019 data-processing code.',
    ],
  },
]

export default function Teaching() {
  return (
    <section id="teaching" className="py-16 px-6 md:px-10 border-t border-[#E0DDD6]">
      <div className="max-w-container mx-auto">

        {/* Section heading */}
        <div className="mb-10 reveal">
          <p className="t-meta text-accent mb-2">Teaching</p>
          <h2 className="t-section-heading section-heading-accent">Teaching Experience</h2>
        </div>

        {teaching.map((item, index) => (
          <div key={`${item.institution}-${item.dateRange}`} className={index < teaching.length - 1 ? 'reveal mb-6' : 'reveal'}>
            <article className="entry-card p-6 md:p-7">
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h3 className="font-serif text-[1.15rem] font-semibold text-ink leading-tight">
                      {item.institution}
                    </h3>
                    <p className="t-small-body mt-0.5 text-accent-light font-medium">
                      {item.role}
                    </p>
                  </div>
                  <span className="t-label whitespace-nowrap">
                    {item.dateRange}
                  </span>
                </div>

                {item.courses && (
                  <p className="t-label">
                    <span className="font-medium text-[#3A3A3A]">Courses:</span>{' '}
                    {item.courses}
                  </p>
                )}

                {item.bullets.length > 0 && (
                  <ul className="mt-2 flex flex-col gap-2.5" role="list">
                    {item.bullets.map((text, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3">
                        <span className="bullet-dot mt-[0.52em]" aria-hidden="true" />
                        <span className="t-small-body">{text}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          </div>
        ))}

      </div>
    </section>
  )
}
