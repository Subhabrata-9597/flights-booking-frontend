"use client";

import { useRouter } from "next/navigation";
import { post } from "@/lib/api";

export default function FlightCard({ flight, searchId }: {flight: any, searchId: string}) {
  const router = useRouter();

  async function selectFlight() {

    await post("/api/select", {
      searchId: searchId,
      flightKey: flight.flightKey,
      fareId: flight.fareId,
    });

    router.push(`/traveller?searchId=${searchId}`);
  }

  return (
    <div className="border p-4 flex justify-between">
      <div>
        <h3>{flight.airline}</h3>
        <p>{flight.stops} stops</p>
        <p>₹ {flight.price}</p>
      </div>

      <button onClick={selectFlight}>Select</button>
    </div>
  );
}
