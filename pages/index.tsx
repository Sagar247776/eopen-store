import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Eopen Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Product />
      <Footer />
    </div>
  )
}

export default Home
