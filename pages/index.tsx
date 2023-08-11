import Image from 'next/image'
import { Inter } from 'next/font/google'
import PersonalInfo from '@/src/layouts/PersonalInfo'
import Head from 'next/head'
import PagesLayout from '@/src/components/PagesLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Head>
        <title>Multi-tepper</title>
        <link rel="shortcut icon" href="/assets/images/favicon-32x32.png" type="image/x-icon" />
      </Head>
      <PagesLayout />
    </main>
  )
}
