import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import TransactionModal from "../components/Account/TransactionModal"; // Import the modal component
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
      <section className="flex-1 overflow-hidden">
        <NavBar />
        <hr />
        <main className="h-[90vh] overflow-y-auto py-4 mb-12">
          <Outlet />
        </main>

        {/* Floating Button */}
        <button
          onClick={openModal}
          className="fixed bottom-4 right-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg"
        >
          <RiAddCircleLine size={24} />
        </button>
        {/* Modal */}
        {isModalOpen && (
          <TransactionModal onClose={closeModal} isOpen={isModalOpen} />
        )}
      </section>
    </main>
  );
}

export default Layout;
