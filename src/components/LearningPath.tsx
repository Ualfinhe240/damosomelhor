
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const paths = [
  {
    id: 1,
    title: "Desenvolvedor Frontend",
    description: "Domine HTML, CSS, JavaScript e frameworks frontend modernos para construir interfaces de usuário bonitas.",
    icon: "🎨",
    color: "from-blue-400 to-blue-600",
    steps: [
      "Fundamentos de HTML & CSS",
      "Essenciais de JavaScript",
      "Web Design Responsivo",
      "Framework React.js",
      "Padrões Avançados de Frontend"
    ],
    duration: "4 meses",
    projectCount: 8
  },
  {
    id: 2,
    title: "Desenvolvedor Backend",
    description: "Aprenda programação server-side, bancos de dados e desenvolvimento de APIs para potencializar aplicações modernas.",
    icon: "⚙️",
    color: "from-green-400 to-green-600",
    steps: [
      "Fundamentos de Programação",
      "Node.js & Express",
      "Design de Banco de Dados",
      "Desenvolvimento de API RESTful",
      "Autenticação & Segurança"
    ],
    duration: "4 meses",
    projectCount: 6
  },
  {
    id: 3,
    title: "Desenvolvedor Full-Stack",
    description: "Torne-se um desenvolvedor versátil com habilidades em tecnologias frontend e backend.",
    icon: "🚀",
    color: "from-purple-400 to-purple-600",
    steps: [
      "Fundamentos Web",
      "Desenvolvimento Frontend",
      "Desenvolvimento Backend",
      "Integração de Banco de Dados",
      "Projetos Full-Stack"
    ],
    duration: "8 meses",
    projectCount: 12
  }
];

const LearningPath = () => {
  return (
    <section id="paths" className="py-20">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trilhas de Aprendizado Guiadas</h2>
          <p className="text-muted-foreground max-w-2xl">
            Siga jornadas de aprendizado estruturadas projetadas para levá-lo dos fundamentos à maestria.
            Cada trilha inclui cursos sequenciados cuidadosamente e projetos práticos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {paths.map((path, index) => (
            <div 
              key={path.id}
              className="glass-card rounded-xl overflow-hidden hover-lift animate-slide-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`h-3 bg-gradient-to-r ${path.color}`}></div>
              <div className="p-8">
                <div className="mb-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{path.title}</h3>
                    <p className="text-sm text-muted-foreground">{path.description}</p>
                  </div>
                  <div className="text-3xl">{path.icon}</div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {path.steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`text-green-500`}>
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <p className="text-sm">{step}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between text-sm text-muted-foreground mb-6">
                  <div>
                    <span className="font-medium text-foreground">{path.duration}</span>
                    <span> duração</span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">{path.projectCount}</span>
                    <span> projetos</span>
                  </div>
                </div>
                
                <Link 
                  to={`/paths/${path.id}`}
                  className="w-full flex items-center justify-center gap-2 button-primary"
                >
                  Começar a Aprender <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPath;
