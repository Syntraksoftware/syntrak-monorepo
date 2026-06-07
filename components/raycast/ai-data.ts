export { TEMPLATE_MEDIA as RAYCAST_AI_MEDIA } from "./template-media";

export const aiHeroExtensions = [
  "edge-angle",
  "hip-rotation",
  "com-balance",
  "turn-radius",
  "carving",
  "parallel",
  "moguls",
  "powder",
  "session-review",
  "drill-plan",
  "form-score",
  "audio-cue",
  "3d-playback",
  "progress",
  "biomechanics",
  "sensors",
];

export const aiChatSidebar = {
  pinned: ["Carving Coach", "Edge Angle Expert", "Mogul Technique"],
  today: [
    {
      title: "Review my last run on the blue run",
      preview:
        "Your edge angle averaged 42° on the steeper sections — 8° more consistent than your previous session…",
    },
    {
      title: "Why am I losing balance on turns?",
      preview:
        "Your centre of mass is shifting too early on initiation. Try delaying your hip rotation by 0.2 seconds…",
    },
    {
      title: "What drills should I do tomorrow?",
      preview:
        "Based on today's data, I recommend three carving drills focusing on outside ski pressure and hip alignment…",
    },
  ],
};

export const aiChatHighlights = [
  {
    title: "Validated accuracy",
    description: "93.4% exercise-classification accuracy",
    image: "presets.8531e451.png",
  },
  {
    title: "Personalised coaching presets",
    description:
      "Create customised coaching presets tailored to your technique, terrain, and skill level.",
    link: "Explore Presets",
    image: "preset-explorer.0d35ff26.png",
  },
  {
    title: "Compare sessions",
    description:
      "Overlay two runs side by side to see exactly where your form improved — or where it slipped.",
    image: "compare.11d1d0f2.png",
  },
  {
    title: "Full session context",
    description:
      "Review every sensor reading, audio cue, and biomechanical data point from your session in one place.",
    image: "attachments.aece0b9d.png",
  },
];

export const aiQuickFeatures = [
  {
    title: "Instant coaching cues",
    description:
      "Audio feedback arrives in under 10 ms — fast enough to correct your form mid-turn.",
    image: "hotkey.48941975.png",
  },
  {
    title: "Offline on the mountain",
    description: "Start a session without signal. The app processes everything on-device once paired.",
    image: "web-search.32ae1b19.png",
  },
  {
    title: "Session presets",
    description: "Switch between coaching modes — carving, moguls, powder — without leaving your run.",
    image: "presets.8531e451.png",
  },
];

export const aiExtensionRows = [
  [
    "Review my edge angles from run 3",
    "Show my centre of mass on the steeps",
    "Compare today vs last week",
    "What was my form score?",
    "Play back my best turn in 3D",
    "Suggest drills for tomorrow",
    "How consistent were my turns?",
  ],
  [
    "Analyse my hip rotation timing",
    "Where did I lose balance?",
    "Track my progress this season",
    "Summarise today's session",
    "Show my carving vs parallel split",
    "What should I focus on next?",
    "Export my session data",
  ],
];

export const aiCommands = [
  {
    title: "Analyse Turn Technique",
    description: "Break down your edge angles, hip rotation, and weight distribution on a specific run.",
    model: "Syntrak Core",
  },
  {
    title: "Compare Two Sessions",
    description: "Overlay biomechanical data from two runs to spot improvements and regressions.",
    model: "Syntrak Core",
  },
  {
    title: "Summarise Today's Session",
    description: "Get a quick overview of distance, form scores, and key coaching moments.",
    model: "Syntrak Core",
  },
  {
    title: "Recommend Training Drills",
    description: "Receive personalised drills based on your weakest biomechanical patterns.",
    model: "Syntrak Pro",
  },
];

export const aiPrivacyItems = [
  {
    title: "On-device by default",
    description:
      "All processing happens on your phone by default. Optional cloud sync is encrypted end-to-end, and you own your data.",
  },
  {
    title: "No model training",
    description:
      "Your biomechanical data and coaching sessions are never used to train third-party AI models.",
  },
  {
    title: "You control your data",
    description: "Delete your data at any time. Export session history whenever you need it.",
  },
  {
    title: "Wash-safe sensors",
    description:
      "Textile electrodes rated at 97.7% reliability after 7+ wash cycles — no special handling needed.",
  },
];
