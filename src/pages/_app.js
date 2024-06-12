import Layout from "@/components/layout";
import Head from "next/head";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
    const router = useRouter()
    return (
      <>
      <Head>
      </Head>
            <Layout>
                <div id="root" key={router.pathname}>
                    <Component {...pageProps} />
                </div>
            </Layout>
      </>
    );
  }
  
  export default MyApp;