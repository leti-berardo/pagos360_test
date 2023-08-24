import BaseService from "./axios.service";
import { constants } from "./constants";
import { getApiKey, getBaseUrl } from "./utils.services";

export default class PaymentService extends BaseService {
  constructor() {
    const baseUrl = getBaseUrl();
    const apiKey = getApiKey();

    super(baseUrl, apiKey);
  }

  async getPaymentRequest(payload) {
    const paymentRequestEndpoint =
      constants.API_ENDPOINTS.CREATE_PAYMENT_REQUEST;
    return this.get<any>(paymentRequestEndpoint, payload);
  }
}
