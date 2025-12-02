"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function OnboardingForm() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [timezone, setTimezone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit() {
    setError("");
    setLoading(true);

    try {
      const hostId = crypto.randomUUID();

      const res = await axios.post("http://localhost:5001/hosts/create", {
        hostId,
        firstName,
        lastName,
        timezone,
      });

      router.push(`/app/(dashboard)/hosts/${hostId}`);
    } catch (err: any) {
      setError("Unable to create host");
    }

    setLoading(false);
  }

  return (
    <div className="bg-white shadow p-8 rounded space-y-6">

      <h1 className="text-2xl font-semibold">Create Your Account</h1>

      {error && (
        <div className="text-red-600 text-sm">{error}</div>
      )}

      <div>
        <label className="block text-sm mb-1">First Name</label>
        <input
          className="w-full border rounded p-2"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Last Name</label>
        <input
          className="w-full border rounded p-2"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Timezone</label>
        <input
          className="w-full border rounded p-2"
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
          placeholder="America/Los_Angeles"
        />
      </div>

      <button
        onClick={submit}
        disabled={loading}
        className="w-full bg-blue-600 text-white p-3 rounded font-medium"
      >
        {loading ? "Creating..." : "Continue"}
      </button>
    </div>
  );
}