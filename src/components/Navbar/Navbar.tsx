import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { styled } from "@mui/material";

export const StyledNavLink = styled("a")(() => ({
  textDecoration: "none",
  color: "inherit",
  fontSize: "1.2rem",
  transition: "color 0.3s ease", // Adiciona uma transição suave
  "&:hover": {
    color: "#bfa100", // Cor do hover (mesma do "Desenvolvedor de software")
  },
}));

export const StyledMobileToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    justifyContent: "end",
  },
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const StyledDesktopToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "space-evenly",
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Defina deslocamentos específicos para cada seção
      const offsets: { [key: string]: number } = {
        about: 50, // Deslocamento menor para "Sobre mim"
        projects: -100, // Deslocamento maior para "Projetos"
      };

      const offset = offsets[id] || 0; // Valor padrão caso o ID não esteja no objeto
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Fecha o menu mobile após o scroll
      handleClose();
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute">
        <StyledMobileToolbar>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={() => {
                handleSmoothScroll("about");
                handleClose(); // Fecha o menu mobile
              }}
            >
              <StyledNavLink>Sobre mim</StyledNavLink>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleSmoothScroll("skills");
                handleClose(); // Fecha o menu mobile
              }}
            >
              <StyledNavLink>Competências</StyledNavLink>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleSmoothScroll("projects");
                handleClose(); // Fecha o menu mobile
              }}
            >
              <StyledNavLink>Projetos</StyledNavLink>
            </MenuItem>
          </Menu>
        </StyledMobileToolbar>
        <StyledDesktopToolbar variant="regular">
          <MenuItem onClick={() => handleSmoothScroll("about")}>
            <StyledNavLink>Sobre mim</StyledNavLink>
          </MenuItem>
          <MenuItem onClick={() => handleSmoothScroll("skills")}>
            <StyledNavLink>Competências</StyledNavLink>
          </MenuItem>
          <MenuItem onClick={() => handleSmoothScroll("projects")}>
            <StyledNavLink>Projetos</StyledNavLink>
          </MenuItem>
        </StyledDesktopToolbar>
      </AppBar>
    </Box>
  );
}
