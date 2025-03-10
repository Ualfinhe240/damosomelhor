
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CheckCircle, UserPlus } from 'lucide-react';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useSupabase } from '@/hooks/useSupabase';

// This data would ideally come from a database
const pathsData = [
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
    projectCount: 8,
    fullDescription: "This comprehensive path will take you from the basics of web development to mastering modern frontend frameworks. You'll start with the fundamentals of HTML and CSS, learn responsive design principles, then move to JavaScript programming. The journey continues with React.js, state management, and advanced UI patterns. By the end, you'll be able to build sophisticated, interactive web applications with clean, maintainable code.",
    courses: [
      {
        id: 1,
        title: "HTML & CSS Fundamentals",
        duration: "4 weeks",
        description: "Learn the building blocks of the web"
      },
      {
        id: 2,
        title: "JavaScript Essentials",
        duration: "4 weeks",
        description: "Master the core language of web development"
      },
      {
        id: 3,
        title: "Responsive Web Design",
        duration: "3 weeks",
        description: "Create websites that look great on any device"
      },
      {
        id: 4,
        title: "React.js Framework",
        duration: "5 weeks",
        description: "Build interactive UIs with the popular framework"
      }
    ]
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
    projectCount: 6,
    fullDescription: "This path focuses on server-side development skills. You'll learn programming fundamentals with a focus on backend technologies, master Node.js and Express for building server applications, design and implement databases, create RESTful APIs, and implement authentication and security best practices. The curriculum includes both SQL and NoSQL databases, giving you versatility in your tech stack choices.",
    courses: [
      {
        id: 5,
        title: "Programming Fundamentals",
        duration: "4 weeks",
        description: "Build a solid foundation in programming"
      },
      {
        id: 6,
        title: "Node.js & Express",
        duration: "5 weeks",
        description: "Create server-side applications with JavaScript"
      },
      {
        id: 7,
        title: "Database Design",
        duration: "4 weeks",
        description: "Model and implement efficient databases"
      },
      {
        id: 8,
        title: "API Development",
        duration: "3 weeks",
        description: "Build robust RESTful APIs"
      }
    ]
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
    projectCount: 12,
    fullDescription: "The Full-Stack Developer path combines frontend and backend development skills to make you a versatile and highly employable developer. You'll start with web fundamentals, then dive into both frontend technologies (HTML, CSS, JavaScript, React) and backend systems (Node.js, databases, APIs). The path culminates in building complete applications that integrate all aspects of the development stack, giving you experience with the entire development lifecycle.",
    courses: [
      {
        id: 9,
        title: "Web Fundamentals",
        duration: "6 weeks",
        description: "Learn the foundations of web development"
      },
      {
        id: 10,
        title: "Frontend Development",
        duration: "8 weeks",
        description: "Master UI/UX implementation"
      },
      {
        id: 11,
        title: "Backend Development",
        duration: "8 weeks",
        description: "Build robust server-side applications"
      },
      {
        id: 12,
        title: "Full-Stack Projects",
        duration: "10 weeks",
        description: "Integrate all your skills in complete applications"
      }
    ]
  }
];

const LearningPathDetail = () => {
  const { id } = useParams();
  const pathId = parseInt(id || '1');
  const navigate = useNavigate();
  const { saveEmail, insertData } = useSupabase();
  const [enrolling, setEnrolling] = useState(false);
  
  const path = pathsData.find(p => p.id === pathId);
  
  if (!path) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background">
        <h1 className="text-2xl font-bold mb-4">Learning Path Not Found</h1>
        <Button asChild variant="outline">
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    );
  }

  const handleEnroll = async () => {
    try {
      setEnrolling(true);
      
      // In a real app, you would typically:
      // 1. Check if the user is authenticated
      // 2. If not, redirect to sign-in page or show a sign-up modal
      // 3. If yes, create an enrollment record
      
      // For demo purposes, we'll create a simple enrollment record
      // and show a success message with instructions
      
      const enrollmentData = {
        path_id: pathId,
        enrolled_at: new Date().toISOString(),
        status: 'active',
        progress: 0,
      };
      
      // Attempt to insert enrollment data
      const result = await insertData('enrollments', enrollmentData);
      
      if (result) {
        // Show success message
        toast.success('Successfully enrolled in this learning path!', {
          description: 'Check your email for getting started instructions.',
          duration: 5000,
        });
        
        // Optional: Prompt for email subscription if needed
        setTimeout(() => {
          const userEmail = prompt('Enter your email to receive course materials:');
          if (userEmail) {
            saveEmail(userEmail, {
              name: '',
              subscribed: true,
              source: `path-enrollment-${pathId}`
            });
          }
        }, 500);
      } else {
        // Show error message
        toast.error('Unable to complete enrollment. Please try again.', {
          duration: 5000,
        });
      }
    } catch (error) {
      console.error('Enrollment error:', error);
      toast.error('Something went wrong. Please try again later.', {
        duration: 5000,
      });
    } finally {
      setEnrolling(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="section-container">
          <div className="mb-8">
            <Button variant="outline" asChild className="mb-4">
              <Link to="/#paths" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Back to Learning Paths
              </Link>
            </Button>
            
            <div className={`h-2 w-24 bg-gradient-to-r ${path.color} rounded-full mb-6`}></div>
            
            <div className="flex items-center gap-4 mb-2">
              <h1 className="text-3xl md:text-4xl font-bold">{path.title}</h1>
              <div className="text-3xl">{path.icon}</div>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-1">
                <span className="font-medium text-foreground">{path.duration}</span> duration
              </div>
              <div className="flex items-center gap-1">
                <span className="font-medium text-foreground">{path.projectCount}</span> projects
              </div>
              <div className="flex items-center gap-1">
                <span className="font-medium text-foreground">{path.courses.length}</span> courses
              </div>
            </div>
            
            <p className="text-lg max-w-3xl">{path.fullDescription}</p>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Path Curriculum</h2>
            <div className="space-y-4 relative">
              {path.steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary rounded-full p-2 mt-0.5">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{step}</h3>
                    <p className="text-muted-foreground text-sm">
                      {index === path.steps.length - 1 
                        ? "Final mastery stage" 
                        : `Step ${index + 1} of ${path.steps.length}`}
                    </p>
                  </div>
                </div>
              ))}
              <div className="absolute left-5 top-7 bottom-7 w-0.5 bg-primary/10"></div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Included Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {path.courses.map(course => (
                <Card key={course.id} className="hover-lift transition-all">
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.duration}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{course.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <Button 
                size="lg" 
                className="px-8 gap-2"
                onClick={handleEnroll}
                disabled={enrolling}
              >
                <UserPlus className="w-5 h-5" />
                {enrolling ? 'Processing...' : 'Enroll in this Path'}
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LearningPathDetail;
