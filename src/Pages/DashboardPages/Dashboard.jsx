import{Routes,Route} from "react-router-dom"
import React from "react";
import Navbar from "../../Component/Dashboard/Navbar/Navbar";
import Footer from "../../Component/Dashboard/Footer/Footer";
import Sidebar from "../../Component/Dashboard/Sidebar/Sidebar";
import Projects from "./Projects"
import Users from "./Users"
import HomeDashboard from "./HomeDashboard"
function Dashboard() {
  return (
    <>
      <Navbar adminName="Mirna" />
      <div className="d-flex">
        <Sidebar />
     <main className="flex-grow-1 p-4">
      <Routes>
      <Route path="/" element={<HomeDashboard/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/projects" element={<Projects/>}/>
     </Routes>
     </main>
     
      </div>
      <Footer />
    </>
  );
}
export default Dashboard;
