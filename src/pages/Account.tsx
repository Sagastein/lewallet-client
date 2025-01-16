import { useState } from "react";
import AddAccountModal from "../components/AddaccountModal";
import AccountList from "../components/AccountList";
import { Typography } from "@material-tailwind/react";
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
// export const AccountList = ({ accounts }) => {
//   return (
//     <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//       {accounts.map((account) => (
//         <Card key={account.id} className="p-4">
//           <Typography variant="h5" className="mb-2">
//             {account.name}
//           </Typography>
//           <Typography variant="paragraph" className="mb-2">
//             Type: {account.type}
//           </Typography>
//           <Typography variant="paragraph" className="mb-2">
//             Initial Amount: {account.initialAmount} {account.currency}
//           </Typography>
//           <Typography variant="paragraph">
//             Exclude from Statistics:{" "}
//             {account.excludeFromStatistics ? "Yes" : "No"}
//           </Typography>
//         </Card>
//       ))}
//     </div>
//   );
// };

function Account() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main>
      <div className="w-11/12 mx-auto flex justify-between items-center py-3">
        <Typography variant="h3">Account</Typography>
        <button
          onClick={openModal}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Account
        </button>
      </div>
      <div className="p-2 bg-white w-11/12 mx-auto">
        <AccountList accounts={mockAccounts} />
      </div>
      <AddAccountModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}

export default Account;
