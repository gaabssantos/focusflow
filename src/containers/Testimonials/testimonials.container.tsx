import { useEffect, useState } from "react";
import { AuthorAvatar, AuthorImage, AuthorInfo, AuthorName, AuthorRole, Container, NavButton, NavigationButtons, SectionBackground, SectionTitle, TestimonialAuthor, TestimonialCard, TestimonialQuote, TestimonialRating, TestimonialsContainer, TestimonialsGrid, TestimonialsSection, TestimonialTag, TestimonialTags } from "./testimonials.styles";

import testimonial1 from "../../assets/testimonials/testimonials1.jpg";
import testimonial2 from "../../assets/testimonials/testimonials2.jpg";
import testimonial3 from "../../assets/testimonials/testimonials3.jpg";

type StarRatingProps = {
    rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  const stars = [];
  
  for (let i = 0; i < 5; i++) {
    stars.push(
      <svg 
        key={i}
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill={i < rating ? "currentColor" : "none"} 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    );
  }
  
  return <TestimonialRating>{stars}</TestimonialRating>;
};

// Componente principal
const Testimonials = () => {
  // Dados dos depoimentos
  const testimonialData = [
    {
      id: 1,
      quote: "O FocusFlow transformou minha rotina. Consigo manter o foco nas tarefas importantes e minha produtividade aumentou em mais de 40% nas primeiras semanas de uso.",
      author: "Marina Silva",
      role: "Designer de Produto",
      avatar: null,
      initials: "MS",
      rating: 5,
      tags: ["Produtividade", "Foco"]
    },
    {
      id: 2,
      quote: "Como empreendedor, gerencio diversos projetos simultaneamente. O FocusFlow me ajuda a organizar tudo com eficiência e nunca perder os prazos importantes.",
      author: "Rafael Mendes",
      role: "CEO da TechStart",
      avatar: testimonial1,
      initials: "RM",
      rating: 5,
      tags: ["Gestão de Projetos", "Organização"]
    },
    {
      id: 3,
      quote: "O método Pomodoro implementado pelo FocusFlow é perfeito. As estatísticas de produtividade me motivam a melhorar constantemente.",
      author: "Carla Duarte",
      role: "Desenvolvedora Full Stack",
      avatar: null,
      initials: "CD",
      rating: 4,
      tags: ["Técnica Pomodoro", "Estatísticas"]
    },
    {
      id: 4,
      quote: "Finalmente encontrei uma ferramenta que combina simplicidade e poder. Uso diariamente para planejar minhas aulas e pesquisas acadêmicas.",
      author: "Prof. Antônio Pereira",
      role: "Professor Universitário",
      avatar: testimonial2,
      initials: "AP",
      rating: 5,
      tags: ["Planejamento", "Educação"]
    },
    {
      id: 5,
      quote: "Nossa equipe de marketing adotou o FocusFlow há 3 meses e notamos uma melhora significativa na conclusão de tarefas e na qualidade das entregas.",
      author: "Juliana Costa",
      role: "Gerente de Marketing",
      avatar: testimonial3,
      initials: "JC",
      rating: 5,
      tags: ["Equipes", "Colaboração"]
    },
    {
      id: 6,
      quote: "Como freelancer, preciso gerenciar meu tempo com precisão. O FocusFlow me ajuda a manter o controle sobre meus projetos e horas trabalhadas.",
      author: "Lucas Oliveira",
      role: "Designer Freelancer",
      avatar: null,
      initials: "LO",
      rating: 4,
      tags: ["Gestão de Tempo", "Freelancer"]
    }
  ];
  
  // Estado para controlar a página atual dos depoimentos
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonialData.length / testimonialsPerPage);
  
  // Depoimentos a serem exibidos na página atual
  const currentTestimonials = testimonialData.slice(
    currentPage * testimonialsPerPage, 
    (currentPage + 1) * testimonialsPerPage
  );

  // Função para alterar a página
  const changePage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };
  
  // Efeito para auto-rotação dos depoimentos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [totalPages]);
  
  return (
    <TestimonialsSection id="depoimentos">
      <SectionBackground />
      <Container>
        <SectionTitle>
          <h2>O que dizem nossos usuários</h2>
          <p>Descubra como o FocusFlow está ajudando profissionais e estudantes a aumentar sua produtividade e foco.</p>
        </SectionTitle>
        
        <TestimonialsContainer>
          <TestimonialsGrid>
            {currentTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id}>
                <StarRating rating={testimonial.rating} />
                
                <TestimonialQuote>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p>{testimonial.quote}</p>
                </TestimonialQuote>
                
                <TestimonialTags>
                  {testimonial.tags.map((tag, index) => (
                    <TestimonialTag key={index}>{tag}</TestimonialTag>
                  ))}
                </TestimonialTags>
                
                <TestimonialAuthor>
                  <AuthorAvatar>
                    {testimonial.avatar ? (
                      <AuthorImage src={testimonial.avatar} alt={testimonial.author} />
                    ) : (
                      testimonial.initials
                    )}
                  </AuthorAvatar>
                  <AuthorInfo>
                    <AuthorName>{testimonial.author}</AuthorName>
                    <AuthorRole>{testimonial.role}</AuthorRole>
                  </AuthorInfo>
                </TestimonialAuthor>
              </TestimonialCard>
            ))}
          </TestimonialsGrid>
          
          <NavigationButtons>
            {Array.from({ length: totalPages }).map((_, index) => (
              <NavButton 
                key={index}
                active={index === currentPage}
                onClick={() => changePage(index)}
              />
            ))}
          </NavigationButtons>
        </TestimonialsContainer>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;