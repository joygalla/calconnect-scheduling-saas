"use client";

import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";

export default function PayPage() {
  return (
    <div>
      <PageHeader title="Payments" />

      <Card>
        <h2 style={{ fontSize: "20px", fontWeight: 600 }}>Payments Overview</h2>
        <p style={{ marginTop: "10px", color: "#555" }}>
          You can manage your subscriptions and payment methods here. 
          (Stripe integration will be added.)
        </p>

        <div style={{ marginTop: "25px" }}>
          <button
            style={{
              padding: "12px 18px",
              background: "#4a3aff",
              color: "white",
              borderRadius: "8px",
              border: "none"
            }}
          >
            Manage Billing
          </button>
        </div>
      </Card>
    </div>
  );
}