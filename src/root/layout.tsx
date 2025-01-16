import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

function Layout() {
  return (
    <main className="bg-gray-200 flex h-dvh">
      <div className="md:w-64">
        <SideBar />
      </div>
      <section className="flex-1 h-full">
        <NavBar />
        <hr />
        <Outlet />
      </section>
    </main>
  );
}

export default Layout;
