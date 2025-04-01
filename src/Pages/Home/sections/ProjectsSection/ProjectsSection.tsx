import React, { useState } from "react";
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
        >
          {/* Aviso para deslizar */}
          <Typography
            variant="body1"
            color="white"
            style={{
              position: "absolute", // Posiciona o texto em relação ao contêiner
              top: "1px", // Distância do topo
              left: "85px", // Centraliza horizontalmente na tela
              transform: "translateX(-50%)", // Ajusta para que o texto fique centralizado
              zIndex: 1000, // Garante que o texto fique acima de outros elementos
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
            mt={2} // Margem superior para separar os pontos do carrossel
            style={{
              position: "absolute", // Garante que os pontos fiquem posicionados em relação ao carrossel
              bottom: "70px", // Posiciona os pontos abaixo do carrossel
              left: "50%", // Centraliza horizontalmente
              transform: "translateX(-50%)", // Ajusta o alinhamento central
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
