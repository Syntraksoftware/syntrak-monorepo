"use client";

import { useState } from "react";
import { researchTeams, type ResearchTeamId } from "./research-data";

export default function RaycastResearchTeams() {
  const [activeTeam, setActiveTeam] = useState<ResearchTeamId>(researchTeams[0].id);

  return (
    <section className="research-teams-section">
      <div className="pro-section-inner">
        <p className="research-teams-label">
          Research teams:
          {researchTeams.map((team, index) => (
            <span key={team.id}>
              {index > 0 ? " " : " "}
              <button
                type="button"
                className={`research-team-pill ${activeTeam === team.id ? "research-team-pill-active" : ""}`}
                onClick={() => setActiveTeam(team.id)}
              >
                {team.name}
              </button>
            </span>
          ))}
        </p>

        <div className="research-teams-grid">
          {researchTeams.map((team) => (
            <article
              key={team.id}
              id={`team-${team.id}`}
              className={`research-team-card ${activeTeam === team.id ? "research-team-card-active" : ""}`}
            >
              <h3>{team.name}</h3>
              <p>{team.mission}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
