import React from 'react'

import Hero from '@/components/Home/hero'
import Work from '@/components/Home/work'
import ServiceSteps from '@/components/Home/serviceSteps/ServiceSteps'
import Banner from '@/components/Home/banner/Banner'
import Features from '@/components/Home/features/Features'

import Head from 'next/head'
import JsonLD from '@/components/Home/JsonLD'

import { Metadata } from 'next'
import { metadataOptions } from './api/data'

const { description, images, url, title } = metadataOptions

export const metadata: Metadata = {
  title: title,
  description: description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: title,
    description: description,
    url: url,
    siteName: 'Jamv Drive',
    images: images,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: images
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <JsonLD />
      </Head>

      <main>
        <Hero />
        <Work />
        <ServiceSteps />
        <Banner />
        <Features />
      </main>
    </>
  )
}


