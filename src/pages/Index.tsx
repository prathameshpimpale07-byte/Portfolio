import Navbar from "@/components/Navbar";
import BackgroundGradient from "@/components/BackgroundGradient";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import EducationSection from "@/sections/EducationSection";
import SkillsSection from "@/sections/SkillsSection";
import ProjectsSection from "@/sections/ProjectsSection";
import CertificatesSection from "@/sections/CertificatesSection";
import ContactSection from "@/sections/ContactSection";

const Index = () => (
  <>
    <CustomCursor />
    <BackgroundGradient />
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
