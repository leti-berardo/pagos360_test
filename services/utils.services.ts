export function getApiKey() {
  const apiKey =
    "NjQwNDMxNGI1YzU0YjllYmVhYjJiZDdmY2E5Y2EyMDg5ZDVlODFmNzRmMDc1OGJmMDY2OTY0NzlhNGJiZWQwNA";

  return apiKey;
}

export function getBaseUrl() {
  return "https://api.sandbox.pagos360.com/";
}

export function getEndpointUrl(endpointUrl) {
  return `${this.getBaseUrl}${endpointUrl}`;
}
