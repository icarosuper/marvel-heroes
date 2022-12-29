import { ReactNode } from "react";
import Head from "next/head";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang={"pt"} className={roboto.className}>
      <Head>
        <title>Marvel Heroes</title>
      </Head>

      <body>
        <nav></nav>

        <main>{children}</main>

        <footer></footer>
      </body>
    </html>
  );
};

export default RootLayout;
