import styles from "../../styles/Payment.module.scss";
import PaymentForm from "../../components/payment-request-form/paymentRequetsForm";
import PaymentUrl from "../../components/payment-url/paymentUrl";
import { useState } from "react";

export function PaymentRequest() {
  const [url, setUrl] = useState("");

  return (
    <div className={styles.PaymentRequest}>
      <h1>Crear link de pago</h1>
      {url ? (
        <PaymentUrl url={url}></PaymentUrl>
      ) : (
        <PaymentForm onSuccess={setUrl}></PaymentForm>
      )}
    </div>
  );
}
