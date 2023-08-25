import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";

import { Form } from "./Form";
import CircleGris from "../assets/CircleGris.svg";
import CircleColor from "../assets/CircleColor.svg";
import CircleFinal from "../assets/CircleFinal.svg";

import "aos/dist/aos.css";

export const FormContact = () => {
  const is900 = useMediaQuery('(max-width:899px)');
  const is600 = useMediaQuery('(max-width:600px)');
  const is400 = useMediaQuery('(max-width:400px)');

  const [circleImage, setCircleImage] = useState(CircleGris);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [noForm, setNoForm] = useState(false)

  const handleButtonClick = () => {
    setIsTransitioning(true);
    setCircleImage(CircleColor);

    setTimeout(() => {
      setIsTransitioning(false);
      setCircleImage(CircleColor);
      
      
      
    }, 1700);

    setTimeout(()=>{
      setCircleImage(CircleFinal);
      setNoForm(true)
    }, 3200)

  };

  return (
    <Box  >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            maxWidth: "954px",
            width: "100%",
          }}
        >
          <Typography
          data-aos="fade-up" data-aos-duration={2000} data-aos-delay="1000"
            sx={{
              color: "white",
              fontSize: is400 ? "20px" : "32px",
              fontWeight: "600",
              lineHeight: "26px",
              marginLeft: is600 ? "16px" : "2%",
              marginBottom: is400 ? "23px" : "50px",
            }}
          >
            {noForm?"":"Let's chat"}
            
          </Typography>
        </Box>
      </Box>
      <Grid
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingBottom: "80px",
        }}
      >
        <Grid data-aos="fade-up" data-aos-duration={2000} data-aos-delay="1000"
          sx={{ display: "flex", margin: "16px" }}
          maxWidth={"954px"}
          justifyContent={"center"}
          container
          spacing={0}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: is900 ? "center" : "",
              
              
            }}
            xs={12}
            sm={6}
            md={6}
            key={1}
          >
            {/* <Form handleButtonClick={handleButtonClick} /> */}
            {noForm? (<Grid  sx={{width:"100%", maxWidth:"348px" }}>
              <Grid sx={{display:"flex",justifyContent:"center",maxWidth:is600?"100%":"372px", marginTop:is900?"-160px":"-50px", alignItems:is900?"":"center"}}>
              <Typography sx={{color :"#F2ED8C", fontSize:is400?"16px":"24px", lineHeight:is400?"24px":"42px",fontWeight:"500",marginBottom:is600?"50px":"0", textAlign:is600?"center":""}}>
              Thank you for getting in touch, we will get back to you as soon as possible
              </Typography>
              </Grid>
            </Grid>) : (<Form data-aos="fade-up" data-aos-duration={2000} data-aos-anchor-placement="top-center" handleButtonClick={handleButtonClick} />)}

            


          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              
            }}
            xs={12}
            sm={6}
            md={6}
            key={2}
          >
            <Box
              sx={{
                maxWidth: "466px",
                width: "100%",
                height: "auto",
                justifyContent: "center",
                marginLeft: is900 && !is600 ? "16px" : "0",
                marginTop: is600 ? "0" : "50px",
                position: "relative",
                minHeight:"498px",
              
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "auto",
                  pointerEvents: "none",
                  transition: "transform 1.5s linear",
                  transform: isTransitioning ? "rotate(800deg)" : "none",
                }}
                src={circleImage}
                alt="Circle"
              />
              
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};





