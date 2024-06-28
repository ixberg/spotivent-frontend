import React from "react";
import { Button } from "../ui/button";
import Card from "../elements/Card";

const Upcoming = () => {
  return (
    <div className="px-2 w-full">
      <div className="flex flex-col w-full bg-background-100 h-[615px] rounded-lg p-20 gap-10">
        <div className="flex justify-between w-full">
          <h1 className="font-syne text-3xl font-bold">Upcoming Event</h1>
          <Button variant={"secondary"}>Show All</Button>
        </div>
        <div>
          <Card
            date="13"
            month="Jun"
            thumbnail="/image/Thumbnail.png"
            title="Concert Dua Lipa"
            city="Jakarta"
            country="Indonesia"
            price={200000}
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
