import { CheckCircle, Clock, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface TimelinePhase {
  phase: string;
  description: string;
  duration: string;
  tasks: string[];
}

interface ProjectTimelineProps {
  timeline: TimelinePhase[];
}

const ProjectTimeline = ({ timeline }: ProjectTimelineProps) => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Development Timeline</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A detailed breakdown of the development phases from initial concept to production deployment.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 h-full w-0.5 bg-border"></div>
        
        <div className="space-y-12">
          {timeline.map((phase, index) => (
            <div key={index} className="relative flex gap-8">
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 bg-highlight rounded-full border-4 border-background shadow-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="bg-card rounded-xl p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-foreground">{phase.phase}</h3>
                    <Badge variant="outline" className="w-fit mt-2 sm:mt-0">
                      <Clock className="mr-1" size={12} />
                      {phase.duration}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {phase.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground flex items-center gap-2">
                      <CheckCircle size={16} className="text-highlight" />
                      Key Tasks
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {phase.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-highlight rounded-full flex-shrink-0"></div>
                          {task}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeline;