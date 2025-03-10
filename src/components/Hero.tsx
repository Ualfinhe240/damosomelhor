
import React, { useState } from 'react';
import { ArrowRight, Code, Server, Database, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Hero = () => {
  const [showDemoVideo, setShowDemoVideo] = useState(false);

  return (
    <section className="pt-32 pb-20 overflow-hidden relative">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              Learn Web Development from Experts
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Master the art of <span className="text-gradient">modern web development</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Comprehensive courses, hands-on projects, and expert guidance to help you become a professional web developer.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#courses" className="button-primary flex items-center gap-2">
                Explore Courses <ArrowRight className="w-4 h-4" />
              </a>
              <button 
                onClick={() => setShowDemoVideo(true)} 
                className="button-secondary"
              >
                Watch Demo
              </button>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-white text-xs font-medium">
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <p>Join 10,000+ students already learning</p>
            </div>
          </div>
          
          <div className="relative animate-fade-in animation-delay-200">
            <div className="relative aspect-video glass-card rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="aspect-square bg-white/80 rounded-lg flex items-center justify-center shadow-sm animate-float">
                      <Code className="text-blue-500 w-8 h-8" />
                    </div>
                    <div className="aspect-square bg-white/80 rounded-lg flex items-center justify-center shadow-sm animate-float animation-delay-300">
                      <Server className="text-blue-500 w-8 h-8" />
                    </div>
                    <div className="aspect-square bg-white/80 rounded-lg flex items-center justify-center shadow-sm animate-float animation-delay-600">
                      <Database className="text-blue-500 w-8 h-8" />
                    </div>
                  </div>
                  <div className="font-mono text-sm bg-black/80 text-green-400 p-4 rounded-lg shadow-sm text-left overflow-hidden">
                    <p className="animate-pulse-subtle">&gt; Learning web development...</p>
                    <p className="mt-2">
                      <span className="text-blue-400">const</span> <span className="text-yellow-400">skills</span> = [
                      <span className="text-green-300">"HTML"</span>, 
                      <span className="text-green-300">"CSS"</span>, 
                      <span className="text-green-300">"JavaScript"</span>, 
                      <span className="text-green-300">"React"</span>];
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl"></div>
            <div className="absolute -left-20 -top-20 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-100/40 rounded-full blur-3xl"></div>

      {/* Demo Video Modal */}
      <Dialog open={showDemoVideo} onOpenChange={setShowDemoVideo}>
        <DialogContent className="sm:max-w-4xl">
          <DialogHeader>
            <DialogTitle>Web Development Course Demo</DialogTitle>
            <DialogDescription>
              Watch this quick demo to learn what our courses offer
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 aspect-video w-full bg-black rounded-md overflow-hidden">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
              title="Web Development Course Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;
