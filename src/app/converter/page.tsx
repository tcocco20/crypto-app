import ConverterContainer from "@/components/ConverterContainer";
import HomeNav from "@/components/homeComponents/HomeNav";

const Converter = async () => {
  return (
    <>
      <HomeNav />
      <div className="text-start my-5 self-start">
        <h1 className="dark:text-white text-lg mb-1">
          Online Currency Converter
        </h1>
        <p className="text-gray-800 dark:text-gray-400 font-light text-sm">
          {new Date().toLocaleString()}
        </p>
      </div>
      <ConverterContainer />
    </>
  );
};

export default Converter;
