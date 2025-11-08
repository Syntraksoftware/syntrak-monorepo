export default function TechnologyStack() {
  const hardwareTech = [
    { name: "Textile Sensors", items: ["Flexible, conformable sensing", "Multi-point sensor array", "Integrated into garment construction", "Washable and durable"] },
    { name: "SlopeCore Data Hub", items: ["Local data processing", "Bluetooth Low Energy (BLE)", "Detachable and washable design", "Battery-powered operation"] },
  ];

  const softwareTech = [
    { name: "Mobile Application", items: ["React-based frontend", "Custom Bluetooth data protocol", "Real-time 3D rendering engine", "AI/ML processing pipeline"] },
    { name: "AI Coaching Engine", items: ["Proprietary machine learning model", "Trained on expert ski data", "Real-time pose comparison", "Feedback generation system"] },
    { name: "Data Infrastructure", items: ["Local data storage", "Cloud synchronization", "Session analytics", "Progress tracking database"] },
  ];

  return (
    <section id="technology" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center text-white">
          Technology Stack
        </h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-white">
            Hardware Technology
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {hardwareTech.map((tech, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold mb-4 text-white">
                  {tech.name}
                </h4>
                <ul className="space-y-2">
                  {tech.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-[#a1a1aa]">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 text-white">
            Software Technology
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {softwareTech.map((tech, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold mb-4 text-white">
                  {tech.name}
                </h4>
                <ul className="space-y-2">
                  {tech.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-[#a1a1aa] text-sm">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

