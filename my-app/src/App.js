import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import Footer from "./components/MyFooter";
import Welcome from "./components/Welcome.jsx";
import AllTheBooks from "./components/AllTheBooks.jsx";

function App() {
  return (
    <div className="App">
      <div>
        <MyNav />
        <Welcome />
        <AllTheBooks />
      </div>
      <Footer />
    </div>
  );
}

export default App;
