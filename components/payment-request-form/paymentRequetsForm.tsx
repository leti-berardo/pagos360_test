import React, { useState } from "react";
import {
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputAdornment,
  TextField,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import styles from "./paymentRequestForms.module.scss";
import { addDays } from "date-fns";
import dayjs from "dayjs";

const PaymentForm: React.FC = () => {
  const [sendByMail, setSendByMail] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [concepto, setConcepto] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [totalPago, setTotalPago] = useState<string>("");
  const [nombrePagador, setNombrePagador] = useState<string>("");
  const [formErrors, setFormErrors] = useState<any>({});

  const minDate = dayjs();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic form validation
    const errors: any = {};
    if (!concepto) errors.concepto = "Concepto is required";
    if (!selectedDate) errors.date = "Date is required";
    if (!totalPago) errors.totalPago = "Total is required";
    if (!nombrePagador) errors.nombrePagador = "Nombre del Pagador is required";
    if (sendByMail && !email) errors.email = "Email is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Handle form submission here
    console.log("Form submitted:", {
      sendByMail,
      email,
      concepto,
      selectedDate,
      totalPago,
      nombrePagador,
    });

    // Reset form and errors
    setFormErrors({});
    setEmail("");
    setConcepto("");
    setSelectedDate(null);
    setTotalPago("");
    setNombrePagador("");
  };

  return (
    <Card className={styles.PaymentRequestForm}>
      <CardContent>
        <Typography variant="h6">Solicitar Pago</Typography>
        <form onSubmit={handleSubmit}>
          <FormControlLabel
            control={
              <Checkbox
                checked={sendByMail}
                onChange={(e) => setSendByMail(e.target.checked)}
              />
            }
            label="Send Payment Request by Mail"
          />
          {sendByMail && (
            <TextField
              label="Email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!formErrors.email}
              helperText={formErrors.email}
              margin="normal"
            />
          )}
          <TextField
            label="Concepto del Pago"
            fullWidth
            value={concepto}
            onChange={(e) => setConcepto(e.target.value)}
            error={!!formErrors.concepto}
            helperText={formErrors.concepto}
            margin="normal"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Fecha de Pago"
              value={selectedDate}
              onChange={(newDate) => setSelectedDate(newDate)}
              minDate={minDate}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={!!formErrors.date}
                  helperText={formErrors.date}
                />
              )}
              margin="normal"
            />
          </LocalizationProvider>
          <TextField
            label="Total del Pago"
            type="number"
            InputProps={{
              endAdornment: <InputAdornment position="end">USD</InputAdornment>,
            }}
            value={totalPago}
            onChange={(e) => setTotalPago(e.target.value)}
            error={!!formErrors.totalPago}
            helperText={formErrors.totalPago}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Nombre del Pagador"
            fullWidth
            value={nombrePagador}
            onChange={(e) => setNombrePagador(e.target.value)}
            error={!!formErrors.nombrePagador}
            helperText={formErrors.nombrePagador}
            margin="normal"
          />
          <Stack direction="row" spacing={2}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            <Button type="reset" variant="outlined" color="primary">
              Reset
            </Button>
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
};

export default PaymentForm;
