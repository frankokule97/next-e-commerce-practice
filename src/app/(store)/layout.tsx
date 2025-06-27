import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

export default function StoreLayout({ children } : Readonly<{children: React.ReactNode}>) {
  return (
    <>
      <Navigation />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}