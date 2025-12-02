# Calconnect – Scheduling SaaS (Portfolio Version)

Calconnect is a scheduling and booking SaaS similar to Calendly.  
This repository is a **safe, redacted portfolio version** that focuses on the
frontend architecture, UX flows, and overall structure of the app.  
All environment variables, secrets, and production data have been removed.

---

## 🚀 What Calconnect Does

Calconnect is built for “hosts” (coaches, service providers, etc.) who need a
simple way to:

- Create bookable services (e.g. 30-min call, 60-min session)
- Share booking links with guests
- Let guests pick a time and confirm a booking
- View and manage bookings and availability from a dashboard

Think of it as: **host dashboard + guest booking pages + basic automations.**

---

## 🧱 Tech Stack

- **Frontend:** Next.js (App Router)
- **Language:** TypeScript / JavaScript
- **Styling:** (Tailwind / CSS modules – depending on branch)
- **Architecture:** Component-based with a services layer for API calls
- **Backend (real app):** Node.js / Express + Firestore on Google Cloud  
  > Not included here – this repo uses placeholders / mock data where needed.

---

## 📂 Project Structure

- `app/` – Next.js App Router routes (dashboard, booking, auth, etc.)
- `src/app/` – Earlier/alternate routing structure kept for reference
- `components/` – Reusable UI components (forms, cards, layouts, calendars)
- `services/` – Frontend service layer for backend API communication
- `public/` – Static assets

Key routes:

- `/` – Landing / entry
- `/login`, `/signup`, `/forgot-password` – Auth flow
- `/onboarding` – Host onboarding
- `/dashboard` – Main host dashboard
- `/dashboard/bookings` – Bookings list
- `/dashboard/availability` & `/dashboard/weekly` – Availability management
- `/dashboard/services` – Service management
- `/book/[hostId]/[serviceId]` – Public booking page for a specific host + service

---

## 🔌 API & Data (Demo vs Real)

In the **real application**, the frontend talks to a secure backend API
(hosted on Google Cloud Run) that:

- Stores hosts, services, availability, and bookings in Firestore
- Handles authentication and business logic
- Integrates with external calendars and payments

In this **portfolio version**:

- URLs like `process.env.NEXT_PUBLIC_API_URL` are placeholders
- Example/mock data can be used to render pages
- No real API keys, service accounts, or customer data are included

Example env file for local demo:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_APP_URL=http://localhost:3000