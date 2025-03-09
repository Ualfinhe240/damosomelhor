
import React from 'react';
import { Clock, Users, Star } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  level: string;
  students: number;
  rating: number;
  instructor: string;
}

const CourseCard = ({ 
  title, 
  description, 
  image, 
  category,
  duration,
  level,
  students,
  rating,
  instructor 
}: CourseCardProps) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden hover-lift">
      <div className="aspect-video relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/80 backdrop-blur-sm text-primary text-xs font-medium rounded-full">
            {category}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold line-clamp-2">{title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="bg-secondary px-3 py-1 rounded-full text-xs font-medium">
            {level}
          </div>
        </div>
        
        <div className="pt-4 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-medium">
              {instructor.charAt(0)}
            </div>
            <span className="text-sm">{instructor}</span>
          </div>
          
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-muted-foreground" />
              <span>{students.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span>{rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
