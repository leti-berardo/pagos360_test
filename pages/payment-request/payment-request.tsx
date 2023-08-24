import { useState } from "react";
import PaymentForm from "../../components/payment-request-form/paymentRequetsForm";

export default function PaymentRequest() {
  const [paymentRequest, setPaymentRequest] = useState(null);

  return (
    <div>
      <h1>Crear link de pago</h1>
      <PaymentForm></PaymentForm>
    </div>
  );
}
