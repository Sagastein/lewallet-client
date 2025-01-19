import { useState } from "react";
import {
  Button,
  Card,
  Typography,
  Select,
  Option,
  Switch,
} from "@material-tailwind/react";
import { AddCurrencyModal } from "../components/Seetings/AddCurrencyModal";
import { ExchangeRateTable } from "../components/Seetings/ExchangeRateTable";
import useFetch from "../hooks/useFetch";

function Settings() {
  const [currency, setCurrency] = useState("USD");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    data: currencies,
    error,
    isLoading,
    mutate,
  } = useFetch("/api/currency");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddCurrency = (newCurrency) => {
    // Update the local state
    mutate([...currencies, newCurrency], false).then(() => {
      // Close the modal after adding the currency
      closeModal();
    });
  };

  console.log("Settings.tsx", currencies);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main className="p-4 bg-white w-full mx-auto">
      <Typography variant="h1" className="text-3xl font-bold mb-4">
        Settings
      </Typography>

      <div className="space-y-4">
        <Card className="p-4">
          <Typography variant="h2" className="text-xl font-semibold mb-2">
            Currency
          </Typography>
          <Select
            label="Select Currency"
            value={currency}
            onChange={(value) => setCurrency(value)}
            className="w-full"
          >
            {currencies.map((curr) => (
              <Option key={curr.code} value={curr.code}>
                {curr.name} ({curr.code})
              </Option>
            ))}
          </Select>
          <Button
            className="mt-4 bg-green-500 hover:bg-green-600"
            onClick={openModal}
          >
            Add New Currency
          </Button>
        </Card>

        <Card className="p-4">
          <Typography variant="h2" className="text-xl font-semibold mb-2">
            Notifications
          </Typography>
          <div className="flex items-center justify-between">
            <Typography variant="paragraph" className="text-gray-700">
              Enable Notifications
            </Typography>
            <Switch
              checked={notificationsEnabled}
              onChange={() => setNotificationsEnabled(!notificationsEnabled)}
              className="ml-auto"
              color="green"
              defaultChecked
            />
          </div>
        </Card>

        <ExchangeRateTable currencies={currencies} />
      </div>

      <AddCurrencyModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onAddCurrency={handleAddCurrency}
      />
    </main>
  );
}

export default Settings;
