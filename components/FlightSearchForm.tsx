"use client";

import { useState } from "react";

export default function FlightSearchForm({ onSearch }: any) {
    const [form, setForm] = useState({
        source: "",
        destination: "",
        departureDate: "",
        passengers: 1,
        tripType: "ONE_WAY"
    });

    return (
        <div className="grid grid-cols-5 gap-4 border border-gray-300 p-6 rounded-lg">
            <input placeholder="From" onChange={e => setForm({ ...form, source: e.target.value })} />
            <input placeholder="To" onChange={e => setForm({ ...form, destination: e.target.value })} />
            <input type="date" onChange={e => setForm({ ...form, departureDate: e.target.value })} />
            <select name="tripType" id="tripType">
                <option value="ONE_WAY">ONE_WAY</option>
                <option value="ROUND_WAY">ROUND_WAY</option>
            </select>
            <button className="border border-gray-300 rounded-lg" onClick={() => onSearch(form)}>Search</button>
        </div>
    );
}
