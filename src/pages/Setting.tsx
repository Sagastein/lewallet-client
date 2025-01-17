import { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { Card, Typography } from "@material-tailwind/react";
function AddCurrencyModal({ isOpen, onClose, onAddCurrency }) {
  const [currencyCode, setCurrencyCode] = useState("");
  const [currencyName, setCurrencyName] = useState("");

  const handleAddCurrency = () => {
    onAddCurrency({ code: currencyCode, name: currencyName });
    setCurrencyCode("");
    setCurrencyName("");
    onClose();
  };

  return (
    <Dialog open={isOpen} handler={onClose}>
      <DialogHeader>Add New Currency</DialogHeader>
      <DialogBody>
        <div className="mb-4">
          <Input
            label="Currency Code"
            value={currencyCode}
            onChange={(e) => setCurrencyCode(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <Input
            label="Currency Name"
            value={currencyName}
            onChange={(e) => setCurrencyName(e.target.value)}
            className="w-full"
          />
        </div>
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="red" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="gradient" color="green" onClick={handleAddCurrency}>
          Add Currency
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export { AddCurrencyModal };

function ExchangeRateTable({ currencies }) {
  const [rates, setRates] = useState({});

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          "https://api.exchangerate-api.com/v4/latest/USD"
        );
        const data = await response.json();
        setRates(data.rates);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchRates();
  }, []);

  return (
    <Card className="p-4">
      <Typography variant="h2" className="text-xl font-semibold mb-2">
        Exchange Rates
      </Typography>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {currencies.map((currency) => (
              <th key={currency.code} className="border p-2">
                {currency.code}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currencies.map((currency) => (
            <tr key={currency.code}>
              {currencies.map((targetCurrency) => (
                <td
                  key={targetCurrency.code}
                  className="border p-2 text-center"
                >
                  {rates[targetCurrency.code] / rates[currency.code]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export { ExchangeRateTable };

import { Select, Option, Switch } from "@material-tailwind/react";

function Settings() {
  const [currency, setCurrency] = useState("USD");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currencies, setCurrencies] = useState([
    { code: "USD", name: "US Dollar" },
    { code: "EUR", name: "Euro" },
    { code: "JPY", name: "Japanese Yen" },
  ]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddCurrency = (newCurrency) => {
    setCurrencies([...currencies, newCurrency]);
  };

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
