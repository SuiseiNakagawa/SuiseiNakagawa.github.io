import Image from 'next/image'

const bullets = [
  'Conducted exploratory data analysis on large-scale categorical datasets to support probabilistic record linkage modeling.',
  'Contributed to a first-author manuscript in preparation, including drafting and communicating methodological results.',
  'Designed and ran simulation studies to validate model behavior and assess robustness under varying assumptions.',
  'Evaluated model performance using interpretable accuracy metrics and likelihood-based diagnostics.'
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

        {/* Entry */}
        <div className="reveal">
          <article className="entry-card p-6 md:p-7 flex flex-col sm:flex-row gap-6">

            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/uba-logo.png"
                alt="Universidad de Buenos Aires logo"
                width={80}
                height={80}
                className="rounded-sm object-contain"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col gap-2 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                <div>
                  <h3 className="font-serif text-[1.15rem] font-semibold text-ink leading-tight">
                    Universidad de Buenos Aires
                  </h3>
                  <p className="t-small-body mt-0.5 text-accent-light font-medium">
                    Research Assistant
                  </p>
                </div>
                <span className="t-label whitespace-nowrap">
                  October 2025 – Present
                </span>
              </div>

              {/* Bullet points */}
              <ul className="mt-2 flex flex-col gap-2.5" role="list">
                {bullets.map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="bullet-dot mt-[0.52em]" aria-hidden="true" />
                    <span className="t-small-body">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

          </article>
        </div>

      </div>
    </section>
  )
}
