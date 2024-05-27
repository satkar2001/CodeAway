import "./App.scss";
import { Toaster } from "react-hot-toast";
import Header from "./components/header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import WebDevLab from "./components/WebDevLab/WebDevLab";

function App() {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="App">
        <Header />
        <Router>
          <WebDevLab />
        </Router>
      </div>
    </>
  );
}

export default App;
