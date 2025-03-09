
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const paths = [
  {
    id: 1,
    title: "Frontend Developer",
    description: "Master HTML, CSS, JavaScript, and modern frontend frameworks to build beautiful user interfaces.",
    icon: "🎨",
    color: "from-blue-400 to-blue-600",
    steps: [
      "HTML & CSS Fundamentals",
      "JavaScript Essentials",
      "Responsive Web Design",
      "React.js Framework",
      "Advanced Frontend Patterns"
    ],
    duration: "4 months",
    projectCount: 8
  },
  {
    id: 2,
    title: "Backend Developer",
    description: "Learn server-side programming, databases, and API development to power modern applications.",
    icon: "⚙️",
    color: "from-green-400 to-green-600",
    steps: [
      "Programming Fundamentals",
      "Node.js & Express",
      "Database Design",
      "RESTful API Development",
      "Authentication & Security"
    ],
    duration: "4 months",
    projectCount: 6
  },
  {
    id: 3,
    title: "Full-Stack Developer",
    description: "Become a versatile developer with skills in both frontend and backend technologies.",
    icon: "🚀",
    color: "from-purple-400 to-purple-600",
    steps: [
      "Web Fundamentals",
      "Frontend Development",
      "Backend Development",
      "Database Integration",
      "Full-Stack Projects"
    ],
    duration: "8 months",
    projectCount: 12
  }
];

const LearningPath = () => {
  return (
    <section id="paths" className="py-20">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Guided Learning Paths</h2>
          <p className="text-muted-foreground max-w-2xl">
            Follow structured learning journeys designed to take you from foundations to mastery.
            Each path includes carefully sequenced courses and hands-on projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {paths.map((path, index) => (
            <div 
              key={path.id}
              className="glass-card rounded-xl overflow-hidden hover-lift animate-slide-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`h-3 bg-gradient-to-r ${path.color}`}></div>
              <div className="p-8">
                <div className="mb-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{path.title}</h3>
                    <p className="text-sm text-muted-foreground">{path.description}</p>
                  </div>
                  <div className="text-3xl">{path.icon}</div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {path.steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`text-green-500`}>
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <p className="text-sm">{step}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between text-sm text-muted-foreground mb-6">
                  <div>
                    <span className="font-medium text-foreground">{path.duration}</span>
                    <span> duration</span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">{path.projectCount}</span>
                    <span> projects</span>
                  </div>
                </div>
                
                <a 
                  href={`/paths/${path.id}`}
                  className="w-full flex items-center justify-center gap-2 button-primary"
                >
                  Start Learning <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPath;
