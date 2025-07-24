import { useEffect, useState } from "react";

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/fatemashaque/repos?per_page=100")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(repo => !repo.fork && !repo.archived);
        setRepos(filtered);
      });
  }, []);

  return (
    <section
      id="projects"
      className="py-24 px-6 transition-colors duration-300 bg-[rgba(var(--projects-bg),1)]"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 text-[color:rgba(var(--accent))] drop-shadow-md">
          Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="p-6 rounded-xl shadow-md bg-[rgba(var(--card-alt),0.85)] backdrop-blur-sm transition-colors"
            >
              <h3 className="text-xl font-semibold text-[color:rgba(var(--text))]">
                {repo.name}
              </h3>
              <p className="text-sm mt-2 text-[color:rgba(var(--muted-text))]">
                {repo.description || "No description provided."}
              </p>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-[color:rgba(var(--accent))] hover:underline"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
