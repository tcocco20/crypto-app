import React from "react";
import SelectableWrapper from "../UI/SelectableWrapper";
import { Plus } from "lucide-react";

interface DataPointProps {
  title: string;
  dataPoint: string;
}

const DataPoint = ({ title, dataPoint }: DataPointProps) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center w-1/2 gap-3">
        <SelectableWrapper selected rounded shadowSize="shadow-[0_0_20px]">
          <Plus size={24} strokeWidth={3} className="p-1" />
        </SelectableWrapper>
        <p>{title}</p>
      </div>
      <p className="text-xl w-1/2">{dataPoint}</p>
    </div>
  );
};

export default DataPoint;
