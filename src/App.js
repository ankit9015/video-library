import { useState } from "react";
import "./App.css";
import { Footer, Header, Main, Sidebar } from "./pageLayout";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  console.log(showSidebar);
  return (
    <div className="App grid-container">
      <Header setShowSidebar={setShowSidebar} />
      <Sidebar showSidebar={showSidebar} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
