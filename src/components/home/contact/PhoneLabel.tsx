import type { ContactFormData } from "@/schemas/contactSchema";
import { type Control, Controller, type FieldErrors } from "react-hook-form";
import { IMaskInput } from "react-imask";

// Props do componente
type Props = {
  control: Control<ContactFormData>; // control do react-hook-form
  errors: FieldErrors<ContactFormData>; // erros do react-hook-form
};

export const PhoneLabel = ({ control, errors }: Props) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Telefone
      </label>
      <Controller
        name="phone"
        control={control}
        render={({ field: { onChange, value } }) => (
          <IMaskInput
            id="phone"
            mask="(00) 00000-0000"
            placeholder="(00) 00000-0000"
            value={value}
            onAccept={(value: string) => onChange(value)}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          />
        )}
      />
      {errors.phone && (
        <p className="text-red-500 text-sm">
          {errors.phone.message?.toString()}
        </p>
      )}
    </div>
  );
};
