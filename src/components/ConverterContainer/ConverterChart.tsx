import { type ListCoin } from "@/lib/types/ListCoin";
import Card from "../UI/Card";
import { generateMonths } from "@/utils/generateMonths";

interface ConverterChartProps {
  fromCurrency: ListCoin | undefined;
  toCurrency: ListCoin | undefined;
}

const ConverterChart = ({ fromCurrency, toCurrency }: ConverterChartProps) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthOrder = generateMonths();

  return (
    <Card className="p-4 dark:text-white font-light">
      {fromCurrency && toCurrency && (
        <p>
          {fromCurrency.name} ({fromCurrency.symbol.toUpperCase()}) to{" "}
          {toCurrency.name} ({toCurrency.symbol.toUpperCase()})
        </p>
      )}
      <div className="grid grid-cols-12 text-xs gap-1">
        {monthOrder.map((month) => (
          <p key={months[month]} className="text-center">
            {months[month]}
          </p>
        ))}
      </div>
    </Card>
  );
};

export default ConverterChart;
