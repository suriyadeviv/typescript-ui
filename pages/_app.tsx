import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
