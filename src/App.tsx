import { useState } from "react";
import BurgerMenu from "./components/burgerMenu/BurgerMenu";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Navigation from "./components/navigation/Navigation";

const App = () => {
  const [burgerOpen, setBurgerOpen] = useState(false)
  return (
    <div className="App" style={burgerOpen ? { overflow: 'hidden', height: '100vh' } : {}}>
      {/* <BurgerMenu /> */}
      {burgerOpen && <BurgerMenu />}
      <Navigation setBurgerOpen={setBurgerOpen} burgerOpen={burgerOpen} />
      {!burgerOpen && <Header />}
      {!burgerOpen && <Main />}
    </div>
  );
}

export default App;
