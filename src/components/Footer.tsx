
import React from 'react';
import { Book, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary/40 text-foreground pt-16 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Book className="w-6 h-6 text-primary" />
              <span className="font-bold text-xl">Ualfinhe</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Your premier destination for comprehensive web development education. Learn, build, and grow with us.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <a 
                  key={social}
                  href={`https://${social}.com`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { text: "Courses", href: "/courses" },
                { text: "Learning Paths", href: "#paths" },
                { text: "Instructors", href: "#instructors" },
                { text: "About Us", href: "#about" },
                { text: "Contact", href: "#contact" }
              ].map((link) => (
                <li key={link.text}>
                  {link.href.startsWith('/') ? (
                    <Link 
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.text}
                    </Link>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.text}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {[
                { text: "Blog", href: "#blog" },
                { text: "Documentation", href: "#docs" },
                { text: "Community Forum", href: "#forum" },
                { text: "FAQ", href: "#faq" },
                { text: "Support", href: "#support" }
              ].map((link) => (
                <li key={link.text}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  1234 Web Avenue, Silicon Valley, CA 94043
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-muted-foreground">info@webwise.edu</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ualfinhe Academy. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-3">
            <a href="#terms" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#cookies" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
