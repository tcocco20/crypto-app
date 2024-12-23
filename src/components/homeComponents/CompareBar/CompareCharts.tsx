import MobileCharts from "./MobileCharts";
import DesktopCharts from "./DesktopCharts";

interface CompareChartsProps {
  coinId: string;
}

const CompareCharts = ({ coinId }: CompareChartsProps) => {
  return (
    <>
      <MobileCharts selectedCoinId={coinId} />
      <DesktopCharts />
    </>
  );
};

export default CompareCharts;
