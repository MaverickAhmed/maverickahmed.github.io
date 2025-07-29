import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import droneImage from '@/assets/drone-project.jpg';
import iotImage from '@/assets/iot-project.jpg';
import realtimeImage from '@/assets/realtime-project.jpg';
import automotiveImage from '@/assets/automotive-project.jpg';

const ProjectsSection = () => {
  const { saveScrollPosition } = useScrollPosition();
  
  const projects = [
    {
      title: "ArenaPlay",
      subtitle: "AVR-based Laser Tag and Fencing Games",
      description: "Designed AVR-based laser tag and fencing games with real-time scoring and LED feedback. Deployed at Dubai Expo as an interactive demo booth.",
      image: iotImage,
      tags: ["AVR", "Real-time", "LED Control", "Interactive Gaming"],
      github: "https://github.com/MaverickAhmed",
      demo: "#",
      status: "Completed",
      slug: "arenaplay"
    },
    {
      title: "UAV Disaster Response",
      subtitle: "Autonomous Drone for Emergency Operations",
      description: "Developed an autonomous drone for locating victims in disaster zones using GPS, RSSI, and 3D mapping. Enabled WiFi hotspot relay, live telemetry, and mesh sharing with rescue teams.",
      image: droneImage,
      tags: ["GPS", "RSSI", "3D Mapping", "WiFi Mesh", "ROS 2", "Gazebo"],
      github: "https://github.com/MaverickAhmed",
      demo: "#",
      status: "Completed",
      slug: "uav-disaster-response"
    },
    {
      title: "GUI Automation for IoT",
      subtitle: "Python-based IoT Device Label Automation",
      description: "Built a Python tool to fetch serial data from IoT devices and trigger networked Brother label printing. Deployed in production to eliminate manual entry and streamline bulk label printing, saving 2 hours of daily labor.",
      image: automotiveImage,
      tags: ["Python", "IoT", "Serial Communication", "Automation"],
      github: "https://github.com/MaverickAhmed",
      demo: "#",
      status: "Production",
      slug: "gui-automation-iot"
    },
    {
      title: "Ansan IoT",
      subtitle: "Smart Home Hub with ESP8266",
      description: "Created a smart home hub connected via ESP8266-based MQTT webserver for WiFi and offline control of home appliances. Integrated with AWS IoT Core and supported fallback operation for reliability.",
      image: iotImage,
      tags: ["ESP8266", "MQTT", "AWS IoT Core", "Smart Home"],
      github: "https://github.com/MaverickAhmed",
      demo: "#",
      status: "Completed",
      slug: "ansan-iot"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production': return 'bg-green-100 text-green-800 border-green-200';
      case 'Active': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Development': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Research': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of embedded systems projects showcasing expertise in real-time firmware, 
            UAV control systems, and IoT solutions across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-card rounded-xl overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-large)] transition-all duration-300 hover-lift"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-1">{project.title}</h3>
                  <p className="text-sm font-medium text-highlight">{project.subtitle}</p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                      title="View Source"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                      title="View Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  
                  <Link 
                    to={`/projects/${project.slug}`}
                    onClick={() => saveScrollPosition('mainPage')}
                    className="flex items-center gap-2 text-sm text-highlight hover:text-highlight/80 transition-colors group"
                  >
                    <span>Read More</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;