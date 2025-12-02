'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Use BACKEND_URL first, fall back to API_URL
  const apiBaseUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    '';

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSuccessMessage('');
    setErrorMessage('');

    if (!email) {
      setErrorMessage('Please enter your email address.');
      return;
    }

    setSubmitting(true);

    try {
      const base = apiBaseUrl.replace(/\/$/, '');
      const response = await fetch(`${base}/api/auth/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        let message = 'Something went wrong while sending the reset email.';
        try {
          const data = await response.json();
          message = data?.message || data?.error || message;
        } catch {
          // ignore JSON parse error
        }
        setErrorMessage(message);
        return;
      }

      setSuccessMessage('Password reset email sent! Please check your inbox.');
    } catch (error) {
      setErrorMessage('Unable to contact the server. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-lg p-8">
        <h1 className="text-2xl font-semibold text-slate-900 mb-6">
          Forgot Password
        </h1>

        {successMessage && (
          <div className="mb-4 rounded-xl bg-indigo-100 px-4 py-3 text-sm font-medium text-indigo-800">
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="mb-4 rounded-xl bg-red-100 px-4 py-3 text-sm font-medium text-red-800">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              placeholder="you@example.com"
              required
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? 'Sending…' : 'Send Reset Email'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            href="/login"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;