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

        <Tabs defaultValue="All Concerts" className="flex flex-col gap-10">
          <div className="flex justify-between">
            <TabsList className="flex gap-3">
              <TabsTrigger value="All Concerts">All Concert</TabsTrigger>
              <TabsTrigger value="Solo Artist">Solo Artist</TabsTrigger>
              <TabsTrigger value="Festival Artist">Festival Artist</TabsTrigger>
              <TabsTrigger value="Opera">Opera</TabsTrigger>
              <TabsTrigger value="Classical Music">Classical Music</TabsTrigger>
              <TabsTrigger value="Jazz Music">Jazz Music</TabsTrigger>
            </TabsList>
            <Button variant={"outline"}>Filter</Button>
          </div>
          <TabsContent
            value="All Concerts"
            className="grid grid-cols-4 h-fit gap-4 w-full justify-center"
          >
            <Card
              date="13"
              month="Jun"
              thumbnail="/image/Thumbnail.png"
              title="Concert Dua Lipa"
              city="Jakarta"
              country="Indonesia"
              price={200000}
              widht="w-full"
            ></Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Category;
