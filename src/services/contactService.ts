import { webhookN8n, type Payload } from "@/api/axios";
import { db } from "@/lib/firebaseConfig";
import type { ContactFormData } from "@/schemas/contactSchema";
import { addDoc, collection } from "firebase/firestore";

export const saveContactToFirestore = async (contact: ContactFormData) => {
  return addDoc(collection(db, "contacts"), contact);
};

export const sendContactToN8n = async (contact: Payload) => {
  return webhookN8n(contact);
};
