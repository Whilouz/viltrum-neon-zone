import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import GameCatalog from "@/components/GameCatalog";
import Pricing from "@/components/Pricing";
import Tournaments from "@/components/Tournaments";
import BookingForm from "@/components/BookingForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ViltrumZone = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <GameCatalog />
        <Pricing />
        <Tournaments />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ViltrumZone;