import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";

export const metadata = {
  title: "Lilac",
  description: "Assignment for Grow My Therapy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Loading/>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
