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
    <section className="pt-20 xl:pt-36 pb-6 bg-gray-100 min-h-screen">
      <form className="max-w-xl mx-auto bg-darkmode p-6 rounded-lg shadow-md space-y-4" action={submitAction}>
        <h2 className="text-2xl font-bold text-white py-2">Formulario de contacto</h2>

        <Input
          name="name"
          title="Nombre completo"
          type="text"
          required
        />

        <Input
          name="phone"
          title="Numero de WhatsApp"
          type="text"
          required
          pattern="^[0-9]{10,}$"
        />

        <Input
          name="email"
          title="Correo electrónico"
          type="email"
          required
        />

        <Input
          name="company"
          title="Nombre de la empresa o tienda en plataformas"
          type="text"
          required
        />

        <Input
          name="productsType"
          title="Que tipo de productos manejas"
          type="text"
          required
        />

        <Input
          name="cant"
          title="Qué cantidad de paquetería maneja diaria a nivel nacional y Bogotá"
          type="text"
          pattern="^[0-9]+$"
          required
        />

        <Input
          name="platform"
          title="Qué plataforma usa para realizar el despacho de sus pedidos"
          type="text"
          required
        />

        <Input
          name="carrier"
          title="Qué transportadora utiliza habitualmente para despachar los pedidos"
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