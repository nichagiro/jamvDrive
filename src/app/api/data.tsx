import IconWallet from "@/images/features/icon-wallet.svg";
import IconMobileApp from "@/images/features/icon-mobileapp.svg";
import IconValut from "@/images/features/icon-vault.svg";

import IconPlanning from "@/images/serviceSteps/icon-planning.svg";
import IconPrototype from "@/images/serviceSteps/icon-prototype.svg";
import IconRefinement from "@/images/serviceSteps/icon-refinement.svg";
import IconSupport from "@/images/serviceSteps/icon-support.svg";

import IconServices from "@/images/icons/icon-Services.svg";
import IcoBlockChain from "@/images/icons/icon-blockchain.svg";
import IconConsulting from "@/images/icons/icon-consulting.svg";

import metaImagen from '@/app/metaImagen.webp'


export const services = [
  {
    icon: IconConsulting.src,
    text: 'Eficiencia operativa para tu empresa',
  },
  {
    icon: IcoBlockChain.src,
    text: 'Tecnológica fácil de usar',
  },
  {
    icon: IconServices.src,
    text: 'Seguridad en cada trayecto',
  },
  {
    icon: IconSupport.src,
    text: 'Soporte todo el tiempo',
  },
]

export const features = [
  {
    image: IconWallet.src,
    title: "Flexibilidad y cobertura en múltiples zonas",
  },
  {
    image: IconValut.src,
    title: "Seguridad y confianza en cada trayecto",
  },
  {
    image: IconMobileApp.src,
    title: "Plataforma tecnológica intuitiva",
  },
];


export const serviceSteps = [
  {
    icon: IconPlanning.src,
    title: "Recogida",
    text: "Solicitud del servicio y Jamv Drive recoge el producto.",
    className: "lg::top-40 top-36 lg:left-0 -left-20"
  },
  {
    icon: IconRefinement.src,
    title: "Preparación",
    text: "Verificación de condiciones y preparación del producto.",
    className: "lg:top-40 top-36 lg:right-0 -right-20"
  },
  {
    icon: IconSupport.src,
    title: "Entrega",
    text: "Entrega en el destino final, integridad y satisfacción.",
    className: "lg:bottom-48 bottom-36 lg:right-0 -right-20"
  },
  {
    icon: IconPrototype.src,
    title: "Seguimiento",
    text: "Notificaciones y confirmaciones en tiempo real.",
    className: "lg:bottom-48 bottom-36 lg:left-0 -left-20"
  },
];


export const socials = [
  { icon: "fa6-brands:facebook-f", link: "https://www.facebook.com/jamv.drive.2025", name: "Facebook" },
  { icon: "fa6-brands:instagram", link: "https://www.instagram.com/jamvdrive", name: "Instagram" },
  { icon: "fa6-brands:youtube", link: "https://www.youtube.com/channel/UCC_Y6PFRc3swJQOkga9OGxQ", name: "Youtube" },
]

export const rastreoPageDropi = "https://trackingcol.jamvdriver.com/"
export const rastreoPage = "https://virtech.mx/buscar-orden/"

export const apiWhatsapp = "https://api.whatsapp.com";

export const whatsappNumbers = {
  Bogota: "3028327936",
  Medellin: "3013536172",
  Cali: "3043559062",
}

export const whatsappMenuItems = [
  { label: "Bogota", href: `${apiWhatsapp}/send?phone=57${whatsappNumbers.Bogota}&text=Hola te escribo desde la pagina web` },
  { label: "Cali", href: `${apiWhatsapp}/send?phone=57${whatsappNumbers.Cali}&text=Hola te escribo desde la pagina web` },
  { label: "Medellin", href: `${apiWhatsapp}/send?phone=57${whatsappNumbers.Medellin}&text=Hola te escribo desde la pagina web` },
]

export const url = "https://jamvdrive-b0cf0.web.app";

export const metadataOptions = {
  url: url,
  title: 'Jamv Drive | Soluciones de transporte y logística empresarial en Colombia',
  description: 'Optimiza la movilidad y logística de tu empresa con Jamv Drive. Servicios personalizados, tecnología intuitiva y máxima seguridad en cada envío o traslado en Colombia.',
  images: [{
    url: url + metaImagen.src,
    width: 1024,
    height: 1024,
    alt: 'Jamv Drive - Transporte y logística empresarial'
  }],
}

export const email = "gerenciacali@jamvdriver.com"