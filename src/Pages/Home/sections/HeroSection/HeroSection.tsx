import { Box, Container, Grid, Typography, styled } from "@mui/material";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import Typewriter from "../../../../components/Typewriter/Typewriter";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import CV from "../../../../assets/pdfs/Open.pdf";

const HeroSection: React.FC = () => {
  const StyledImg = styled("img")(({ theme }) => ({
    width: "80%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "50%",
    position: "relative",
  }));

  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      display: "block",
      padding: "20px",
      paddingTop: "100px",
      paddingBottom: "40px",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
      paddingTop: "100px",
      height: "100vh",
    },
  }));

  const handleDownload = () => {
    console.log("download");
    // Create a link element
    const link = document.createElement("a");
    link.href = CV;
    link.download = "example.pdf"; // Set the download attribute to specify the file name
    // Append the link to the body
    document.body.appendChild(link);
    // Trigger the click event
    link.click();
    // Remove the link from the body
    document.body.removeChild(link);
  };

  const handleEmail = () => {
    const emailAddress = "example@example.com";
    const subject = "Subject";
    const body = "Hello! I saw your portfolio...";

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative" pb={3}>
                <Box width={"145%"} position="absolute" top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box textAlign="center">
                  <StyledImg src={Avatar} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography
                color="primary.contrastText"
                variant="h1"
                pb={1}
                textAlign="center"
              >
                Francisco Fabio
              </Typography>
              <Typewriter
                text="I'm a Software Developer"
                delay={100}
                variant="h3"
                color="#bfa100"
              />
              <Box mt={4}>
                <Grid
                  container
                  spacing={3}
                  display="flex"
                  justifyContent="center"
                >
                  <Grid item xs={10} md={4}>
                    <StyledButton onClick={() => handleDownload()}>
                      <DownloadIcon />
                      <Typography>Download CV</Typography>
                    </StyledButton>
                  </Grid>
                  <Grid item xs={10} md={4}>
                    <StyledButton onClick={() => handleEmail()}>
                      <EmailIcon />
                      <Typography>Contact me</Typography>
                    </StyledButton>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default HeroSection;
