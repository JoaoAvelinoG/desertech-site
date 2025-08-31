import type { ContactFormData } from "@/schemas/contactSchema";
import { memo } from "react";
import type { FieldErrors, UseFormRegister } from "react-hook-form";

type Props = {
  fieldToRegister: keyof ContactFormData;
  label: string;
  register: UseFormRegister<ContactFormData>; // Função de registro do react-hook-form
  errors: FieldErrors<ContactFormData>; // Objeto de erros do react-hook-form
};

export const FormCheckbox = memo(
  ({ register, errors, label, fieldToRegister }: Props) => {
    return (
      <>
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input
            id={fieldToRegister}
            {...register(`${fieldToRegister}`)}
            type="checkbox"
            className="cursor-pointer h-4 w-4 rounded border-gray-300 text-blue-600"
          />
        </label>
        <p className="text-xs md:text-base">{label}</p>
        {errors[fieldToRegister] && (
          <p className="text-red-500 text-xs md:text-sm">
            {errors[fieldToRegister]?.message as string}
          </p>
        )}
      </>
    );
  }
);
