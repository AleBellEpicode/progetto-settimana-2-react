import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CityMeteo from "./components/CityMeteo";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/detail/:cityCoord" element={<CityMeteo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// eslint-disable-next-line no-lone-blocks
{
  /* <header> 
 </barra di ricerca>
 </header>
 <corpo con 4 localita>
    <C.meteo card>
      <badge per meteo,/>
      <temperatura per mattina e sera/>
      <link onclick per andare alla pagina dettagli localita,
      che avra il meteo d>el giorno e del giorno successivo/>
    </C.meteo card>x4 "hardcodate"
  </corpo con 4 localita/>
  </footer>  */
}
