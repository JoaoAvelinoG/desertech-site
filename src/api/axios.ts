import type { ContactFormData } from "@/schemas/contactSchema";
import type { RegionUserResponse } from "@/types/RegionUserResponse";
import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_GEOLOCATION_BY_IP_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export async function getLocationByIp(): Promise<RegionUserResponse> {
  const response = await api.get<RegionUserResponse>("/");
  return response.data;
}

export interface Payload extends ContactFormData {
  city: string;
  region: string;
  region_code: string;
}

export async function webhookN8n(data: Payload) {
  try {
    const response = await axios.post(
      "https://joaoavelino.app.n8n.cloud/webhook-test/78ec9144-9542-49bc-9e13-1cbe75436270",
      data
    );

    if (!response.data.message) {
      console.log("Erro ao enviar formulário para o N8N.");
    }

    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Erro desconhecido:", error);
    }
  }
}

export default api;
