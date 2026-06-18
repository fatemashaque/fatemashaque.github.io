const Work = () => {
  return (
    <section
      id="work"
      className="py-24 px-6 transition-colors duration-300 bg-[rgba(var(--work-bg),1)]"
    >
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Section Header */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 text-[color:rgba(var(--accent))] drop-shadow-md">
          Work Experience
        </h2>

        {/* Software Developer - Virtual Marine */}
        <div className="p-8 sm:p-10 rounded-xl shadow-md bg-[rgba(var(--card),0.6)] backdrop-blur-sm text-[color:rgba(var(--text))] transition-colors duration-300">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[color:rgba(var(--accent))]">
            Software Developer
          </h2>
          <p className="text-sm text-[color:rgba(var(--muted-text))] mb-4">
            Virtual Marine | Paradise, NL, Canada | Aug 2025 – Present
          </p>
          <ul className="list-disc list-inside space-y-1 text-[color:rgba(var(--muted-text))]">
            <li>Developed software using C++, C#, and Unity for marine training simulation systems, with a focus on large-vessel bridge simulation, embedded navigation, sensor models, and radar systems.</li>
            <li>Led development of a proprietary radar DLL, integrating hardware interfaces, distributed communication, radar and sensor protocol handling, TCP control connections, and UDP ASTERIX CAT-240 raw video output.</li>
            <li>Contributed to the mathematical and physics-based modelling of 5 marine vessels, improving hydrodynamic model accuracy by approximately 20%.</li>
            <li>Applied numerical methods to solve real-time physics simulation problems related to vessel behaviour and model validation.</li>
            <li>Implemented protocol support for marine sensor models, including NMEA 0183 messaging for AIS simulation.</li>
            <li>Developed automation scripts to streamline software installation and networking setup, reducing commercial delivery time by approximately 30%.</li>
            <li>Configured and analyzed data flow and communication between multiple servers using Wireshark, supporting real-time communication across distributed systems.</li>
            <li>Produced navigational chart data and high-resolution radar imagery for multiple global simulation environments using Global Mapper, GIMP, and ENCX SDK.</li>
            <li>Validated radar and sensor simulation workflows by investigating message-level communication, network traffic, configuration issues, and expected system behaviour.</li>
            <li>Collaborated with engineers and subject matter experts to translate vessel navigation, radar, and sensor requirements into practical software implementations.</li>
          </ul>
        </div>

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
            <li>Streamlined content pipeline from Google Sheets, reducing level load times by 20%.</li>
            <li>Implemented math-focused simulations to teach complex mathematical concepts through interactive, system-driven gameplay.</li>
            <li>Leveraged AI techniques and data-driven iteration to implement adaptive learning methods, optimizing gameplay to better support diverse learners.</li>
            <li>Contributed to team code reviews and promoted clean software architecture practices in Unity's ECS and DOTS development workflows.</li>
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
            <li>Improved runtime performance by profiling rendering bottlenecks and optimizing update cycles.</li>
            <li>Collaborated with senior developers to prototype and refine learning mechanics using 2D/3D geometric manipulation, contributing to 6 successful feature launches.</li>
            <li>Developed gameplay systems involving object interactions and movement physics, contributing to realistic, simulation-style player experiences.</li>
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
            <li>Recognized by senior developers for rapid onboarding, adaptability, and collaborative spirit, praised as a quick learner and positive contributor to both team culture and product quality.</li>
            <li>Eliminated high-impact bugs, resulting in a 15% improvement in game stability and a smoother user experience.</li>
            <li>Identified and addressed accessibility gaps, delivering features that enhanced usability for diverse learners.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Work;
