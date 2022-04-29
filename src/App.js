import "./App.css";
import { Footer, Header, Main, Sidebar } from "./pageLayout";

function App() {
  return (
    <div className="App grid-container">
      <Header />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
