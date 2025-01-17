import { useState } from "react";
import {
  Typography,
  IconButton,
  Tab,
  TabsHeader,
  Tabs,
  TabsBody,
  TabPanel,
  Button,
  Checkbox,
} from "@material-tailwind/react";
import { ArrowLeftIcon } from "lucide-react";
import { BsCashCoin } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const AccountDetail = () => {
  const [activeTab, setActiveTab] = useState("records");
  const navigate = useNavigate();
  const transactions = [
    {
      type: "Transfer, withdraw",
      account: "Cash",
      memo: "momo",
      category: "kubitsa",
      amount: -30000,
    },
    {
      type: "Transfer, withdraw",
      account: "Cash",
      amount: -5000,
    },
    {
      type: "Bar, cafe",
      account: "Cash",
      memo: "coding",
      amount: -2000,
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gray-50">
        <div className="flex items-center gap-4">
          <IconButton
            onClick={() => navigate("/portal/accounts")}
            variant="text"
            className="rounded-full"
          >
            <ArrowLeftIcon size={20} />
          </IconButton>
          <Typography variant="h6">Account Detail</Typography>
        </div>
        <div className="flex gap-2">
          <Button
            variant="text"
            color="blue"
            size="sm"
            className="rounded-md border border-blue-500"
          >
            Edit
          </Button>
          <Button
            variant="text"
            size="sm"
            color="red"
            className="round-md border border-red-500"
          >
            Delete
          </Button>
        </div>
      </div>

      {/* Account Info */}
      <div className="flex border-b items-center gap-4 p-4 bg-white">
        <div className="w-16 h-16 bg-brown-500 rounded-lg flex items-center justify-center">
          <BsCashCoin size={30} className="text-white items-center font-bold" />
        </div>
        <div>
          <Typography variant="h6" color="blue-gray" className="text-sm">
            Name
          </Typography>
          <Typography>Cash Coding</Typography>
          <Typography variant="h6" color="blue-gray" className="text-sm">
            Type
          </Typography>
          <Typography>Cash</Typography>
        </div>
      </div>

      {/* Tabs */}
      <Tabs
        value={activeTab}
        onChange={(value) => setActiveTab(value as string)}
      >
        <TabsHeader
          className="rounded-none w-4/12 border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className: "bg-transparent shadow-none rounded-none",
          }}
        >
          <Tab activeClassName="border-b-2 border-green-500" value="balance">
            Balance
          </Tab>
          <Tab activeClassName="border-b-2 border-green-500" value="records">
            Records
          </Tab>
        </TabsHeader>
        <div className="bg-gray-100 h-4 my-1"></div>
        <TabsBody>
          <TabPanel value="records" className="p-0">
            {/* Records List */}
            <div className="bg-white">
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <Checkbox label="Select all" />
                  <Typography color="blue-gray">-RWF 37,000</Typography>
                </div>
              </div>

              <Typography variant="small" className="px-4 py-2 bg-gray-50">
                Yesterday
              </Typography>

              {transactions.map((transaction, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border-b"
                >
                  <div className="flex items-center gap-4">
                    <Checkbox />
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        transaction.type.includes("Transfer")
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {transaction.type.includes("Transfer") ? (
                        <svg
                          className="w-4 h-4 text-white"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      ) : (
                        <svg
                          className="w-4 h-4 text-white"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3z" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <Typography>{transaction.type}</Typography>
                      <Typography variant="small" color="blue-gray">
                        {transaction.memo} {transaction.category}
                      </Typography>
                    </div>
                  </div>
                  <Typography color={transaction.amount < 0 ? "red" : "green"}>
                    {transaction.amount < 0 ? "-" : "+"}RWF{" "}
                    {Math.abs(transaction.amount).toLocaleString()}
                  </Typography>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel value="balance">
            <div className="p-4">
              <Typography>Balance content goes here</Typography>
            </div>
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default AccountDetail;
