import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/MaverickAhmed",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/maverickahmed/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:ahmedraza24201@gmail.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Embedded Systems Engineer</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Crafting reliable, real-time firmware solutions that power the future of connected devices and autonomous systems.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Expertise */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Expertise</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div>Real-time Systems & RTOS</div>
              <div>UAV Flight Control Systems</div>
              <div>IoT Device Firmware</div>
              <div>Automotive ECU Development</div>
              <div>Safety-Critical Systems</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-primary-foreground/60">
            © {currentYear} Embedded Systems Engineer. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-sm text-primary-foreground/60">
            <span>Built with</span>
            <Heart size={14} className="text-red-400" />
            <span>and precision engineering</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;