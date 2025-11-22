import React, { useState } from "react";
import Login from "../components/Login";


function App() {
  // States(état, données)
  const [prenom, setPrenom] = useState("Vi");

  // comportement
  const handleClick = () => {
    alert("Vous avez cliqué !");
    setCount(count + 1);
  };

  // affichage (render)
  return (
    <div>
      <h1>Bonjour {prenom} !</h1>
      <p>{count}</p>
      <button onClick={handleClick}>Incrémenter</button>
      <Login />
    </div>
  );
}

export default App;
