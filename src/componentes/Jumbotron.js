import React from "react";

function Jumbotron(props){
    return(
      <div className="container">
        <div className="jumbotron">
<h1 className="display-4">A Warm {props.username}!</h1>
  <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>

  <a className="btn btn-primary btn-lg" href="https://www.google.scom/" role="button">Call to action!</a>
</div>
</div>
    )
}


export default Jumbotron


























/* const data = {
cardTitle: "A Card Welcome!",
cardDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
button: {
    url: "https://www.google.com/",
    lavel: "Cal tu action!"
}
};
let content =( 
    <div className="jumbotron">
  <h1 className="display-4">{data.cardTitle}</h1>
<p className="lead">{data.cardDescription}</p>
  <a className="btn btn-primary btn-lg" href={data.button.url} role="button">{data.button.lavel}</a>
</div>
);

ReactDOM.render(content, document.querySelector("#mydiv")); */