import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';


import { NavBar } from '../NavBar';
import { Footer } from '../Footer';

const DividendCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualReturnRate, setAnnualReturnRate] = useState(0.22);
  const [taxRate, setTaxRate] = useState(0.0183);
  const [incomeTaxRate, setIncomeTaxRate] = useState(0.20);
  const [years, setYears] = useState(1);

  const [results, setResults] = useState([]);
  const [totalDividend, setTotalDividend] = useState(0);
  const [totalTax, setTotalTax] = useState(0);
  const [totalNetDividend, setTotalNetDividend] = useState(0);

  const is1024 = useMediaQuery('(max-width:1024px)');
  const is620 = useMediaQuery('(max-width:620px)');

  const calculateDividends = () => {
    const resultsArray = [];
    let totalDividendValue = 0;
    let totalTaxValue = 0;
    let totalNetDividendValue = 0;

    let accumulatedInvestment = initialInvestment;

    for (let i = 0; i < years * 12; i++) {
      const monthlyDividendRate = annualReturnRate / 12;
      const monthlyDividend = accumulatedInvestment * monthlyDividendRate;
      const retentionTax = monthlyDividend * incomeTaxRate; // Calcula la Retención de Impuestos
      const netMonthlyDividend = monthlyDividend - retentionTax; // Resta la retención de impuestos
      const accumulatedNetDividend = accumulatedInvestment - initialInvestment + netMonthlyDividend;

      resultsArray.push({
        month: i + 1,
        monthlyDividend,
        accumulatedInvestment,
        retentionTax, // Agrega la retención de impuestos
        netMonthlyDividend,
        accumulatedNetDividend,
      });

      accumulatedInvestment += netMonthlyDividend;
      totalDividendValue += monthlyDividend;
      totalTaxValue += retentionTax;
      totalNetDividendValue += netMonthlyDividend;
    }

    setResults(resultsArray);
    setTotalDividend(totalDividendValue);
    setTotalTax(totalTaxValue);
    setTotalNetDividend(totalNetDividendValue);
  };

  useEffect(()=>{
    if(years >= 2){
        setAnnualReturnRate(0.25)
    }else{
        setAnnualReturnRate(0.22)
    }
  },[years])

  return (
    <>
    <NavBar/>
    <Box sx={{display:"flex", justifyContent:"center"}}>
        <Box sx={{display:"flex", width:"90%", justifyContent:"center",marginTop:"125px"}}> 
        
    <div>
      <Typography sx={{textAlign:"center", fontWeight:"600", fontSize:"36px",marginBottom:"26px"}}>Simulador de rendimiento</Typography>
      <div>
      <TextField
  label="Monto a invertir"
  sx={{ width: is1024 ? "100%" : "20%", marginBottom: is1024 ? "10px" : "" }}
  InputLabelProps={{ style: { color: "black", fontWeight: "600" } }}
  type="number"
  value={initialInvestment === 0 ? "" : initialInvestment}
  onChange={(e) => setInitialInvestment(Number(e.target.value))}
  onFocus={(e) => {
    if (e.target.value === "0") {
      e.target.value = ""; // Borra el contenido cuando se enfoca
      setInitialInvestment("");
    }
  }}
/>
<TextField
  label="Años"
  sx={{ width: is1024 ? "100%" : "20%", marginBottom: is1024 ? "10px" : "" }}
  InputLabelProps={{ style: { color: "black", fontWeight: "600" } }}
  type="number"
  value={years === 0 ? "" : years}
  onChange={(e) => setYears(Number(e.target.value))}
  onFocus={(e) => {
    if (e.target.value === "0") {
      e.target.value = ""; // Borra el contenido cuando se enfoca
      setYears("");
    }
  }}
/>
        <TextField
          label="TASA RENDIMIENTO ANUAL (%)"
          sx={{width:is1024?"100%":"20%",marginBottom:is1024?"10px":""}}
          InputLabelProps={{style:{color:"black", fontWeight:"600"}}}
          type="number"
          value={annualReturnRate * 100}
          onChange={(e) => setAnnualReturnRate(Number(e.target.value) / 100)}
          disabled={true}
        />
        <TextField
          label="TASA Dividendo"
          sx={{width:is1024?"100%":"20%",marginBottom:is1024?"10px":""}}
          InputLabelProps={{style:{color:"black", fontWeight:""}}}
          type="number"
          value={taxRate * 100}
          onChange={(e) => setTaxRate(Number(e.target.value) / 100)}
          disabled={true}
        />
        <TextField
          label="IMPUESTO (ISR) "
          sx={{width:is1024?"100%":"20%",marginBottom:is1024?"10px":""}}
          InputLabelProps={{style:{color:"black", fontWeight:""}}}
          type="number"
          value={incomeTaxRate * 100}
          onChange={(e) => setIncomeTaxRate(Number(e.target.value) / 100)}
          disabled={true}
        />
        
      </div>
      <Box sx={{width:"100%", display:"flex", justifyContent:"center"}}>
      <Button variant="contained" sx={{marginTop:"6px",background:"blue", color:"white", fontWeight:"600", width:"100%", maxWidth:"620px"}} onClick={calculateDividends}>
        Simular
      </Button>
      </Box>
      <Box sx={{width:"100%",borderRadius:"8px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",display:"flex", justifyContent:"center", marginBottom:"40px",marginTop:"30px"}}>
        <Box sx={{width:"100%", maxWidth:"900px"}}>
            <Typography sx={{fontWeight:"600", fontSize:"18px", width:"100%", textAlign:"center"}}>
            TABLA DE INVERSION RECAPITALIZABLE
            </Typography>
      <Table>
      <TableHead>
      <TableRow>
        <TableCell></TableCell>
        <TableCell></TableCell>
      </TableRow>
      </TableHead>
      <TableBody>

      <TableRow>
         <TableCell sx={{fontWeight:"600"}}>MONTO INICIAL</TableCell>
      <TableCell sx={{fontWeight:"600"}}>$ {initialInvestment}</TableCell>
      </TableRow>
     
      <TableRow>
         <TableCell sx={{fontWeight:"600"}}>TASA DE RENDIMIENTO ANUAL COMPUESTO</TableCell>
      <TableCell sx={{fontWeight:"600"}}>{annualReturnRate*100}%</TableCell>
      </TableRow>

      <TableRow>
         <TableCell>DIVIDENDO promedio MENSUAL </TableCell>
      <TableCell>$ {((totalDividend.toFixed(2))/(years*12)).toFixed(2)}</TableCell>
      </TableRow>

      <TableRow>
         <TableCell>MONTO FINAL  BRUTO </TableCell>
      <TableCell>$ {(totalDividend + initialInvestment).toFixed(2)}</TableCell>
      </TableRow>

      <TableRow>
         <TableCell>IMPUESTO (ISR) </TableCell>
      <TableCell>{incomeTaxRate*100}%</TableCell>
      </TableRow>

      <TableRow>
         <TableCell>DIVIDENDO NETO promedio mensual </TableCell>
      <TableCell>{((totalNetDividend.toFixed(2))/(years*12)).toFixed(2)}</TableCell>
      </TableRow>

      <TableRow>
         <TableCell sx={{fontWeight:"600", fontSize:"15px"}}>MONTON FINAL NETO </TableCell>
      <TableCell sx={{fontWeight:"600", fontSize:"15px"}}>${(totalNetDividend+initialInvestment).toFixed(2)}</TableCell>
      </TableRow>

      </TableBody>
      </Table>
      </Box>
      </Box>
      
    </div>
    </Box>
    </Box>
<Box sx={{display:"flex", width:"100%", justifyContent:"center", marginBottom:"40px"}}>
    
<div style={{ position: 'relative',width:"90%",background:"#f5f8fa",boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" }}>
    <Typography sx={{width:"100", textAlign:"center",fontWeight:"550", fontSize:"16px"}}>
        Detalles
    </Typography>
  <div style={{ overflowX: 'auto', width: '100%', paddingRight: '16px' }}>
      


        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Mes</TableCell>
              <TableCell>DIVIDENDO MENSUAL</TableCell>
              <TableCell>Monto operativo con impuestos</TableCell>
              <TableCell>RETENSION POR IMPUESTO</TableCell>
              <TableCell>DIVIDENDO MENOS IMPUESTOS</TableCell>
              <TableCell>ACUMULADO NETO</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((result) => (
              <TableRow key={result.month}>
                <TableCell>{result.month}</TableCell>
                <TableCell>${result.monthlyDividend.toFixed(2)}</TableCell>
                <TableCell>${result.accumulatedInvestment.toFixed(2)}</TableCell>
                <TableCell>${result.retentionTax.toFixed(2)}</TableCell>
                <TableCell>${result.netMonthlyDividend.toFixed(2)}</TableCell>
                <TableCell>${result.accumulatedNetDividend.toFixed(2)}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={6} align="right">
                
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>TOTALES</strong></TableCell>
              <TableCell>
                <strong>${totalDividend.toFixed(2)}</strong>
              </TableCell>
              <TableCell></TableCell>
              
              
              <TableCell>
                <strong>${totalTax.toFixed(2)}</strong>
              </TableCell>
              <TableCell>-----------</TableCell>
              <TableCell>
                <strong>${totalNetDividend.toFixed(2)}</strong>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      </div>
</Box>
    <Footer/>
    </>
  );
};

export default DividendCalculator;






