import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen pt-24 px-6 
        bg-cover bg-no-repeat bg-center transition-colors duration-300"
      style={{ backgroundImage: "var(--hero-bg)" }}
    >
      <div
        className="max-w-4xl w-full flex flex-col sm:flex-row items-center sm:items-start justify-between 
        gap-8 p-10 sm:p-12 rounded-xl shadow-md 
        bg-[rgba(var(--card),0.6)] backdrop-blur-sm transition-colors duration-300"
      >
        {/* Text section */}
        <div className="flex-1 text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-[color:rgba(var(--text))]">
            Hello, I’m{" "}
            <span className="text-[color:rgba(var(--accent))]">Fatema Haque</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl font-medium text-[color:rgba(var(--muted-text))]">
            Innovative and results-driven software developer with 4+ years of experience in game development, full-stack web applications, and performance optimization. Proven ability to deliver immersive, scalable software used by millions. Passionate about building user-centric, high-performance solutions through cross-functional collaboration, data-driven iteration, and technical excellence.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
            <div className="flex gap-4">
              <a
                href="https://github.com/fatemashaque"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[color:rgba(var(--text))] hover:text-purple-500 transition-colors duration-300"
              >
                <FaGithub className="text-3xl sm:text-4xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/fatema-haque-cs/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[color:rgba(var(--text))] hover:text-purple-500 transition-colors duration-300"
              >
                <FaLinkedin className="text-3xl sm:text-4xl" />
              </a>
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              className="group relative inline-flex items-center justify-center px-6 py-3 font-semibold text-white text-base sm:text-lg rounded-xl 
              bg-gradient-to-br from-purple-500 to-purple-700 
              shadow-md hover:shadow-purple-500/50 
              transition-all duration-300 ease-in-out 
              hover:scale-105"
            >
              View Resume
              <span className="absolute inset-0 rounded-xl bg-purple-700 opacity-0 group-hover:opacity-100 group-hover:animate-pulse pointer-events-none z-[-1] transition-opacity duration-300"></span>
            </a>
          </div>
        </div>

        {/* Image section */}
        <div className="w-40 h-40 sm:w-48 sm:h-48 shrink-0 rounded-full overflow-hidden border-4 border-[rgba(var(--border),0.5)]">
          <img
            src="/avatar.png"
            alt="Fatema Haque Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
