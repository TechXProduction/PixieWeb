import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

export const InfoGrid = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const is620 = useMediaQuery('(max-width:620px)');

  const finalCount1 = 300;
  const finalCount2 = 20;
  const finalCount3 = 12;

  useEffect(() => {
    const interval = setInterval(() => {
      if (count1 < finalCount1) {
        setCount1(count1 + 1);
      }
      if (count2 < finalCount2) {
        setCount2(count2 + 1);
      }
      if (count3 < finalCount3) {
        setCount3(count3 + 1);
      }
    }, 150);

    return () => {
      clearInterval(interval);
    };
  }, [count1, count2, count3]);

  return (
    <Box
      sx={{
        backgroundImage: `url('https://pixiebr.com/wp-content/uploads/2023/03/image-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
        <Box sx={{display:"flex", flexDirection:"column", width:"100%"}}>
            <Box sx={{width:"100%", display:"flex",justifyContent:"center"}}>
               <Typography sx={{fontSize:is620?"22px":"30px", color:"white",textAlign:"center"}}>
               EXPERIENCIA E INNOVACION
            </Typography> 
            </Box>
            
        <Box sx={{display:"flex", justifyContent:"center",width:"100%"}}>
      <Grid sx={{width:"90%"}} container spacing={2}>
        <Grid item xs={12} sm={4}>
        <Box sx={{width:"100%", display:"flex", justifyContent:"center"}}>
          <div sx={{ textAlign: 'center', p: 2, display:"flex",justifyContent:"center"  }}>
            <h2 style={{fontSize:is620?"25px":"60px", marginBottom:"-20px",color:"white",display:"flex", justifyContent:"center"}}>{count1} K+</h2>
            <p style={{textAlign:"center", fontSize:"16px",color:"white", fontWeight:"600"}}>Clientes felices</p>
          </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Box sx={{width:"100%", display:"flex", justifyContent:"center"}}>
          <div sx={{ textAlign: 'center', p: 2, display:"flex",justifyContent:"center"  }}>
            <h2 style={{fontSize:is620?"25px":"60px", marginBottom:"-20px",color:"white",display:"flex", justifyContent:"center"}}>{count2} K+</h2>
            <p style={{textAlign:"center", fontSize:"16px",color:"white", fontWeight:"600"}}>Casas entregadas</p>
          </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Box sx={{width:"100%", display:"flex", justifyContent:"center"}}>
          <div sx={{ textAlign: 'center', p: 2, display:"flex",justifyContent:"center"  }}>
            <h2 style={{fontSize:is620?"25px":"60px", marginBottom:"-20px",color:"white",display:"flex", justifyContent:"center"}}>{count3} +</h2>
            <p style={{textAlign:"center", fontSize:"16px",color:"white", fontWeight:"600"}}>Años de experiencia</p>
          </div>
          </Box>
        </Grid>
      </Grid>
      </Box>
    </Box>
    </Box>
  );
};







