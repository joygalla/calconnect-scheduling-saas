"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BookingPage({ params }) {
  const { hostId } = params;

  const [host, setHost] = useState(null);
  const [loading, setLoading] = useState(true);

  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("30");

  const [timeslots, setTimeslots] = useState([]);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await axios.get(`http://localhost:5001/hosts/${hostId}`);
        setHost(res.data);
      } catch (err) {
        console.error("Host fetch error", err);
      }
      setLoading(false);
    }
    load();
  }, [hostId]);

  async function loadTimeslots(selectedDate) {
    setDate(selectedDate);
    const res = await axios.get(
      `http://localhost:5001/availability/${hostId}/${selectedDate}`
    );
    setTimeslots(res.data.slots || []);
  }

  async function submitBooking() {
    const res = await axios.post("http://localhost:5001/bookings/create", {
      hostId,
      clientName,
      clientEmail,
      date,
      time,
      duration,
    });

    setSuccess(res.data.bookingId);
  }

  if (loading) return <div className="p-6 text-xl">Loading...</div>;
  if (!host) return <div className="p-6 text-xl text-red-600">Host not found</div>;

  return (
    <div className="p-10 max-w-xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        Book with {host.firstName} {host.lastName}
      </h1>

      <div className="space-y-4">

        {/* Name */}
        <div>
          <label className="block mb-1 font-medium">Your Name</label>
          <input
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="email@example.com"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block mb-1 font-medium">Select Date</label>
          <input
            type="date"
            onChange={(e) => loadTimeslots(e.target.value)}
            className="border p-2 rounded"
          />
        </div>

        {/* Duration */}
        <div>
          <label className="block mb-1 font-medium">Duration</label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="15">15 Minutes</option>
            <option value="30">30 Minutes</option>
            <option value="60">60 Minutes</option>
          </select>
        </div>

        {/* Time */}
        {timeslots.length > 0 && (
          <div>
            <label className="block mb-1 font-medium">Available Times</label>

            <select
              className="border p-2 rounded w-full"
              onChange={(e) => setTime(e.target.value)}
            >
              <option>Select time</option>
              {timeslots.map((slot, idx) => (
                <option key={idx} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Button */}
        <button
          onClick={submitBooking}
          className="w-full bg-blue-600 text-white p-3 rounded mt-4"
        >
          Confirm Booking
        </button>

        {/* Success */}
        {success && (
          <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
            Booking created! ID: {success}
          </div>
        )}
      </div>
    </div>
  );
}