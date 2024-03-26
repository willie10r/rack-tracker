import { Inter } from "next/font/google";
import Nav from "../components/nav/page";
import Footer from "../components/footer/pages";
const inter = Inter({ subsets: ["latin"] });
import styles from '../../styles/base.module.scss'

export const metadata = {
  title: "Rack Tracker",
  description: "Fuel rack traffic checking app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.base}>
      <Nav/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
