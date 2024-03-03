import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../../components/Layout/Header";
import Sidebar from "../../components/Layout/Sidebar";

function Home({ children }) {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar openSidebar={openSidebar} />

      {/* <!-- Main content --> */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        <div className="h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
