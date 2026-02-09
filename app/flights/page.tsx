"use client";

import { useState } from "react";
import { post } from "@/lib/api";
import FlightSearchForm from "@/components/FlightSearchForm";
import FlightCard from "@/components/FlightCard";

export default function FlightsPage() {
  const [flights, setFlights] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchId, setSearchId] = useState<string>();
  const [error, setError] = useState<string | string[]>();

  async function onSearch(filters: any) {

    try{
        setLoading(true);
        const res: any = await post("/api/search", filters);
        if (res.searchId) {
            setSearchId(res.searchId);
            setFlights(res.flights);
        } else {
            setError(res.message);
        }
        setLoading(false);
    } catch(error: any) {
        setLoading(false);
        setError(error.message);
    }
  }

  return (
    <div className="p-6">
      <FlightSearchForm onSearch={onSearch} />

      {loading && <p className="p-4">Searching flights...</p>}
      {/* {error && <p className="p-4">{error}</p>} */}

      {!error && <div className="space-y-4 mt-6">
        {flights.map(f => (
          <FlightCard key={f.flightKey} flight={f} searchId={searchId!} />
        ))}
      </div>}
    </div>
  );
}
