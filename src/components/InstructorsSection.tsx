
import React from 'react';
import InstructorProfile from './InstructorProfile';

const instructors = [
  {
    id: 1,
    name: "Especialista Frontend",
    role: "Especialista em UI/UX",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    bio: "Desenvolvedor frontend com mais de 8 anos de experiência especializado em HTML, CSS e JavaScript. Apaixonado por criar experiências web bonitas e acessíveis.",
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
    name: "Guru JavaScript",
    role: "Desenvolvedor Full-Stack",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    bio: "Desenvolvedor full-stack com foco em frameworks JavaScript. Trabalhou anteriormente em grandes empresas de tecnologia e agora se dedica ao ensino de tecnologias web.",
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
    name: "Arquiteto Backend",
    role: "Desenvolvedor de API",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    bio: "Engenheiro backend especializado em Node.js, bancos de dados e desenvolvimento de API. Criador de vários pacotes npm populares e contribuidor de código aberto.",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Design de API"],
    courses: 8,
    students: 6130,
    rating: 4.7,
    website: "https://example.com",
    linkedin: "https://linkedin.com"
  },
  {
    id: 4,
    name: "Desenvolvedor Sênior",
    role: "Instrutor Full-Stack",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    bio: "Desenvolvedor full-stack e educador com mais de 10 anos na indústria. Anteriormente CTO de uma startup de tecnologia e agora focado em ajudar novos desenvolvedores a terem sucesso.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Conheça Nossos Instrutores Especialistas</h2>
          <p className="text-muted-foreground max-w-2xl">
            Aprenda com profissionais da indústria com anos de experiência no mundo real.
            Nossos instrutores são apaixonados por compartilhar conhecimento e ajudá-lo a ter sucesso.
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
