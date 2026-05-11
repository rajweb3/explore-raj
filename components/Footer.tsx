export default function Footer() {
  return (
    <footer className="py-6 border-t border-border">
      <div className="max-w-[1100px] mx-auto px-6 font-mono text-xs">
        <div className="flex items-center gap-2 text-secondary dark:text-comment">
          <span className="text-[#27C93F]">&#10003;</span>
          <span>Resume compiled successfully.</span>
        </div>
        <p className="mt-2 text-secondary dark:text-comment pl-5">
          &copy; {new Date().getFullYear()} Prince Raj. All rights reserved.
        </p>
        <p className="mt-3 text-secondary dark:text-comment">
          <span className="text-accent dark:text-keyword">$</span>{" "}
          <span className="terminal-cursor">_</span>
        </p>
      </div>
    </footer>
  );
}
