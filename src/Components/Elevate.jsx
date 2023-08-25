import React from "react";
import useMediaQuery from '@mui/material/useMediaQuery';

import VideoPixie from "../assets/Video.mp4"

import { Box, Grid, Typography, Button } from "@mui/material";

export const Elevate = ({handleLetsChatClick}) => {
    const is990 = useMediaQuery('(max-width:990px)');
    const is620 = useMediaQuery('(max-width:620px)');

    const overlayStyle = {
      position: "absolute",
      top: 0,
      right: 0,
      width: "100%",
      height: "100%",
      zIndex: 2,
    };

    return (
      <div
        style={{
          position: "relative",
          paddingBottom: is620 ? "711px" : "773px",
          overflow: "hidden",
          
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
              height: "100%",
              objectFit: "cover",
              background:"linear-gradient(90deg, rgba(0, 0, 0, 0.50) 49.48%, rgba(0, 0, 0, 0.00) 100%)"
            }}
          >
            <source src={VideoPixie} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        <div style={overlayStyle}>
          <Grid
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              paddingBottom: "160px",
              paddingTop: "150px",
              zIndex: 2,
            }}
          >
            <Grid
              sx={{ display: "flex", margin: is990 ? "16px" : "" }}
              maxWidth={"951px"}
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
                  fontSize: is620 ? "36px" : "90px",
                  color: "white",
                  lineHeight: is620 ? "46px" : "94px",
                  marginBottom: "40px",
                  textShadow:"1px",
                  textShadow: "0px 0px 15px rgba(0,0,0,0.3)", // Agregar sombra al texto
                            // Si deseas agregar contorno:
                            // WebkitTextStroke: "1px black",

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
                  fontSize: "20px",
                  marginBottom: "83px",
                  color: "white",
                  lineHeight: "24px",
                  textShadow: "0px 0px 15px rgba(0,0,0,0.3)",
                }}
              >
                En Pixie brindamos un servicio de valor con la mejor experiencia.
              </Typography>
              <Box></Box>
            </Grid>
          </Grid>
        </div>
      </div>
    );
};

