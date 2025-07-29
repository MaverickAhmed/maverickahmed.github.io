import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import InteractiveBackground from '@/components/InteractiveBackground';

const Index = () => {
  const location = useLocation();
  const { restoreScrollPosition } = useScrollPosition();

  useEffect(() => {
    // Restore scroll position when coming back from other pages
    if (location.state?.from) {
      restoreScrollPosition('mainPage');
    }
  }, [location, restoreScrollPosition]);

  return (
    <div className="min-h-screen relative">
      <InteractiveBackground />
      <div className="relative z-10">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <BlogSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
