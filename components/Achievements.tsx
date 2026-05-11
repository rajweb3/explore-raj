interface AchievementsProps {
  items: string[];
}

export default function Achievements({ items }: AchievementsProps) {
  return (
    <section id="awards" className="py-12 border-t border-border">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Agent task header */}
        <div className="font-mono text-xs mb-2">
          <span className="text-accent dark:text-keyword">&#9656; Task</span>
          <span className="text-secondary dark:text-comment"> Compile achievements</span>
        </div>
        <div className="font-mono text-xs mb-1 flex items-center gap-2">
          <span className="text-[#27C93F]">&#10003;</span>
          <span className="text-secondary dark:text-comment">Read</span>
          <span className="text-primary dark:text-function">achievements.log</span>
          <span className="text-secondary dark:text-comment">— {items.length} entries</span>
        </div>

        <div className="mt-6 space-y-4 pl-6">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="font-mono text-xs text-accent shrink-0 mt-0.5">
                [{String(i + 1).padStart(2, "0")}]
              </span>
              <p className="text-primary dark:text-string text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
