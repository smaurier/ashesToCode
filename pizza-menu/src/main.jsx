import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  return (
    <footer> {new Date().toLocaleTimeString()} We're currently closed</footer>
  );
}

function Pizza() {
  return (
    <div>
      <img src="images/pizza-data.jpg" alt="image d'une pizza"></img>
      <h1>Pepperoni</h1>
      <p>tomato sauce, mozzarella, pepperoni</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Imperative : selection manuelle du dom, mutation, step by step du l'UI : Comment on fait les choses
// Declarative : decris comment l'UI doit utiliser les data. Abstraction du DOM, on ne touche pas directement au DOM. Reflet des current data.

//Séparation des rôles

