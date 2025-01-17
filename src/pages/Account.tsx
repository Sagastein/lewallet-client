import { useState } from "react";
import AddAccountModal from "../components/Account/AddaccountModal";
import AccountList from "../components/Account/AccountList";
import { Typography, Button } from "@material-tailwind/react";

const mockAccounts = [
  {
    id: 1,
    name: "Cash",
    type: "General",
    initialAmount: 0,
    currency: "RWF",
    excludeFromStatistics: false,
  },
  {
    id: 2,
    name: "Bank",
    type: "Savings",
    initialAmount: 1000,
    currency: "USD",
    excludeFromStatistics: true,
  },
  {
    id: 3,
    name: "Investment",
    type: "Investment",
    initialAmount: 5000,
    currency: "EUR",
    excludeFromStatistics: false,
  },
];

function Account() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
        <AccountList accounts={mockAccounts} />
      </div>
      <AddAccountModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}

export default Account;
