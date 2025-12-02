"use client";

import { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import Spinner from "@/components/Spinner";

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUsers() {
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        setUsers(data.users || []);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    }

    loadUsers();
  }, []);

  return (
    <div>
      <PageHeader title="Users" />

      <Card>
        <h2 style={{ fontSize: "20px", fontWeight: 600 }}>All Users</h2>

        {loading ? (
          <Spinner />
        ) : (
          <ul style={{ marginTop: "20px" }}>
            {users.map((u) => (
              <li
                key={u.id}
                style={{
                  padding: "12px",
                  borderBottom: "1px solid #ddd"
                }}
              >
                {u.email}
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}