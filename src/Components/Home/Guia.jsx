import React from "react";
import { Box, Grid,Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import GuiaImg from "../../assets/Guia.png"


export const Guia = () =>{
    const is1060 = useMediaQuery('(max-width:1060px)');
    const is1024 = useMediaQuery('(max-width:1024px)');
    const is620 = useMediaQuery('(max-width:620px)');
      return( 
        <div style={{width:"100%",marginBottom:"100vh", display:"flex", justifyContent:"center", backgroundColor:"", paddingBottom:is1024?(is620?"":"500px"):""}}>
            <Box sx={{width:"90%", maxWidth:"1300px", marginInline:"5%",marginTop:"-70px", position:"absolute",background:"white"}}>
            <Grid container spacing={2}>
      {/* Primera columna */}
      <Grid item xs={is1024?12:6}>
        
          <Box
          data-aos="fade"
          data-aos-duration={1500}
          data-aos-delay="200"
           sx={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
            <Box sx={{display:"flex", justifyContent:"center", width:"100%", marginTop:is620?"40px":"160px"}}>
                
                <Typography 
                sx={{fontWeight:"bold", color:"#181A20", fontSize:is620?"22px":"40px", width:"90%"}}>
                TU GUÍA PARA VENDER O COMPRAR TU PROPIEDAD CON EL MEJOR TRATO.
                </Typography>
                
            </Box>

            <Box sx={{display:"flex", justifyContent:"center", width:"100%", marginTop:"32px"}}>
                
                <Typography sx={{color:"#49494E", fontSize:"20px", width:"90%"}}>
                Un asesor inmobiliario te acompaña desde la prospectación hasta la entrega de las llaves de tu casa.
                </Typography>
                
            </Box>

            <Box
            data-aos="fade"
            data-aos-duration={1500}
            data-aos-delay="300"
            sx={{display:"flex", position:"", marginTop:"32px", zIndex:"2", cursor:"pointer", justifyContent:"start", marginBottom:is620?"10px":"", marginLeft:"5%"}}>
                        <Typography sx={{background:"#30589E", maxWidth:"263px", borderRadius:"2px", color:"white", padding:"15px 20px", fontSize:is1060?"0.9rem":"1rem", fontWeight:"600", }}>

                        COMPRA-VENTA <span> </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="currentColor"><path d="M15.5553 0.670898H5.77756C5.53189 0.670898 5.3331 0.86969 5.3331 1.11536C5.3331 1.36102 5.53189 1.55982 5.77756 1.55982H14.4824L0.129975 15.9122C-0.0436504 16.0859 -0.0436504 16.3671 0.129975 16.5407C0.216766 16.6275 0.330516 16.6709 0.444225 16.6709C0.557933 16.6709 0.671641 16.6275 0.758475 16.5407L15.1109 2.18827V10.8931C15.1109 11.1388 15.3097 11.3376 15.5553 11.3376C15.801 11.3376 15.9998 11.1388 15.9998 10.8931V1.11536C15.9998 0.86969 15.801 0.670898 15.5553 0.670898Z" fill="currentColor"></path></svg>
                        </Typography>
                    </Box>
          </Box>
        
      </Grid>

      {/* Segunda columna */}
      <Grid item xs={is1024?12:6}>
        
          <Box
          data-aos="fade"
          data-aos-duration={1500}
          data-aos-delay="350"
           sx={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%", height:"100%"}}>
            <img style={{width:"90%", maxWidth:"488px"}} src={GuiaImg} alt="GuiaImg" />
          </Box>
        
      </Grid>
    </Grid>
            </Box>
        </div>
      )
}