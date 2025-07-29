import { Building, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "SHIBLI Electronics Ltd.",
      company: "Dubai, UAE",
      location: "Dubai, UAE",
      period: "Sept 2023 - Present",
      type: "Full-time",
      progression: [
        {
          title: "Senior Firmware Design Engineer",
          period: "June 2024 - Present",
          highlights: [
            "Spearheaded development of thermal sights through structured planning, delivering on time and to spec.",
            "Developed real-time firmware for multi-sensor target localization, achieving sub-25 metre CEP over 2km.",
            "Designed and deployed image processing algorithms (ACC, gamma, NUC, edge detection) in thermal products.",
            "Validated FPGA logic for image and signal processing on MCU testbeds, enabling early issue detection.",
            "Led firmware development with MISRA-compliant design practices, achieving military-grade system reliability."
          ]
        },
        {
          title: "Associate Electronics Design",
          period: "Sept 2023 - May 2024",
          highlights: [
            "Established Git workflows and maintainable repositories, preventing version conflicts and improving traceability.",
            "Upgraded thermal devices with 12um sensors and new features, enhancing performance and boosting sales.",
            "Developed C# and Python tools that automated workflows, reducing debugging and testing time by 30%."
          ]
        }
      ]
    },
    {
      title: "Embedded Software Engineer",
      company: "Oeceltech GmbH, Germany",
      location: "Remote from Home Office",
      period: "June 2023 - Sept 2023",
      type: "Full-time",
      highlights: [
        "Ported legacy C code for deployment on a real-time embedded system monitoring driver fatigue and impairment.",
        "Developed a C# WPF application to visualize, log, and analyze driver behavior, reducing accidents by 12%.",
        "Built an AWS-connected actuator controller for industrial use, helping expand the startup's product line."
      ]
    },
    {
      title: "Embedded Research Assistant",
      company: "Communication Systems and Networks Lab, NUST",
      location: "Islamabad, PK",
      period: "May 2022 - Jun 2023",
      type: "Research Position",
      highlights: [
        "Designed a scalable swarming and ad hoc mesh network for dynamic UAV formation switching and autonomy.",
        "Performed extensive SITL and HITL simulations in ROS 2 and Gazebo prior to real-world deployment.",
        "Architected and implemented system-level failsafes to ensure reliability and regulatory compliance.",
        "Automated mesh setup and flight routines using Bash, which reduced takeoff time to under 2 minutes."
      ]
    },
    {
      title: "Hardware Design Intern",
      company: "Integrated Circuit Design, NUST",
      location: "Islamabad, PK",
      period: "Jun 2021 - May 2022",
      type: "Internship",
      highlights: [
        "Designed a RISC-style 32-bit softcore processor, completing synthesis, netlisting, and simulation verification.",
        "Contributed to the silicon bring-up of NUST's first tape-out by developing low-level firmware drivers.",
        "Integrated Verilog IPs on Altera DE1-SoC FPGA to simulate VGA signal conversion for HDMI display.",
        "Developed a PID control library for ARM Cortex-M MCUs to enable autonomous UAV antenna tracking."
      ]
    },
    {
      title: "ML Intern",
      company: "IP Tech Lab (Cognet), NUST",
      location: "Islamabad, PK",
      period: "Feb 2020 - Feb 2021",
      type: "Internship",
      highlights: [
        "Integrated GPS and smart locks with Ethereum using blockchain techniques for tamper-proof freight tracking.",
        "Researched machine learning and GAN-based applications in generative art and embedded system interfaces.",
        "Redesigned and led hands-on embedded systems labs for 200+ CS-114 students, focusing real-world applications."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-accent/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven track record of delivering robust embedded solutions across diverse industries,
            from automotive safety systems to cutting-edge UAV technology.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover-lift">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-highlight font-medium mb-2">
                    <Building size={16} />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                    <span className="text-xs bg-accent px-2 py-1 rounded-full">{exp.type}</span>
                  </div>
                </div>
              </div>

              {exp.progression ? (
                <div className="space-y-6">
                  {exp.progression.map((role, roleIndex) => (
                    <div key={roleIndex} className="border-l-2 border-highlight/30 pl-6">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-medium text-foreground">{role.title}</h4>
                        <span className="text-sm text-muted-foreground bg-accent/50 px-3 py-1 rounded-full">
                          {role.period}
                        </span>
                      </div>
                      <ul className="space-y-3">
                        {role.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-highlight rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-4">Key Achievements</h4>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-highlight rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;