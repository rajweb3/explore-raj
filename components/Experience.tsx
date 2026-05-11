import { ExperienceEntry } from "@/types/resume";

interface ExperienceProps {
  entries: ExperienceEntry[];
}

export default function Experience({ entries }: ExperienceProps) {
  return (
    <section id="experience" className="py-12 border-t border-border">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Agent task header */}
        <div className="font-mono text-xs mb-2">
          <span className="text-accent dark:text-keyword">&#9656; Task</span>
          <span className="text-secondary dark:text-comment"> Fetch career history</span>
        </div>
        <div className="font-mono text-xs mb-1 flex items-center gap-2">
          <span className="text-[#27C93F]">&#10003;</span>
          <span className="text-secondary dark:text-comment">Grep</span>
          <span className="text-primary dark:text-function">experience/*.yaml</span>
          <span className="text-secondary dark:text-comment">— {entries.length} positions</span>
        </div>

        <div className="mt-6 space-y-10 pl-6">
          {entries.map((entry, i) => (
            <div key={i} className="border-l border-border pl-6">
              <p className="font-mono text-xs tracking-[0.15em] text-secondary dark:text-comment uppercase mb-2">
                {entry.period}
              </p>
              <h3 className="text-lg font-medium text-primary dark:text-function mb-1">
                {entry.title}
              </h3>
              <p className="text-secondary dark:text-type text-sm mb-4">
                {entry.company}
                {entry.location ? ` — ${entry.location}` : ""}
              </p>
              {entry.bullets.length > 0 && (
                <ul className="space-y-2">
                  {entry.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="text-sm text-secondary dark:text-string leading-relaxed pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-accent dark:before:text-accent before:text-xs"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
