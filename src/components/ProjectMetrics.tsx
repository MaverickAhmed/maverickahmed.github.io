import { TrendingUp, Zap, Settings, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Project {
  metrics: {
    performance: Array<{ label: string; value: string; }>;
    specifications: Array<{ label: string; value: string; }>;
  };
}

interface ProjectMetricsProps {
  project: Project;
}

const ProjectMetrics = ({ project }: ProjectMetricsProps) => {
  const { performance, specifications } = project.metrics;

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive performance metrics and technical specifications demonstrating system capabilities and engineering excellence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Performance Metrics */}
        <div className="bg-card rounded-xl p-6 shadow-[var(--shadow-soft)]">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <TrendingUp className="text-highlight" size={24} />
            Performance Metrics
          </h3>
          <div className="space-y-4">
            {performance.map((metric, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-accent/20 hover:bg-accent/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-highlight rounded-full"></div>
                  <span className="font-medium text-foreground">{metric.label}</span>
                </div>
                <Badge variant="secondary" className="font-mono">
                  {metric.value}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-card rounded-xl p-6 shadow-[var(--shadow-soft)]">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Settings className="text-highlight" size={24} />
            Technical Specifications
          </h3>
          <div className="space-y-4">
            {specifications.map((spec, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="font-medium text-foreground">{spec.label}</span>
                </div>
                <Badge variant="outline" className="font-mono bg-background">
                  {spec.value}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-gradient-to-r from-accent/10 to-highlight/10 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Zap className="text-highlight" size={24} />
          Key Engineering Features
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: "⚡", title: "Real-time Processing", desc: "Sub-millisecond response times" },
            { icon: "🔒", title: "Safety Critical", desc: "Fail-safe operation modes" },
            { icon: "🌐", title: "Wireless Connectivity", desc: "Robust communication protocols" },
            { icon: "🔋", title: "Power Optimized", desc: "Ultra-low power consumption" },
            { icon: "📡", title: "Sensor Fusion", desc: "Multi-sensor data processing" },
            { icon: "🛡️", title: "Redundancy", desc: "Multiple safety layers" }
          ].map((feature, index) => (
            <div key={index} className="bg-background/60 rounded-lg p-4 text-center hover:bg-background/80 transition-colors">
              <div className="text-2xl mb-2">{feature.icon}</div>
              <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
              <p className="text-xs text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Engineering Standards */}
      <div className="bg-card rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Shield className="text-highlight" size={20} />
          Engineering Standards & Compliance
        </h3>
        <div className="flex flex-wrap gap-2">
          {["MISRA-C Compliant", "ISO 26262", "IEC 61508", "DO-178C", "FDA 510(k)", "CE Marking"].map((standard, index) => (
            <Badge key={index} variant="outline" className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border-green-200 dark:border-green-800">
              {standard}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          All development follows industry best practices and safety standards for embedded systems in critical applications.
        </p>
      </div>
    </div>
  );
};

export default ProjectMetrics;