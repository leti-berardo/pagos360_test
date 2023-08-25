import { useState } from "react";
import { useRouter } from "next/router";

import { Button } from "@mui/material";
import styles from "./paymentUrl.module.scss";

function PaymentUrl({ url }) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); //
      })
      .catch((error) => {
        console.error("Error copying URL:", error);
      });
  };

  return (
    <div className={styles.PaymentUrl}>
      <Button centerRipple variant="outlined" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy URL"}
      </Button>
    </div>
  );
}

export default PaymentUrl;
