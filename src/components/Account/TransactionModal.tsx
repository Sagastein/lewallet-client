import { useState } from "react";
import { X, Calendar, Clock, Wallet } from "lucide-react";
import CategoryDropdown from "./CategoryDropDown";

const ExpenseModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("Expense");
  const [selectedAccount, setSelectedAccount] = useState("Cash");
  const [selectedCurrency, setSelectedCurrency] = useState("RWF");
  const [selectedPaymentType, setSelectedPaymentType] = useState("Cash");
  const [selectedPaymentStatus, setSelectedPaymentStatus] = useState("Cleared");

  const tabs = ["Expense", "Income", "Transfer"];

  const renderTransferSection = () => (
    <div className="bg-green-500 p-6 text-white">
      {/* Tabs */}
      <div className="flex bg-white rounded-md mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 border border-white px-4 ${
              activeTab === tab ? "bg-green-500 text-white" : "text-gray-600"
            } first:rounded-l-md border border-white last:rounded-r-md`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* From and To Accounts */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block mb-1 text-sm">From account</label>
          <div className="relative">
            <select className="w-full p-2 rounded-md text-gray-700 appearance-none pr-10">
              <option>Outside of Wallet</option>
            </select>
            <Wallet className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div>
          <label className="block mb-1 text-sm">To account</label>
          <div className="relative">
            <select className="w-full p-2 rounded-md text-gray-700 appearance-none pr-10">
              <option>Cash</option>
            </select>
            <Wallet className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Amount and Currency */}
      <div className="grid grid-cols-2 gap-6 mt-4">
        <div className="flex gap-3">
          <div className="flex-1">
            <label className="block mb-1 text-sm">Amount</label>
            <input
              type="text"
              className="w-full p-2 rounded-md text-gray-700"
              placeholder="-"
            />
          </div>
          <div className="w-32">
            <label className="block mb-1 text-sm">Currency</label>
            <select className="w-full p-2 rounded-md text-gray-700">
              <option>RWF</option>
            </select>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex-1">
            <label className="block mb-1 text-sm">Amount</label>
            <input
              type="text"
              className="w-full p-2 rounded-md text-gray-700"
              value="0"
              readOnly
            />
          </div>
          <div className="w-32">
            <label className="block mb-1 text-sm">Currency</label>
            <select className="w-full p-2 rounded-md text-gray-700">
              <option>RWF</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderExpenseSection = () => (
    <div className="bg-[#796156] p-6 text-white">
      {/* Tabs */}
      <div className="flex bg-white rounded-md mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 border border-white py-2 px-4 ${
              activeTab === tab ? "bg-[#796156] text-white" : "text-gray-600"
            } first:rounded-l-md last:rounded-r-md`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Account */}
      <div className="mb-3">
        <label className="block mb-1 text-sm">Account</label>
        <div className="relative">
          <select
            value={selectedAccount}
            onChange={(e) => setSelectedAccount(e.target.value)}
            className="w-full p-2 rounded-md text-gray-700 appearance-none pr-10"
          >
            <option>Cash</option>
            <option>Bank</option>
            <option>Credit Card</option>
          </select>
          <Wallet className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Amount and Currency */}
      <div className="flex gap-3 mb-3">
        <div className="flex-1">
          <label className="block mb-1 text-sm">Amount</label>
          <input
            type="text"
            className="w-full p-2 rounded-md text-gray-700"
            placeholder="-"
          />
        </div>
        <div className="w-32">
          <label className="block mb-1 text-sm">Currency</label>
          <select
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
            className="w-full p-2 rounded-md text-gray-700"
          >
            <option>RWF</option>
            <option>USD</option>
            <option>EUR</option>
          </select>
        </div>
      </div>
    </div>
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white transition-all duration-500 delay-500 rounded-lg shadow-xl w-full max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-medium">ADD RECORD</h2>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
            <X className="h-5 hover:bg-green-100 w-5" />
          </button>
        </div>

        <div className="flex">
          {/* Left Column */}
          <div className="w-1/2">
            {/* Conditional rendering based on active tab */}
            {activeTab === "Transfer"
              ? renderTransferSection()
              : renderExpenseSection()}

            {/* Common fields */}
            <div className="p-4">
              {/* Labels */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Category
                  </label>
                  <CategoryDropdown />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Labels
                  </label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Choose</option>
                  </select>
                </div>
              </div>

              {/* Date and Time */}
              <div className="flex gap-3 mb-6">
                <div className="flex-1 relative">
                  <label className="block text-sm text-gray-700 mb-1">
                    Date
                  </label>
                  <input
                    type="text"
                    defaultValue="Jan 16, 2025"
                    className="w-full p-2 rounded-md pl-10 border"
                  />
                  <Calendar className="absolute left-3 top-8 h-5 w-5 text-gray-400" />
                </div>
                <div className="flex-1 relative">
                  <label className="block text-sm text-gray-700 mb-1">
                    Time
                  </label>
                  <input
                    type="text"
                    defaultValue="2:45 PM"
                    className="w-full p-2 rounded-md pl-10 border"
                  />
                  <Clock className="absolute left-3 top-8 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2">
                <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
                  Add record
                </button>
                <button className="w-full text-blue-500 hover:text-blue-600">
                  Add and create another
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-1/2 bg-gray-100/55 p-4">
            {/* Payee/Payer */}
            <div className="mb-3">
              <label className="block text-sm text-gray-700 mb-1">
                {activeTab === "Income" ? "Payer" : "Payee"}
              </label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>

            {/* Note */}
            <div className="mb-3">
              <label className="block text-sm text-gray-700 mb-1">Note</label>
              <textarea className="w-full p-2 border rounded-md" rows={4} />
            </div>

            {/* Payment Type */}
            <div className="mb-3">
              <label className="block text-sm text-gray-700 mb-1">
                Payment type
              </label>
              <select
                value={selectedPaymentType}
                onChange={(e) => setSelectedPaymentType(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option>Cash</option>
                <option>Card</option>
                <option>Transfer</option>
              </select>
            </div>

            {/* Payment Status */}
            <div className="mb-3">
              <label className="block text-sm text-gray-700 mb-1">
                Payment status
              </label>
              <select
                value={selectedPaymentStatus}
                onChange={(e) => setSelectedPaymentStatus(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option>Cleared</option>
                <option>Pending</option>
              </select>
            </div>

            {/* Location */}
            <div className="mb-3">
              <label className="block text-sm text-gray-700 mb-1">
                Location
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Name or address"
                  className="w-full p-2 border rounded-md pr-10"
                />
                <button className="absolute right-2 top-2 text-gray-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseModal;
