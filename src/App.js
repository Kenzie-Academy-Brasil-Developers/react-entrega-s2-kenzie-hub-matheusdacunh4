import "./App.css";
import Routes from "./routes";
// import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Routes />
      {/* <Toaster /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
