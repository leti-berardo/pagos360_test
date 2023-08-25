import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

export default class BaseService {
  protected axiosInstance: AxiosInstance;
  ApiKey: string;

  constructor(baseURL: string, apiKey) {
    this.axiosInstance = axios.create({
      baseURL,
    });

    this.axiosInstance.interceptors.response.use(
      this.handleSuccessResponse,
      this.handleErrorResponse
    );

    this.ApiKey = apiKey;
  }

  private handleSuccessResponse(response: AxiosResponse) {
    return response.data;
  }

  private handleErrorResponse(error: AxiosError) {
    throw error;
  }

  protected async get<T>(url: string, params?: any): Promise<T> {
    try {
      const response = await this.axiosInstance.post<T>(url, params, {
        headers: {
          Authorization: `Bearer ${this.ApiKey}`,
          "Content-Type": "application/json",
        },
      });

      return response;
    } catch (error) {
      throw error;
    }
  }

  //   protected async post<T>(url: string, data: any): Promise<T> {
  //     try {
  //       const response = await this.axiosInstance.post<T>(url, data);
  //       return response.data;
  //     } catch (error) {
  //       throw error;
  //     }
  //   }

  //   protected async put<T>(url: string, data: any): Promise<T> {
  //     try {
  //       const response = await this.axiosInstance.put<T>(url, data);
  //       return response.data;
  //     } catch (error) {
  //       throw error;
  //     }
  //   }

  //   protected async delete<T>(url: string): Promise<T> {
  //     try {
  //       const response = await this.axiosInstance.delete<T>(url);
  //       return response.data;
  //     } catch (error) {
  //       throw error;
  //     }
  // }
}
