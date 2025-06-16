"use client";
import { whatsappMenuItems } from "@/app/api/data";
import { MenuButton } from "@/components/Common/MenuButton";

const Banner = () => {
  return (
    <section className='md:pt-44 sm:pt-24 pt-12 relative z-1' id="asesoria">
      <div className='container px-4'>
        <div className="bg-section/10 px-16 py-14 rounded-3xl border-2 border-section/20 grid grid-cols-12 items-center">
          <div className='lg:col-span-8 col-span-12'>
            <h2 className='text-white sm:text-40 text-30 mb-6'>
              Llevamos tu empresa al siguiente nivel <span className='text-primary'>logístico</span>
            </h2>
            <p className='text-muted/60 text-18'>
              Optimiza tus operaciones de transporte con nuestro servicio personalizado,
              tecnología intuitiva y soporte dedicado. Confía en Jamv Drive para llevar tu negocio al siguiente nivel.
            </p>
          </div>
          <div className='lg:col-span-4 col-span-12'>
            <div className='flex lg:justify-end lg:mt-0 mt-7 justify-center relative'>
              <MenuButton items={whatsappMenuItems} >
                Contactar Asesor
              </MenuButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
