//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondCounter from "./component/secondCounter";

let counter = 0;
const containerApp = ReactDOM.createRoot(document.getElementById('app'))
setInterval(() => {
    const seis = Math.floor(counter / 100000);
    const cinco = Math.floor(counter / 10000);
    const cuatro = Math.floor(counter / 1000);
    const tres = Math.floor(counter / 100);
    const dos = Math.floor(counter / 10);
    const uno = Math.floor(counter / 1);
    
    counter++

   containerApp.render(<SecondCounter unos={uno} dos={dos} tres={tres} cuatro={cuatro} cinco={cinco} seis={seis} />);


}, 1000)

//render your react application

