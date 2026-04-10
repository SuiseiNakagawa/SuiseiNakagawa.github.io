import Image from 'next/image'

export default function Education() {
  return (
    <section id="education" className="py-16 px-6 md:px-10 border-t border-[#E0DDD6]">
      <div className="max-w-container mx-auto">

        {/* Section heading */}
        <div className="mb-10 reveal">
          <p className="t-meta text-accent mb-2">Education</p>
          <h2 className="t-section-heading section-heading-accent">Academic Background</h2>
        </div>

        {/* Entry */}
        <div className="reveal">
          <article className="entry-card p-6 md:p-7 flex flex-col sm:flex-row gap-6">

            {/* Logo */}
            <div className="flex-shrink-0 flex sm:flex-col items-start gap-4">
              <Image
                src="/mu-logo.png"
                alt="Minerva University logo"
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
                    Minerva University
                  </h3>
                  <p className="t-small-body mt-1">
                    Bachelor of Science, Data Science and Statistics
                  </p>
                </div>
                <span className="t-label whitespace-nowrap">
                  2023 – 2027 (expected)
                </span>
              </div>

              <div className="flex flex-col gap-1 mt-1">
                <p className="t-label">
                  <span className="font-medium text-[#3A3A3A]">GPA:</span>{' '}
                  3.84 / 4.0
                </p>
                <p className="t-label">
                  <span className="font-medium text-[#3A3A3A]">Relevant coursework:</span>{' '}
                  Machine Learning, Bayesian Statistics, Modeling of Complex Systems, 
                  Linear Algebra, Probability and Statistics
                </p>
              </div>
            </div>

          </article>
        </div>

      </div>
    </section>
  )
}
