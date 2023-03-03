import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import data from "./data.json";
import { useState } from "react";
import SelectedBeast from "./Components/SelectedBeast";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [theBeast, setTheBeast] = useState({});
  const [hornsFilter, setHornsFilter] = useState("");

  function handleModal(beast) {
    setModalShow(!modalShow);
    setTheBeast(beast);
  }

  // using modalShow and handleModal as props, have it so the SelectedBeast component shows when you click on any of the images
  return (
    <div className="App">
      <Header hornsFilter={hornsFilter} setHornsFilter={setHornsFilter} />
      <Main data={data} handleModal={handleModal} hornsFilter={hornsFilter} />
      {modalShow && <SelectedBeast theBeast={theBeast} handleModal={handleModal} />}
      <Footer />
    </div>
  );
}

export default App;
