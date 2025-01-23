import MobileCharts from "./MobileCharts";
import DesktopCharts from "./DesktopCharts";

const CompareCharts = () => {
  const coinPrice = 0;

  // if (
  //   selectedCoin &&
  //   utils.isPropertyType(selectedCoin.market_data.current_price, "usd")
  // ) {
  //   coinPrice = selectedCoin?.market_data.current_price.usd;
  // }

  return (
    <>
      <MobileCharts coinPrice={coinPrice} />
      <DesktopCharts />
    </>
  );
};

export default CompareCharts;
