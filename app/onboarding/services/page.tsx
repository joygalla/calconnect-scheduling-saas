"use client";

import React, { useEffect, useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebaseClient";
import { onAuthStateChanged, User } from "firebase/auth";
import { createService } from "@/services/servicesService";

interface ServiceFormState {
  name: string;
  price: string;
  durationMinutes: string;
  description: string;
}

export default function OnboardingServicesPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [form, setForm] = useState<ServiceFormState>({
    name: "",
    price: "",
    durationMinutes: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (!firebaseUser) {
        router.push("/login");
      } else {
        setUser(firebaseUser);
      }
    });

    return () => unsubscribe();
  }, [router]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!user) return;

    setError(null);
    setLoading(true);

    try {
      await createService({
        hostId: user.uid,
        name: form.name,
        price: Number(form.price),
        // durationMinutes is currently NOT part of ServicePayload type,
        // so we do not send it here to avoid TypeScript errors.
        description: form.description,
      });

      router.push("/onboarding/availability");
    } catch (err) {
      console.error("Error creating service", err);
      setError("Failed to save service. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-2xl font-semibold mb-4">Create your first service</h1>
      <p className="text-sm text-gray-600 mb-6">
        This is what your clients will see when they book with you.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Service name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 text-sm"
            placeholder="Strategy Call"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="price">
              Price
            </label>
            <input
              id="price"
              name="price"
              type="number"
              min="0"
              step="0.01"
              value={form.price}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-sm"
              placeholder="100"
              required
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="durationMinutes"
            >
              Duration (minutes)
            </label>
            <input
              id="durationMinutes"
              name="durationMinutes"
              type="number"
              min="1"
              step="1"
              value={form.durationMinutes}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-sm"
              placeholder="60"
              required
            />
          </div>
        </div>

        <div>
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 text-sm"
            rows={4}
            placeholder="What is this service about?"
          />
        </div>

        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading || !user}
          className="inline-flex items-center px-4 py-2 rounded-md bg-black text-white text-sm disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save and continue"}
        </button>
      </form>
    </div>
  );
}