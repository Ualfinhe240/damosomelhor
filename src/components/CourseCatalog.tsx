
import React, { useState } from 'react';
import CourseCard from './CourseCard';
import { ChevronRight } from 'lucide-react';

// Sample course data
const courses = [
  {
    id: 1,
    title: "Complete HTML & CSS Fundamentals",
    description: "Master the building blocks of the web with HTML5 and CSS3. Learn to create responsive layouts and modern designs.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "Frontend",
    duration: "12 hours",
    level: "Beginner",
    students: 5840,
    rating: 4.8,
    instructor: "Maria Johnson"
  },
  {
    id: 2,
    title: "JavaScript: From Zero to Hero",
    description: "A comprehensive journey through modern JavaScript. Learn core concepts, ES6+ features, and practical applications.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: "Frontend",
    duration: "24 hours",
    level: "Intermediate",
    students: 4230,
    rating: 4.9,
    instructor: "David Chen"
  },
  {
    id: 3,
    title: "React.js for Modern Web Apps",
    description: "Learn to build powerful, interactive web applications with React. Master components, hooks, and state management.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    category: "Frontend",
    duration: "18 hours",
    level: "Intermediate",
    students: 3650,
    rating: 4.7,
    instructor: "Alex Morgan"
  },
  {
    id: 4,
    title: "Node.js & Express: Backend Development",
    description: "Build robust server-side applications with Node.js and Express. Create RESTful APIs and handle authentication.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "Backend",
    duration: "16 hours",
    level: "Intermediate",
    students: 2980,
    rating: 4.6,
    instructor: "Sophia Lee"
  },
  {
    id: 5,
    title: "Full-Stack Web Development Bootcamp",
    description: "Comprehensive full-stack development course covering frontend, backend, databases, and deployment strategies.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    category: "Full-Stack",
    duration: "48 hours",
    level: "Advanced",
    students: 1890,
    rating: 4.9,
    instructor: "Michael Brown"
  },
  {
    id: 6,
    title: "API Design and Development",
    description: "Learn to design and implement robust APIs that power modern web and mobile applications.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "Backend",
    duration: "14 hours",
    level: "Intermediate",
    students: 2250,
    rating: 4.5,
    instructor: "James Wilson"
  }
];

// Categories for filtering
const categories = ["All", "Frontend", "Backend", "Full-Stack", "DevOps"];

const CourseCatalog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredCourses = activeCategory === "All" 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <section id="courses" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Courses</h2>
          <p className="text-muted-foreground max-w-2xl">
            Dive into our comprehensive curriculum designed to take you from beginner to professional.
            Each course is crafted by industry experts and includes hands-on projects.
          </p>
        </div>
        
        <div className="mb-12 overflow-x-auto">
          <div className="flex space-x-2 justify-center min-w-full pb-2">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-md"
                    : "bg-white/50 text-foreground hover:bg-white"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="animate-scale-in">
              <CourseCard {...course} />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <a 
            href="/courses" 
            className="button-secondary flex items-center gap-2"
          >
            View All Courses <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CourseCatalog;
