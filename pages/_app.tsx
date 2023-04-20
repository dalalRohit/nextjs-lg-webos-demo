import type { AppProps } from "next/app";
import "./../styles/global.css";
import Script from "next/script";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <Script src="/webOSTVjs-1.2.4/webOSTV-dev.js" id="dev" />
      <Script src="/webOSTVjs-1.2.4/webOSTV.js" id="prod" />
    </div>
  );
}
