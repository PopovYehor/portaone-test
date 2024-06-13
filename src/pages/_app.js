import Layout from "@/components/layout";
import Head from "next/head";
import { useRouter } from "next/router";
import { Inter } from 'next/font/google'

const inter = Inter({
  weight:['400'],
  style: ['normal'],
  subsets:['latin']
})

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    return (
      <>
      <Head>
      </Head>
            <Layout>
                <div id="root" key={router.pathname} className={inter.className}>
                    <Component {...pageProps} />
                </div>
            </Layout>
      </>
    );
  }
  
  export default MyApp;