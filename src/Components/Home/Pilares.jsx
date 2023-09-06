import React from "react"
import { Box, Typography,Grid } from "@mui/material"
import useMediaQuery from '@mui/material/useMediaQuery';
import img1 from "../../assets/icon-educacion-1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"


export const Pilares = ()=>{
    const is1024 = useMediaQuery('(max-width:1024px)');
    const is800 = useMediaQuery('(max-width:800px)');
    const is620 = useMediaQuery('(max-width:620px)');
    return(
        <>
        <Box sx={{display:"flex", justifyContent:"column", width:"100%"}}>
            <Box sx={{display:"flex", width:"100%", justifyContent:"center"}}>
                <Box sx={{display:"flex", flexDirection:"column",width:"100%"}}>
                <Typography
                data-aos="fade"
                data-aos-duration={1500}
                data-aos-delay="200"
                 sx={{color:"#307BD7", textAlign:"center", fontSize:"18px",fontWeight:"600"}}>
                PIXIE
                </Typography>

                <Typography
                data-aos="fade"
                data-aos-duration={1500}
                data-aos-delay="400"
                 sx={{fontSize:"46px", textAlign:"center", fontWeight:"600", color:"#181A20",marginBottom:"36px"}}>
                NUESTROS PILARES
                </Typography>

                <Box sx={{width:"100%",background:"",display:"flex",justifyContent:"center"}}>

                    <Box sx={{width:"90%",background:""}}>
                    <Grid container spacing={2}>
                        <Grid 
                        data-aos="zoom-in"
                        data-aos-duration={1500}
                        data-aos-delay={is620?"200":"200"}
                        item xs={is800?12:4} >
                            <Box sx={{display:"flex", flexDirection:"column"}}>
                            <Box sx={{display:"flex", justifyContent:"center", width:is800?"100%":"95%", background:"white"}}>
                                    <img src={img1} style={{ objectFit: "cover", width: "100%", height: "100%", maxWidth:"178px" }} alt="" />
                                
                            </Box>
                            <Box sx={{display:"flex", justifyContent:"center", width:is800?"100%":"95%", background:"white"}}>
                            <Typography sx={{height:"133px",padding:"5%", fontSize:"32px", fontWeight:"600", textAlign:"center"}}>
                                Educación continua
                                </Typography>
                            </Box>
                            <Box sx={{display:"flex", justifyContent:"center", width:is800?"100%":"95%", background:"white"}}>
                            <Typography sx={{padding:"5%", fontSize:"14px", fontWeight:"600",textAlign:"center"}}>
                            Mantenemos una capacitación constante en temas inmobiliarios y tendencias mundiales.
                                </Typography>
                            </Box>
                            </Box>
                        </Grid>
                        <Grid 
                        data-aos="zoom-in"
                        data-aos-duration={1500}
                        data-aos-delay={is620?"200":"600"}
                        item xs={is800?12:4}>
                            <Box sx={{display:"flex", justifyContent:"center", width:is800?"100%":"95%", background:"white"}}>
                            <img src={img2} style={{ objectFit: "cover", width: "100%", height: "100%", maxWidth:"178px" }} alt="" />
                            </Box>
                            <Box sx={{display:"flex", justifyContent:"center", width:is800?"100%":"95%", background:"white"}}>
                            <Typography sx={{height:"133px",padding:"5%", fontSize:"32px", fontWeight:"600", textAlign:"center"}}>
                            Marketing y producción
                                </Typography>
                            </Box>
                            <Box sx={{display:"flex", justifyContent:"center", width:is800?"100%":"95%", background:"white"}}>
                            <Typography sx={{padding:"5%", fontSize:"14px", fontWeight:"600",textAlign:"center"}}>
                            Únicos en Sonora que contamos con departamento de marketing y publicidad.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid 
                        data-aos="zoom-in"
                        data-aos-duration={1500}
                        data-aos-delay={is620?"200":"1000"}
                        item xs={is800?12:4}>
                            <Box sx={{display:"flex", justifyContent:"center", width:is800?"100%":"95%", background:"white"}}>
                            <img src={img3} style={{ objectFit: "cover", width: "100%", height: "100%", maxWidth:"178px" }} alt="" />
                            
                            </Box>
                            <Box sx={{display:"flex", justifyContent:"center", width:is800?"100%":"95%", background:"white"}}>
                            <Typography sx={{height:"133px",padding:"5%", fontSize:"32px", fontWeight:"600", textAlign:"center"}}>
                            Departamento jurídico
                                </Typography>
                            </Box>
                            <Box sx={{display:"flex", justifyContent:"center", width:is800?"100%":"95%", background:"white"}}>
                            <Typography sx={{padding:"5%", fontSize:"14px", fontWeight:"600",textAlign:"center"}}>
                            Equipo legal altamene capacitado, listos para proteger lo que más importa.
                                </Typography>
                            </Box>
                        </Grid>
                     </Grid>
                    </Box>
                </Box>

                </Box>
            </Box>
        </Box>
        </>
    )
}