import React, { useState } from "react";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiJest,
  SiNodedotjs,
  SiTailwindcss,
  SiSass,
} from "react-icons/si";
import { IconType } from "react-icons";

// Mapa de cores por tecnologia
const techColors: { [key: string]: string } = {
  Javascript: "#c9b200",
  Typescript: "#3178c6",
  React: "#0d86d7",
  Next: "#000000",
  Git: "#f05032",
  HTML: "#e34f26",
  CSS: "#2965f1",
  Docker: "#2496ed",
  PostgreSQL: "#336791",
  MongoDB: "#47A248",
  Jest: "#C21325",
  NodeJS: "#339933",
  Tailwind: "#06B6D4",
  Sass: "#CF649A",
};

// Mapa de ícones por tecnologia
const techIcons: { [key: string]: IconType } = {
  Javascript: SiJavascript,
  Typescript: SiTypescript,
  React: SiReact,
  Next: SiNextdotjs,
  Git: SiGit,
  HTML: SiHtml5,
  CSS: SiCss3,
  Docker: SiDocker,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Jest: SiJest,
  NodeJS: SiNodedotjs,
  Tailwind: SiTailwindcss,
  Sass: SiSass,
};

const AboutSection: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <Container>
      {/* Sobre mim */}
      <Box id="about" pt={4} mb={3}>
        <Typography variant="h3" textAlign="center" fontWeight={600}>
          Sobre mim
        </Typography>
        <Box mt={2} textAlign="center">
          <Typography
            variant="body1"
            color="text.primary"
            sx={{
              maxWidth: "md",
              mx: "auto",
              fontSize: "1.5rem",
              lineHeight: 1.8,
            }}
          >
            Sou apaixonado por tecnologia e pelo desafio de transformar
            problemas em soluções inovadoras. Atualmente, curso Tecnólogo em
            Análise e Desenvolvimento de Sistemas e sou formado como Técnico em
            Informática. Ao longo da minha trajetória acadêmica, desenvolvi
            sólidos conhecimentos em Redes de Computadores, arquitetura de
            software e lógica de programação, aplicando-os em projetos práticos
            que ampliaram minha experiência na área.
          </Typography>
        </Box>
      </Box>

      <hr />

      {/* Competências */}
      <Box id="skills" pt={4} mb={3}>
        <Typography variant="h3" textAlign="center" fontWeight={600}>
          Competências
        </Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center">
        {Object.keys(techIcons).map((tech) => {
          const Icon = techIcons[tech]; // Obtendo o ícone correspondente
          return (
            <Grid item xs={6} sm={4} md={3} key={tech} textAlign="center">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "100px", // Mantém altura fixa para evitar movimentação
                }}
              >
                <IconButton
                  disableRipple // Remove efeito de clique
                  onMouseEnter={() => setHoveredTech(tech)}
                  onMouseLeave={() => setHoveredTech(null)}
                  sx={{
                    width: "80px", // Espaço fixo para o ícone
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "transparent", // Remove fundo no hover
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <Icon
                    size={hoveredTech === tech ? 70 : 50} // Aumenta ao passar o mouse
                    color={techColors[tech]}
                    style={{ transition: "all 0.2s ease-in-out" }}
                  />
                </IconButton>
                <Typography
                  variant="body1"
                  mt={1}
                  sx={{
                    color: techColors[tech],
                    fontWeight: 600,
                    opacity: hoveredTech === tech ? 1 : 0, // Transição suave de visibilidade
                    transition: "opacity 0.2s ease-in-out",
                    height: "1.5rem", // Mantém espaço reservado para evitar deslocamento
                  }}
                >
                  {tech}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>

      {/* Projetos */}
      <Box id="projects" pt={8} mb={3}>
        <Typography
          variant="h2"
          textAlign="center"
          fontWeight="bold"
        ></Typography>
      </Box>
    </Container>
  );
};

export default AboutSection;
