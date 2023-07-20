import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Navbar from "./Navbar";
import Home from "./Home";
import VolunteerOpportunities from "./VolunteerOpportunites";
import Profile from "./Profile";
import EnvironmentalCleanup from "./EnvironmentalCleanup";
import ConfirmParticipation from "./ConfirmParticipation";
import EnvironmentalVolunteering from "./EnvironmentalVolunteering";


function App() {
  return(
    <div className="ac">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Navbar" element={<Navbar/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/VolunteerOpportunities" element={<VolunteerOpportunities/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/EnvironmentalCleanup" element={<EnvironmentalCleanup/>}/>
        <Route path="/ConfirmParticipation" element={<ConfirmParticipation/>}/>
        <Route path="/EnvironmentalVolunteering" element={<EnvironmentalVolunteering/>}/>
      </Routes>
    </div>
  );

}
export default App;