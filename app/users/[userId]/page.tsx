"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import Spinner from "@/components/Spinner";

export default function UserDetailsPage() {
  const { userId } = useParams();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      try {
        const res = await fetch(`/api/users/${userId}`);
        const data = await res.json();
        setUser(data.user || null);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    }

    loadUser();
  }, [userId]);

  return (
    <div>
      <PageHeader title="User Details" />

      <Card>
        {loading ? (
          <Spinner />
        ) : !user ? (
          <div style={{ color: "red" }}>User not found.</div>
        ) : (
          <div>
            <h2 style={{ fontSize: "20px", fontWeight: 600 }}>
              {user.email}
            </h2>
            <p style={{ marginTop: "10px" }}>
              User ID: <strong>{userId}</strong>
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}