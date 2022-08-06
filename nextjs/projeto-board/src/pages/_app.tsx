import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import '../styles/global.scss';

import { SessionProvider } from 'next-auth/react';

const initialOptions = {
  "client-id": "ATCo7VkroWAgGPubMSuuvrWqWWrdgSWgc_6oaUUOe8HizTjVzqZAna8j3TAxcdm0JoOGFdrIxPpwIOoQ",
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
