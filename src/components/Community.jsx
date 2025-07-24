const Community = () => {
  return (
    <section
      id="community"
      className="py-24 px-6 transition-colors duration-300 bg-[rgba(var(--work-bg),1)]"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 text-[color:rgba(var(--accent))] drop-shadow-md">
          Community
        </h2>

        <div className="rounded-xl shadow-md overflow-hidden bg-[rgba(var(--card),0.6)] backdrop-blur-sm transition-colors duration-300">
          <a
            href="https://www.youtube.com/watch?v=IsOHnruyxRA&t=641s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/community.png"
              alt="Sparking Innovation Talk"
              className="w-full object-cover"
            />
            <div className="p-6 text-[color:rgba(var(--text))]">
              <h3 className="text-2xl font-semibold mb-2">
                Sparking Innovation: My Journey in Game Development
              </h3>
              <p className="text-sm text-[color:rgba(var(--muted-text))]">
                I was invited by techNL to speak as part of the “Sparking Innovation” series,
                sharing my experience as a Game Developer at Carnegie Learning. In the talk, I
                reflected on my work building Zorbit’s Math Adventure and Mathstoria, while
                encouraging high school students to explore creative careers in tech.
              </p>
              <p className="mt-3 font-medium text-[color:rgba(var(--accent))] hover:underline">
                ▶ Watch from 10:41
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;
