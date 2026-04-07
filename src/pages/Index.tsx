import { OrderProvider } from "@/context/OrderContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import OrderSummary from "@/components/OrderSummary";
import OrderInfo from "@/components/OrderInfo";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => (
  <OrderProvider>
    <Header />
    <main>
      <HeroSection />
      <MenuSection />
      <OrderSummary />
      <OrderInfo />
      <ContactSection />
    </main>
    <Footer />
    <FloatingButtons />
  </OrderProvider>
);

export default Index;
