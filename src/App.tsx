import { ThemeProvider } from "./lib/theme";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { FloatingWhatsApp } from "./components/layout/FloatingWhatsApp";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Work } from "./components/sections/Work";
import { Packages } from "./components/sections/Packages";
import { Contact } from "./components/sections/Contact";

export default function App() {
  return (
    <ThemeProvider>
      <div className="grain-overlay">
        <Header />
        <main>
          <Hero />
          <Services />
          <Work />
          <Packages />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </ThemeProvider>
  );
}
// POLKAT-155: refine hero spacing on mobile
