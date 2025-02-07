
import Navbar from "../components/Navbar";
import VistaNosotros from "../components/sesionesNosotros/vistaNosotros";
import QuienesSomos from "../components/sesionesNosotros/quienesSomos";
import BusienesMetrics  from "../components/sesionesNosotros/businesMetrics";
import Alianza from "../components/sesionesNosotros/alianza";

const nosotrosPages = () => {
  return (
    <div>
      
        <Navbar />
    


      {/* sesiones */}
      <VistaNosotros />
      <QuienesSomos />
      <Alianza />
      <BusienesMetrics />

    </div>
  )
}

export default nosotrosPages;
