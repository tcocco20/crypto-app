import utils from "@/utils";

interface CoinDescriptionProps {
  description: string;
}

const CoinDescription = ({ description }: CoinDescriptionProps) => {
  return (
    <div className="col-span-4">
      <h3 className="text-xl mb-4">Description</h3>
      {utils.truncateString(description, 870)}
      {description.length > 870 && (
        <button className="text-indigo-500 ml-4">read more</button>
      )}
    </div>
  );
};

export default CoinDescription;
