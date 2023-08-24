import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import format from "date-fns/format";

import { getPaymentRequestPayload } from "../../services/utils.services";
import PaymentService from "../../services/payment.service";
import styles from "./paymentRequestForms.module.scss";

const PaymentForm: React.FC = () => {
  const [concept, setConcept] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [formErrors, setFormErrors] = useState<any>({});
  const [payerName, setPayerName] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [sendByMail, setSendByMail] = useState<boolean>(false);
  const [totalPyment, setTotalPayment] = useState<number>(0);

  const minDate = dayjs();
  const paymentService = new PaymentService();

  const requestPaymentLink = async () => {
    const payload = getPaymentRequestPayload({
      concept,
      totalPyment,
      payerName,
      selectedDate: format(new Date(selectedDate), "dd/MM/YYY"),
    });

    paymentService.getPaymentRequest({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic form validation
    const errors: any = {};
    if (!concept) errors.concepto = "Concepto is required";
    if (!selectedDate) errors.date = "Date is required";
    if (!totalPyment) errors.totalPago = "Total is required";
    if (!payerName) errors.nombrePagador = "Nombre del Pagador is required";
    if (sendByMail && !email) errors.email = "Email is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Handle form submission here
    console.log(
      "Form submitted:",
      {
        sendByMail,
        email,
        concepto: concept,
        selectedDate,
        totalPago: totalPyment,
        nombrePagador: payerName,
      },
      format(new Date(selectedDate), "dd/MM/YYY")
    );

    // Reset form and errors
    setFormErrors({});
    setEmail("");
    setConcept("");
    setSelectedDate(null);
    setTotalPayment(0);
    setPayerName("");
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
            value={concept}
            onChange={(e) => setConcept(e.target.value)}
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
              format="DD/MM/YYYY"
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
          <CurrencyTextField
            label="Amount"
            variant="standard"
            value={totalPyment}
            currencySymbol="$"
            minimumValue="0"
            outputFormat="string"
            decimalCharacter="."
            digitGroupSeparator=","
            onChange={(e) =>
              setTotalPayment(e.target.value ? parseInt(e.target.value) : 0)
            }
          />
          {/* <TextField
            label=""
            type="text"
            inputProps={{
              inputMode: "numeric",
              pattern: "^[.0-9]*$",
            }}
            value={totalPyment}
            onChange={(e) =>
              setTotalPayment(e.target.value ? parseInt(e.target.value) : 0)
            }
            error={!!formErrors.totalPago}
            helperText={formErrors.totalPago}
            fullWidth
            margin="normal"
          /> */}
          <TextField
            label="Nombre del Pagador"
            fullWidth
            value={payerName}
            onChange={(e) => setPayerName(e.target.value)}
            error={!!formErrors.nombrePagador}
            helperText={formErrors.nombrePagador}
            margin="normal"
          />
          <Stack direction="row" spacing={2}>
            <Button type="submit" variant="contained" color="info">
              Submit
            </Button>
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
};

export default PaymentForm;
