export default function Footer() {
  return (
    <footer className="bg-[#AB8A5B] w-auto min-h-[10vh] flex flex-col items-center p-5 gap-2 text-white">
      <small className="text-center">
        Unofficial App for Mesa Rim for finding your next climbing friends!
      </small>
      <small>
        Developed with 🤍 by{' '}
        <a
          href="https://github.com/epicasino"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          Ray Badua (epicasino)
        </a>
      </small>
      <div className="grid xs:grid-rows-2 md:grid-cols-2 md:grid-rows-1 w-full">
        <section className="flex flex-col items-center gap-3">
          <h5 className="underline text-center">Contact Me</h5>
          <article className="flex flex-row gap-4">
            <a
              href="https://raybadua.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              Portfolio
            </a>
            <a
              href="https://www.linkedin.com/in/ray-badua/"
              className="text-white"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </article>
          <a href="mailto:rjbadua@pm.me" className="text-white">
            email: rjbadua@pm.me
          </a>
        </section>
        <section className="flex flex-col items-center gap-3">
          <h5 className="underline">Websites</h5>
          <a href="https://mesarim.com/" className="text-white">
            Official Mesa Rim Homepage
          </a>
          <a
            href="https://github.com/epicasino/mesa-rim-buddy-finder"
            className="text-white"
          >
            Project GitHub
          </a>
        </section>
      </div>
    </footer>
  );
}
