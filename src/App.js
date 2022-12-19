// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddUser } from "./Components/AddUser";
import { DashboardUser } from "./Components/DashboardUser";
function App() {
  return (
    <div className="App d-flex justify-content-center">
      <div className="col-12">
        <AddUser />
      </div>
    </div>
  );
}

export default App;
