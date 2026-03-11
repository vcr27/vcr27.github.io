import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import DevpostSection from './components/DevpostSection';
import ExtrasSection from './components/ExtrasSection';
import SkillsSection from './components/SkillsSection';
import RecruiterSnapshotSection from './components/RecruiterSnapshotSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import useRevealOnScroll from './hooks/useRevealOnScroll';

function App() {
  useRevealOnScroll();

  return (
    <>
      <Navbar />
      <main id="top">
        <HeroSection />
        <RecruiterSnapshotSection />
        <ProjectsSection />
        <ExperienceSection />
        <DevpostSection />
        <SkillsSection />
        <ExtrasSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
