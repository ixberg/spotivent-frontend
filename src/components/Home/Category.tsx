import React from "react";
import { Button } from "../ui/button";
import Card from "../elements/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Category = () => {
  return (
    <div className="px-2 w-full">
      <div className="flex flex-col w-full bg-background-100 h-fit rounded-lg p-20 gap-10">
        <div className="flex justify-between w-full">
          <h1 className="font-syne text-3xl font-bold">Concert Category</h1>
        </div>
        <div className="flex justify-between">
          <Tabs defaultValue="All Concerts">
            <TabsList className="flex gap-3">
              <TabsTrigger value="All Concerts">All Concert</TabsTrigger>
              <TabsTrigger value="Solo Artist">Solo Artist</TabsTrigger>
              <TabsTrigger value="Festival Artist">Festival Artist</TabsTrigger>
              <TabsTrigger value="Opera">Opera</TabsTrigger>
              <TabsTrigger value="Classical Music">Classical Music</TabsTrigger>
              <TabsTrigger value="Jazz Music">Jazz Music</TabsTrigger>
            </TabsList>
          </Tabs>
          <Button variant={"outline"}>Filter</Button>
        </div>
        <div className="grid grid-cols-4 h-fit">
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

export default Category;
