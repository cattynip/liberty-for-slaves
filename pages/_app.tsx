import '@styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@components/Layout';

function LiberyForSlaves({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default LiberyForSlaves;
