import React from 'react';
import Header from "./components/header";
import Main from "./components/main/main";

function App() {

  const styles = {
    maxWidth:"2000px",
    margin:"0 auto",
    width:"90%",
    fontFamily:"'Montserrat', sans-serif"
  }

  return (
    <div style = {styles}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
