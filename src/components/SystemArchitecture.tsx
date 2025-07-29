import { Cpu, Wifi, Zap, Shield, Settings } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Project {
  architecture: {
    components: string[];
    protocols: string[];
    constraints: string[];
  };
}

interface SystemArchitectureProps {
  project: Project;
}

const SystemArchitecture = ({ project }: SystemArchitectureProps) => {
  const { components, protocols, constraints } = project.architecture;

  // Simple block diagram representation
  const ArchitectureDiagram = () => (
    <div className="bg-accent/10 rounded-xl p-8 mb-8">
      <h3 className="text-lg font-semibold mb-6 text-center">System Block Diagram</h3>
      
      <div className="flex flex-col items-center space-y-6">
        {/* Input Layer */}
        <div className="flex gap-4 flex-wrap justify-center">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg text-center min-w-32">
            <Cpu className="mx-auto mb-2 text-blue-600" size={24} />
            <span className="text-sm font-medium">Sensors</span>
          </div>
          <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg text-center min-w-32">
            <Wifi className="mx-auto mb-2 text-green-600" size={24} />
            <span className="text-sm font-medium">Communication</span>
          </div>
        </div>

        {/* Arrow down */}
        <div className="text-muted-foreground">↓</div>

        {/* Processing Layer */}
        <div className="bg-highlight/20 p-6 rounded-lg text-center min-w-48">
          <Settings className="mx-auto mb-2 text-highlight" size={32} />
          <span className="font-semibold">Main Controller</span>
          <div className="text-sm text-muted-foreground mt-1">Processing Unit</div>
        </div>

        {/* Arrow down */}
        <div className="text-muted-foreground">↓</div>

        {/* Output Layer */}
        <div className="flex gap-4 flex-wrap justify-center">
          <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-lg text-center min-w-32">
            <Zap className="mx-auto mb-2 text-orange-600" size={24} />
            <span className="text-sm font-medium">Actuators</span>
          </div>
          <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg text-center min-w-32">
            <Shield className="mx-auto mb-2 text-red-600" size={24} />
            <span className="text-sm font-medium">Safety Systems</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">System Architecture</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Detailed overview of the system components, communication protocols, and design constraints.
        </p>
      </div>

      <ArchitectureDiagram />

      <div className="grid md:grid-cols-3 gap-6">
        {/* Components */}
        <div className="bg-card rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Cpu className="text-highlight" size={20} />
            Core Components
          </h3>
          <div className="space-y-3">
            {components.map((component, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-accent/20 hover:bg-accent/30 transition-colors">
                <div className="w-2 h-2 bg-highlight rounded-full flex-shrink-0"></div>
                <span className="text-sm font-medium">{component}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Protocols */}
        <div className="bg-card rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Wifi className="text-highlight" size={20} />
            Communication Protocols
          </h3>
          <div className="space-y-2">
            {protocols.map((protocol, index) => (
              <Badge key={index} variant="outline" className="block text-center py-2">
                {protocol}
              </Badge>
            ))}
          </div>
        </div>

        {/* Constraints */}
        <div className="bg-card rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Shield className="text-highlight" size={20} />
            Design Constraints
          </h3>
          <div className="space-y-3">
            {constraints.map((constraint, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-1.5"></div>
                <span className="text-sm text-red-800 dark:text-red-200">{constraint}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Architecture Notes */}
      <div className="bg-accent/10 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Architecture Design Notes</h3>
        <div className="prose prose-sm max-w-none text-muted-foreground">
          <p>
            The system architecture follows a modular design approach with clear separation of concerns. 
            The main controller acts as the central processing unit, coordinating between input sensors 
            and output actuators through well-defined interfaces.
          </p>
          <ul className="mt-4 space-y-2">
            <li>• <strong>Real-time Processing:</strong> Critical control loops run at high frequency with deterministic timing</li>
            <li>• <strong>Fault Tolerance:</strong> Multiple redundancy layers ensure system reliability</li>
            <li>• <strong>Scalability:</strong> Modular design allows for easy component upgrades</li>
            <li>• <strong>Security:</strong> Encrypted communication and secure boot mechanisms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SystemArchitecture;