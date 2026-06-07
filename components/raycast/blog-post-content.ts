export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; id: string }
  | { type: "list"; items: string[] }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
    };

export const sampleBlogPostContent: BlogContentBlock[] = [
  {
    type: "paragraph",
    text: "The concept of Rayday is simple. Every Friday, everyone can use the day to work on something that benefits Raycast. From new features, to fixing bugs, drafting documentation or tidying up, it's time for us to take a break from project work. As well as getting creative with our own ideas, it's a great chance to act on feedback from our users and community too.",
  },
  {
    type: "paragraph",
    text: "This isn't something new in the tech world; companies like Google and Atlassian have similar initiatives, often called 'hacking'. But it is something important — coming up with innovative ideas is vital to our success. And every team member should be able to contribute to this. With Raydays, we make entrepreneurial thoughts a core part of our culture.",
  },
  {
    type: "heading",
    id: "how-rayday-works",
    text: "How Rayday works",
  },
  {
    type: "paragraph",
    text: "In the morning, we start a Slack thread with what everyone wants to hack on. During the day, we don't schedule any meetings and there's no obligation to be online. We show what we've done in our team meeting the following Monday.",
  },
  {
    type: "paragraph",
    text: "We learned that it's best to finish projects during one day. Otherwise other things take priority again and it's harder to get that feeling of accomplishment. If something is too big for one Rayday, we either reduce the scope or break the work into chunks for multiple Raydays.",
  },
  {
    type: "image",
    src: "/template/media/blog/rayday-02.png",
    alt: "My Schedule menu bar app, built on a Rayday",
    caption: "My Schedule menu bar app, built on a Rayday",
  },
  {
    type: "paragraph",
    text: "For example, one of our software engineers Sorin, hacked the initial version of the My Schedule menu bar app. It showed the upcoming meeting and clicking on it joined the conference call. Our users really enjoyed this, so he added more functionality over the next few Raydays too.",
  },
  {
    type: "heading",
    id: "what-weve-done-in-raydays-so-far",
    text: "What we've done in Raydays so far",
  },
  {
    type: "paragraph",
    text: "Many of our most used features started unplanned, driven by team members. The beauty of working on something that you use every day is that you get to solve your own problems too.",
  },
  {
    type: "image",
    src: "/template/media/blog/rayday-05.png",
    alt: "Snapping of Raycast window, built on a Rayday",
    caption: "Snapping of Raycast window, built on a Rayday",
  },
  {
    type: "paragraph",
    text: "During the last 6 months, we:",
  },
  {
    type: "list",
    items: [
      "Addressed user feedback like always opening Google services in Chrome",
      "Added new core features like the App Uninstaller",
      "Paid attention to little details like an indicator for running apps or an overly satisfying way to re-center the Raycast window",
      "Wrote Twitter threads",
      "Built various internal extensions such as an admin panel and a feedback management system",
      "Shipped silly things like the confetti cannons or a lightsaber cursor for May 4th",
      "And did a ton more ✨",
    ],
  },
  {
    type: "heading",
    id: "hacking-has-always-been-a-part-of-our-culture",
    text: "Hacking has always been a part of our culture",
  },
  {
    type: "paragraph",
    text: "Since the start of Raycast in 2020, we've hacked on features on the side of our everyday workload. We added Clipboard History on the flight to the Y Combinator W20 batch. Floating Notes, Script Commands and ray.so came out of our first hackathon and Window Management and Window Switcher got built on the side too…the list goes on and on.",
  },
  {
    type: "paragraph",
    text: "Formalising this into Rayday every Friday has helped keep the ritual going when things get busy and makes sure that people have dedicated time for work outside of their usual projects.",
  },
  {
    type: "heading",
    id: "even-with-rayday-we-still-ship-other-features-regularly",
    text: "Even with Rayday, we still ship other features regularly",
  },
  {
    type: "paragraph",
    text: "Though 20% of our time every week seems like a lot to be working on side projects, Rayday hasn't affected our pace of releasing other features at Raycast.",
  },
  {
    type: "paragraph",
    text: "That's because we prioritise focus time with only one entire team meeting each week. The rest of the time we work autonomously, communicate asynchronously and collaborate ad-hoc. This enables everybody to have time for deep work and guarantees that we can still release a big update every two weeks.",
  },
  {
    type: "image",
    src: "/template/media/blog/rayday-03.png",
    alt: "Command to fire a confetti cannon, built on a Rayday",
    caption: "Command to fire a confetti cannon, built on a Rayday",
  },
  {
    type: "paragraph",
    text: "Rayday also comes with challenges. Sometimes urgent work, such as bug fixes or features for the next release, take priority. In this case, involved team members opt out of Rayday. We rely on the discipline of individuals to plan their work accordingly. As we all know, it's hard to estimate software development. We're mindful about not increasing the workload and keep improving our processes to save space for Rayday.",
  },
  {
    type: "paragraph",
    text: "As we grow the team, we'll continue to stay creative and hack every Friday! It's one of the main things people look forward to every week, myself included 😊",
  },
];

export function createPlaceholderContent(title: string, excerpt: string): BlogContentBlock[] {
  return [
    { type: "paragraph", text: excerpt },
    {
      type: "paragraph",
      text: `This is a placeholder article for "${title}". Replace this content with your full post when you're ready to publish.`,
    },
    {
      type: "heading",
      id: "whats-next",
      text: "What's next",
    },
    {
      type: "paragraph",
      text: "We're working on more stories about product updates, engineering craft, and company news. Check back soon for the full write-up.",
    },
  ];
}
