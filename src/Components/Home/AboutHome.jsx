import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

export const AboutHome = ()=>{
    const is1060 = useMediaQuery('(max-width:1060px)');
    const is1024 = useMediaQuery('(max-width:1024px)');
    const is620 = useMediaQuery('(max-width:620px)');
    return(
        <div style={{background:"#0c141e", marginTop:"", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <Box sx={{background:"#0c141e",position:"relative", width:"100%", marginInline:"5%", marginTop:is1024?"":"0%", paddingTop:is1024?"60vh":"30vh", paddingBottom:is1024?"30vh":"30vh"}}>
                <Grid sx={{display:"flex", alignItems:is1024?"flex-end":"center"}} container spacing={2}>
                    <Grid item xs={is1024?12:8.5}>
                        <Box sx={{display:"flex", flexDirection:"column"}}> 
                            <Typography 
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-delay="200"
                             sx={{color:"#307BD7", fontSize:"18px", marginBottom:"20px"}}>
                                SOBRE NOSOTROS
                            </Typography>
                            <Typography
                            data-aos="fade"
                            data-aos-duration={1500}
                            data-aos-delay="800"
                             sx={{color:"white", fontSize:is620?"26px":"40px", width:"100%", fontWeight:"500", width:"95%"}}>
                            SOMOS UNA MARCA INMOBILIARIA BASADA EN INNOVACIÓN Y EXPERIENCIA
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={is1024?12:3.5}>
                        
                    <Box 
                    data-aos="fade"
                    data-aos-duration={1500}
                    data-aos-delay="1000"
                     sx={{display:"flex", position:"absolute", zIndex:"2", cursor:"pointer", justifyContent:"end", marginBottom:is620?"10px":""}}>
                        <Typography sx={{background:"#30589E", maxWidth:"263px", borderRadius:"2px", color:"white", padding:"15px 20px", fontSize:is1060?"0.9rem":"1rem", fontWeight:"600", }}>

                        MÁS SOBRE NOSOTROS <span> </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="currentColor"><path d="M15.5553 0.670898H5.77756C5.53189 0.670898 5.3331 0.86969 5.3331 1.11536C5.3331 1.36102 5.53189 1.55982 5.77756 1.55982H14.4824L0.129975 15.9122C-0.0436504 16.0859 -0.0436504 16.3671 0.129975 16.5407C0.216766 16.6275 0.330516 16.6709 0.444225 16.6709C0.557933 16.6709 0.671641 16.6275 0.758475 16.5407L15.1109 2.18827V10.8931C15.1109 11.1388 15.3097 11.3376 15.5553 11.3376C15.801 11.3376 15.9998 11.1388 15.9998 10.8931V1.11536C15.9998 0.86969 15.801 0.670898 15.5553 0.670898Z" fill="currentColor"></path></svg>
                        </Typography>
                    </Box>
                    </Grid>
                </Grid>
            </Box>
            
        </div>
    )
}