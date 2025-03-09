import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Book, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
      isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2 text-primary">
          <Book className="w-8 h-8" />
          <span className="font-bold text-xl">Ualfinhe</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <a href="#courses" className="text-foreground/80 hover:text-primary transition-colors">Courses</a>
            <a href="#paths" className="text-foreground/80 hover:text-primary transition-colors">Learning Paths</a>
            <a href="#instructors" className="text-foreground/80 hover:text-primary transition-colors">Instructors</a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="/signin" className="text-primary font-medium">Sign In</a>
            <a href="/signup" className="button-primary">Get Started</a>
          </div>
        </div>
        
        <button 
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 animate-slide-in">
          <nav className="flex flex-col space-y-4 mb-6">
            <a href="#courses" className="text-foreground/80 hover:text-primary py-2 px-4 rounded-md transition-colors">Courses</a>
            <a href="#paths" className="text-foreground/80 hover:text-primary py-2 px-4 rounded-md transition-colors">Learning Paths</a>
            <a href="#instructors" className="text-foreground/80 hover:text-primary py-2 px-4 rounded-md transition-colors">Instructors</a>
            <a href="#about" className="text-foreground/80 hover:text-primary py-2 px-4 rounded-md transition-colors">About</a>
          </nav>
          <div className="flex flex-col space-y-3">
            <a href="/signin" className="text-primary font-medium text-center py-2">Sign In</a>
            <a href="/signup" className="button-primary text-center">Get Started</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
