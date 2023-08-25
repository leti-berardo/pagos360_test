import { useState } from "react";
import { useRouter } from "next/router";

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

  const handleReturn = () => {
    router.push("/");
  };

  return (
    <div>
      <button onClick={handleCopy}>{copied ? "Copied!" : "Copy URL"}</button>
      <button onClick={handleReturn}>Return</button>
    </div>
  );
}

export default PaymentUrl;
