import { Calendar, Clock, ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const BlogSection = () => {
  const { saveScrollPosition } = useScrollPosition();
  
  const articles = [
    {
      title: "MISRA C Guidelines: Writing Safer Embedded Code",
      excerpt: "A deep dive into MISRA C coding standards and how they improve code quality and safety in embedded systems. Practical examples and common pitfalls to avoid.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Best Practices",
      tags: ["MISRA-C", "Code Quality", "Safety"],
      slug: "misra-c-guidelines"
    },
    {
      title: "Real-Time Debugging War Stories: When Microseconds Matter",
      excerpt: "Tales from the trenches of real-time embedded systems debugging. How to catch timing issues that only appear in production and the tools that saved the day.",
      date: "2023-12-08",
      readTime: "12 min read",
      category: "Debugging",
      tags: ["Real-time", "Debugging", "RTOS"],
      slug: "real-time-debugging"
    },
    {
      title: "Power Optimization in IoT: Achieving 10-Year Battery Life",
      excerpt: "Strategies and techniques for ultra-low power embedded design. From sleep modes to communication protocols, every microamp counts in battery-powered devices.",
      date: "2023-11-22",
      readTime: "15 min read",
      category: "IoT",
      tags: ["Low Power", "IoT", "Battery Life"],
      slug: "power-optimization-iot"
    }
  ];

  const handleArticleClick = () => {
    saveScrollPosition('mainPage');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="blog" className="py-20 bg-accent/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Blog</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, experiences, and lessons learned from years of embedded systems development. 
            Sharing knowledge to help fellow engineers build better, more reliable systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article 
              key={index}
              className="group bg-card rounded-xl p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover-lift cursor-pointer"
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium bg-highlight/10 text-highlight px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <FileText className="text-muted-foreground" size={16} />
              </div>

              {/* Article Content */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-highlight transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Article Meta */}
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={12} />
                  <span>{formatDate(article.date)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={12} />
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Read More */}
              <Link 
                to={`/blog/${article.slug}`}
                onClick={handleArticleClick}
                className="flex items-center gap-2 text-sm text-highlight hover:text-highlight/80 transition-colors group/button"
              >
                <span>Read Article</span>
                <ArrowRight size={14} className="transition-transform group-hover/button:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>

        {/* View All Articles - Hidden but kept in code */}
        <div className="text-center mt-12 hidden">
          <button className="btn-secondary">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;