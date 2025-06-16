import { email, metadataOptions, socials, whatsappNumbers } from '@/app/api/data';
import React from 'react'

const { url } = metadataOptions;

const jsonLdHome = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": url,
  "name": "Jamv Drive",
  "url": url,
  "logo": url + "/logo.png",
  "description": "Jamv Drive ofrece soluciones de transporte y logística empresarial en Colombia, combinando tecnología intuitiva, atención personalizada y máxima seguridad.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Cra. 14 # 20 92",
    "addressLocality": "Bogotá",
    "addressRegion": "Cundinamarca",
    "postalCode": "110111",
    "addressCountry": "CO"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+57" + whatsappNumbers.Cali,
    "contactType": "customer service",
    "email": email,
    "areaServed": ["CO", "MX"],
    "availableLanguage": ["Spanish"]
  },
  "sameAs": socials.map(social => social.link),
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Jamv Drive",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Transporte empresarial personalizado",
          "description": "Soluciones de movilidad para empresas, adaptadas a sus necesidades operativas."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Logística de envíos",
          "description": "Gestión y entrega segura de paquetes y productos en toda Colombia."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Plataforma de gestión logística",
          "description": "Herramienta digital para seguimiento y control de operaciones logísticas."
        }
      }
    ]
  }
};

const JsonLD = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHome) }}
    />
  )
}

export default JsonLD