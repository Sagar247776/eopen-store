import type { NextPage } from 'next'
import Head from 'next/head'
import { FaFacebookF, FaGoogle, FaEnvelope } from 'react-icons/fa'
const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Eopen Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center bg-gray-100 px-20 text-center">
        <div className="flex w-2/3 max-w-4xl rounded-2xl bg-white shadow-2xl">
          <div className="w-3/5 p-5">
            <div className="py-10">
              <h2 className="text-3xl font-bold text-red-500">
                Sign in to Account
              </h2>
              <div className="mb-2 inline-block w-10 border-2 border-red-500"></div>
              <div className="my-2 flex justify-center">
                <a
                  href="/"
                  className="mx-1 rounded-full border-2 border-gray-200 p-3"
                >
                  <FaFacebookF className="text-sm " />
                </a>
                <a
                  href="/"
                  className="mx-1 rounded-full border-2 border-gray-200 p-3"
                >
                  <FaGoogle className="text-sm " />
                </a>
              </div>
              <p className="my-3 text-gray-400">or use your email account</p>
              <div className="flex flex-col items-center">
                <div className="w-64 bg-gray-100 p-2">
                  <FaEnvelope />
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/5 rounded-tr-2xl rounded-br-2xl bg-red-500 py-36 px-12 text-white">
            <h2 className="mb-2 text-3xl font-bold">Login/SingUp!</h2>
            <div className="mb-2 inline-block w-10 border-2 border-white"></div>
            <p className="mb-10">
              Fill up personal information and start journey with us.
            </p>
            <a
              href="/"
              className=" inline-block rounded-full border-2 border-white py-2 px-12 font-semibold hover:bg-white hover:text-red-500"
            >
              Sign Up
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
