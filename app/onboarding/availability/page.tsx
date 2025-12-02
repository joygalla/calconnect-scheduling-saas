"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebaseClient";
import { onAuthStateChanged } from "firebase/auth";
import { getAvailability, updateAvailability } from "@/services/availabilityService";
import WeeklyTemplate from "@/components/WeeklyTemplate";

export default function AvailabilityPage() {
  const [loading, setLoading] = useState(true);
  const [availability, setAvailability] = useState<any>({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) return (window.location.href = "/login");

      const data = await getAvailability(user.uid);
      setAvailability(data || {});
      setLoading(false);
    });

    return () => unsub();
  }, []);

  const saveAvailability = async () => {
    const user = auth.currentUser;
    if (!user) return;

    await updateAvailability(user.uid, availability);

    setMessage("Availability Saved!");
    setTimeout(() => setMessage(""), 2500);
  };

  if (loading) return <div>Loading…</div>;

  return (
    <div style={{ padding: "30px" }}>
      <h1>Set Availability</h1>

      {message && <div>{message}</div>}

      <WeeklyTemplate template={availability} onChange={setAvailability} />

      <button onClick={saveAvailability}>Save</button>
    </div>
  );
}