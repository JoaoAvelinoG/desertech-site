import { format } from "date-fns";
import type { ContactFormData } from "@/schemas/contactSchema";

export const normalizeContactData = (
  data: ContactFormData,
  location: { city: string; region: string; region_code: string }
) => {
  const createdAt = new Date().toISOString();
  const formattedDate = format(new Date(createdAt), "dd/MM/yyyy");
  const phoneFormatted = data.phone
    ? `+55${data.phone.replace(/\D/g, "")}`
    : "";

  return {
    ...data,
    name: data.name?.trim() ?? "",
    email: data.email?.toLowerCase().trim() ?? "",
    phone: phoneFormatted,
    fullName: `${data.name ?? ""} ${data.lastname ?? ""}`.trim(),
    createdAt: formattedDate,
    city: location.city,
    region: location.region,
    region_code: location.region_code,
  };
};
