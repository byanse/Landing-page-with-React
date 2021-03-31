import Jumbotron from "./componentes/Jumbotron";
import Navbar from "./componentes/Navbar";
import Card from "./componentes/Card";
import Footer from "./componentes/Footer";
import {data} from "./data.js"

function App() {
  let objectNavbar = {
    titulo: "Start Booststrap",
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
  };
  let footerProps = {
    tituloFooter: "Copyright",
    webSite: "your website 2019",
  };

  return (
    <>
      <Navbar
        titulo={objectNavbar.titulo}
        home={objectNavbar.home}
        about={objectNavbar.about}
        services={objectNavbar.services}
        contact={objectNavbar.contact}
      />
      <Jumbotron username="Welcome" />
      <div className="container">
        <div className="row">
          {data.map((item, index) => {
            return (
              <div key={index} className="col-3">
                <Card
                  imgenUrl={item.imgenUrl}
                  imgenAlt={item.imgenAlt}
                  title={item.title}
                  cardBody={item.cardBody}
                  btnUrl={item.btnUrl}
                  btnLabel={item.btnLabel}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Footer
        tituloFooter={footerProps.tituloFooter}
        webSite={footerProps.webSite}
      />
    </>
  );
}

export default App;
