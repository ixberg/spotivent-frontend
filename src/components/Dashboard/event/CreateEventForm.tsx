"use client";
import React, { useState } from "react";
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
import { Button } from "@/components/ui/button";
import {
  Plus,
  Trash2,
  MousePointerClick,
  ToggleLeft,
  TicketPercent,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { createEventSchema } from "@/schema";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const CreateEventForm: React.FC = () => {
  const [isFreeEvent, setIsFreeEvent] = useState<boolean>(false);

  const form = useForm<z.infer<typeof createEventSchema>>({
    resolver: zodResolver(createEventSchema),
    defaultValues: {
      eventName: "",
      category: "",
      date: "",
      startTime: "",
      endTime: "",
      city: "",
      location: "",
      description: "",
      thumbnail: "",
      bannerImage: "",
      isFreeEvent: false,
      ticketTiers: [{ name: "", seats: "", price: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "ticketTiers",
  });

  const handleFreeEventSwitch = () => {
    setIsFreeEvent(!isFreeEvent);
    if (!isFreeEvent) {
      form.setValue("ticketTiers", [
        { name: "Free Ticket", seats: "", price: "0" },
      ]);
    } else {
      form.setValue("ticketTiers", [{ name: "", seats: "", price: "" }]);
    }
  };

  function onSubmit(value: z.infer<typeof createEventSchema>) {
    console.log(value);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-8">
          <h1 className="font-semibold text-2xl text-primary-500">
            Event Detail
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4 gap-y-10">
          <FormField
            control={form.control}
            name="eventName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter event name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Category</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(value)}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-2 w-full">
            <FormField
              control={form.control}
              name="startTime"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Start Time</FormLabel>
                  <FormControl>
                    <Input type="time" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="endTime"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>End Time</FormLabel>
                  <FormControl>
                    <Input type="time" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(value)}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select City" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="Enter event location" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="mt-10">
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter event description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="bg-black/50 p-8 mt-8 rounded-xl flex gap-4">
          <FormField
            control={form.control}
            name="thumbnail"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2 w-full basis-2/5">
                <FormLabel>Thumbnail</FormLabel>
                <FormControl>
                  <Input type="file" {...field} className="border-white/10" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bannerImage"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2 w-full basis 3/5">
                <FormLabel>Banner image</FormLabel>
                <FormControl>
                  <Input type="file" {...field} className="border-white/10" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="isFreeEvent"
          render={({ field }) => (
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
                onCheckedChange={(value) => {
                  field.onChange(value);
                  handleFreeEventSwitch();
                }}
              />
            </div>
          )}
        />
        <div className="my-8 bg-black/50 p-8 rounded-xl flex flex-col gap-6 w-full">
          <h1 className="font-semibold text-xl text-primary-500">
            Ticket Tier
          </h1>
          {fields.map((field, index) => (
            <div key={field.id} className="flex gap-4 w-full items-center">
              <FormField
                control={form.control}
                name={`ticketTiers.${index}.name`}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <Label>Ticket Name</Label>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter ticket name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`ticketTiers.${index}.seats`}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <Label>Available Seat</Label>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`ticketTiers.${index}.price`}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <Label>Price (Rp)</Label>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="1000000"
                        {...field}
                        disabled={isFreeEvent}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {fields.length > 1 && (
                <Button
                  variant={"destructive"}
                  onClick={() => remove(index)}
                  className="rounded-lg h-[54px]"
                  disabled={isFreeEvent}
                  type="button"
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
                onClick={() => append({ name: "", seats: "", price: "" })}
                disabled={isFreeEvent}
                type="button"
              >
                <Plus size={20} />
                Add Ticket Tier
              </Button>
            </div>
          </div>
        </div>
        <div className="my-8 bg-black/50 p-8 rounded-xl flex flex-col gap-6 w-full">
          <div>
            <h1 className="font-semibold text-xl text-primary-500">
              Create Voucher{" "}
              <span className="text-sm text-white/50 font-light">
                (optional)
              </span>
            </h1>
            <p className="flex gap-2 items-center">
              You can add voucher for your event
              <span className="flex gap-1">
                <TicketPercent size={28} />
              </span>
            </p>
          </div>
        </div>
        <Button type="submit" size={"lg"}>
          Create Event
        </Button>
      </form>
    </Form>
  );
};

export default CreateEventForm;
