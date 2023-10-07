import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { Poppins } from "next/font/google";

import "@/styles/globals.scss";

interface IApp extends AppProps {
  Component: NextPage & {
    getLayout?: (pageContent: ReactElement) => ReactNode;
  };
}

const font = Poppins({ weight: ["400", "600"], subsets: ["latin"] });

export default function App({ Component, pageProps }: IApp) {
  const getLayout = Component.getLayout || ((pageContent) => pageContent);
  return (
    <div className={`${font.className}`}>
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}
