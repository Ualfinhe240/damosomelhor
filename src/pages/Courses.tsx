
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

// Using the same sample course data from CourseCatalog component
const allCourses = [
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
  },
  {
    id: 7,
    title: "Advanced CSS Animations and Layouts",
    description: "Take your CSS skills to the next level with advanced animation techniques and complex layouts.",
    image: "https://images.unsplash.com/photo-1545670723-196ed0954986",
    category: "Frontend",
    duration: "10 hours",
    level: "Advanced",
    students: 1840,
    rating: 4.7,
    instructor: "Emma Davis"
  },
  {
    id: 8,
    title: "Python for Data Science",
    description: "Learn Python programming for data analysis, visualization, and machine learning applications.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    category: "Data Science",
    duration: "20 hours",
    level: "Intermediate",
    students: 3120,
    rating: 4.8,
    instructor: "Daniel Kim"
  },
  {
    id: 9,
    title: "Mobile App Development with React Native",
    description: "Build cross-platform mobile applications using your React knowledge and React Native framework.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    category: "Mobile",
    duration: "22 hours",
    level: "Intermediate",
    students: 2760,
    rating: 4.6,
    instructor: "Olivia Martinez"
  }
];

// All unique categories from our courses
const categories = ["All", ...Array.from(new Set(allCourses.map(course => course.category)))];

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Filter courses based on search query and selected category
  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || course.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <main className="flex-grow">
        <section className="py-12 bg-secondary/30">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">All Courses</h1>
              <p className="text-muted-foreground max-w-2xl">
                Browse our complete catalog of courses designed to help you master modern web development
                and advance your career in tech.
              </p>
            </div>
            
            {/* Search and Filter */}
            <div className="mb-12 space-y-6">
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search courses..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="overflow-x-auto">
                <div className="flex space-x-2 justify-center min-w-full pb-2">
                  {categories.map(category => (
                    <Button
                      key={category}
                      variant={activeCategory === category ? "default" : "outline"}
                      className="rounded-full"
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Courses Grid */}
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <div key={course.id}>
                    <CourseCard {...course} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No courses found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
