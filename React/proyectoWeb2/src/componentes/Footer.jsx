import InformacionFooter from "./InformacionFooter";
import Localizacion from "./Localizacion";
import MenuFooter from "./MenuFooter";

export default function Footer() {
  return (
    <footer id="footer">
        <div className="wrap">
          <MenuFooter />
          <Localizacion />
          <InformacionFooter />
        </div>
    </footer>
  )
}
