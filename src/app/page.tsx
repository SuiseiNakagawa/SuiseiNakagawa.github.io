import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Publications from '@/components/Publications'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import ScrollRevealInit from '@/components/ScrollRevealInit'
import { SHOW_PUBLICATIONS } from '@/config/features'

export default function Home() {
  return (
    <>
      <ScrollRevealInit />
      <Nav />
      <main>
        <Hero />
        <Education />
        <Experience />
        {SHOW_PUBLICATIONS && <Publications />}
        <Projects />
      </main>
      <Footer />
    </>
  )
}
