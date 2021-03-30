import Jumbotron from "./componentes/Jumbotron";
import Navbar from "./componentes/Navbar";
import Card from "./componentes/Card";
function App() {
  let data = [
    {
      imgenUrl: "https://picsum.photos/id/237/400/300",
      imgenAlt: "perro",
      title: "Soy un Perro",
      cardBody: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      btnUrl: "#",
      btnLabel: "Go somewhere"
    },
    {
      imgenUrl: "https://picsum.photos/id/236/400/300",
      imgenAlt: "perro",
      title: "Soy un Perro",
      cardBody: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      btnUrl: "#",
      btnLabel: "Go somewhere"
    },
    {
      imgenUrl: "https://picsum.photos/id/238/400/300",
      imgenAlt: "perro",
      title: "Soy un Perro",
      cardBody: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      btnUrl: "#",
      btnLabel: "Go somewhere"
    },
    {
      imgenUrl: "https://picsum.photos/id/235/400/300",
      imgenAlt: "perro",
      title: "Soy un Perro",
      cardBody: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      btnUrl: "#",
      btnLabel: "Go somewhere"
    },
  ]
  let objectNavbar = {
    titulo: "Start Booststrap",
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
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
                <Card imgenUrl={item.imgenUrl}
                  imgenAlt={item.imgenAlt}
                  title={item.title}
                  cardBody={item.cardBody}
                  btnUrl={item.btnUrl}
                  btnLabel={item.btnLabel}
                />
              </div>

            )
          })}
        </div>
      </div>
    </>

  );
}

export default App;
