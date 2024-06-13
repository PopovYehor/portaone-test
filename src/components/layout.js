import Head from "next/head";

export default function Layout ({ children }) {
    return (
      <>
      <Head>
        <title>PortaOne test task</title>
      </Head>
      <div>
            {children}
      </div>
      </>
    );
};