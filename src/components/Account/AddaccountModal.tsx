import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Select,
  Option,
  Switch,
} from "@material-tailwind/react";
import { RiCloseLine } from "react-icons/ri";
import usePost from "../../hooks/usePost";

// Define the structure of the error messages
interface FormErrors {
  accountName?: string;
  initialAmount?: string;
  accountType?: string;
  currency?: string;
}

function AddAccountModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [accountName, setAccountName] = useState("");
  const [accountType, setAccountType] = useState("General");
  const [initialAmount, setInitialAmount] = useState(0);
  const [currency, setCurrency] = useState("RWF");
  const [excludeFromStatistics, setExcludeFromStatistics] = useState(false);

  // Errors state now typed with FormErrors interface
  const [errors, setErrors] = useState<FormErrors>({});

  const { loading, error, postData } = usePost("/api/account");

  const handleSave = async () => {
    // Validate fields
    const newErrors: FormErrors = {};

    if (!accountName.trim()) {
      newErrors.accountName = "Account name is required.";
    }

    if (initialAmount < 0) {
      newErrors.initialAmount =
        "Initial amount must be greater than or equal to 0.";
    }

    if (!accountType) {
      newErrors.accountType = "Please select an account type.";
    }

    if (!currency) {
      newErrors.currency = "Please select a currency.";
    }

    // If there are validation errors, don't submit the form
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear previous errors
    setErrors({});

    // Create account object
    const newAccount = {
      name: accountName,
      type: accountType,
      initialAmount: initialAmount,
      currency,
      excludeFromStatistics,
    };

    // Post the data
    await postData(newAccount);

    // Reset form state after successful submission
    setAccountName("");
    setAccountType("General");
    setInitialAmount(0);
    setCurrency("RWF");
    setExcludeFromStatistics(false);
    onClose();
  };

  return (
    <Dialog size="xs" open={isOpen} handler={onClose}>
      <DialogHeader>
        <div className="flex w-full justify-between items-center">
          <h2 className="text-xl font-semibold">Add Account</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <RiCloseLine size={32} />
          </button>
        </div>
        <hr />
      </DialogHeader>
      <DialogBody>
        <section className="flex gap-x-4">
          <div className="mb-4 flex-1">
            <Input
              label="Name"
              placeholder="Enter account name"
              value={accountName}
              type="text"
              onChange={(e) => setAccountName(e.target.value)}
              error={!!errors.accountName}
            />
          </div>
          <div className="rounded-md">
            <Input
              className="w-[80px]"
              label="Color"
              type="color"
              containerProps={{ className: "min-w-[80px]" }}
            />
          </div>
        </section>

        <div className="mb-4">
          <Select
            label="Account type"
            value={accountType}
            onChange={(value) => setAccountType(value)}
            error={!!errors.accountType}
          >
            <Option value="General">General</Option>
            <Option value="Savings">Savings</Option>
            <Option value="Investment">Investment</Option>
            <Option value="Credit">Credit</Option>
          </Select>
          {errors.accountType && (
            <p className="text-red-500 text-xs">{errors.accountType}</p>
          )}
        </div>

        <div className="mb-4">
          <Input
            label="Initial Amount"
            type="number"
            value={initialAmount}
            onChange={(e) => setInitialAmount(Number(e.target.value))}
            error={!!errors.initialAmount}
          />
        </div>

        <div className="mb-4">
          <Select
            label="Currency"
            value={currency}
            onChange={(value) => setCurrency(value)}
            error={!!errors.currency}
          >
            <Option value="RWF">RWF</Option>
            <Option value="USD">USD</Option>
            <Option value="EUR">EUR</Option>
          </Select>
          {errors.currency && (
            <p className="text-red-500 text-xs">{errors.currency}</p>
          )}
        </div>

        <div className="mb-4 flex items-center">
          <Switch
            label="Exclude from statistics"
            checked={excludeFromStatistics}
            onChange={() => setExcludeFromStatistics(!excludeFromStatistics)}
          />
        </div>
        {error && <p className="text-red-500">{error.message}</p>}
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="red" onClick={onClose} disabled={loading}>
          Cancel
        </Button>
        <Button
          variant="gradient"
          color="green"
          onClick={handleSave}
          disabled={loading}
        >
          Save
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export default AddAccountModal;
