import Card from "./componentes/Card";

function App() {
  let data = [
    {
    imgenUrl: "https://picsum.photos/id/237/200/300",
    imgenAlt: "perro",
    title: "Soy un Perro",
    cardBody: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btnUrl: "#",
    btnLabel: "Go somewhere"
    },
    {
    imgenUrl: "https://picsum.photos/id/237/200/300",
    imgenAlt: "perro",
    title: "Soy un Perro",
    cardBody: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btnUrl: "#",
    btnLabel: "Go somewhere"
    },
    {
    imgenUrl: "https://picsum.photos/id/237/200/300",
    imgenAlt: "perro",
    title: "Soy un Perro",
    cardBody: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btnUrl: "#",
    btnLabel: "Go somewhere"
    },
    {
    imgenUrl: "https://picsum.photos/id/237/200/300",
    imgenAlt: "perro",
    title: "Soy un Perro",
    cardBody: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btnUrl: "#",
    btnLabel: "Go somewhere"
    },    
]
  return (

    data.map((item, index) => {
      return <Card />
  })
   
  );
}

export default App;
