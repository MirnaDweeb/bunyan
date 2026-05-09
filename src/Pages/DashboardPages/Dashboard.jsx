import React from "react";
import Navbar from "../../Component/Dashboard/Navbar/Navbar";
import Footer from "../../Component/Dashboard/Footer/Footer";
import Sidebar from "../../Component/Dashboard/Sidebar/Sidebar";

function Dashboard() {
  return (
    <>
      <Navbar adminName="Mirna" />
      <div className="d-flex">
        <Sidebar />
     <main className="flex-grow-1 p-4">
      <h1>test content Component</h1>
     </main>
      </div>
      <Footer />
    </>
  );
}
export default Dashboard;
