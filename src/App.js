import { useState } from "react";
import "./App.css";
import "./utility/utility.css";
import { Header, Main, Sidebar } from "./pageLayout";
import { useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

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
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: "text-md toast p-s",
        }}
        containerStyle={{
          top: "10rem",
          right: "10rem",
        }}
      />
    </div>
  );
}

export default App;
