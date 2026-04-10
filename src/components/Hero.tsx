import Image from 'next/image'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="pt-28 pb-20 px-6 md:px-10">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col sm:flex-row gap-10 md:gap-14 items-start">

          {/* ── Headshot ─────────────────────────────────── */}
          <div className="flex-shrink-0 rounded-full overflow-hidden w-[176px] h-[176px]">
            <Image
              src="/touched_up_headshot.png"
              alt="Profile photo"
              width={176}
              height={176}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          {/* ── Bio ──────────────────────────────────────── */}
          <div className="flex flex-col gap-4 max-w-[640px]">

            {/* Name + tagline */}
            <div>
              <h1 className="t-display">Suisei Nakagawa</h1>
              <p className="t-label mt-2.5 flex items-center gap-2 flex-wrap">
                <span>Machine Learning and Data Science Student</span>
                <span className="text-[#C8C3BA]">·</span>
                <a href="https://www.minerva.edu/" className="link-accent font-sans font-medium text-sm">
                  Minerva University
                </a>
              </p>
            </div>

            {/* Bio paragraph */}
            <p className="t-body max-w-[580px]">
              I am an undergraduate student at Minerva University working on machine learning and 
              applied statistics. My research interests broadly lie in statistical machine 
              learning and applied data analysis, with a focus on building models for noisy, 
              real-world datasets. 
              I am also working on a project at Universidad de Buenos Aires on 
              <a href="#" className="link-accent"> mispitools</a>, an R package that incorporates 
              non-genetic evidence into missing person searces under a Bayesian framework. 
            </p>

            {/* Social links */}
            <div className="flex flex-wrap items-center gap-5 pt-1">
              <a
                href="https://github.com/SuiseiNakagawa"
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <Github size={15} strokeWidth={1.75} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/suisei-nakagawa/"
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={15} strokeWidth={1.75} />
                <span>LinkedIn</span>
              </a>
              {/* <a
                href="https://scholar.google.com"
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Scholar profile"
              >
                <BookOpen size={15} strokeWidth={1.75} />
                <span>Google Scholar</span>
              </a> */}
              <a href="mailto:suisei.nakagawa@uniminerva.edu" className="icon-link" aria-label="Send email">
                <Mail size={15} strokeWidth={1.75} />
                <span>suisei.nakagawa@uniminerva.edu</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
