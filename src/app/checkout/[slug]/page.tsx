"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header/Header";
import { resetTicketOrders } from "@/store/ticketSlice";
import { Info } from "lucide-react";

const Checkout = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const ticketOrders = useSelector(
    (state: RootState) => state.tickets.ticketOrders
  );
  const totalPrice = ticketOrders.reduce(
    (total: number, order: { price: number; quantity: number }) =>
      total + order.price * order.quantity,
    0
  );

  return (
    <main className="flex min-h-screen flex-col items-center gap-2">
      <Header />
      <section className="px-2 w-full mt-[96px]">
        <div className="flex flex-col w-full bg-background-100 h-fit rounded-lg p-20 gap-10">
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
            </div>
            <div className="flex flex-col gap-5 basis-2/5 border border-white p-4 rounded-xl w-full">
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
                        {(order.price * order.quantity).toLocaleString("id-ID")}
                      </span>
                    </div>
                  ))
                )}
                {ticketOrders.length > 0 && (
                  <div className="flex justify-between mt-4 pt-4 border-t border-gray-600">
                    <span className="font-bold">Total:</span>
                    <span className="font-bold">
                      Rp{totalPrice.toLocaleString("id-ID")}
                    </span>
                  </div>
                )}
              </div>
              <Button>Proceed to Payment</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
