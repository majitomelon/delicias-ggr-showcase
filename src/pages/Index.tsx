import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MenuCatalog from "@/components/MenuCatalog";
import OrderInfo from "@/components/OrderInfo";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <MenuCatalog />
      <OrderInfo />
      <ContactSection />
    </main>
    <Footer />
    <FloatingButtons />
  </>
);

export default Index;
