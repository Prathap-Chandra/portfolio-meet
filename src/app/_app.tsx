import { AppProps } from 'next/app';
import './globals.css';
import { Roboto, Rubik_Wet_Paint } from 'next/font/google';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
