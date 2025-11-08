export default function ProblemSolution() {
  const challenges = [
    {
      category: "Instruction",
      problem: "Human instructors are expensive, limited by availability, and provide subjective feedback",
      solution: "AI Coaching Engine: Real-time, objective, personalized instruction based on millions of data points of ideal form",
    },
    {
      category: "Practice",
      problem: "Skiers practice without knowing why they're failing to improve or how to adjust mid-run",
      solution: "Real-Time 3D Visualization: Instant digital twin (avatar) shows exactly what the skier is doing wrong",
    },
    {
      category: "Gear",
      problem: "Existing wearables are bulky, limited in measurement points, or require external cameras",
      solution: "Stealth Sensor Thermals: Comfortable, washable base layers that capture full-body motion data seamlessly",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center text-white">
          Problem & Solution
        </h2>
        <p className="text-center text-[#a1a1aa] mb-12 max-w-2xl mx-auto">
          Syntrak addresses three critical gaps in ski instruction: Accessibility, Objectivity, and Real-Time feedback.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">
                {item.category}
              </h3>
              <div className="mb-4">
                <p className="text-sm font-semibold text-[#ef4444] mb-2">
                  Problem
                </p>
                <p className="text-sm text-[#a1a1aa]">
                  {item.problem}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#22c55e] mb-2">
                  Solution
                </p>
                <p className="text-sm text-[#d1d1d6]">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

