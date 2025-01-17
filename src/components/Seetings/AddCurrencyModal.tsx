import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
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
