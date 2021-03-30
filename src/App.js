import Navbar from "./componentes/Navbar";

function App() {
  let objectNavbar = {
    titulo: "Start Booststrap",
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
  };

  return (
    <Navbar
      titulo={objectNavbar.titulo}
      home={objectNavbar.home}
      about={objectNavbar.about}
      services={objectNavbar.services}
      contact={objectNavbar.contact}
    />
  );
}

export default App;
