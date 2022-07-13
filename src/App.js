import About from "./components/About";
import Navbar from "./components/navbar";
import Textform from "./components/textform";
import React, {useState} from "react";
import Alert from "./components/Alert";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been Enabled!", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode has been Disabled!", "Success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Text Analyzer"
          mode={mode}
          toggleMode={toggleMode}
          aboutText="About"
        />
        <Alert alert={alert}></Alert>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={
                <Textform
                  heading="Enter the Text you want to Analyze"
                  mode={mode}
                  toggleMode={toggleMode}
                  showAlert={showAlert}></Textform>
              }></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
