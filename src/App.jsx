import { Services } from "./components/Services/Services";
import { ServiceDetails } from "./components/ServiceDetails/ServiceDetails";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router basename="saga-details">
      <div className="App">
        <Routes>
          <Route path='/' element={<Services />}></Route>
          <Route path='/:id/details' element={<ServiceDetails />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
