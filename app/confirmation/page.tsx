"use client";

import { useSearchParams } from "next/navigation";

export default function ConfirmationPage() {
  const bookingId = useSearchParams().get("bookingId");

  return (
    <div className="p-6">
      <h1>Booking Confirmed 🎉</h1>
      <p>Booking ID: {bookingId}</p>
    </div>
  );
}
