import React from "react";
import { Switch } from "../ui/switch";

interface PointCardProps {
  myPoint?: number;
}

const PointCard: React.FC<PointCardProps> = ({ myPoint }) => {
  return (
    <div className="bg-background-500 p-5 rounded-lg">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <p>My Point :</p>
          <p>{myPoint}</p>
        </div>
        <Switch></Switch>
      </div>
    </div>
  );
};

export default PointCard;
