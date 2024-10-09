import ConverterContainer from "@/components/ConverterContainer";
import HomeNav from "@/components/homeComponents/HomeNav";

const Converter = () => {
  return (
    <main className="flex min-h-screen flex-col items-center px-3 md:px-24">
      <HomeNav />
      <div className="text-start my-5 self-start">
        <h1 className="dark:text-white text-lg mb-1">
          Online Currency Converter
        </h1>
        <p className="text-gray-800 dark:text-gray-400 font-light text-sm">
          09/29/2023 14:15
        </p>
      </div>
      <ConverterContainer />
    </main>
  );
};

export default Converter;
