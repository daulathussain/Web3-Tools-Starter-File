import Head from "next/head";
import toast, { Toaster } from "react-hot-toast";
require("@solana/wallet-adapter-react-ui/styles.css");
import "../styles/globals.css";

import { StateContextProvider } from "../Context/index";
import { ContextProvider } from "../solana/contexts/ContextProvider";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/buypage.png" />
      </Head>

      <ContextProvider>
        <StateContextProvider>
          <Component {...pageProps} />
          <Toaster />
        </StateContextProvider>
      </ContextProvider>

      <script src="assets/js/plugin.js"></script>
      <script src="assets/js/lightbox.js"></script>
      <script src="assets/js/scripts.js"></script>
    </>
  );
}
