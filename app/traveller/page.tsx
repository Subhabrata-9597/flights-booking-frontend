"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { post } from "@/lib/api";

export default function TravellerPage() {
  const searchId = useSearchParams().get("searchId");
  const router = useRouter();

  const [traveller, setTraveller] = useState({
    name: "",
    email: "",
    phone: "",
  });

  async function book() {
    const res: {bookingId: string} = await post("/api/booking", {
      searchId,
      traveller,
    });

    router.push(`/confirmation?bookingId=${res.bookingId}`);
  }

  return (
    <div className="p-6 space-y-4">
        <div className="flex flex-col gap-4">
            <h1>Fill your detail below to confirm booking: </h1>
            <div className="space-x-4">
                <input placeholder="Name" onChange={e => setTraveller({ ...traveller, name: e.target.value })} />
                <input placeholder="Email" onChange={e => setTraveller({ ...traveller, email: e.target.value })} />
                <input placeholder="Phone" onChange={e => setTraveller({ ...traveller, phone: e.target.value })} />
            </div>
        </div>

      <button onClick={book} className="border border-gray-300 rounded-lg px-2">Confirm Booking</button>
    </div>
  );
}
