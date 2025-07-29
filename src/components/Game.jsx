const Game = () => {
  const allGames = [
    {
      title: "Mathstoria",
      image: "/mathstoria.jpeg",
      description:
        "An interactive game designed to teach math through quests and story progression. I worked on system-driven levels and adaptive gameplay for learners.",
    },
    {
      title: "Mathstoria – Gamified Math Models",
      image: "/mathstoria1.jpg",
      description:
        "Helped prototype and implement core mechanics for math-based encounters. Worked on implementing and tuning feedback systems to support learner engagement and retention.",
    },
    {
      title: "Zorbit’s Math Adventure",
      image: "/zorbit.png",
      description:
        "A curriculum-aligned math game blending gameplay with storytelling to support early learners. I contributed to gameplay systems, animations, and level logic.",
    },
    {
      title: "Zorbit’s Math Adventure – Gameplay",
      image: "/zorbit3.jpeg",
      description:
        "Showcases the variety of math mini-games and level structures I helped build. I worked on gameplay logic, UI interactions, and level design features in collaboration with educators.",
    },
  ];

  const GameCard = ({ title, image, description }) => (
    <div className="game-panel rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:scale-[1.05] hover:shadow-xl bg-[rgba(var(--card-bg),1)]">
      <div className="w-full h-60 overflow-hidden flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className={`w-full h-full transition-transform duration-300 hover:scale-105 ${
            title === "Zorbit’s Math Adventure – Gameplay"
              ? "object-contain bg-[rgba(var(--card-alt),0.7)]"
              : "object-cover"
          }`}
        />
      </div>
      <div className="px-4 pb-4 mt-3">
        <h3 className="text-lg font-bold mb-1 text-[color:rgba(var(--text))]">{title}</h3>
        <p className="text-xs text-[color:rgba(var(--muted-text))]">{description}</p>
      </div>
    </div>
  );

  return (
    <section
      id="games"
      className="py-24 px-4 sm:px-6 transition-colors duration-300 bg-[rgba(var(--projects-bg),1)]"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-[color:rgba(var(--accent))] drop-shadow-md">
          Games I Worked On
        </h2>

        {/* Display all game cards equally */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {allGames.map((game, idx) => (
            <GameCard
              key={idx}
              title={game.title}
              image={game.image}
              description={game.description}
            />
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-center text-[color:rgba(var(--muted-text))] mt-16">
          © Carnegie Learning — All visuals and game content are proprietary and used with permission or under fair use.
        </p>
      </div>
    </section>
  );
};

export default Game;
