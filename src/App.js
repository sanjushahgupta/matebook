import logo from "./logo.svg";
import "./App.css";
import LeftSideBar from "./Components/LeftSideBar";
import RightSideBar from "./Components/RightSideBar";
import MainFeed from "./Components/MainFeed";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="Container">
        <LeftSideBar />
        <MainFeed />
      </div>
    </div>
  );
}

export default App;
