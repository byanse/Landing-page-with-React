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
    imgenUrl: "https://picsum.photos/id/237/400/300",
    imgenAlt: "perro",
    title: "Soy un Perro",
    cardBody: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btnUrl: "#",
    btnLabel: "Go somewhere"
    },
    {
    imgenUrl: "https://picsum.photos/id/237/400/300",
    imgenAlt: "perro",
    title: "Soy un Perro",
    cardBody: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btnUrl: "#",
    btnLabel: "Go somewhere"
    },
    {
    imgenUrl: "https://picsum.photos/id/237/400/300",
    imgenAlt: "perro",
    title: "Soy un Perro",
    cardBody: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btnUrl: "#",
    btnLabel: "Go somewhere"
    },    
]
  return (

   <div className="container">
     <div  className="row">
       { data.map((item, index) => {
      return (
        
        <div  key={index} className="col-3">
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
   
  );
}

export default App;
