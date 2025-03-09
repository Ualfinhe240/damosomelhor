
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CourseCatalog from '@/components/CourseCatalog';
import LearningPath from '@/components/LearningPath';
import InstructorsSection from '@/components/InstructorsSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Smooth scroll to sections when clicking on navigation links
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.hash && target.hash.startsWith('#')) {
        const section = document.querySelector(target.hash);
        if (section) {
          e.preventDefault();
          window.scrollTo({
            top: section.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <main>
        <Hero />
        <CourseCatalog />
        <LearningPath />
        <InstructorsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
