export type ResearchTeamId =
  | "textile-sensors"
  | "signal-processing"
  | "biomechanics"
  | "on-device-ai"
  | "field-studies";

export type ResearchTeam = {
  id: ResearchTeamId;
  name: string;
  mission: string;
};

export type ResearchSpotlight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image?: string;
};

export type ResearchPublication = {
  slug: string;
  title: string;
  date: string;
  dateTime: string;
  category: ResearchTeamId;
};

export const researchTeams: ResearchTeam[] = [
  {
    id: "textile-sensors",
    name: "Textile Sensors",
    mission:
      "The Textile Sensors team develops wash-safe embedded electrodes that capture muscle activation and motion — rated at 97.7% reliability after 7+ wash cycles.",
  },
  {
    id: "signal-processing",
    name: "Signal Processing",
    mission:
      "Signal Processing fuses 8+ sensor streams into a coherent biomechanical picture in real time, filtering noise from vibration, temperature, and fabric stretch on the mountain.",
  },
  {
    id: "biomechanics",
    name: "Biomechanics",
    mission:
      "Biomechanics maps alpine skiing kinematics — edge angles, centre-of-mass tracking, and turn shape — into coaching primitives validated against peer-reviewed field studies.",
  },
  {
    id: "on-device-ai",
    name: "On-Device AI",
    mission:
      "On-Device AI runs classification and inference locally by default, keeping latency from sensor to audio cue under 10 ms while preserving athlete privacy.",
  },
  {
    id: "field-studies",
    name: "Field Studies",
    mission:
      "Field Studies tests Syntrak on real slopes — from Friday field sessions to resort pilots — so every engineering decision is grounded in how athletes actually ski.",
  },
];

export const researchSpotlights: ResearchSpotlight[] = [
  {
    slug: "introducing-glaze",
    title: "Validated at 93.4% Accuracy",
    excerpt:
      "New peer-reviewed SeamFit study confirms Syntrak's exercise-classification accuracy on the slopes.",
    category: "Biomechanics",
    date: "March 4, 2026",
    image: "hero.e699ed3b.png",
  },
  {
    slug: "a-technical-deep-dive-into-the-new-raycast",
    title: "A Technical Deep Dive Into Syntrak Sensors",
    excerpt:
      "How textile electrodes, on-device processing, and sub-10 ms latency make real-time coaching possible on the mountain.",
    category: "Textile Sensors",
    date: "May 14, 2026",
    image: "quick-ai-mobile.a1c4047f.png",
  },
  {
    slug: "how-raycast-api-extensions-work",
    title: "How Textile Electrodes Work",
    excerpt:
      "The engineering behind wash-safe sensors rated at 97.7% reliability after 7+ cycles.",
    category: "Textile Sensors",
    date: "May 31, 2023",
    image: "translator-graphic.6f2faef3.png",
  },
  {
    slug: "more-ai-models",
    title: "Real-Time Audio Coaching",
    excerpt:
      "Personalised coaching cues now stream to your earbuds in under 10 ms — fast enough to correct mid-turn.",
    category: "On-Device AI",
    date: "April 10, 2024",
    image: "app-window-item0.6d89dad5.jpg",
  },
  {
    slug: "we-hack-every-friday",
    title: "How we test on the slopes",
    excerpt: "Our Friday field-testing ritual — and what we've learned from 8+ embedded sensors.",
    category: "Field Studies",
    date: "June 22, 2022",
    image: "quick-ai-mobile.a1c4047f.png",
  },
];

export const researchPublicationCategories: { id: ResearchTeamId | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "textile-sensors", label: "Textile Sensors" },
  { id: "signal-processing", label: "Signal Processing" },
  { id: "biomechanics", label: "Biomechanics" },
  { id: "on-device-ai", label: "On-Device AI" },
  { id: "field-studies", label: "Field Studies" },
];

export const researchPublications: ResearchPublication[] = [
  {
    slug: "a-technical-deep-dive-into-the-new-raycast",
    title: "A Technical Deep Dive Into Syntrak Sensors",
    date: "May 14, 2026",
    dateTime: "2026-05-14",
    category: "textile-sensors",
  },
  {
    slug: "introducing-glaze",
    title: "Validated at 93.4% Accuracy",
    date: "March 4, 2026",
    dateTime: "2026-03-04",
    category: "biomechanics",
  },
  {
    slug: "more-ai-models",
    title: "Real-Time Audio Coaching",
    date: "April 10, 2024",
    dateTime: "2024-04-10",
    category: "on-device-ai",
  },
  {
    slug: "extension-picks-designers",
    title: "Top Metrics for Intermediate Skiers",
    date: "March 13, 2024",
    dateTime: "2024-03-13",
    category: "biomechanics",
  },
  {
    slug: "how-raycast-api-extensions-work",
    title: "How Textile Electrodes Work",
    date: "May 31, 2023",
    dateTime: "2023-05-31",
    category: "textile-sensors",
  },
  {
    slug: "making-our-api-more-powerful",
    title: "On-Device Processing by Default",
    date: "July 21, 2022",
    dateTime: "2022-07-21",
    category: "on-device-ai",
  },
  {
    slug: "we-hack-every-friday",
    title: "How we test on the slopes",
    date: "June 22, 2022",
    dateTime: "2022-06-22",
    category: "field-studies",
  },
  {
    slug: "hello-world",
    title: "Hello World",
    date: "October 29, 2020",
    dateTime: "2020-10-29",
    category: "field-studies",
  },
];

export function getResearchCategoryLabel(id: ResearchTeamId): string {
  return researchTeams.find((team) => team.id === id)?.name ?? id;
}

export { TEMPLATE_MEDIA as RAYCAST_RESEARCH_MEDIA } from "./template-media";
