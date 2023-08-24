import { paymentData, payloadPaymentRequest } from "../utils/models";

export function getApiKey() {
  const apiKey =
    "NjQwNDMxNGI1YzU0YjllYmVhYjJiZDdmY2E5Y2EyMDg5ZDVlODFmNzRmMDc1OGJmMDY2OTY0NzlhNGJiZWQwNA";

  return apiKey;
}

export function getBaseUrl() {
  return "https://api.sandbox.pagos360.com/";
}

export function getPaymentRequestPayload(
  paymentData: paymentData
): payloadPaymentRequest {
  return {
    description: paymentData.concept,
    first_due_date: paymentData.selectedDate,
    first_total: paymentData.totalPyment,
    payer_name: paymentData.payerName,
  };
}
