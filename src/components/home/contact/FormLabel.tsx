import type { ContactFormData } from "@/schemas/contactSchema";
import type { FieldErrors, UseFormRegister } from "react-hook-form";

type Props = {
  fieldToRegister: keyof ContactFormData;
  label: string;
  placeholder: string;
  register: UseFormRegister<ContactFormData>;
  errors: FieldErrors<ContactFormData>;
};

export const FormLabel = ({
  label,
  placeholder,
  fieldToRegister,
  register,
  errors,
}: Props) => {
  const hasError = errors[fieldToRegister];

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label} <span className="text-red-500">*</span>
      </label>

      {fieldToRegister === "message" ? (
        // Textarea só para o campo "message"
        <textarea
          id={fieldToRegister}
          {...register(fieldToRegister)}
          rows={4}
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          placeholder={placeholder}
        />
      ) : (
        <input
          id={fieldToRegister}
          type="text"
          {...register(fieldToRegister)}
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          placeholder={placeholder}
        />
      )}

      {hasError && (
        <p className="text-red-500 text-xs md:text-sm">
          {hasError.message as string}
        </p>
      )}
    </div>
  );
};
