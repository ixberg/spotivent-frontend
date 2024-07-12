import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "@/components/elements/DatePicker";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, MousePointerClick, ToggleLeft } from "lucide-react";
import { Switch } from "@/components/ui/switch";

interface TicketTier {
  name: string;
  seats: string;
  price: string;
}

const CreateEventForm: React.FC = () => {
  const [ticketTiers, setTicketTiers] = useState<TicketTier[]>([
    { name: "", seats: "", price: "" },
  ]);
  const [isFreeEvent, setIsFreeEvent] = useState<boolean>(false);

  const addTicketTier = () => {
    setTicketTiers([...ticketTiers, { name: "", seats: "", price: "" }]);
  };

  const removeTicketTier = (index: number) => {
    const newTicketTiers = [...ticketTiers];
    newTicketTiers.splice(index, 1);
    setTicketTiers(newTicketTiers);
  };

  const handleInputChange = (
    index: number,
    field: keyof TicketTier,
    value: string
  ) => {
    const newTicketTiers = [...ticketTiers];
    newTicketTiers[index][field] = value;
    setTicketTiers(newTicketTiers);
  };

  const handleFreeEventSwitch = () => {
    setIsFreeEvent(!isFreeEvent);
    if (!isFreeEvent) {
      setTicketTiers([{ name: "Free Ticket", seats: "", price: "0" }]);
    } else {
      setTicketTiers([{ name: "", seats: "", price: "" }]);
    }
  };

  return (
    <div>
      <form action="">
        <div className="mb-8">
          <h1 className="font-semibold text-2xl text-primary-500">
            Event Detail
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4 gap-y-10">
          <div className="flex flex-col gap-2">
            <Label htmlFor="eventId">Event Name</Label>
            <Input placeholder="Enter event name" id="event_id" required />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Select Category</Label>
            <Select name="eventId">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label>Date</Label>
            <DatePicker />
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex flex-col gap-2 w-full">
              <Label>Start Time</Label>
              <Input type="time" name="start_time" required></Input>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <Label>End Time</Label>
              <Input type="time" name="start_time"></Input>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label>City</Label>
            <Select name="cityId">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="eventId">Location</Label>
            <Input
              placeholder="Enter event location"
              name="eventId"
              id="eventId"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-10">
          <Label>Description</Label>
          <Textarea></Textarea>
        </div>
        <div className="bg-black/50 p-8 mt-8 rounded-xl flex justify-between items-center">
          <div>
            <h1 className="font-semibold text-2xl text-yellow-500">
              Free Event?
            </h1>
            <p className="flex gap-2 items-center">
              Activate the switch button if your event is free{" "}
              <span className="flex gap-1">
                <ToggleLeft size={28} />
                <MousePointerClick />
              </span>
            </p>
          </div>

          <Switch
            checked={isFreeEvent}
            onCheckedChange={handleFreeEventSwitch}
          />
        </div>
        <div className="my-8 bg-black/50 p-8 rounded-xl flex flex-col gap-6 w-full">
          <h1 className="font-medium text-xl text-primary-500">Ticket Tier</h1>
          {ticketTiers.map((tier, index) => (
            <div key={index} className="flex gap-4 w-full items-end">
              <div className="flex flex-col gap-2 w-full">
                <Label>Ticket Name</Label>
                <Input
                  type="text"
                  placeholder="Enter ticket name"
                  value={tier.name}
                  onChange={(e) =>
                    handleInputChange(index, "name", e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Label>Available Seat</Label>
                <Input
                  type="number"
                  value={tier.seats}
                  onChange={(e) =>
                    handleInputChange(index, "seats", e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Label>Price (Rp)</Label>
                <Input
                  type="number"
                  placeholder="1000000"
                  value={tier.price}
                  onChange={(e) =>
                    handleInputChange(index, "price", e.target.value)
                  }
                  disabled={isFreeEvent}
                />
              </div>
              {ticketTiers.length > 1 && (
                <Button
                  variant={"destructive"}
                  onClick={() => removeTicketTier(index)}
                  className="rounded-lg h-[54px]"
                  disabled={isFreeEvent}
                >
                  <Trash2 size={20} className="text-white" />
                </Button>
              )}
            </div>
          ))}
          <div className="flex w-full">
            <div className="flex gap-3 justify-end w-full">
              <Button
                variant={"secondary"}
                size={"lg"}
                onClick={addTicketTier}
                disabled={isFreeEvent}
                type="button"
              >
                <Plus size={20} />
                Add Ticket Tier
              </Button>
            </div>
          </div>
        </div>
        <Button type="submit" size={"lg"}>
          Create Event
        </Button>
      </form>
    </div>
  );
};

export default CreateEventForm;
