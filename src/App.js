import React from 'react';
import Header from "./components/header";
import Main from "./components/main/main";

function App() {

  return (
    <div className="wrapper">
      <Header />
      <Main />
      <footer>Ежедневно с 8:00 до 23:00  |  Москва, ул. Маллая Бронная, дом 11</footer>
    </div>
  );
}

export default App;
