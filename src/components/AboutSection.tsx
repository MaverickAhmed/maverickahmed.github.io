import { Calendar, MapPin, Code, Cpu, Zap, Settings, LucideChartSpline } from 'lucide-react';
import TechStackCarousel from '@/components/TechStackCarousel';

const AboutSection = () => {
  const milestones = [
    {
      year: "2024",
      title: "Senior Firmware Design Engineer",
      company: "SHIBLI Electronics Ltd.",
      description: "Leading thermal sight development and real-time multi-sensor target localization"
    },
    {
      year: "2023",
      title: "Associate Electronics Design",
      company: "SHIBLI Electronics Ltd.",
      description: "Thermal device upgrades and firmware development tools"
    },
    {
      year: "2023",
      title: "Embedded Software Engineer",
      company: "Oxeltech GmbH, Germany",
      description: "Real-time embedded systems for driver monitoring and industrial automation"
    },
    {
      year: "2023",
      title: "B.S. Electrical Engineering",
      company: "National University of Sciences and Technology (NUST)",
      description: "Graduated with specialization in embedded systems and hardware design"
    },
    {
      year: "2022",
      title: "Embedded Research Assistant",
      company: "NUST - Communication Systems Lab",
      description: "UAV swarm networks and autonomous flight control systems"
    },
    {
      year: "2021",
      title: "Hardware Design Intern",
      company: "NUST - Integrated Circuit Design",
      description: "RISC processor design, silicon bring-up, and FPGA development"
    }
  ];

  const skills = [
    { icon: Settings, label: "Architecture Design", description: "System design, hardware/software integration" },
    { icon: Cpu, label: "Real-time Systems", description: "RTOS, scheduling, interrupt handling" },
    { icon: Code, label: "Embedded C/C++", description: "MISRA-C compliant, optimized code" },
    { icon: Zap, label: "Hardware Integration", description: "SPI, I2C, UART, GPIO, ADC/DAC" },
    { icon: LucideChartSpline, label: "Algorithms", description: "AGC control, non-uniformity correction, gamma correction" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I combine hands-on embedded engineering with a systems-thinking mindset. I lead with clarity, debug with persistence, and keep the bigger picture in view.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Professional Summary */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="text-highlight" size={20} />
                Professional Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 4 years of experience in embedded systems development, I specialize in 
                real-time firmware for UAV control systems, IoT devices, and optoelectronics. 
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise spans from low-level hardware abstraction to high-level system architecture, 
                with a strong focus on MISRA-C compliance, RTOS implementation, and sensor fusion algorithms.
              </p>
            </div>

            {/* Core Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Core Expertise</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="group flex items-start gap-4 p-4 rounded-lg bg-accent/30 hover:bg-accent/50 transition-all duration-300 cursor-pointer hover-lift">
                    <skill.icon className="text-highlight mt-1 flex-shrink-0 transition-transform group-hover:scale-110" size={20} />
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground group-hover:text-highlight transition-colors">{skill.label}</h4>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Calendar className="text-highlight" size={20} />
              Career Timeline
            </h3>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-8 pb-8 last:pb-0">
                  {/* Timeline line */}
                  <div className="absolute left-3 top-0 w-0.5 h-full bg-border last:hidden" />
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-6 h-6 bg-highlight rounded-full border-4 border-background shadow-[var(--shadow-medium)]" />
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-highlight bg-accent px-2 py-1 rounded">
                        {milestone.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">{milestone.title}</h4>
                    <p className="text-sm font-medium text-muted-foreground">{milestone.company}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Carousel */}
        <TechStackCarousel />
      </div>
    </section>
  );
};

export default AboutSection;