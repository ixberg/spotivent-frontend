"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header/Header";
import { Info } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import CuponComponent from "@/components/elements/Cupon";
import PointCard from "@/components/elements/PointCard";

const Checkout = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const ticketOrders = useSelector(
    (state: RootState) => state.tickets.ticketOrders
  );
  const [isCouponActive, setIsCouponActive] = useState(false);

  const totalPrice = ticketOrders.reduce(
    (total: number, order: { price: number; quantity: number }) =>
      total + order.price * order.quantity,
    0
  );

  const discount = isCouponActive ? 50 : 0;
  const discountAmount = (totalPrice * discount) / 100;
  const discountedPrice = totalPrice - discountAmount;

  return (
    <main className="flex min-h-screen flex-col items-center gap-2">
      <Header />
      <section className="px-2 w-full mt-[96px]">
        <div className="flex flex-col w-full bg-background-100 min-h-screen rounded-lg p-20 gap-10">
          <div className="flex gap-12 w-full justify-between">
            <div className="flex flex-col gap-6 basis-3/5">
              <h1 className="text-2xl font-semibold">Contact Detail</h1>
              <div className="p-4 bg-blue-500/20 rounded-lg border-blue-500 border flex gap-4">
                <Info />{" "}
                <p>
                  E-tickets will be sent to your email address, please make sure
                  your email address is correct.
                </p>
              </div>
              <div className="bg-background-500 p-10 rounded-lg flex flex-col gap-6">
                <div className="grid w-full items-center gap-1.5">
                  <Label>Name</Label>
                  <Input placeholder="Enter your name" />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label>Phone Number</Label>
                  <Input placeholder="Phone number" />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label>Email</Label>
                  <Input placeholder="Email" />
                </div>
              </div>
            </div>
            <div className="w-full basis-2/5 flex flex-col gap-5">
              <CuponComponent
                cuponName="New Year Promo"
                discount={50}
                isCouponActive={isCouponActive}
                setIsCouponActive={setIsCouponActive}
              />
              <PointCard myPoint={100000}></PointCard>
              <div className="flex flex-col gap-5 border border-white p-4 h-fit rounded-xl w-full">
                <h1 className="text-white/50">Order Summary</h1>
                <div className="flex flex-col gap-4">
                  {ticketOrders.length === 0 ? (
                    <p className="text-white/50">No Ticket Selected</p>
                  ) : (
                    ticketOrders.map((order) => (
                      <div key={order.name} className="flex justify-between">
                        <span>
                          {order.name} x {order.quantity}
                        </span>
                        <span>
                          Rp
                          {(order.price * order.quantity).toLocaleString(
                            "id-ID"
                          )}
                        </span>
                      </div>
                    ))
                  )}
                  {ticketOrders.length > 0 && (
                    <>
                      <div className="flex justify-between mt-4 pt-4 border-t border-gray-600">
                        <span className="font-bold">Total:</span>
                        <span className="font-bold">
                          Rp{totalPrice.toLocaleString("id-ID")}
                        </span>
                      </div>
                      {isCouponActive && (
                        <div className="flex justify-between">
                          <span className="font-bold">Discount:</span>
                          <span className="font-bold text-red-500">
                            -Rp{discountAmount.toLocaleString("id-ID")}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between mt-4 pt-4 border-t border-gray-600">
                        <span className="font-bold">Total to Pay:</span>
                        <span className="font-bold">
                          Rp{discountedPrice.toLocaleString("id-ID")}
                        </span>
                      </div>
                    </>
                  )}
                </div>
                <Button size={"lg"}>Proceed to Payment</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
