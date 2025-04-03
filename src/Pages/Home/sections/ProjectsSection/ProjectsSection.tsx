import React, { useState, useRef } from "react";
import { Box, Container, Typography, styled } from "@mui/material";
import { motion } from "framer-motion";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";

const ProjectsSection: React.FC = () => {
  const StyledExperience = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
  }));

  const projects = [
    {
      title: "",
      subtitle: "",
      srcImg: "/images/fswdonalds.png",
      description:
        "Foi utilizado tecnologias como JavaScript, TypeScript, CSS com Tailwind, React, Next.js, integração ao banco de dados PostgreSQL usando o Prisma.IO. O projeto foi pensado para ser responsivo, garantindo uma ótima experiência no mobile, e o deploy foi realizado na Vercel",
      technologies:
        "Technologies: JavaScript, HTML, CSS(Tailwind), React, Next.js, PostgreSQL, Prisma.IO",
      websiteURL: "https://donalds-react-next.vercel.app/fsw-donalds",
      codeURL: "https://github.com/fcofabyo/Donalds-react-next",
    },
    {
      title: "",
      subtitle: "",
      srcImg: "/images/gerenciador.png",
      description:
        "Desenvolvi um gerenciador de tarefas em React, trazendo em si o método CRUD (Criar, Ler, Atualizar e Deletar), permitindo uma gestão simples e eficiente das tarefas. O projeto foi desenvolvido com o intuito de aprender e praticar os conceitos de React e Tailwind. Foi utilizado o localStorage para armazenar as tarefas adicionadas.",
      technologies: "Technologies: JavaScript, HTML, CSS(Tailwind), React",
      websiteURL: "https://curso-de-react-liart.vercel.app/",
      codeURL: "https://github.com/fcofabyo/curso-de-react",
    },
    {
      title: "",
      subtitle: "",
      srcImg: "/images/labirinto.gif",
      description:
        "Um jogo de labirinto desenvolvido com JavaScript e HTML Canvas. O objetivo é encontrar a saída do labirinto enquanto evita obstáculos. O projeto foi criado para explorar conceitos de lógica de programação e manipulação de gráficos no Canvas.",
      technologies: "Technologies: JavaScript, HTML, Canvas",
      websiteURL: "https://labirinto-1bb7.vercel.app/",
      codeURL: "https://github.com/fcofabyo/labirinto",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Funções para capturar o toque na tela
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    const threshold = 50; // Distância mínima para considerar como swipe

    if (deltaX > threshold) {
      // Deslizar para a esquerda (próximo projeto)
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    } else if (deltaX < -threshold) {
      // Deslizar para a direita (projeto anterior)
      setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    }
  };

  return (
    <StyledExperience>
      <Container>
        <Box pt={4} pb={4}>
          <Typography
            variant="h3"
            textAlign="center"
            color="primary.contrastText"
          >
            Projetos
          </Typography>
        </Box>
        <Box
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
          pb={8}
          minHeight="500px"
          marginBottom="50px"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Aviso para deslizar */}
          <Typography
            variant="body1"
            color="white"
            style={{
              position: "absolute",
              top: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1000,
              fontSize: "15px",
            }}
          >
            Deslize para o lado
          </Typography>

          {/* Container fixo do carrossel */}
          <div style={{ width: "100%", maxWidth: "700px" }}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              style={{
                width: "100%",
                height: "750px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "hidden",
              }}
            >
              <ProjectCard
                title={projects[currentIndex].title}
                subtitle={projects[currentIndex].subtitle}
                srcImg={projects[currentIndex].srcImg}
                description={projects[currentIndex].description}
                technologies={projects[currentIndex].technologies}
                websiteURL={projects[currentIndex].websiteURL}
                codeURL={projects[currentIndex].codeURL}
              />
            </motion.div>
          </div>

          {/* Indicadores de navegação */}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={2}
            style={{
              position: "absolute",
              bottom: "70px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {projects.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: currentIndex === index ? "#000" : "#ccc",
                  margin: "0 5px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </StyledExperience>
  );
};

export default ProjectsSection;
