import { useState } from "react";
import "./App.css";
import "./utility/utility.css";
import { Header, Main, Sidebar } from "./pageLayout";
import { useLocation } from "react-router-dom";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const forbiddenPages = ["/login", "/signup", "*"];
  const currentLocation = useLocation().pathname;
  return (
    <div
      className={`App grid-container ${
        forbiddenPages.includes(currentLocation) ? "form-page" : ""
      }`}
    >
      <Header setShowSidebar={setShowSidebar} />

      <Sidebar showSidebar={showSidebar} />

      <Main />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
