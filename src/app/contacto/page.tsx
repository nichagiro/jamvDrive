"use client";
import Button from "@/components/Common/Button";
import Input from "@/components/Common/Input";
import { send } from "@emailjs/browser";
import { useActionState } from "react";

const onSubmit = async (state: null | string, formData: FormData) => {
  const form = Object.fromEntries(formData.entries());

  return await send("service_u2blit9", "template_72rk6ho", form, { publicKey: "gqYX4Ymt1loQwr9O-" })
    .then(() => null)
    .catch(() => "Error al enviar el formulario")
}

export default function ContactoPage() {
  const [error, submitAction, isPending] = useActionState(onSubmit, null)

  return (
    <section className="pt-36 pb-6 bg-gray-100 min-h-screen">
      <form className="max-w-xl mx-auto bg-darkmode p-6 rounded-lg shadow-md space-y-4" action={submitAction}>
        <h2 className="text-2xl font-bold text-white">Formulario de contacto</h2>

        <Input
          name="name"
          title="Nombre completo"
          type="text"
          required
        />

        <Input
          name="company"
          title="Empresa"
          type="text"
        />

        <Input
          name="job"
          title="Cargo"
          type="text"
          required
        />

        <Input
          name="phone"
          title="Teléfono"
          type="text"
          required
          pattern="^[0-9]{10,}$"
        />

        <Input
          name="email"
          title="Correo electrónico"
          type="email"
        />

        <Input
          name="city"
          title="Ciudad"
          type="text"
          required
        />

        <Button type="submit" className="w-full mt-2" isLoading={isPending}>
          Enviar
        </Button>

        <p className="text-red-500 text-sm">
          {error ? "Error al enviar el formulario. Inténtalo de nuevo." : ""}
        </p>

      </form>
    </section>
  )
}