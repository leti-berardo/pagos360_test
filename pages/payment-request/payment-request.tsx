import { ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useState } from "react";

import PaymentForm from "../../components/payment-request-form/paymentRequetsForm";
import PaymentUrl from "../../components/payment-url/paymentUrl";
import styles from "../../styles/Payment.module.scss";

export function PaymentRequest() {
  const [url, setUrl] = useState("");
  const router = useRouter();

  return (
    <div className={styles.PaymentRequest}>
      <span
        className={styles.PaymentRequest_goBackButton}
        onClick={() => router.push("/")}
      >
        <ArrowBack></ArrowBack>
      </span>
      <h1 className={styles.PaymentRequest_title}>Crear link de pago</h1>
      {url ? (
        <PaymentUrl url={url}></PaymentUrl>
      ) : (
        <PaymentForm onSuccess={setUrl}></PaymentForm>
      )}
    </div>
  );
}
