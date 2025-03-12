
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';
import { ChevronRight } from 'lucide-react';

// Categorias para filtro
const categories = ["Todos", "Frontend", "Backend", "Full-Stack", "DevOps"];

// Dados de cursos de exemplo
const courses = [
  {
    id: 1,
    title: "Fundamentos Completos de HTML & CSS",
    description: "Domine os blocos de construção da web com HTML5 e CSS3. Aprenda a criar layouts responsivos e designs modernos.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "Frontend",
    duration: "12 horas",
    level: "Iniciante",
    students: 5840,
    rating: 4.8,
    instructor: "Maria Silva"
  },
  {
    id: 2,
    title: "JavaScript: Do Zero ao Herói",
    description: "Uma jornada abrangente pelo JavaScript moderno. Aprenda conceitos principais, recursos ES6+ e aplicações práticas.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: "Frontend",
    duration: "24 horas",
    level: "Intermediário",
    students: 4230,
    rating: 4.9,
    instructor: "David Santos"
  },
  {
    id: 3,
    title: "React.js para Aplicações Web Modernas",
    description: "Aprenda a construir aplicações web poderosas e interativas com React. Domine componentes, hooks e gerenciamento de estado.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    category: "Frontend",
    duration: "18 horas",
    level: "Intermediário",
    students: 3650,
    rating: 4.7,
    instructor: "Alex Martins"
  },
  {
    id: 4,
    title: "Node.js & Express: Desenvolvimento Backend",
    description: "Construa aplicações robustas do lado do servidor com Node.js e Express. Crie APIs RESTful e lide com autenticação.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "Backend",
    duration: "16 horas",
    level: "Intermediário",
    students: 2980,
    rating: 4.6,
    instructor: "Sofia Lima"
  },
  {
    id: 5,
    title: "Bootcamp de Desenvolvimento Web Full-Stack",
    description: "Curso abrangente de desenvolvimento full-stack cobrindo frontend, backend, bancos de dados e estratégias de deploy.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    category: "Full-Stack",
    duration: "48 horas",
    level: "Avançado",
    students: 1890,
    rating: 4.9,
    instructor: "Miguel Oliveira"
  },
  {
    id: 6,
    title: "Design e Desenvolvimento de APIs",
    description: "Aprenda a projetar e implementar APIs robustas que alimentam aplicações web e mobile modernas.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "Backend",
    duration: "14 horas",
    level: "Intermediário",
    students: 2250,
    rating: 4.5,
    instructor: "Tiago Costa"
  }
];

const CourseCatalog = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  
  const filteredCourses = activeCategory === "Todos" 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <section id="courses" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Nossos Cursos</h2>
          <p className="text-muted-foreground max-w-2xl">
            Mergulhe em nosso currículo abrangente projetado para levá-lo de iniciante a profissional.
            Cada curso é elaborado por especialistas da indústria e inclui projetos práticos.
          </p>
        </div>
        
        <div className="mb-12 overflow-x-auto">
          <div className="flex space-x-2 justify-center min-w-full pb-2">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-md"
                    : "bg-white/50 text-foreground hover:bg-white"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="animate-scale-in">
              <CourseCard {...course} />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Link 
            to="/courses" 
            className="button-secondary flex items-center gap-2"
          >
            Ver Todos os Cursos <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CourseCatalog;
