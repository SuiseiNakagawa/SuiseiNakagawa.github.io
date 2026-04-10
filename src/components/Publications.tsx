interface Publication {
  title: string
  authors: string[]
  selfName: string
  venue: string
  year: number
  badge?: string
  link: string
}

const publications: Publication[] = [
  {
    title:
      'Contrastive Learning with Adaptive Temperature for Robust Representation of Time-Series Data',
    authors: ['[Author A]', '[Author B]', '[Your Name]', '[Author D]', '[Author E]'],
    selfName: '[Your Name]',
    venue: 'NeurIPS',
    year: 2024,
    badge: 'Spotlight',
    link: '#',
  },
  {
    title: 'Few-Shot Domain Adaptation via Prototype-Guided Feature Alignment',
    authors: ['[Your Name]', '[Author B]', '[Author C]'],
    selfName: '[Your Name]',
    venue: 'ICML',
    year: 2024,
    link: '#',
  },
  {
    title:
      'Graph Transformer Networks for Molecular Property Prediction Under Distribution Shift',
    authors: ['[Author A]', '[Your Name]', '[Author C]', '[Author D]', '[Author E]'],
    selfName: '[Your Name]',
    venue: 'ICLR',
    year: 2025,
    link: '#',
  },
]

export default function Publications() {
  return (
    <section id="publications" className="py-16 px-6 md:px-10 border-t border-[#E0DDD6]">
      <div className="max-w-container mx-auto">

        {/* Section heading */}
        <div className="mb-10 reveal">
          <p className="t-meta text-accent mb-2">Publications</p>
          <h2 className="t-section-heading section-heading-accent">Selected Publications</h2>
        </div>

        <ol className="flex flex-col gap-0" aria-label="Publications list">
          {publications.map((pub, i) => (
            <li
              key={i}
              className="reveal flex flex-col sm:flex-row gap-5 md:gap-7 py-8 border-b border-[#E0DDD6] last:border-0"
            >
              {/* Left column: number + figure */}
              <div className="flex flex-row sm:flex-col items-start gap-4 sm:gap-3 flex-shrink-0 sm:w-[108px]">
                <span className="pub-number">{String(i + 1).padStart(2, '0')}</span>
                <div
                  className="w-[108px] h-[90px] placeholder-img rounded-sm flex-shrink-0"
                  role="img"
                  aria-label="Paper figure placeholder"
                >
                  <span>Paper Figure</span>
                </div>
              </div>

              {/* Right column: content */}
              <div className="flex flex-col gap-2 flex-1 min-w-0">
                {/* Title */}
                <a
                  href={pub.link}
                  className="font-serif text-[1.075rem] font-semibold text-ink leading-snug hover:text-accent transition-colors duration-150"
                >
                  {pub.title}
                </a>

                {/* Authors */}
                <p className="t-label leading-relaxed">
                  {pub.authors.map((author, ai) => (
                    <span key={ai}>
                      {ai > 0 && <span className="mx-0.5 text-[#C8C3BA]">,</span>}{' '}
                      {author === pub.selfName ? (
                        <strong className="font-semibold text-[#2A2A2A]">{author}</strong>
                      ) : (
                        author
                      )}
                    </span>
                  ))}
                </p>

                {/* Venue + badge */}
                <div className="flex items-center gap-2.5 mt-0.5">
                  <span
                    className="font-sans text-[0.8rem] font-semibold text-accent"
                    aria-label={`Published at ${pub.venue} ${pub.year}`}
                  >
                    {pub.venue} {pub.year}
                  </span>
                  {pub.badge && (
                    <span className="tech-tag" aria-label={pub.badge}>
                      {pub.badge}
                    </span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>

      </div>
    </section>
  )
}
