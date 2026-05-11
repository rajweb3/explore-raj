import { parseResume } from "@/lib/parser";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Systems from "@/components/Systems";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";
import TerminalWindow from "@/components/TerminalWindow";

export default function Home() {
  const resume = parseResume();

  return (
    <TerminalWindow>
      <Navbar />
      <main>
        <Hero
          name={resume.name}
          title={resume.title}
          tagline={resume.tagline}
          location={resume.location}
          email={resume.email}
          linkedin={resume.linkedin}
          about={resume.about}
        />
        <Systems skills={resume.skills} />
        <Experience entries={resume.experience} />
        <Achievements items={resume.achievements} />
      </main>
      <Footer />
    </TerminalWindow>
  );
}
