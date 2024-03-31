import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { Providers } from "./Providers";
import '../app/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


export const metadata = {
  title: "Prattle Chat App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
        </body>
    </html>
  );
}
