import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "../../Component/Dashboard/Navbar/Navbar";
import Footer from "../../Component/Dashboard/Footer/Footer";
import Sidebar from "../../Component/Dashboard/Sidebar/Sidebar";

import HomeDashboard from "./HomeDashboard";
import Users from "./Users";
import Projects from "./Projects";
import Developer from "./developer";

import TableDashboard from "../../Component/UI/TableDashboard/TableDashboard";
import FormDashboard from "../../Component/UI/FormDashbord/FormDashbord";
import TableProject from "../../Component/UI/TableProject/TableProject";
import FormProject from "../../Component/UI/FormProject/FormProject";
import TableDeveloper from "../../Component/UI/TableDeveloper/TableDeveloper";
import FormDeveloper from "../../Component/UI/FormDeveloper/FormDeveloper";

function Dashboard() {
  const [isProjectPending, setIsProjectPending] = useState(false);
  const [isDeveloperPending, setIsDeveloperPending] = useState(false);

  return (
    <>
      <Navbar adminName="mirna" />

      <div className="d-flex">
        <Sidebar
          isProjectPending={isProjectPending}
          isDeveloperPending={isDeveloperPending} />

        <main className="flex-grow-1 p-4">
          <Routes>
            <Route path="/" element={<HomeDashboard />} />

            <Route path="/users" element={<Users />}>
              <Route index element={<TableDashboard />} />
              <Route path="add" element={<FormDashboard />} />
            </Route>

            <Route path="/projects" element={<Projects setIsPending={setIsProjectPending} />}>
              <Route index element={<TableProject />} />
              <Route path="add" element={<FormProject />} />
            </Route>

            <Route path="/developers" element={<Developer setIsPending={setIsDeveloperPending} />}>
              <Route index element={<TableDeveloper />} />
              <Route path="add" element={<FormDeveloper />} />
            </Route>

          </Routes>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;