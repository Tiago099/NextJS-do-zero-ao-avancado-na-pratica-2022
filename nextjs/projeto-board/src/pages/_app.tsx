import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import '../styles/global.scss';

import { SessionProvider } from 'next-auth/react';

const initialOptions = {
  "client-id": "AU5cvZWhr1s-BtCd58mGq6_hMK6EofRJlX5uzf3vj8xJSbSYKS65qPXnm872pbN2Gr1qYtg311H8wB1m",
  currency: "BRL",
  intent: "capture",
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    < SessionProvider session={pageProps.session} >
      <PayPalScriptProvider options={initialOptions}>
        <Header/>
        <Component {...pageProps} />
      </PayPalScriptProvider>
    </SessionProvider>
  )
}
 
export default MyApp;
