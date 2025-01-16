import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import TransactionModal from "../components/TransactionModal"; // Import the modal component
import { RiAddCircleLine } from "react-icons/ri";

function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="bg-gray-200 flex h-dvh relative">
      <div className="md:w-64">
        <SideBar />
      </div>
      <section className="flex-1 h-full">
        <NavBar />
        <hr />
        <Outlet />
        {/* Floating Button */}
        <button
          onClick={openModal}
          className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg"
        >
          <RiAddCircleLine size={24} />
        </button>
        {/* Modal */}
        {isModalOpen && (
          <TransactionModal onClose={closeModal} isOpen={openModal} />
        )}
      </section>
    </main>
  );
}

export default Layout;
