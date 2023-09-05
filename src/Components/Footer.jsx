import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import  Typography  from '@mui/material/Typography';
import { Link } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from '../theme/theme';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


// imagenes 

import logofooter from "../assets/logo-footer.png"
import logoin from "../assets/Linkedin.svg"
import logoemail from "../assets/email.svg"
import logowhatsapp from "../assets/Whatsapp.svg"


export const Footer = () =>{ 

    const background = theme.palette.background.secondary
    const colorfont = theme.palette.text.secondary
    const isMobile = useMediaQuery('(max-width:599px)');
    const is720 = useMediaQuery('(max-width:720px)');


  return (
    <footer>
    <Box sx={{  background:"#233F5D", minHeight:isMobile?"360px":"223px", width:"100%", display:"flex", justifyContent:"center",  }}>
      
      
      <Grid container spacing={{ xs: 0, sm:0, md: 0 }} columns={{ xs: 4, sm: 12, md: 12 }} sx={{padding:"0px", width:"100%",maxWidth:"1300px"}}>
        
          <Grid xs={8} sm={4} md={4} key={1} >
            <Box sx={{display:"flex", justifyContent:isMobile?"center":null, }}>
                {   isMobile?
                <Box sx={{maxWidth:"192.1px", maxHeight:"46.55px",
                        marginTop:"42px"
                        }}>
                    <CardMedia
                        component="img"
                        alt="Imagen"
                        maxWidth="50px"
                        image={logofooter}
                    
                    />
                </Box>:
                <Box sx={{maxWidth:"192.1px", maxHeight:"46.55px",
                        marginTop:"42px", marginLeft:"25%", 
                        }}>
                    <CardMedia
                        component="img"
                        alt="Imagen"
                        maxWidth="50px"
                        image={logofooter}
                    
                    />
                </Box>  }
                
            </Box>
          </Grid>



            {isMobile?
             <>
             <Grid sx={{marginTop:"120px"}} xs={8} sm={4} md={4} key={3}>
          <Box sx={{ marginTop: "-32px" }}>
  <Grid container spacing={"11px"} sx={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
    <Grid item sx={{paddingBottom:"0px"}}>

    <a style={{color:"white"}} href="https://www.facebook.com/pixiebienesraices/" target="_blank">
      
      <FacebookIcon />
      
      </a>
      
    </Grid>
    <Grid item sx={{paddingBottom:"0px"}}>

    <a style={{color:"white"}} href="https://www.facebook.com/pixiebienesraices/" target="_blank">
      
      <InstagramIcon />
      
      </a>

    </Grid>
    <Grid item sx={{paddingBottom:"0px"}}>


    <a style={{color:"white"}} href="https://pixiebr.com/" target="_blank">
      
      <TwitterIcon />
      
      </a>


    </Grid>
  </Grid>
</Box>

</Grid>
             <Grid xs={8} sm={4} md={4} key={2}>
               <Box>
                   <Box sx={{marginTop:isMobile?"-32px":"107px",display:"flex", justifyContent:"center",  height:"35px", alignItems:"flex-end" }}>
                       <Typography sx={{color: colorfont,fontSize:"14px", fontStyle:"normal", fontWeight:"500", textAlign:"center"}}>
                       ®Pixie 2023
                       </Typography>
                   </Box>
                   <Box sx={{marginTop:isMobile?"56px":"9px",display:"flex", justifyContent:"center",  height:"35px", alignItems:"flex-end" }}>
                    <Typography sx={{ color: colorfont, fontSize: "10px", fontStyle: "normal", fontWeight: "500", textAlign: "center" }}>
                      Copyrigth{" "}
                        <Link href="https://pixiebr.com" underline="always" style={{ color: "white", textDecorationColor: "white" }}>
                          Pixie
                          </Link>
                        </Typography>
                   </Box>
               </Box>
             </Grid>
             
             </>  
              
            :

            <>
          <Grid xs={8} sm={4} md={4} key={2}>
            <Box>
                <Box sx={{marginTop:isMobile?"0px":"127px",display:"flex", justifyContent:"center",  height:"35px", alignItems:"flex-end" }}>
                    <Typography sx={{color: colorfont,fontSize:"14px", fontStyle:"normal", fontWeight:"500", textAlign:"center"}}>
                    ®Pixie 2023
                    </Typography>
                </Box>
                <Box sx={{marginTop:isMobile?"0px":"0px",display:"flex", justifyContent:"center",  height:"35px", alignItems:"flex-end" }}>
                <Typography sx={{ color: colorfont, fontSize: "10px", fontStyle: "normal", fontWeight: "500", textAlign: "center" }}>
                Copyrigth{" "}
                    <Link href="https://pixiebr.com/" underline="always" style={{ color: "white", textDecorationColor: "white", }}>
                     Pixie
                    </Link>
                </Typography>
                </Box>
            </Box>
          </Grid>
          <Grid xs={8} sm={4} md={4} key={3}>
<Box sx={{ marginTop: "54px", marginRight: is720?"50px":"86px" }}>
  <Grid container spacing={"14px"} sx={{ display: "flex", justifyContent: "flex-end", alignItems:"center"}}>
    <Grid item sx={{paddingBottom:"0px"}}>

      {/* LINK EMAIL DESKTOP */}

    <a style={{color:"white"}} href="https://www.facebook.com/pixiebienesraices/" target="_blank">
      
      <FacebookIcon />
      
      
      </a>
    </Grid>
    <Grid item sx={{paddingBottom:"0px"}}>

      {/* LINK EMAIL DESKTOP */}

    <a style={{color:"white"}} href="https://www.facebook.com/pixiebienesraices/" target="_blank">
      
        <InstagramIcon/>
      </a>
    </Grid>
    <Grid item sx={{paddingBottom:"0px", paddingLeft:"0px"}}>

    {/* LINK WHATSAPP DESKTOP */}

    <a style={{color:"white"}} href="https://pixiebr.com/" target="_blank">
      
        <TwitterIcon/>
      </a>


    </Grid>
  </Grid>
</Box>

</Grid>
          </>}
        
       
      </Grid>
    </Box>
    </footer>
  );
}