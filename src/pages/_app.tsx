// import { RootProvider } from "@/components/providers";
// import { SessionProvider } from "next-auth/react"
// import type { AppProps } from "next/app";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// import "@/styles/globals.css";

// export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
//   return (
//     <RootProvider>
//      <SessionProvider session={session}>
//       <Navbar />
//       <main><Component {...pageProps} /></main>
//       <Footer />
//      </SessionProvider>
//     </RootProvider>
//   );
// }

import { RootProvider } from "@/components/providers";
import type { AppProps } from "next/app";

import "@/styles/style.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootProvider>
      <Component {...pageProps} />
    </RootProvider>
  );
}