"use client";

import React, { useEffect, useState } from "react";
import { getServicesByHost, createService } from "@/services/servicesService";

export default function HostServicesPage({ params }: any) {
  const { hostId } = params;

  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [serviceName, setServiceName] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [serviceDuration, setServiceDuration] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const data = await getServicesByHost(hostId);
        setServices(data);
      } catch (err) {
        console.error("Error loading services:", err);
      }
      setLoading(false);
    }

    load();
  }, [hostId]);

  const handleCreate = async () => {
    if (!serviceName || !servicePrice || !serviceDuration) {
      setMessage("Fill all fields.");
      return;
    }

    try {
      const newService = await createService({
        hostId,
        name: serviceName,
        price: Number(servicePrice),
        duration: Number(serviceDuration)
      });

      setServices((prev) => [...prev, newService]);
      setMessage("Service added!");

      setServiceName("");
      setServicePrice("");
      setServiceDuration("");

      setTimeout(() => setMessage(""), 2000);
    } catch (err) {
      console.error("Error creating service:", err);
      setMessage("Failed to create service.");
    }
  };

  if (loading) return <div style={{ padding: "20px" }}>Loading services…</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>Services</h1>

      {message && (
        <div
          style={{
            marginBottom: "20px",
            padding: "12px",
            background: "#e0dbff",
            color: "#4a3aff",
            borderRadius: "8px"
          }}
        >
          {message}
        </div>
      )}

      {/* Add Service */}
      <div
        style={{
          background: "white",
          padding: "16px",
          borderRadius: "12px",
          marginBottom: "30px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
        }}
      >
        <h2 style={{ marginBottom: "10px" }}>Add New Service</h2>

        <input
          placeholder="Service Name"
          style={input}
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
        />

        <input
          placeholder="Price"
          style={input}
          type="number"
          value={servicePrice}
          onChange={(e) => setServicePrice(e.target.value)}
        />

        <input
          placeholder="Duration (min)"
          style={input}
          type="number"
          value={serviceDuration}
          onChange={(e) => setServiceDuration(e.target.value)}
        />

        <button
          style={button}
          onClick={handleCreate}
        >
          Add Service
        </button>
      </div>

      {/* List Services */}
      {services.length === 0 ? (
        <p>No services found.</p>
      ) : (
        services.map((s) => (
          <div
            key={s.id}
            style={{
              background: "white",
              padding: "14px",
              borderRadius: "10px",
              marginBottom: "12px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
            }}
          >
            <p><b>{s.name}</b></p>
            <p>Price: ${s.price}</p>
            <p>Duration: {s.duration} min</p>
          </div>
        ))
      )}
    </div>
  );
}

const input: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc"
};

const button: React.CSSProperties = {
  padding: "12px 16px",
  background: "#4a3aff",
  color: "white",
  border: "none",
  width: "100%",
  borderRadius: "8px",
  cursor: "pointer",
  marginTop: "5px"
};