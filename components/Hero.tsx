import Image from "next/image";

interface HeroProps {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  linkedin: string;
  about: string;
}

export default function Hero({
  name,
  title,
  tagline,
  location,
  email,
  linkedin,
  about,
}: HeroProps) {
  const aboutParagraphs = about
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section id="about" className="pt-8 pb-12">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Cover Banner */}
        <div className="relative w-full h-[160px] md:h-[240px] rounded-lg overflow-hidden">
          <Image
            src="/cover.jpg"
            alt="Cover"
            fill
            className="object-cover grayscale brightness-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-background)]" />
        </div>

        {/* Profile Photo */}
        <div className="relative -mt-16 md:-mt-20 flex justify-center">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[var(--color-background)] shadow-lg">
            <Image
              src="/profile.jpg"
              alt={name}
              width={160}
              height={160}
              className="object-cover w-full h-full grayscale brightness-90"
              priority
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <h1 className="font-serif text-5xl md:text-7xl text-primary dark:text-variable tracking-tight">
            {name}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-secondary dark:text-string max-w-2xl mx-auto leading-relaxed">
            {tagline}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 font-mono text-xs tracking-[0.15em] text-secondary dark:text-comment uppercase">
          <a
            href={`mailto:${email}`}
            className="hover:text-accent dark:text-link dark:hover:text-link transition-colors duration-200"
          >
            {email.toUpperCase()}
          </a>
          <span className="text-border">|</span>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent dark:text-link dark:hover:text-link transition-colors duration-200"
          >
            LINKEDIN
          </a>
        </div>

        {aboutParagraphs.length > 0 && (
          <div className="mt-12 max-w-3xl mx-auto">
            {/* Agent task header */}
            <div className="font-mono text-xs mb-4">
              <span className="text-accent dark:text-keyword">&#9656; Task</span>
              <span className="text-secondary dark:text-comment"> Read profile summary</span>
            </div>
            <div className="font-mono text-xs mb-1 flex items-center gap-2">
              <span className="text-[#27C93F]">&#10003;</span>
              <span className="text-secondary dark:text-comment">Read</span>
              <span className="text-primary dark:text-function">about.md</span>
            </div>
            <div className="mt-3 space-y-4 pl-6 border-l border-border">
              {aboutParagraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-secondary dark:text-string text-sm leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
