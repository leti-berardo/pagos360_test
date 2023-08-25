import styles from "../../styles/Payment.module.scss";
import PaymentForm from "../../components/payment-request-form/paymentRequetsForm";

export function PaymentRequest() {
  return (
    <div className={styles.PaymentRequest}>
      <h1>Crear link de pago</h1>
      <PaymentForm></PaymentForm>
    </div>
  );
}
