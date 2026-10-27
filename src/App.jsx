import ScrollProgress from './components/ScrollProgress'
import TechMarquee from './components/TechMarquee'
import { useMotionEffects } from './hooks/useMotionEffects'
import MobileDock from './components/MobileDock'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import TechnologySection from './sections/TechnologySection'
import ErpnextExpertiseSection from './sections/ErpnextExpertiseSection'
import ErpModulesSection from './sections/ErpModulesSection'
import ProjectsSection from './sections/ProjectsSection'
import TeamSection from './sections/TeamSection'
import ProcessSection from './sections/ProcessSection'
import WhyUsSection from './sections/WhyUsSection'
import ContactSection from './sections/ContactSection'

export default function App() {
  useMotionEffects()
  return (
    <>
      <ScrollProgress />
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <HeroSection />
        <TechMarquee />
        <AboutSection />
        <ServicesSection />
        <TechnologySection />
        <ErpnextExpertiseSection />
        <ErpModulesSection />
        <ProjectsSection />
        <TeamSection />
        <ProcessSection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileDock />
    </>
  )
}
