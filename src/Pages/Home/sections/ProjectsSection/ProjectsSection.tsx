import React, { useState } from "react";
import { Box, Container, Typography, styled, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";

const ProjectsSection: React.FC = () => {
  const StyledExperience = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
  }));

  const projects = [
    {
      title: "Projeto 1",
      subtitle: "Jan 2025 - Mar 2025",
      srcImg: "/src/assets/images/project-trello.png",
      description:
        "Foi utilizado tecnologias como JavaScript, TypeScript, CSS com Tailwind, React, Next.js, integração ao banco de dados PostgreSQL usando o Prisma.IO. O projeto foi pensado para ser responsivo, garantindo uma ótima experiência no mobile, e o deploy foi realizado na Vercel",
      technologies:
        "Technologies: JavaScript, HTML, CSS(Tailwind), React, Next.js, PostgreSQL, Prisma.IO",
      websiteURL: "https://donalds-react-next.vercel.app/fsw-donalds",
      codeURL: "https://github.com/fcofabyo/Donalds-react-next",
    },
    {
      title: "Projeto 2",
      subtitle: "Jul 2024 - Jul 2024",
      srcImg: "/src/assets/images/project-financas.png",
      description:
        "Desenvolvi um gerenciador de tarefas em React, trazendo em si o método CRUD (Criar, Ler, Atualizar e Deletar), permitindo uma gestão simples e eficiente das tarefas. O projeto foi desenvolvido com o intuito de aprender e praticar os conceitos de React e Tailwind. Foi utilizado o localStorage para armazenar as tarefas adicionadas.",
      technologies: "Technologies: JavaScript, HTML, CSS(Tailwind), React",
      websiteURL: "https://curso-de-react-liart.vercel.app/",
      codeURL: "https://github.com/fcofabyo/curso-de-react",
    },
    {
      title: "Projeto Labirinto",
      subtitle: "Jul 2024 - Jul 2024",
      srcImg: "/src/assets/images/project1-craze-maze.gif",
      description:
        "Um jogo de labirinto desenvolvido com JavaScript e HTML Canvas. O objetivo é encontrar a saída do labirinto enquanto evita obstáculos. O projeto foi criado para explorar conceitos de lógica de programação e manipulação de gráficos no Canvas.",
      technologies: "Technologies: JavaScript, HTML, Canvas",
      websiteURL: "https://example.com/labirinto",
      codeURL: "https://github.com/fcofabyo/labirinto",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
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
          marginBottom="50px" // Garante que a altura do container nunca diminua
        >
          {/* Botão de voltar */}
          <IconButton
            onClick={handlePrev}
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              color: "white",
              width: "40px",
              height: "40px",
              backgroundColor: "black",
            }}
          >
            <ArrowBackIos
              style={{
                fontSize: "25px", // Ajusta o tamanho do ícone
                marginLeft: "8px", // Corrige o desalinhamento horizontal do ícone
              }}
            />
          </IconButton>

          {/* Container fixo do carrossel */}
          <div style={{ width: "100%", maxWidth: "600px" }}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              style={{
                width: "100%",
                height: "660px", // 🔥 Força o tamanho fixo, evitando movimentação das setas
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

          {/* Botão de avançar */}
          <IconButton
            onClick={handleNext}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              color: "white",
              width: "40px",
              height: "40px",
              backgroundColor: "black",
            }}
          >
            <ArrowForwardIos />
          </IconButton>
        </Box>
      </Container>
    </StyledExperience>
  );
};

export default ProjectsSection;
