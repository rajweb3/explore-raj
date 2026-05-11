"use client";

import { SkillGroup } from "@/types/resume";

interface SystemsProps {
  skills: SkillGroup[];
}

export default function Systems({ skills }: SystemsProps) {
  return (
    <section id="systems" className="py-12 border-t border-border">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Agent task header */}
        <div className="font-mono text-xs mb-2">
          <span className="text-accent dark:text-keyword">&#9656; Task</span>
          <span className="text-secondary dark:text-comment"> Analyze technical skills</span>
        </div>
        <div className="font-mono text-xs mb-1 flex items-center gap-2">
          <span className="text-[#27C93F]">&#10003;</span>
          <span className="text-secondary dark:text-comment">Glob</span>
          <span className="text-primary dark:text-function">skills/**/*</span>
          <span className="text-secondary dark:text-comment">— found {skills.length} categories</span>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 pl-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="group cursor-default"
            >
              <h3 className="font-mono text-sm font-medium text-primary dark:text-function group-hover:text-accent transition-colors duration-200 mb-2">
                {group.category}/
              </h3>
              <p className="text-secondary dark:text-string text-sm leading-relaxed pl-4">
                {group.skills.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
