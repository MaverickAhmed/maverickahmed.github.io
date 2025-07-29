import { Mail, Github, Linkedin, MapPin, Download } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ahmedraza24201@gmail.com",
      href: "mailto:ahmedraza24201@gmail.com",
      description: "Let's discuss your embedded systems project"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/maverickahmed",
      href: "https://www.linkedin.com/in/maverickahmed/",
      description: "Connect with me professionally"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@MaverickAhmed",
      href: "https://github.com/MaverickAhmed",
      description: "Check out my open source contributions"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next embedded systems project? 
            {/* I'm always interested in discussing challenging real-time applications and innovative IoT solutions. */}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-xl p-6 text-center shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover-lift"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent text-highlight rounded-lg mb-4 group-hover:bg-highlight group-hover:text-highlight-foreground transition-colors">
                  <contact.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{contact.label}</h3>
                <p className="text-highlight font-medium mb-2">{contact.value}</p>
                <p className="text-sm text-muted-foreground">{contact.description}</p>
              </a>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-accent/50 to-highlight/10 rounded-2xl p-8">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-muted-foreground mb-6">
                Whether you need firmware development, system architecture consulting, 
                or code review services, I'm here to help bring your embedded vision to reality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="mailto:ahmedraza24201@gmail.com"
                  className="bg-highlight text-highlight-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-highlight/90 hover:shadow-[var(--shadow-medium)] hover:-translate-y-0.5 inline-flex items-center"
                >
                  <Mail size={18} className="mr-2" />
                  Send Message
                </a>
                <a 
                  href="https://drive.google.com/drive/folders/1fV7xL7qEDrVs2h4h3DQfy-coMei2NCsR?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Download size={18} className="mr-2" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
              <MapPin size={16} />
              <span>Dubai, United Arab Emirates</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Available for opportunities, consulting projects, and technical collaborations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;