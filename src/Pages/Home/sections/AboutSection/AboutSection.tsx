import {
  Box,
  Container,
  Grid,
  Typography,
  styled,
  Chip,
  Paper,
} from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

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
  AWS: "#ff9900",
  Prisma: "#0c344b",
  "Material UI": "#007fff",
  Figma: "#a259ff",
};

// Chip estilizado com hover dinâmico
const StyledChip = styled(Chip)<{ tech: string }>(({ tech }) => ({
  fontSize: "1.3rem",
  padding: "10px",
  border: `2px solid ${techColors[tech]}`,
  color: techColors[tech],
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: techColors[tech],
    color: "#fff",
  },
}));

// Card estilizado com efeito de hover e profundidade
const StyledCard = styled(Paper)(({ theme }) => ({
  padding: "20px",
  textAlign: "center",
  marginBottom: "10px",
  borderRadius: "12px",
  transition: "transform 0.3s, background-color 0.3s",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
    transform: "scale(1.05)",
  },
}));

const AboutSection: React.FC = () => {
  const skillsSet = [
    "Javascript",
    "Typescript",
    "React",
    "Next",
    "Git",
    "HTML",
    "CSS",
    "Docker",
    "AWS",
    "Prisma",
    "Material UI",
    "Figma",
  ];

  return (
    <Container maxWidth="lg">
      {/* About me título */}
      <Box id="about" pt={8} mb={4}>
        <Typography variant="h3" textAlign="center" fontWeight={600}>
          About me
        </Typography>
      </Box>

      {/* Experience e Education */}
      <Grid container spacing={3} justifyContent="center" pb={4}>
        <Grid item xs={12} sm={6} md={4}>
          <AnimationComponent moveDirection="right">
            <StyledCard elevation={3}>
              <WorkspacePremiumIcon color="primary" sx={{ fontSize: 40 }} />
              <Typography variant="h6" fontWeight={600} mt={1}>
                Experience
              </Typography>
              <Typography color="text.secondary">1+ years</Typography>
              <Typography color="text.secondary">
                Frontend Development
              </Typography>
            </StyledCard>
          </AnimationComponent>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <AnimationComponent moveDirection="left">
            <StyledCard elevation={3}>
              <SchoolIcon color="primary" sx={{ fontSize: 40 }} />
              <Typography variant="h6" fontWeight={600} mt={1}>
                Education
              </Typography>
              <Typography color="text.secondary">Bachelors Degree</Typography>
              <Typography color="text.secondary">
                Systems Analysis and Development
              </Typography>
            </StyledCard>
          </AnimationComponent>
        </Grid>
      </Grid>

      {/* Texto sobre você */}
      <Box pb={5}>
        <Typography
          variant="body1"
          color="text.primary"
          textAlign="center"
          maxWidth="md"
          mx="auto"
          fontSize="1.3rem" // AUMENTO DO TAMANHO
          lineHeight={1.8} // Espaço entre linhas mais confortável
        >
          Sou apaixonado por tecnologia e pelo desafio de transformar problemas
          em soluções inovadoras. Atualmente, curso Tecnólogo em Análise e
          Desenvolvimento de Sistemas e sou formado como Técnico em Informática.
          Ao longo da minha trajetória acadêmica, desenvolvi sólidos
          conhecimentos em Redes de Computadores, arquitetura de software e
          lógica de programação, aplicando-os em projetos práticos que ampliaram
          minha experiência na área.
        </Typography>
      </Box>

      <hr />

      {/* Skills */}
      <Box id="skills" pt={4} mb={3}>
        <Typography variant="h4" textAlign="center" fontWeight={600}>
          Skills
        </Typography>
      </Box>
      <Grid container spacing={2} justifyContent="center" mb={5}>
        {skillsSet.map((skill, index) => (
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            lg={4}
            key={index}
            display="flex"
            justifyContent="center"
          >
            <StyledChip label={skill} tech={skill} variant="outlined" />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AboutSection;
