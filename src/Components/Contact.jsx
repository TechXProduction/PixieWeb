import React from "react";
import { Box, Grid, Typography, Button, MenuItem, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import useMediaQuery from '@mui/material/useMediaQuery';
import {NavBar} from "../Components/NavBar"
import {Footer} from "../Components/Footer"
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const SERVICE_KEY = import.meta.env.VITE_API_SERVICE
const TEMPLATE_KEY = import.meta.env.VITE_API_TEMPLATE
const PUBLIC_KEY = import.meta.env.VITE_API_PUBLIC_KEY


export const Contact = () => {
  const is1024 = useMediaQuery('(max-width:1024px)');
  const iframeStyles = {
    border: "0",
  };

  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required("Este campo es obligatorio"),
    telefono: Yup.string().required("Este campo es obligatorio"),
    email: Yup.string().email("Correo electrónico no válido").required("Este campo es obligatorio"),
    intereses: Yup.string().required("Este campo es obligatorio"),
  });

  const formik = useFormik({
    initialValues: {
      nombre: "",
      telefono: "",
      email: "",
      intereses: "",
      presupuesto: "",
      mensaje: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // Aquí puedes manejar el envío del formulario
      console.log("Datos enviados:", values)
      emailjs.send(SERVICE_KEY,TEMPLATE_KEY,{
        reply_to: "facoogle1@gmail.com",
        name: values.nombre,
        mail:values.email,
        telefono:values.telefono,
        presupuesto:values.presupuesto,
        intereses:values.intereses,
        message:values.mensaje
              }, PUBLIC_KEY);

              Swal.fire({
                title: 'Mensaje Enviado',
                text: 'En breve nos pondremos en contacto contigo',
                icon: 'succes',
                confirmButtonText: 'Cool'
              }).then((result) => {
                if (result.isConfirmed) {
                  // El usuario hizo clic en "Cool", redirige a /contact
                  window.location.href = '/contact';
                }
              });
    
    },
    
  });

  return (
    <>
    <NavBar/>
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%", marginBottom:"18px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27896.415006881638!2d-110.961839!3d29.074612!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce84687adfaee5%3A0xb33d5395e9887ff9!2sHermosillo%2C%20Son.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sus!4v1694128612359!5m2!1ses!2sus"
        width="100%"
        height={is1024?"450":650}
        style={iframeStyles}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Box sx={{ display: "flex", maxWidth: "1440px", width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box sx={{display:"flex", width:"100%", justifyContent:"center"}}>
                <Box sx={{boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",width:is1024?"90%":"70%",marginTop:is1024?"0":"-350px", background:"white", padding:"20px"}}>
                <Typography sx={{fontSize:"28px"}} variant="h6">Dejanos tu informacion de contacto</Typography>
                <form onSubmit={formik.handleSubmit}>
                  <TextField
                    label="Nombre"
                    sx={{background:"#f5f8fa"}}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    required
                    name="nombre"
                    value={formik.values.nombre}
                    onChange={formik.handleChange}
                    error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                    helperText={formik.touched.nombre && formik.errors.nombre}
                    InputLabelProps={{style:{color:"black"}}}
                  />
                  <TextField
                    label="Número de Teléfono"
                    sx={{background:"#f5f8fa"}}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    required
                    name="telefono"
                    value={formik.values.telefono}
                    onChange={formik.handleChange}
                    error={formik.touched.telefono && Boolean(formik.errors.telefono)}
                    helperText={formik.touched.telefono && formik.errors.telefono}
                    InputLabelProps={{style:{color:"black"}}}
                  />
                  <TextField
                    label="Email"
                    sx={{background:"#f5f8fa"}}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    required
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    InputLabelProps={{style:{color:"black"}}}
                  />
                  

                  <TextField
                  
                    label="Presupuesto"
                    sx={{background:"#f5f8fa"}}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    name="presupuesto"
                    value={formik.values.presupuesto}
                    onChange={formik.handleChange}
                    InputLabelProps={{style:{color:"black"}}}
                  />
                  <span style={{color:"#7c98b6"}}>
                    Compártenos tu presupuesto de tu inversión 
                    </span>
                  <TextField
                    label="Mensaje"
                    sx={{background:"#f5f8fa"}}
                    fullWidth
                    variant="outlined"
                    multiline
                    rows={4}
                    margin="normal"
                    name="mensaje"
                    value={formik.values.mensaje}
                    onChange={formik.handleChange}
                    InputLabelProps={{style:{color:"black"}}}
                  />
                  <span style={{color:"#7c98b6"}}>
                    Puedes detallar un poco más tu búsqueda para una mejor atencion
                  </span>
                  
                  <TextField
                    select
                    sx={{background:"#f5f8fa"}}
                    label="Intereses"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    required
                    name="intereses"
                    value={formik.values.intereses}
                    onChange={formik.handleChange}
                    error={formik.touched.intereses && Boolean(formik.errors.intereses)}
                    helperText={formik.touched.intereses && formik.errors.intereses}
                    InputLabelProps={{style:{color:"black"}}}
                  >
                    <MenuItem value="" disabled>
                      Selecciona una opción
                    </MenuItem>
                    <MenuItem value="Remates bancarios">Remates bancarios</MenuItem>
                    <MenuItem value="Compra Tradicional">Compra Tradicional</MenuItem>
                    <MenuItem value="Quiero vender mi casa">Quiero vender mi casa</MenuItem>
                    <MenuItem value="Rentar una Casa">Rentar una Casa</MenuItem>
                  </TextField>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ marginTop: "16px", background:"blue",color:"white", fontWeight:"600" }}
                  >
                    Enviar
                  </Button>
                </form>
              </Box>
              </Box>
            </Grid>
            <Grid sx={{ background: "" }} item xs={12} sm={6}>
              <Box sx={{display:"flex", justifyContent:"center",alignItems:"center", height:"100%"}}>
              <Box sx={{ display: "flex", padding:"20px",flexDirection: "column", background: "", width: is1024?"90%":"80%" }}>
                <Typography sx={{color:"black", fontSize:"30px"}}>
                Contáctanos
                </Typography>
                <Typography sx={{color:"black", fontSize:"16px"}}>
                Detalla lo mejor que puedas tu búsqueda de interés para poder asignarte un asesor a tu medida, y juntos encontrar la mejor propiedad para ti.
                </Typography>

                <Typography sx={{color:"black", fontSize:"16px",marginTop:"12px"}}>
                Horarios:   <span style={{fontWeight:"600"}}> Lunes a Viernes de 9:00am a 5:00pm</span>
                </Typography>

                <Typography sx={{color:"black", fontSize:"16px",marginTop:"8px"}}>
                Nùmero:   <span style={{fontWeight:"600"}}> 662 400 3935 </span>
                </Typography>
                
              </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
    <Footer/>
    </>
  );
};

