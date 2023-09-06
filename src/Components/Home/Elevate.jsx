import React from "react";
import useMediaQuery from '@mui/material/useMediaQuery';

import VideoPixie from "./../../assets/Video.mp4"

import Casaimg from "./../../assets/casa.png"
import Rematesimg from "./../../assets/remates.png"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { Box, Grid, Typography, Button } from "@mui/material";

import { AboutHome } from "./AboutHome";

export const Elevate = ({handleLetsChatClick}) => {
    const is990 = useMediaQuery('(max-width:990px)');
    const is1024 = useMediaQuery('(max-width:1024px)');
    const is620 = useMediaQuery('(max-width:620px)');
    const is391 = useMediaQuery('(max-width:391px)');

    const overlayStyle = {
      position: "absolute",
      top: 0,
      right: 0,
      width: "100%",
      height: "100%",
      zIndex: 1,
    };

    return (
      <div style={{display:"flex", flexDirection:"column", position:"relative"}}>
      <div
        style={{
          position: "relative",
          //paddingBottom: is620 ? "700px" : "500px",
          //overflow: "hidden",
         
          background:"green",
          background: `url("${VideoPixie}")`,
          backgroundSize: "cover",
         
        }}
      >
        <video
            autoPlay
            muted
            loop
            style={{
              width: "100%",
              height: is1024?(is620?"550px":"550px"):"900px",
              objectFit: "cover",
              background:"linear-gradient(90deg, rgba(0, 0, 0, 0.50) 49.48%, rgba(0, 0, 0, 0.00) 100%)"
            }}
          >
            <source src={VideoPixie} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Box sx={{display:"flex", justifyContent:"center"}}>
        <div style={overlayStyle}>
          <Box sx={{display:"flex", justifyContent:"center"}}>
            <Box sx={{width:"1440px"}}>
            
          <Grid
            sx={{
              width: "100%",
              display: "flex",
              //justifyContent: "center",
              paddingBottom: "190px",
              paddingTop: is1024?"150px":"160px",
              zIndex: 2,
              justifyContent:"center",
              //marginInline:"5%",
              
              alignItems:is1024?"":"center",
              
              height:"1000px",
              
            }}
          >
            <Grid
              sx={{ display: "flex", margin: is990 ? "16px" : "", marginInline:"5%" }}
              //maxWidth={"951px"}
              container
              spacing={0}
              direction={"column"}
              columns={{ xs: 12, sm: 12, md: 12 }}
            >
              <Typography
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-delay="200"
                sx={{
                  fontWeight: "500",
                  fontSize: is1024 ? (is620?"27px":"48px") : "76px",
                  color: "white",
                  lineHeight: is1024 ? (is620?"46px":"68px")  : "94px",
                  marginBottom: "40px",
                  textShadow:"1px",
                  textShadow: "0px 0px 15px rgba(0,0,0,0.3)", // Agregar sombra al texto
                            // Si deseas agregar contorno:
                            // WebkitTextStroke: "1px black",
                  width:"80%",
                  fontWeight:"600",
                  maxWidth:"900px"
                }}
              >
                CONOCE NUESTROS REMATES INMOBILIARIOS
              </Typography>
              <Typography
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-delay="200"
                sx={{
                  fontWeight: "400",
                  fontSize: is1024?"14px":"20px",
                  marginBottom: "83px",
                  color: "white",
                  lineHeight: "24px",
                  textShadow: "0px 0px 15px rgba(0,0,0,0.3)",
                  width:"80%"
                }}
              >
                En Pixie brindamos un servicio de valor con la mejor experiencia.
              </Typography>
              
            </Grid>
            <Box 
            data-aos="fade"
            data-aos-duration={1500}
            data-aos-delay="200"
            sx={{ borderRadius:"6px",background:"#30589E", position:"absolute", marginTop:is1024?"380px":"750px", width:"90%", maxWidth:"1300px"}}>
            <Grid sx={{alignItems:"center"}} container spacing={2}>
            <Grid item xs={is1024?12:5}>
              <Box sx={{display:"flex", flexDirection:"column", padding:"30px"}}>
                <Typography
                data-aos="fade"
                data-aos-duration={1500}
                data-aos-delay="200"
                 sx={{color:"white", fontSize:"20px", lineHeight:"1.5em", fontWeight:"500"}}>
                Llámanos, o manda mensaje para encontrar tu propiedad ideal.
                </Typography>
                <a style={{textDecoration:"none"}} href="https://wa.link/dqjg26">
                <Typography data-aos="fade-down"
                data-aos-duration={1500}
                data-aos-delay="200"
                 sx={{marginTop:"8px",cursor:"pointer",color:"white",background:"#69727d", width:"100%",display:"flex",alignItems:"center", justifyContent:"center",padding:"12px 24px",borderRadius:"8px",olor:"white", fontSize:"20px", lineHeight:"1.5em", fontWeight:"500", 
                transition:"0.3s",
                '&:hover': {
                  background: '#25D366', // Cambiamos el color de fondo al color de WhatsApp al pasar el cursor
                  color: 'white', // Cambiamos el color del texto al pasar el cursor
                  '& .whatsapp-icon': {
                    color: 'white', // Cambiamos el color del ícono al pasar el cursor
                  },}
              }}>
                <WhatsAppIcon sx={{ fontSize: 20, marginRight: '0.5em' }} />
                662 236 4568
                </Typography></a>
                
              </Box>
            </Grid>
            <Grid item xs={is1024?6:4}>
            <Box 
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-delay="1000"
            sx={{display:"flex", flexDirection:"column", padding:"20px"}}>
            <Box sx={{display:"flex", width:"100%", justifyContent:"center"}}>
              <img style={{width:"50px", height:"50px"}} src={Casaimg} alt="casa" />
              </Box>
              <Box sx={{display:"flex", width:"100%", justifyContent:"center"}}>
                <Typography sx={{color:"white", textAlign:"center", fontSize:is620?"14px":"20px", lineHeight:"1.5em", fontWeight:"500"}}>
                COMPRA VENTA
                </Typography>
                </Box>
                
              </Box>
            </Grid>
            <Grid item xs={is1024?6:3}>
            <Box 
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-delay="1200"
            sx={{display:"flex", width:"100%", justifyContent:"center"}}>
            <Box sx={{display:"flex", flexDirection:"column", padding:"20px"}}>
            <Box sx={{display:"flex", width:"100%", justifyContent:"center"}}>
            <img style={{width:"50px", height:"50px"}} src={Rematesimg} alt="casa" />
            </Box>
                <Typography sx={{height:is391?"42px":"",color:"white", fontSize:is620?"14px":"20px", lineHeight:"1.5em", fontWeight:"500"}}>
                REMATES
                </Typography>
                
              </Box></Box>
            </Grid>
            </Grid>
            </Box>
            
          </Grid>
          
          </Box>
          </Box>
         
        </div>
        </Box>
        <div>
      <Box sx={{position:"relative",display:"flex", justifyContent:"center", width:"100%", background:"#0c141e", marginTop:"-7px"}}>
        <Box sx={{width:"100%",maxWidth:"1440px"}}>
          <AboutHome/>
        </Box>

      </Box>
      </div>
      </div>
      
      </div>
    );
};

