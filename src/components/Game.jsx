const Game = () => {
  const zorbitFeatures = [
    {
      title: "Assignments",
      images: ["/zorbit1.png", "/zorbit2.png"],
      description:
        "I contributed to the development of assignment modules, creating flexible lesson structures and dynamic content. Collaborated with designers to support multiple UI flows and ensure a consistent learning experience.",
    },
    {
      title: "Gameplay Demo",
      image: "/zorbit3.jpeg",
      description:
        "Showcases the variety of math mini-games and level structures I helped build. I worked on gameplay logic, UI interactions, and level design features in collaboration with educators.",
    },
  ];

  const mathstoriaFeatures = [
    {
      title: "Gamified Math Models",
      image: "/mathstoria1.jpg",
      description:
        "Helped prototype core mechanics for math-based encounters. Worked on implementing and tuning feedback systems to support learner engagement and retention.",
    },
  ];

  const GameCard = ({ title, image, description }) => (
    <div className="game-panel rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:scale-[1.02] hover:shadow-xl bg-[rgba(var(--card-bg),1)]">
      <div className="p-4 pb-0">
        <div className="w-full h-80 bg-[rgba(var(--card-alt),0.85)] pt-6 pb-6 px-4">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="px-6 pb-6 mt-4">
        <h3 className="text-2xl font-bold mb-2 text-[color:rgba(var(--text))]">{title}</h3>
        <p className="text-sm text-[color:rgba(var(--muted-text))]">{description}</p>
      </div>
    </div>
  );

  const FeatureCard = ({ feature }) => (
    <div className="feature-card rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:scale-[1.01] hover:shadow-lg">
      <div className="flex flex-wrap">
        {feature.images ? (
          feature.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${feature.title} ${i + 1}`}
              className="w-full sm:w-1/2 h-60 object-contain bg-white p-2"
            />
          ))
        ) : (
          <img
            src={feature.image}
            alt={feature.title}
            className="w-full h-60 object-contain bg-white p-2"
          />
        )}
      </div>
      <div className="p-4">
        <h5 className="text-lg font-semibold mb-2 text-[color:rgba(var(--text))]">
          {feature.title}
        </h5>
        <p className="text-sm text-[color:rgba(var(--muted-text))]">{feature.description}</p>
      </div>
    </div>
  );

  return (
    <section
      id="games"
      className="py-24 px-4 sm:px-6 transition-colors duration-300 bg-[rgba(var(--projects-bg),1)]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-[color:rgba(var(--accent))] drop-shadow-md">
          Games I Worked On
        </h2>

        {/* Game Cards Side by Side */}
        <div className="grid sm:grid-cols-2 gap-8 mb-12">
          <GameCard
            title="Zorbit’s Math Adventure"
            image="/zorbit.png"
            description="A curriculum-aligned math game blending gameplay with storytelling to support early learners. I contributed to gameplay systems, animations, and level logic."
          />
          <GameCard
            title="Mathstoria"
            image="/mathstoria.jpeg"
            description="An interactive game designed to teach math through quests and story progression. I worked on system-driven levels and adaptive gameplay for learners."
          />
        </div>

        {/* Features grouped by game */}
        <div className="grid sm:grid-cols-2 gap-12">
          {/* Zorbit Features */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[color:rgba(var(--text))]">Zorbit Features</h4>
            <div className="flex flex-col gap-8">
              {zorbitFeatures.map((feature, idx) => (
                <FeatureCard key={idx} feature={feature} />
              ))}
            </div>
          </div>

          {/* Mathstoria Features */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[color:rgba(var(--text))]">Mathstoria Features</h4>
            <div className="flex flex-col gap-8">
              {mathstoriaFeatures.map((feature, idx) => (
                <FeatureCard key={idx} feature={feature} />
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-xs text-center text-[color:rgba(var(--muted-text))] mt-20">
          © Carnegie Learning — All visuals and game content are proprietary and used with permission or under fair use.
        </p>
      </div>
    </section>
  );
};

export default Game;
