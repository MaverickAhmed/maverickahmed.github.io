import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPost = () => {
  const { slug } = useParams();

  // Sample blog content - in a real app this would come from a CMS or API
  const blogPosts = {
    'misra-c-guidelines': {
      title: "MISRA C Guidelines: Writing Safer Embedded Code",
      excerpt: "A deep dive into MISRA C coding standards and how they improve code quality and safety in embedded systems.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Best Practices",
      tags: ["MISRA-C", "Code Quality", "Safety"],
      content: `
        <h2>Introduction to MISRA C</h2>
        <p>MISRA C is a set of coding guidelines designed to promote safe, reliable, and secure embedded C code. Originally developed for the automotive industry, these guidelines have become a standard across many safety-critical embedded applications.</p>
        
        <h2>Key Benefits of Following MISRA C</h2>
        <ul>
          <li><strong>Improved Safety:</strong> Reduces the likelihood of bugs that could lead to system failures</li>
          <li><strong>Enhanced Reliability:</strong> Promotes consistent, predictable code behavior</li>
          <li><strong>Better Maintainability:</strong> Makes code easier to understand and modify</li>
          <li><strong>Industry Compliance:</strong> Meets requirements for safety-critical applications</li>
        </ul>

        <h2>Essential MISRA C Rules</h2>
        <p>Here are some of the most important MISRA C rules that every embedded developer should know:</p>
        
        <h3>Rule 1.1: All code shall conform to ISO/IEC 9899:1990</h3>
        <p>This foundational rule ensures that your code adheres to the C90 standard, providing a solid baseline for portability and predictability.</p>

        <h3>Rule 8.7: Objects shall be defined at block scope</h3>
        <p>This rule promotes better encapsulation and reduces the potential for unintended side effects from global variables.</p>

        <h2>Common Implementation Challenges</h2>
        <p>While MISRA C provides excellent guidelines, implementing them in real-world projects can present challenges:</p>
        
        <ul>
          <li>Legacy code compliance</li>
          <li>Tool integration</li>
          <li>Team training and adoption</li>
          <li>Performance considerations</li>
        </ul>

        <h2>Best Practices for Adoption</h2>
        <p>Successfully implementing MISRA C in your embedded projects requires a systematic approach:</p>
        
        <ol>
          <li>Start with critical modules first</li>
          <li>Use static analysis tools</li>
          <li>Provide team training</li>
          <li>Establish clear deviation procedures</li>
          <li>Regular code reviews</li>
        </ol>

        <h2>Conclusion</h2>
        <p>MISRA C guidelines are invaluable for developing safe, reliable embedded systems. While the initial investment in training and tooling may seem substantial, the long-term benefits in terms of code quality and system reliability make it worthwhile for any serious embedded development team.</p>
      `
    },
    'real-time-debugging': {
      title: "Real-Time Debugging War Stories: When Microseconds Matter",
      excerpt: "Tales from the trenches of real-time embedded systems debugging.",
      date: "2023-12-08",
      readTime: "12 min read",
      category: "Debugging",
      tags: ["Real-time", "Debugging", "RTOS"],
      content: `
        <h2>The Heisenbug That Almost Grounded a Fleet</h2>
        <p>Picture this: You're debugging a flight control system that works perfectly in the lab but fails randomly in field testing. Welcome to the world of real-time embedded systems, where timing is everything and bugs can literally disappear when you try to observe them.</p>

        <h2>The Challenge of Real-Time Constraints</h2>
        <p>In real-time systems, correctness isn't just about getting the right answer—it's about getting it at the right time. A perfectly calculated control signal delivered 10 microseconds late might as well be wrong.</p>

        <h3>Common Real-Time Debugging Challenges:</h3>
        <ul>
          <li>Race conditions that only appear under specific timing</li>
          <li>Interrupt latency issues</li>
          <li>Priority inversion problems</li>
          <li>Memory corruption in time-critical paths</li>
        </ul>

        <h2>War Story #1: The Phantom Interrupt</h2>
        <p>A UAV control system was experiencing random altitude deviations. The bug only appeared during high-wind conditions and seemed to vanish whenever we connected debugging equipment. The culprit? A nested interrupt scenario that created a timing window where altitude sensor data could be corrupted.</p>

        <h3>The Solution:</h3>
        <p>We implemented a lightweight trace buffer that captured critical timing information without affecting system performance. This revealed the interrupt nesting pattern that caused the issue.</p>

        <h2>Essential Debugging Tools</h2>
        <p>When microseconds matter, you need the right tools:</p>

        <h3>Hardware Tools:</h3>
        <ul>
          <li>Logic analyzers for timing analysis</li>
          <li>JTAG debuggers with real-time trace</li>
          <li>Oscilloscopes for analog signal verification</li>
        </ul>

        <h3>Software Techniques:</h3>
        <ul>
          <li>Trace buffers for non-intrusive logging</li>
          <li>Statistical timing analysis</li>
          <li>Deterministic replay systems</li>
        </ul>

        <h2>War Story #2: The Million-Dollar Microsecond</h2>
        <p>An industrial control system was randomly shutting down, causing expensive production line stoppages. After weeks of investigation, we discovered that a single instruction in an interrupt handler was taking one microsecond longer than expected under certain conditions, causing a cascade of timing violations.</p>

        <h2>Prevention Strategies</h2>
        <p>The best debugging is prevention:</p>
        
        <ol>
          <li>Design with timing margins</li>
          <li>Use deterministic algorithms</li>
          <li>Implement comprehensive timing monitoring</li>
          <li>Test under worst-case scenarios</li>
        </ol>

        <h2>Conclusion</h2>
        <p>Real-time debugging requires patience, the right tools, and often a bit of detective work. Remember: in real-time systems, the bug you can't reproduce is often the most dangerous one.</p>
      `
    },
    'power-optimization-iot': {
      title: "Power Optimization in IoT: Achieving 10-Year Battery Life",
      excerpt: "Strategies and techniques for ultra-low power embedded design.",
      date: "2023-11-22",
      readTime: "15 min read",
      category: "IoT",
      tags: ["Low Power", "IoT", "Battery Life"],
      content: `
        <h2>The Holy Grail of IoT: 10-Year Battery Life</h2>
        <p>In the world of IoT devices, power consumption isn't just a nice-to-have optimization—it's often the difference between a commercially viable product and an expensive paperweight. Achieving 10-year battery life requires a deep understanding of power management at every level of your system.</p>

        <h2>Understanding Power Consumption Patterns</h2>
        <p>Most IoT devices spend the majority of their time doing absolutely nothing. This insight is the foundation of ultra-low power design:</p>

        <ul>
          <li>Active time: Microseconds to milliseconds</li>
          <li>Sleep time: Minutes to hours</li>
          <li>Deep sleep: Days to weeks</li>
        </ul>

        <h2>The Power Budget Breakdown</h2>
        <p>For a typical sensor node aiming for 10-year battery life with a 3000mAh battery:</p>

        <h3>Average Current Budget: ~34 µA</h3>
        <ul>
          <li>Sleep current: 30 µA (90% of time)</li>
          <li>Active current: 4 mA (0.1% of time)</li>
          <li>Radio transmission: 20 mA (0.01% of time)</li>
        </ul>

        <h2>Hardware-Level Optimizations</h2>
        <p>Every microamp counts when you're targeting ultra-low power:</p>

        <h3>Microcontroller Selection:</h3>
        <ul>
          <li>Choose MCUs with sub-microamp sleep currents</li>
          <li>Look for multiple power domains</li>
          <li>Consider wake-up time vs. power consumption trade-offs</li>
        </ul>

        <h3>Peripheral Management:</h3>
        <ul>
          <li>Power gate unused peripherals</li>
          <li>Use low-power sensors with shutdown modes</li>
          <li>Implement intelligent sensor fusion</li>
        </ul>

        <h2>Software Strategies</h2>
        <p>Software optimization can often provide more power savings than hardware changes:</p>

        <h3>Efficient Sleep Management:</h3>
        <pre><code>
// Example: Adaptive sleep duration based on sensor data
void adaptive_sleep() {
    uint32_t sleep_duration;
    
    if (sensor_change_rate > THRESHOLD_HIGH) {
        sleep_duration = SLEEP_SHORT;  // 1 minute
    } else if (sensor_change_rate > THRESHOLD_LOW) {
        sleep_duration = SLEEP_MEDIUM; // 5 minutes
    } else {
        sleep_duration = SLEEP_LONG;   // 30 minutes
    }
    
    enter_sleep_mode(sleep_duration);
}
        </code></pre>

        <h3>Communication Optimization:</h3>
        <ul>
          <li>Batch data transmissions</li>
          <li>Use compression algorithms</li>
          <li>Implement intelligent retry mechanisms</li>
          <li>Choose optimal communication protocols</li>
        </ul>

        <h2>Real-World Case Study</h2>
        <p>A agricultural soil monitoring system needed to operate for 5+ years on a single battery while taking measurements every hour:</p>

        <h3>Initial Design Issues:</h3>
        <ul>
          <li>Sleep current: 150 µA (too high!)</li>
          <li>Inefficient wake-up sequences</li>
          <li>Unnecessary sensor warm-up times</li>
        </ul>

        <h3>Optimizations Applied:</h3>
        <ul>
          <li>Redesigned power supply for 2 µA quiescent current</li>
          <li>Implemented sensor pre-warming algorithms</li>
          <li>Added intelligent data filtering</li>
          <li>Optimized radio duty cycle</li>
        </ul>

        <h3>Final Results:</h3>
        <ul>
          <li>Sleep current: 12 µA</li>
          <li>Battery life: 7.2 years</li>
          <li>Data accuracy maintained</li>
        </ul>

        <h2>Testing and Validation</h2>
        <p>Measuring ultra-low power consumption requires specialized techniques:</p>

        <h3>Measurement Tools:</h3>
        <ul>
          <li>Precision power analyzers</li>
          <li>Current shunt resistors</li>
          <li>Statistical power profiling</li>
        </ul>

        <h3>Validation Strategies:</h3>
        <ul>
          <li>Accelerated aging tests</li>
          <li>Temperature cycling</li>
          <li>Real-world deployment pilots</li>
        </ul>

        <h2>Future Trends</h2>
        <p>The future of ultra-low power IoT includes:</p>
        <ul>
          <li>Energy harvesting integration</li>
          <li>AI-powered adaptive power management</li>
          <li>Sub-threshold circuit design</li>
          <li>Quantum-dot energy sources</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Achieving 10-year battery life in IoT devices is challenging but achievable with the right combination of hardware selection, software optimization, and system-level thinking. Every design decision should be evaluated through the lens of power consumption, because in the IoT world, watts matter more than MHz.</p>
      `
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/#blog" state={{ from: 'blog' }}>
            <Button variant="hero">
              <ArrowLeft className="mr-2" size={18} />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link to="/#blog" state={{ from: 'blog' }} className="inline-flex items-center text-muted-foreground hover:text-highlight transition-colors">
            <ArrowLeft className="mr-2" size={18} />
            Back to Blog
          </Link>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span className="bg-highlight/10 text-highlight px-3 py-1 rounded-full font-medium">
              {post.category}
            </span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{formatDate(post.date)}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className="text-sm bg-accent text-accent-foreground px-3 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none
                     prose-headings:font-semibold prose-headings:text-foreground
                     prose-p:text-muted-foreground prose-p:leading-relaxed
                     prose-strong:text-foreground
                     prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                     prose-li:my-1
                     prose-pre:bg-accent prose-pre:border prose-pre:border-border
                     prose-code:bg-accent prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                     prose-code:text-sm prose-code:font-medium"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground">
              <FileText size={16} />
              <span className="text-sm">Published on {formatDate(post.date)}</span>
            </div>
            
            <Link to="/#blog" state={{ from: 'blog' }}>
              <Button variant="outline">
                <ArrowLeft className="mr-2" size={16} />
                More Articles
              </Button>
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogPost;