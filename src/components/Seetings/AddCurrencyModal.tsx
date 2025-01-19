// components/AddCurrencyModal.js
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import usePost from "../../hooks/usePost";

function AddCurrencyModal({ isOpen, onClose, onAddCurrency }) {
  const [currencyCode, setCurrencyCode] = useState("");
  const [currencyName, setCurrencyName] = useState("");
  const { loading, error, postData } = usePost(
    "http://localhost:8080/v1/api/currency"
  );

  const handleAddCurrency = async () => {
    const newCurrency = { code: currencyCode, name: currencyName };
    const responseData = await postData(newCurrency);
    onAddCurrency(responseData);
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
        {error && <p className="text-red-500">Error: {error.message}</p>}
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="red" onClick={onClose} disabled={loading}>
          Cancel
        </Button>
        <Button
          variant="gradient"
          color="green"
          onClick={handleAddCurrency}
          disabled={loading}
        >
          Add Currency
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export { AddCurrencyModal };
