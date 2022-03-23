import "./App.css";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Game from "./Game/Game";
import Main from "./Main/Main";
import Lead from "./Lead/lead";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Game />
      <Main />
      <Lead/>
    </div>
  );
}

export default App;
