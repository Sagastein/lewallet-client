import { useEffect, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";

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
    <Card className="p-4 overflow-auto">
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
