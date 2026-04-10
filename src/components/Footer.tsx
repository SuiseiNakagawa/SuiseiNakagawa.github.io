export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-10 px-6 md:px-10 border-t border-[#E0DDD6] mt-4">
      <div className="max-w-container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="t-label">
          &copy; {year}{' '}
          <span className="font-medium text-[#3A3A3A]">Suisei Nakagawa</span>
        </p>
        <p className="t-label text-center sm:text-right">
          Last updated April {year}&ensp;&middot;&ensp;Built with{' '}
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
