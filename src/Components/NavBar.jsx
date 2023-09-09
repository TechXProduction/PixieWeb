import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LogoBost from "../assets/logo-pixie.png";
import Menu from "../assets/Menu.svg"
import Close from "../assets/Close.svg"
import SearchIcon from '@mui/icons-material/Search';

import { Link } from 'react-router-dom';

import { Box } from "@mui/material";



export const NavBar = ({handleLetsChatClick, handleLetsPricingClick, handleLetsWorkClick, handleLetsLogoClick}) => {
  const is600 = useMediaQuery('(max-width:600px)');
  const is620 = useMediaQuery('(max-width:620px)');

const BoxWrapper = styled("div")({
  backgroundColor: "transparent",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: "100%",
  position: "fixed",
  zIndex: "9999",
});

const DivNavbarWrapper = styled("div")({
  border: "0px none",
  height: "82px",
  width: "100%",
});

const DivNavbar = styled("div")({
  backgroundColor: "white",
  boxShadow: "0px 0px 20px #2929291a",
  height: is600?"80px":"113px",
  //left: 0,
  position: "fixed",
  //top: 0,
  width: "100%",
  display:"flex",
  alignItems:"center",
  justifyContent:"space-between",
});

const Frame = styled(Container)({
  display: "flex",
  //justifyContent: "space-between",
  //margin: "0 auto",
  maxWidth: "1440px",
  padding: "14px 0",
  width: "100%",
  justifyContent:"space-between",
  marginTop:is620?"20px":""
});

const ElementLogoTurquesaSin = styled("img")({
  height: is600?"40px":"70px",
  minWidth: is600?"25px":"34px",
  marginLeft:"16px",
  marginTop:is600?"-11px":""

});

const Div = styled("div")({
  alignItems: "center",
  display: "flex",
  gap: "40px",
  position: "relative",
  width:"100%",
  justifyContent:"space-between",
  //width: "fit-content",
});

const TextWrapper = styled(Typography)({
  color: "black",
  fontSize: "16px",
  marginLeft:"80px",
  fontWeight: 600,
  letterSpacing: 0,
  lineHeight: "normal",
  position: "relative",
  width: "fit-content",
  textTransform: 'none',
  '&:hover': {
    // Estilos aplicados al hacer hover
    // Ejemplo: cambiar el color de fondo
    
    //textShadow: '1px 1px 1px black, -1px 1px 1px black, 1px -1px 1px black, -1px -1px 1px black',
    color:"#249BFF"
    //boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25);"
  },
});

const RoundButton = styled("div")({});

const ButtonStyled = styled(Button)({
  width: "100%",
  borderRadius: "999px",
  maxWidth: "146px",
  minHeight: "44px",
  maxHeight: "44px",
  boxShadow:
    "0px 5px 15px 0px rgba(37, 44, 97, 0.15), 0px 2px 4px 0px rgba(136, 144, 194, 0.20)",
  background:
    "linear-gradient(to bottom, rgb(112, 192, 178), rgb(1, 152, 182) 29.4%, rgb(0, 114.34, 137.06) 81.74%)",
  "&:hover": {
    background:
      "linear-gradient(to bottom, rgb(92, 172, 158), rgb(1, 132, 157) 29.4%, rgb(0, 94.34, 117.06) 81.74%)",
  },
});

const SignUp = styled("div")({
  color: "#ffffff",
  borderRadius: "999px",
  '&:hover': {
    background:"none"
  },
  background: "#2D2D2D",
  boxShadow:
    "0px 5px 15px 0px rgba(37, 44, 97, 0.15), 0px 2px 4px 0px rgba(136, 144, 194, 0.20)",
  width: "100%",
  minWidth: "143px",
  maxWidth: "143px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "41px",
  textTransform: "none",
  fontSize: "16px",
  fontWeight: 600,
});

const MobileButton = styled(Button)({
  
  background:"#30589E",
  marginTop:"-18px",
  color: "#ffffff",
  "&:hover": {
    background: "#30587E",
  },
});



const DropdownMenu = styled("div")({
  position: "absolute",
  top: "80px",
  backgroundColor: "#30589E",
  width: "100%",
  boxShadow: "0px 0px 20px #2929291a",
  display: "flex",
  justifyContent: "center",
});

const DropdownContent = styled(Container)({
  display: "flex",
  justifyContent: "center",
  flexDirection:"column",
  margin: "20px auto",
  maxWidth: "1440px",
  padding: "0",
  width: "100%",
  paddingBottom:"16px"
});

const MobileTextWrapper = styled(Typography)({
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: 600,
  letterSpacing: 0,
  lineHeight: "19.5px",
  width: "fit-content",
  textTransform: "none",
  display:"flex",
  textAlign:"center",
  justifyContent:"center",
  width:"100%",
  marginBottom:"34px",
});

const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
    setMenuOpen(!menuOpen);
  };

  

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  

  const isMobile = windowWidth <= 600;

  return (
    <BoxWrapper>
      <DivNavbarWrapper>
        <DivNavbar>
          <Frame>
          <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={{ cursor: "pointer" }}>
            <ElementLogoTurquesaSin
              alt="Element logo turquesa sin"
              src={LogoBost}
              onClick={handleLetsLogoClick}
              cursor="pointer"
              width={is600?"100%":"100%"}
              height={is600?"100%":"100%"}
            />
            </div></Link>
            {isMobile ? (
              <>
                <MobileButton onClick={handleToggleMenu}>
                  {showMenu ? <img src={Close} alt="MenuButton" /> : <img src={Menu} alt="MenuButton" />}
                  
                </MobileButton>
                {showMenu && (
                  <DropdownMenu>
                    <DropdownContent>
                    <Link to="/contact" style={{ textDecoration: 'none' }}>
                      <MobileTextWrapper onClick={() => { handleLetsWorkClick(); handleToggleMenu(); }} pointer>
                        Contacto</MobileTextWrapper>
                        </Link>
                      
                      <Box sx={{width:"100%", display:"flex", justifyContent:"center"}}>
                      <ButtonStyled onClick={ () => {handleLetsChatClick(); handleToggleMenu()}}>
                        <a style={{textDecoration:"none"}} href="https://api.whatsapp.com/send?phone=5216624003935">
                        <SignUp>Whatsapp</SignUp></a>
                      </ButtonStyled>
                      </Box>
                    </DropdownContent>
                  </DropdownMenu>
                )}
              </>
            ) : (
              <Div>
               <Link to="/contact" style={{ textDecoration: 'none' }}>
                <div style={{ cursor: "pointer" }}>
                  
                <TextWrapper onClick={handleLetsWorkClick}>
                  Contacto</TextWrapper></div></Link>
                  <div style={{ cursor: "pointer" }}>
                </div>
                <RoundButton>
                  
                  <SearchIcon  style={{color:"#307BD7"}}/>
                  
                </RoundButton>
                
              </Div>
            )}
          </Frame>
        </DivNavbar>
      </DivNavbarWrapper>
    </BoxWrapper>
  );
};

