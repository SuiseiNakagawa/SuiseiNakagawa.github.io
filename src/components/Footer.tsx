export default function Footer() {
  const now = new Date()
  const year = now.getFullYear()
  // Static export: this is evaluated at build time, i.e. the date of the last deploy.
  const updated = now.toLocaleString('en-US', { month: 'long', year: 'numeric' })

  return (
    <footer className="py-10 px-6 md:px-10 border-t border-[#E0DDD6] mt-4">
      <div className="max-w-container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="t-label">
          &copy; {year}{' '}
          <span className="font-medium text-[#3A3A3A]">Suisei Nakagawa</span>
        </p>
        <p className="t-label text-center sm:text-right">
          Last updated {updated}&ensp;&middot;&ensp;Built with{' '}
          <a
            href="https://nextjs.org"
            className="link-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>
          &ensp;&middot;&ensp;Deployed on{' '}
          <a
            href="https://pages.github.com"
            className="link-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Pages
          </a>
        </p>
      </div>
    </footer>
  )
}
