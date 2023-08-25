export interface payloadPaymentRequest {
  payment_request: {
    description: string;
    first_due_date: string;
    first_total: number;
    payer_name: string;
  };
}

export interface paymentData {
  concept: string;
  totalPyment: number;
  payerName: string;
  selectedDate: string;
}
