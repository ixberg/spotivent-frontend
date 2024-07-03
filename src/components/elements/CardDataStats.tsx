import React, { ReactNode } from "react";

interface CardDataStatsProps {
  title: string;
  total: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  rate,
  levelUp,
  levelDown,
  children,
}) => {
  return (
    <div className="rounded-lg bg-background-50/90 px-7 py-6 shadow-default ">
      <div className="flex justify-start rounded-full ">{children}</div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-2xl font-bold">{total}</h4>
          <span className="text-sm font-light">{title}</span>
        </div>

        <span className="flex items-center gap-1 text-sm font-medium">
          {rate}
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
