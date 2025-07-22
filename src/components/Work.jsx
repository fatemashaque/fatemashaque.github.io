const Work = () => {
  return (
    <section
      id="work"
      className="py-24 px-6 transition-colors duration-300 bg-[rgba(var(--work-bg),1)]"
    >
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Game Developer */}
        <div className="p-8 sm:p-10 rounded-xl shadow-md bg-[rgba(var(--card),0.6)] backdrop-blur-sm text-[color:rgba(var(--text))] transition-colors duration-300">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[color:rgba(var(--accent))]">
            Game Developer
          </h2>
          <p className="text-sm text-[color:rgba(var(--muted-text))] mb-4">
            Carnegie Learning | St. John's, NL, Canada | Apr 2023 – Jun 2025
          </p>
          <ul className="list-disc list-inside space-y-1 text-[color:rgba(var(--muted-text))]">
            <li>Developed 30+ gamified math learning models in Unity and C#, improving engagement and learning outcomes.</li>
            <li>Streamlined large-scale data handling and front-end display logic, reducing level load times by 20%.</li>
            <li>Implemented math-focused simulations to teach complex mathematical concepts through interactive, system-driven gameplay.</li>
            <li>Leveraged AI techniques and data-driven iteration to implement adaptive learning methods, optimizing gameplay to better support diverse learners.</li>
            <li>Mentored 2 junior developers, conducting code reviews and coaching on topics including software architecture and modular design.</li>
            <li>Partnered with artists, designers, and educators to ensure gameplay was engaging and aligned with instructional design guidelines.</li>
          </ul>
        </div>

        {/* Junior Game Developer */}
        <div className="p-8 sm:p-10 rounded-xl shadow-md bg-[rgba(var(--card),0.6)] backdrop-blur-sm text-[color:rgba(var(--text))] transition-colors duration-300">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[color:rgba(var(--accent))]">
            Junior Game Developer
          </h2>
          <p className="text-sm text-[color:rgba(var(--muted-text))] mb-4">
            Carnegie Learning | St. John's, NL, Canada | May 2022 – Apr 2023
          </p>
          <ul className="list-disc list-inside space-y-1 text-[color:rgba(var(--muted-text))]">
            <li>Developed comprehensive unit tests to validate core mechanics and maintain code reliability, reducing post-launch bugs by 20%.</li>
            <li>Optimized rendering, animation pipelines, and UI responsiveness for high-performance front-end delivery.</li>
            <li>Prototyped and refined 2D/3D learning mechanics with senior developers, contributing to 6 successful feature launches.</li>
            <li>Developed gameplay systems involving object interactions and movement physics, contributing to realistic, simulation-style player experiences.</li>
            <li>Contributed to team code reviews and promoted clean software architecture practices in Unity’s ECS and multi-threaded development workflows.</li>
          </ul>
        </div>

        {/* Intern */}
        <div className="p-8 sm:p-10 rounded-xl shadow-md bg-[rgba(var(--card),0.6)] backdrop-blur-sm text-[color:rgba(var(--text))] transition-colors duration-300">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[color:rgba(var(--accent))]">
            Game Development Intern
          </h2>
          <p className="text-sm text-[color:rgba(var(--muted-text))] mb-4">
            Carnegie Learning | St. John's, NL, Canada | Jan 2021 – Apr 2022
          </p>
          <ul className="list-disc list-inside space-y-1 text-[color:rgba(var(--muted-text))]">
            <li>Recognized by senior developers for rapid onboarding, adaptability, and collaborative spirit.</li>
            <li>Eliminated high-impact bugs, resulting in a 15% boost in game stability and smoother user experience.</li>
            <li>Identified and addressed accessibility gaps, delivering features that enhanced usability for diverse learners.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Work;
