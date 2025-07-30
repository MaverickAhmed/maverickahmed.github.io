import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';

const TechStackCarousel = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  const techStack = [
    {
      category: "Microcontrollers",
      technologies: ["STM32", "PIC32", "ARM Cortex-M", "ESP32", "Arduino", "AVR"]
    },
    {
      category: "Development Tools",
      technologies: ["MATLAB", "Simulink", "Git", "MathCAD"]
      // technologies: ["MATLAB", "Simulink", "Git", "Gerrit", "SVN", "IAR Embedded Workbench"]
    },
    {
      category: "RTOS & Firmware",
      technologies: ["FreeRTOS", "Assembly", "Bare Metal", "GDB", "QEMU"]
      // technologies: ["FreeRTOS", "Zephyr", "ThreadX", "Custom RTOS", "Bare Metal"]
    },
    {
      category: "Protocols",
      technologies: ["CAN Bus", "SPI", "I2C", "UART", "LoRaWAN", "BLE", "WIFI", "RS485"]
    },
    {
      category: "Programming Languages",
      technologies: ["C", "C++", "Python", "C#", "Bash"]
    },
    {
      category: "Standards",
      technologies: ["ISO 26262", "MISRA-C", "AUTOSAR", "DO-178C", "IEC 61508"]
    }
  ];

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <div className="py-12">
      <h3 className="text-2xl font-semibold mb-6 text-center">Tech Stack</h3>
      <Carousel
        setApi={setApi}
        className="w-full max-w-4xl mx-auto"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {techStack.map((category, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-6 rounded-xl bg-accent/20 border border-accent/30 hover:bg-accent/30 transition-all duration-300 h-full">
                <h4 className="text-lg font-semibold text-highlight mb-4 text-center">
                  {category.category}
                </h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="text-xs hover:bg-highlight hover:text-highlight-foreground transition-colors cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {techStack.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === current ? 'bg-highlight' : 'bg-accent'
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TechStackCarousel;