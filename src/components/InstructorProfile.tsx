
import React from 'react';
import { Globe, Linkedin, Twitter } from 'lucide-react';

interface InstructorProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  courses: number;
  students: number;
  rating: number;
  website?: string;
  twitter?: string;
  linkedin?: string;
}

const InstructorProfile = ({
  name,
  role,
  image,
  bio,
  skills,
  courses,
  students,
  rating,
  website,
  twitter,
  linkedin
}: InstructorProps) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden hover-lift">
      <div className="aspect-square relative overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-white/80 text-sm">{role}</p>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-3">{bio}</p>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <div className="grid grid-cols-3 gap-2 py-4 border-y border-border">
          <div className="text-center">
            <p className="text-xl font-bold">{courses}</p>
            <p className="text-xs text-muted-foreground">Courses</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">{students.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">Students</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">{rating.toFixed(1)}</p>
            <p className="text-xs text-muted-foreground">Rating</p>
          </div>
        </div>
        
        <div className="flex justify-center space-x-4">
          {website && (
            <a 
              href={website} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Globe className="w-5 h-5" />
            </a>
          )}
          {twitter && (
            <a 
              href={twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          )}
          {linkedin && (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstructorProfile;
