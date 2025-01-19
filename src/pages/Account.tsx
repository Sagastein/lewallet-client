// pages/Account.js
import { useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import AccountList from "../components/Account/AccountList";
import AddAccountModal from "../components/Account/AddaccountModal";
import useFetch from "../hooks/useFetch";

function Account() {
  const {
    data: accounts,
    error,
    isLoading: loading,
  } = useFetch("/api/account");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main className="p-4 bg-gray-100 min-h-screen">
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center py-3">
        <Typography variant="h3" className="text-3xl font-bold">
          Accounts
        </Typography>
        <Button
          onClick={openModal}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Account
        </Button>
      </div>
      <div className="p-2 bg-white w-full max-w-6xl mx-auto rounded-lg shadow-md">
        <AccountList accounts={accounts} />
      </div>
      <AddAccountModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}

export default Account;
