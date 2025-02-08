
import Navbar from "../components/Navbar";
import VistaNosotros from "../components/sesionesNosotros/vistaNosotros";
import QuienesSomos from "../components/sesionesNosotros/quienesSomos";
import BusienesMetrics  from "../components/sesionesNosotros/businesMetrics";
import Alianza from "../components/sesionesNosotros/alianza";
import AdaptedServices from "../components/sesionesNosotros/adaptedServices";
import ClientsSection from "../components/sesionesNosotros/clienteSection";
import Footer from "../components/footer";

const nosotrosPages = () => {
  return (
    <div>
        <Navbar />
  
      {/* sesiones */}
      <VistaNosotros />
      <QuienesSomos />
      <Alianza />
      <BusienesMetrics />
      <AdaptedServices />
      <ClientsSection />
      <Footer />

    </div>
  )
}

export default nosotrosPages;
