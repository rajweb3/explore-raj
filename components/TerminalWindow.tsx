"use client";

import { useTheme } from "./ThemeProvider";

export default function TerminalWindow({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, mounted, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-[#E0E0DE] dark:bg-[#080B10] p-2 md:p-6 lg:p-8">
      <div className="max-w-[1200px] mx-auto rounded-xl overflow-hidden shadow-xl dark:shadow-2xl dark:shadow-black/60 border border-[#B8B8B6] dark:border-[#30363D]">
        {/* Title bar */}
        <div className="flex items-center px-4 py-2.5 bg-[#DDDDD9] dark:bg-[#161B22] border-b border-[#C8C8C6] dark:border-[#30363D] select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
          </div>
          <div className="flex-1 text-center">
            <span className="font-mono text-[11px] text-[#8E8E8C] dark:text-[#484F58] tracking-wide">
              resume-agent — prince-raj
            </span>
          </div>
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="text-[#8E8E8C] dark:text-[#484F58] hover:text-primary transition-colors duration-200"
            >
              {theme === "light" ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </button>
          )}
        </div>
        {/* Agent init bar */}
        <div className="px-6 py-3 bg-[#D3D3D1] dark:bg-[#0D1117] border-b border-[#C8C8C6] dark:border-[#30363D] font-mono text-[11px]">
          <span className="text-accent dark:text-keyword">&#9656; resume-agent</span>
          <span className="text-secondary dark:text-comment"> v1.0.0 — </span>
          <span className="text-secondary dark:text-string">Fetching resume for </span>
          <span className="text-primary dark:text-variable">Prince Raj</span>
          <span className="text-secondary dark:text-comment"> ...</span>
        </div>
        {/* Terminal body */}
        <div className="bg-background">
          {children}
        </div>
      </div>
    </div>
  );
}
