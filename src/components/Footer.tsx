
import React from 'react';
import { Book, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
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
              Seu destino principal para educação abrangente em desenvolvimento web. Aprenda, construa e cresça conosco.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              {[
                { text: "Cursos", href: "/courses" },
                { text: "Trilhas de Aprendizado", href: "#paths" },
                { text: "Instrutores", href: "#instructors" },
                { text: "Sobre Nós", href: "#about" },
                { text: "Contato", href: "#contact" }
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
            <h3 className="font-bold text-lg mb-4">Recursos</h3>
            <ul className="space-y-3">
              {[
                { text: "Blog", href: "#blog" },
                { text: "Documentação", href: "#docs" },
                { text: "Fórum da Comunidade", href: "#forum" },
                { text: "FAQ", href: "#faq" },
                { text: "Suporte", href: "#support" }
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
            <h3 className="font-bold text-lg mb-4">Contate-nos</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  São Roque Da Lameira
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-muted-foreground">920572780</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-muted-foreground">info@webwise.edu</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Academia Ualfinhe. Todos os direitos reservados.</p>
          <div className="flex justify-center space-x-6 mt-3">
            <a href="#terms" className="hover:text-primary transition-colors">Termos de Serviço</a>
            <a href="#privacy" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#cookies" className="hover:text-primary transition-colors">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
