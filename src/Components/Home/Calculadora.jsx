import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const DividendCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(1000000);
  const [annualReturnRate, setAnnualReturnRate] = useState(0.22);
  const [taxRate, setTaxRate] = useState(0.0183);
  const [incomeTaxRate, setIncomeTaxRate] = useState(0.20);
  const [years, setYears] = useState(12);

  const [results, setResults] = useState([]);
  const [totalDividend, setTotalDividend] = useState(0);
  const [totalTax, setTotalTax] = useState(0);
  const [totalNetDividend, setTotalNetDividend] = useState(0);

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

  return (
    <div>
      <h1>Dividend Calculator</h1>
      <div>
        <TextField
          label="Initial Investment"
          type="number"
          value={initialInvestment}
          onChange={(e) => setInitialInvestment(Number(e.target.value))}
        />
        <TextField
          label="Annual Return Rate (%)"
          type="number"
          value={annualReturnRate * 100}
          onChange={(e) => setAnnualReturnRate(Number(e.target.value) / 100)}
        />
        <TextField
          label="Tax Rate"
          type="number"
          value={taxRate * 100}
          onChange={(e) => setTaxRate(Number(e.target.value) / 100)}
        />
        <TextField
          label="Income Tax Rate"
          type="number"
          value={incomeTaxRate * 100}
          onChange={(e) => setIncomeTaxRate(Number(e.target.value) / 100)}
        />
        <TextField
          label="Years"
          type="number"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
        />
      </div>
      <Button variant="contained" color="primary" onClick={calculateDividends}>
        Calculate Dividends
      </Button>
      <div>
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
                <strong>TOTALES</strong>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <strong>${totalDividend.toFixed(2)}</strong>
              </TableCell>
              <TableCell></TableCell>
              <TableCell>
                <strong>${totalTax.toFixed(2)}</strong>
              </TableCell>
              <TableCell>
                <strong>${totalNetDividend.toFixed(2)}</strong>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DividendCalculator;






