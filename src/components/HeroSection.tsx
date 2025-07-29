import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-circuit.jpg';
import portraitImage from '@/assets/engineer-portrait1.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-hero relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Circuit board background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-accent/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Main Content */}
          <div className="text-center lg:text-left flex-1">
            <div className={`hero-fade-up ${isVisible ? 'animate' : ''}`} style={{ animationDelay: '0.2s' }}>
              <div className="mb-6">
                <p className="text-xl md:text-2xl text-highlight font-bold mb-3 tracking-wide">
                  MUHAMMAD AHMED RAZA
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-highlight to-accent mx-auto lg:mx-0 rounded-full"></div>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
                <span className="bg-gradient-to-r from-foreground via-highlight to-foreground bg-clip-text text-transparent">
                  EMBEDDED
                </span>
                <br />
                <span className="bg-gradient-to-r from-highlight via-accent to-highlight bg-clip-text text-transparent">
                  SYSTEMS
                </span>
                <br />
                <span className="text-highlight font-black text-5xl md:text-7xl lg:text-8xl">
                  ARCHITECT
                </span>
              </h1>
            </div>
            
            <div className={`hero-fade-up ${isVisible ? 'animate' : ''}`} style={{ animationDelay: '0.4s' }}>
              <div className="bg-gradient-to-r from-accent/30 to-highlight/20 p-6 rounded-2xl border border-highlight/30 mb-8">
                <p className="text-xl md:text-2xl font-bold mb-4 text-foreground">
                  🚀 Turning Silicon Into Solutions
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Where <span className="text-highlight font-semibold">real-time reliability</span> meets 
                  <span className="text-highlight font-semibold"> cutting-edge innovation</span>
                </p>
              </div>
            </div>

            <div className={`hero-fade-up ${isVisible ? 'animate' : ''}`} style={{ animationDelay: '0.6s' }}>
              <div className="grid md:grid-cols-3 gap-4 mb-12">
                <div className="text-center p-4 bg-card/50 rounded-xl border border-accent/30">
                  <div className="text-2xl font-bold text-highlight">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-card/50 rounded-xl border border-accent/30">
                  <div className="text-2xl font-bold text-highlight">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="text-center p-4 bg-card/50 rounded-xl border border-accent/30">
                  <div className="text-2xl font-bold text-highlight">24/7</div>
                  <div className="text-sm text-muted-foreground">System Reliability</div>
                </div>
              </div>
            </div>

            <div className={`hero-fade-up ${isVisible ? 'animate' : ''}`} style={{ animationDelay: '0.8s' }}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
                <Button 
                  onClick={scrollToAbout}
                  variant="hero"
                  size="lg"
                  className="text-lg px-8 py-4 bg-gradient-to-r from-highlight to-accent hover:from-highlight/90 hover:to-accent/90 text-white font-bold shadow-[var(--shadow-large)] hover:shadow-[var(--shadow-medium)] transform hover:scale-105 transition-all duration-300"
                >
                  🔥 Explore My Work
                </Button>
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  variant="heroSecondary"
                  size="lg"
                  className="text-lg px-8 py-4 border-2 border-highlight text-highlight hover:bg-highlight hover:text-white font-bold shadow-[var(--shadow-medium)] transform hover:scale-105 transition-all duration-300"
                >
                  💬 Let's Connect
                </Button>
              </div>
            </div>
          </div>

          {/* Professional Portrait */}
          <div className={`hero-fade-up ${isVisible ? 'animate' : ''} lg:flex-shrink-0`} style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              {/* Main portrait container */}
              <div className="relative w-96 h-96 rounded-3xl overflow-hidden border-4 border-gradient-to-r from-highlight to-accent shadow-[var(--shadow-large)] hover-lift bg-gradient-to-br from-highlight/20 to-accent/20">
                <img 
                  src={portraitImage} 
                  alt="Muhammad Ahmed Raza - Embedded Systems Architect"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-highlight to-accent rounded-full animate-pulse shadow-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">⚡</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-accent to-highlight rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.5s' }}></div>
              
              {/* Circuit pattern decoration */}
              <div className="absolute top-4 left-4 w-12 h-12 border-2 border-highlight/30 rounded-lg transform rotate-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-highlight hover:text-accent transition-colors animate-bounce bg-white/10 backdrop-blur-sm rounded-full p-3 border border-highlight/30"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
};

export default HeroSection;