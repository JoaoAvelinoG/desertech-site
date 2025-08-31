import { z } from "zod";

const allowedDomains = [
  "gmail.com",
  "outlook.com",
  "hotmail.com",
  "yahoo.com",
  "uol.com.br",
  "terra.com.br",
  "bol.com.br",
];

// const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;

export const contactSchema = z.object({
  name: z.string().min(3, "Nome deve ter ao menos 3 caracteres.").trim(),

  lastname: z
    .string()
    .min(3, "Sobrenome deve ter ao menos 3 caracteres")
    .trim(),

  message: z
    .string()
    .min(1, "Insira uma mensagem")
    .min(10, "Mensagem deve ter ao menos 10 caracteres")
    .max(200, "Mensagem deve ter no máximo 200 caracteres")
    .trim(),

  phone: z.string().optional(), // permite vazio

  email: z
    .string()
    .trim()
    .min(1, "Email é obrigatório")
    .email("Insira um e-mail válido")
    .refine((val) => {
      const domain = val.split("@")[1];
      return domain && allowedDomains.includes(domain.toLowerCase());
    }, "Email de domínio não permitido."),

  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "Você deve aceitar a política de privacidade",
  }),

  receiveNewsLetter: z.boolean().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
