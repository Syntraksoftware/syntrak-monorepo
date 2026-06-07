export default function RaycastSubpageHero({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden pb-12 pt-8 md:pb-16 md:pt-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,99,99,0.1),transparent)]" />
      <div className="relative mx-auto max-w-[1200px] px-6 text-center lg:px-8">
        <h1 className="raycast-display mx-auto max-w-[800px] text-balance">{title}</h1>
        <p className="mx-auto mt-5 max-w-[560px] text-lg leading-relaxed text-[#cdcdcd]">
          {description}
        </p>
      </div>
    </section>
  );
}
