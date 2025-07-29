import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProjectMetrics from '@/components/ProjectMetrics';
import SystemArchitecture from '@/components/SystemArchitecture';
import ProjectTimeline from '@/components/ProjectTimeline';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import droneImage from '@/assets/drone-project.jpg';
import iotImage from '@/assets/iot-project.jpg';
import automotiveImage from '@/assets/automotive-project.jpg';

// Types
interface TimelinePhase {
  phase: string;
  description: string;
  duration: string;
  tasks: string[];
}

interface Project {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  status: string;
  slug: string;
  timeline: TimelinePhase[];
  architecture: {
    components: string[];
    protocols: string[];
    constraints: string[];
  };
  metrics: {
    performance: Array<{ label: string; value: string }>;
    specifications: Array<{ label: string; value: string }>;
  };
  codeSnippets: Array<{
    title: string;
    language: string;
    code: string;
  }>;
}

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Project data (in a real app, this would come from an API or database)
  const projects: Record<string, Project> = {
    arenaplay: {
      title: "ArenaPlay",
      subtitle: "AVR-based Laser Tag and Fencing Games",
      description: "Designed AVR-based laser tag and fencing games with real-time scoring and LED feedback.",
      longDescription: "ArenaPlay represents an innovative approach to interactive gaming through embedded systems. This project involved designing AVR-based laser tag and fencing games with real-time scoring systems and LED feedback mechanisms. The system was successfully deployed at Dubai Expo as an interactive demo booth, showcasing precision timing and reliable performance in a high-traffic environment.",
      image: iotImage,
      tags: ["AVR", "Real-time", "LED Control", "Interactive Gaming"],
      github: "https://github.com/MaverickAhmed",
      demo: "#",
      status: "Completed",
      slug: "arenaplay",
      timeline: [
        {
          phase: "Concept & Design",
          description: "Game mechanics design and hardware architecture",
          duration: "2 weeks",
          tasks: ["Game rule design", "Hardware selection", "System architecture", "Component sourcing"]
        },
        {
          phase: "Development",
          description: "Firmware development and LED control systems",
          duration: "6 weeks",
          tasks: ["AVR firmware development", "LED driver implementation", "Scoring algorithm", "Real-time timing systems"]
        },
        {
          phase: "Testing & Optimization",
          description: "Performance optimization and reliability testing",
          duration: "3 weeks",
          tasks: ["Performance testing", "Reliability validation", "User experience optimization", "System debugging"]
        },
        {
          phase: "Deployment",
          description: "Dubai Expo deployment and live demonstration",
          duration: "1 week",
          tasks: ["Final deployment", "Live testing", "User training", "Performance monitoring"]
        }
      ],
      architecture: {
        components: ["AVR Microcontroller", "LED Matrix", "IR Sensors", "Score Display", "Power Management"],
        protocols: ["SPI", "UART", "GPIO", "PWM"],
        constraints: ["Real-time response <5ms", "LED brightness control", "Power efficiency", "Durability for public use"]
      },
      metrics: {
        performance: [
          { label: "Response Time", value: "<5ms" },
          { label: "LED Count", value: "200+ LEDs" },
          { label: "Operating Hours", value: "12+ hours" },
          { label: "User Sessions", value: "500+ daily" }
        ],
        specifications: [
          { label: "Processor", value: "AVR ATmega328P" },
          { label: "LED Driver", value: "WS2812B addressable" },
          { label: "Sensors", value: "IR proximity sensors" },
          { label: "Power", value: "12V regulated supply" }
        ]
      },
      codeSnippets: [
        {
          title: "Real-time LED Control",
          language: "c",
          code: `void update_led_strip(uint8_t player_score) {
    for(int i = 0; i < LED_COUNT; i++) {
        if(i < player_score) {
            set_pixel_color(i, GREEN);
        } else {
            set_pixel_color(i, RED);
        }
    }
    ws2812_update();
}`
        }
      ]
    },
    "uav-disaster-response": {
      title: "UAV Disaster Response",
      subtitle: "Autonomous Drone for Emergency Operations",
      description: "Developed an autonomous drone for locating victims in disaster zones using GPS, RSSI, and 3D mapping.",
      longDescription: "This project developed a comprehensive UAV system for disaster response operations. The autonomous drone system uses advanced sensor fusion combining GPS, RSSI measurements, and 3D mapping to locate victims in disaster zones. The system enables WiFi hotspot relay capabilities, live telemetry transmission, and mesh networking for coordination with rescue teams, significantly improving search and rescue efficiency.",
      image: droneImage,
      tags: ["GPS", "RSSI", "3D Mapping", "WiFi Mesh", "ROS 2", "Gazebo"],
      github: "https://github.com/MaverickAhmed",
      demo: "#",
      status: "Completed",
      slug: "uav-disaster-response",
      timeline: [
        {
          phase: "Research & Planning",
          description: "Requirements analysis and system design",
          duration: "4 weeks",
          tasks: ["Disaster response requirements", "Sensor selection", "Communication protocols", "Flight patterns design"]
        },
        {
          phase: "Simulation Development",
          description: "ROS 2 and Gazebo simulation environment",
          duration: "8 weeks",
          tasks: ["ROS 2 nodes development", "Gazebo world modeling", "SITL testing", "Algorithm validation"]
        },
        {
          phase: "Hardware Integration",
          description: "Real hardware implementation and testing",
          duration: "10 weeks",
          tasks: ["Flight controller integration", "Sensor mounting", "HITL testing", "Communication systems"]
        },
        {
          phase: "Field Testing",
          description: "Real-world validation and deployment",
          duration: "6 weeks",
          tasks: ["Field testing", "Performance validation", "Safety protocols", "Emergency procedures"]
        }
      ],
      architecture: {
        components: ["Flight Controller", "GPS Module", "WiFi Module", "3D LiDAR", "Mesh Radio", "Battery System"],
        protocols: ["MAVLink", "WiFi 802.11", "LoRa", "UART", "SPI", "I2C"],
        constraints: ["Flight time >45min", "Communication range >5km", "Weather resistant", "Autonomous operation"]
      },
      metrics: {
        performance: [
          { label: "Search Area Coverage", value: "10 km²/hour" },
          { label: "Victim Detection Range", value: "100m radius" },
          { label: "Communication Range", value: "5+ km" },
          { label: "Flight Endurance", value: "50 minutes" }
        ],
        specifications: [
          { label: "Platform", value: "Custom quadcopter frame" },
          { label: "Flight Controller", value: "PX4 autopilot" },
          { label: "Mapping System", value: "3D LiDAR + stereo vision" },
          { label: "Communication", value: "LoRa + WiFi mesh" }
        ]
      },
      codeSnippets: [
        {
          title: "Victim Detection Algorithm",
          language: "cpp",
          code: `bool detect_victim_signal(float rssi_threshold) {
    float rssi_reading = wifi_scan_rssi();
    gps_coord_t current_pos = get_gps_position();
    
    if(rssi_reading > rssi_threshold) {
        victim_location_t victim = {
            .lat = current_pos.lat,
            .lon = current_pos.lon,
            .confidence = calculate_confidence(rssi_reading)
        };
        
        transmit_victim_data(victim);
        return true;
    }
    return false;
}`
        }
      ]
    },
    "gui-automation-iot": {
      title: "GUI Automation for IoT",
      subtitle: "Python-based IoT Device Label Automation",
      description: "Built a Python tool to fetch serial data from IoT devices and trigger networked Brother label printing.",
      longDescription: "This automation solution revolutionized the IoT device labeling process in a production environment. The Python-based tool fetches serial data from IoT devices and automatically triggers networked Brother label printing, eliminating manual data entry and streamlining bulk label printing operations. The deployment resulted in saving 2 hours of daily labor while significantly reducing human errors in the labeling process.",
      image: automotiveImage,
      tags: ["Python", "IoT", "Serial Communication", "Automation"],
      github: "https://github.com/MaverickAhmed",
      demo: "#",
      status: "Production",
      slug: "gui-automation-iot",
      timeline: [
        {
          phase: "Requirements Analysis",
          description: "Understanding the manual labeling process",
          duration: "1 week",
          tasks: ["Process documentation", "Bottleneck identification", "Automation opportunities", "ROI calculation"]
        },
        {
          phase: "Tool Development",
          description: "Python GUI and automation logic",
          duration: "4 weeks",
          tasks: ["GUI development", "Serial communication", "Label printer integration", "Data validation"]
        },
        {
          phase: "Testing & Validation",
          description: "Production environment testing",
          duration: "2 weeks",
          tasks: ["Unit testing", "Integration testing", "Production validation", "Error handling"]
        },
        {
          phase: "Deployment",
          description: "Production deployment and training",
          duration: "1 week",
          tasks: ["Production deployment", "User training", "Documentation", "Support procedures"]
        }
      ],
      architecture: {
        components: ["Python GUI", "Serial Interface", "Brother Printer API", "Database Logger", "Error Handler"],
        protocols: ["RS232/USB Serial", "TCP/IP", "HTTP API", "File I/O"],
        constraints: ["Real-time processing", "Error resilience", "User-friendly interface", "Production reliability"]
      },
      metrics: {
        performance: [
          { label: "Processing Speed", value: "200 labels/hour" },
          { label: "Error Reduction", value: "99% accuracy" },
          { label: "Time Savings", value: "2 hours/day" },
          { label: "Throughput Increase", value: "300%" }
        ],
        specifications: [
          { label: "Platform", value: "Python 3.8+" },
          { label: "GUI Framework", value: "Tkinter/PyQt" },
          { label: "Communication", value: "PySerial library" },
          { label: "Printer Support", value: "Brother P-touch series" }
        ]
      },
      codeSnippets: [
        {
          title: "Serial Data Processing",
          language: "python",
          code: `import serial
import re

def fetch_device_data(port='/dev/ttyUSB0'):
    try:
        with serial.Serial(port, 9600, timeout=1) as ser:
            raw_data = ser.readline().decode('utf-8')
            
            # Parse device ID and parameters
            device_id = re.search(r'ID:([A-Z0-9]+)', raw_data)
            if device_id:
                return {
                    'id': device_id.group(1),
                    'timestamp': datetime.now(),
                    'status': 'ready_for_label'
                }
    except Exception as e:
        log_error(f"Serial communication error: {e}")
    return None`
        }
      ]
    },
    "ansan-iot": {
      title: "Ansan IoT",
      subtitle: "Smart Home Hub with ESP8266",
      description: "Created a smart home hub connected via ESP8266-based MQTT webserver for WiFi and offline control of home appliances.",
      longDescription: "Ansan IoT is a comprehensive smart home automation system built around an ESP8266-based MQTT webserver. The system provides both WiFi and offline control capabilities for home appliances, ensuring reliable operation even during network outages. Integrated with AWS IoT Core for cloud connectivity while maintaining local fallback operation for maximum reliability and user convenience.",
      image: iotImage,
      tags: ["ESP8266", "MQTT", "AWS IoT Core", "Smart Home"],
      github: "https://github.com/MaverickAhmed",
      demo: "#",
      status: "Completed",
      slug: "ansan-iot",
      timeline: [
        {
          phase: "System Design",
          description: "Architecture and component selection",
          duration: "2 weeks",
          tasks: ["Smart home requirements", "ESP8266 evaluation", "MQTT broker selection", "AWS IoT integration"]
        },
        {
          phase: "Firmware Development",
          description: "ESP8266 firmware and web interface",
          duration: "6 weeks",
          tasks: ["MQTT client implementation", "Web server development", "Device control logic", "WiFi management"]
        },
        {
          phase: "Cloud Integration",
          description: "AWS IoT Core integration and mobile app",
          duration: "4 weeks",
          tasks: ["AWS IoT setup", "Cloud messaging", "Mobile app development", "Security implementation"]
        },
        {
          phase: "Testing & Deployment",
          description: "Home testing and optimization",
          duration: "3 weeks",
          tasks: ["Home installation", "Network reliability testing", "Offline mode validation", "User acceptance testing"]
        }
      ],
      architecture: {
        components: ["ESP8266 MCU", "Relay Modules", "Temperature Sensors", "Motion Detectors", "Mobile App", "AWS IoT Core"],
        protocols: ["MQTT", "HTTP/HTTPS", "WiFi 802.11", "GPIO", "I2C", "SPI"],
        constraints: ["Offline operation", "Low power consumption", "Secure communication", "User-friendly interface"]
      },
      metrics: {
        performance: [
          { label: "Response Time", value: "<200ms local" },
          { label: "Uptime", value: "99.5%" },
          { label: "Device Count", value: "15+ appliances" },
          { label: "Power Consumption", value: "<2W standby" }
        ],
        specifications: [
          { label: "Processor", value: "ESP8266 @80MHz" },
          { label: "Memory", value: "4MB Flash" },
          { label: "Connectivity", value: "WiFi 802.11 b/g/n" },
          { label: "Cloud Platform", value: "AWS IoT Core" }
        ]
      },
      codeSnippets: [
        {
          title: "MQTT Device Control",
          language: "cpp",
          code: `void handle_device_command(String topic, String payload) {
    StaticJsonDocument<200> doc;
    deserializeJson(doc, payload);
    
    String device = doc["device"];
    bool state = doc["state"];
    
    if(device == "living_room_light") {
        digitalWrite(RELAY_PIN_1, state ? HIGH : LOW);
        publish_status("living_room_light", state);
    }
    
    // Store state for offline operation
    store_device_state(device, state);
}`
        }
      ]
    }
  };

  const project = projects[slug || ''];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-highlight hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-background to-accent/20">
        <div className="max-w-6xl mx-auto px-6">
          <Link 
            to="/#projects" 
            state={{ from: 'project' }}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge className={getStatusColor(project.status)}>
                  {project.status}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  Embedded Systems Project
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-highlight font-medium mb-6">{project.subtitle}</p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {project.longDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4">
                <Button variant="default" size="lg" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" size={18} />
                    View Source
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2" size={18} />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:order-first">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="architecture">Architecture</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-8">
              <ProjectMetrics project={project} />
            </TabsContent>
            
            <TabsContent value="architecture" className="mt-8">
              <SystemArchitecture project={project} />
            </TabsContent>
            
            <TabsContent value="timeline" className="mt-8">
              <ProjectTimeline timeline={project.timeline} />
            </TabsContent>
            
            <TabsContent value="code" className="mt-8">
              <div className="space-y-8">
                {project.codeSnippets.map((snippet, index) => (
                  <div key={index} className="bg-accent/20 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">{snippet.title}</h3>
                    <pre className="bg-background rounded-lg p-4 overflow-x-auto">
                      <code className="text-sm font-mono">{snippet.code}</code>
                    </pre>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;