
import React from 'react';
import InstructorProfile from './InstructorProfile';

const instructors = [
  {
    id: 1,
    name: "Maria Johnson",
    role: "Frontend Specialist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "Frontend developer with 8+ years of experience specializing in HTML, CSS, and JavaScript. Passionate about creating beautiful and accessible web experiences.",
    skills: ["HTML", "CSS", "JavaScript", "React", "UI/UX"],
    courses: 12,
    students: 8650,
    rating: 4.8,
    website: "https://example.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com"
  },
  {
    id: 2,
    name: "David Chen",
    role: "JavaScript Expert",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    bio: "Full-stack developer with a focus on JavaScript frameworks. Previously worked at major tech companies and now dedicated to teaching web technologies.",
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "Express"],
    courses: 15,
    students: 10250,
    rating: 4.9,
    website: "https://example.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com"
  },
  {
    id: 3,
    name: "Sophia Lee",
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    bio: "Backend engineer specialized in Node.js, databases, and API development. Creator of several popular npm packages and open-source contributor.",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "API Design"],
    courses: 8,
    students: 6130,
    rating: 4.7,
    website: "https://example.com",
    linkedin: "https://linkedin.com"
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Full-Stack Instructor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "Full-stack developer and educator with 10+ years in the industry. Previously CTO of a tech startup and now focused on helping new developers succeed.",
    skills: ["React", "Node.js", "MongoDB", "AWS", "DevOps"],
    courses: 20,
    students: 15480,
    rating: 4.9,
    website: "https://example.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com"
  }
];

const InstructorsSection = () => {
  return (
    <section id="instructors" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Instructors</h2>
          <p className="text-muted-foreground max-w-2xl">
            Learn from industry professionals with years of real-world experience.
            Our instructors are passionate about sharing their knowledge and helping you succeed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <div 
              key={instructor.id} 
              className="animate-slide-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <InstructorProfile {...instructor} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
