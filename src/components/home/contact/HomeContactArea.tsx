import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useForm, Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { zodResolver } from "@hookform/resolvers/zod";

import { contactSchema, type ContactFormData } from "@/schemas/contactSchema";
import { getLocationByIp, webhookN8n } from "@/api/axios";

export const HomeContactArea = () => {
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

      const newContact = {
        ...data,
        email: data.email?.toLowerCase() ?? "",
        phone: data.phone ? data.phone.replace(/\D/g, "") : "",
        fullName: `${data.name ?? ""} ${data.lastname ?? ""}`.trim(),
        createdAt: new Date().toISOString(),
        city: location.city,
        region: location.region,
        region_code: location.region_code,
      };

      const webhookResponse = await webhookN8n(newContact);
      console.log("Dados enviados:", newContact);

      reset();
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      // aqui você pode exibir uma notificação de erro para o usuário
    }
  };

  return (
    <section className="bg-primary/7">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-1 w-16 md:w-32 bg-primary"></div>

      <div className="flex flex-col md:flex-row xl:container mx-auto justify-between px-4 py-2 md:py-12 gap-4">
        <div className="text-center md:text-left pl-6 max-w-12/12 md:max-w-4/12 mt-6 md:mt-20">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold">
            Transforme
            <br />
            a sua empresa com a
            <br />
            Desertech!
          </h2>

          <p className="text-sm mt-5 mb-3">
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
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nome <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                  placeholder="Digite seu nome"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs md:text-sm">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Sobrenome */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Sobrenome <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("lastname")}
                  type="text"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                  placeholder="Digite seu sobrenome"
                />
                {errors.lastname && (
                  <p className="text-red-500 text-xs md:text-sm">
                    {errors.lastname.message}
                  </p>
                )}
              </div>

              {/* Telefone com máscara */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Telefone
                </label>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <IMaskInput
                      mask="(00) 00000-0000"
                      placeholder="(00) 00000-0000"
                      value={value}
                      onAccept={(value) => {
                        onChange(value);
                      }}
                      className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                    />
                  )}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                  placeholder="seuemail@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs md:text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Mensagem */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Mensagem <span className="text-red-500">*</span>
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                  placeholder="Digite sua mensagem"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs md:text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Checkboxes */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    {...register("acceptTerms")}
                    type="checkbox"
                    className="cursor-pointer h-4 w-4 rounded border-gray-300 text-blue-600"
                  />
                  <p className="text-xs md:text-base">
                    Aceito a política de privacidade do site.
                  </p>
                </label>
                {errors.acceptTerms && (
                  <p className="text-red-500 text-xs md:text-sm">
                    {errors.acceptTerms.message}
                  </p>
                )}

                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    {...register("receiveNewsLetter")}
                    type="checkbox"
                    className="cursor-pointer h-4 w-4 rounded border-gray-300 text-blue-600"
                  />
                  <p className="text-xs md:text-base">
                    Desejo receber informações por e-mail.
                  </p>
                </label>
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
