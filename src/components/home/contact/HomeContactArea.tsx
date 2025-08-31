import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/schemas/contactSchema";
import { getLocationByIp } from "@/api/axios";

import { normalizeContactData } from "@/utils/normalizeContact";
import { saveContactToFirestore } from "@/services/contactService";
import { toast } from "sonner";

import { PhoneLabel } from "./PhoneLabel";

import { FormLabel } from "./FormLabel";
import { FormCheckbox } from "./FormCheckbox";
import type { Ref } from "react";

type Props = {
  sectionRef: Ref<HTMLElement> | undefined;
};

// Corrigido: props tipado como {} porque você não usa props
export const HomeContactArea = ({ sectionRef }: Props) => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      lastname: "",
      phone: "",
      email: "",
      message: "",
      acceptTerms: false,
      receiveNewsLetter: false,
    },
  });

  const handleForm = async (data: ContactFormData): Promise<void> => {
    try {
      const location = await getLocationByIp();
      const newContact = normalizeContactData(data, location);

      await saveContactToFirestore(newContact);

      toast.success("Formulário enviado com sucesso!", {
        description: "Entraremos em contato em breve.",
      });

      reset();
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);

      // Toast de erro
      toast.error("Erro ao enviar", {
        description: "Tente novamente mais tarde.",
      });
    }
  };

  return (
    <section ref={sectionRef} className="bg-primary/7">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-1 w-16 md:w-32 bg-primary"></div>

      <div className="flex flex-col md:flex-row lg:container mx-auto justify-between px-4 py-2 md:py-12 gap-4">
        <div className="text-center md:text-left pl-6 max-w-12/12 md:max-w-4/12 mt-6 md:mt-20">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold">
            Transforme
            <br />
            a sua empresa com a
            <br />
            Desertech!
          </h2>
          <p className="text-base md:text-sm mt-5 mb-3">
            Junte-se a mais de 6.000 empresas que confiam no poder dos dados.
            Aproveite as 500 consultas mensais gratuitas para sua empresa.
          </p>
        </div>

        <Card className="flex-1 w-full max-w-full md:max-w-[420px] lg:max-w-[480px] bg-white shadow-md rounded-xl md:px-3 pb-12 border mt-4 md:mt-16">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center mb-3">
              Entre em contato
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-7" onSubmit={handleSubmit(handleForm)}>
              {/* Nome */}
              <FormLabel
                label="Nome"
                register={register}
                errors={errors}
                placeholder="Digite seu Nome..."
                fieldToRegister="name"
              />

              {/* Sobrenome */}
              <FormLabel
                label="Sobrenome"
                register={register}
                errors={errors}
                placeholder="Digite seu Sobrenome..."
                fieldToRegister="lastname"
              />

              {/* Telefone */}
              <PhoneLabel control={control} errors={errors} />

              {/* Email */}
              <FormLabel
                label="Email"
                register={register}
                errors={errors}
                placeholder="Digite seu Email..."
                fieldToRegister="email"
              />

              {/* Mensagem */}
              <FormLabel
                label="Mensagem"
                register={register}
                errors={errors}
                placeholder="Digite sua mensagem..."
                fieldToRegister="message"
              />

              {/* Checkboxes */}
              <div className="space-y-2">
                <FormCheckbox
                  label="Aceito a política de privacidade do site."
                  errors={errors}
                  register={register}
                  fieldToRegister="acceptTerms"
                />
                <FormCheckbox
                  label="Desejo receber informações por e-mail."
                  errors={errors}
                  register={register}
                  fieldToRegister="receiveNewsLetter"
                />
              </div>

              {/* Botão */}
              <Button
                type="submit"
                className="cursor-pointer w-full rounded-sm bg-primary px-4 py-2 font-medium text-black hover:bg-[#e6b71f]"
              >
                Enviar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
