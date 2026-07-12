"use client";

import { ChangeEvent, FormEvent, useState } from "react";

type FormValues = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  timezone: string;
  notifications: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  timezone: "",
  notifications: "weekly",
};

function validate(values: FormValues) {
  const nextErrors: FormErrors = {};

  if (!values.fullName.trim()) {
    nextErrors.fullName = "Full name is required.";
  } else if (values.fullName.trim().length < 2) {
    nextErrors.fullName = "Full name must be at least 2 characters.";
  }

  if (!values.email.trim()) {
    nextErrors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    nextErrors.email = "Please enter a valid email address.";
  }

  if (!values.password) {
    nextErrors.password = "Password is required.";
  } else if (values.password.length < 8) {
    nextErrors.password = "Password must be at least 8 characters.";
  } else if (
    !/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/.test(values.password)
  ) {
    nextErrors.password =
      "Use 8+ chars with an uppercase letter, number, and symbol.";
  }

  if (!values.confirmPassword) {
    nextErrors.confirmPassword = "Please confirm your password.";
  } else if (values.confirmPassword !== values.password) {
    nextErrors.confirmPassword = "Passwords do not match.";
  }

  if (!values.timezone) {
    nextErrors.timezone = "Please choose a timezone.";
  }

  if (!values.notifications) {
    nextErrors.notifications = "Please choose a notification preference.";
  }

  return nextErrors;
}

export default function Home() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setIsSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setIsSubmitted(false);
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f8fafc,_#eef2ff_60%,_#f8fafc)] px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <main className="mx-auto flex max-w-5xl flex-col gap-8 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-2xl shadow-slate-200/60 backdrop-blur md:p-10">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-600">
            Account settings
          </p>
          <h1 className="text-3xl font-semibold sm:text-4xl">
            Keep your profile secure and up to date.
          </h1>
          <p className="max-w-2xl text-base text-slate-600">
            Update your contact details, password, and notification preferences
            in one place.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-slate-700">
                <span>Full name</span>
                <input
                  name="fullName"
                  value={values.fullName}
                  onChange={handleChange}
                  placeholder="Ada Lovelace"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />
                {errors.fullName ? (
                  <p className="text-sm text-rose-600">{errors.fullName}</p>
                ) : null}
              </label>

              <label className="space-y-2 text-sm font-medium text-slate-700">
                <span>Email address</span>
                <input
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="ada@example.com"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />
                {errors.email ? (
                  <p className="text-sm text-rose-600">{errors.email}</p>
                ) : null}
              </label>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-slate-700">
                <span>Password</span>
                <input
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />
                {errors.password ? (
                  <p className="text-sm text-rose-600">{errors.password}</p>
                ) : null}
              </label>

              <label className="space-y-2 text-sm font-medium text-slate-700">
                <span>Confirm password</span>
                <input
                  name="confirmPassword"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />
                {errors.confirmPassword ? (
                  <p className="text-sm text-rose-600">
                    {errors.confirmPassword}
                  </p>
                ) : null}
              </label>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-slate-700">
                <span>Timezone</span>
                <select
                  name="timezone"
                  value={values.timezone}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                >
                  <option value="">Select timezone</option>
                  <option value="UTC">UTC</option>
                  <option value="America/New_York">America/New_York</option>
                  <option value="Europe/London">Europe/London</option>
                  <option value="Asia/Tokyo">Asia/Tokyo</option>
                </select>
                {errors.timezone ? (
                  <p className="text-sm text-rose-600">{errors.timezone}</p>
                ) : null}
              </label>

              <label className="space-y-2 text-sm font-medium text-slate-700">
                <span>Notifications</span>
                <select
                  name="notifications"
                  value={values.notifications}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
                {errors.notifications ? (
                  <p className="text-sm text-rose-600">
                    {errors.notifications}
                  </p>
                ) : null}
              </label>
            </div>

            <button
              type="submit"
              className="rounded-2xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              Save settings
            </button>
          </form>

          <aside className="rounded-3xl border border-indigo-100 bg-indigo-50 p-6">
            <h2 className="text-lg font-semibold text-slate-900">Preview</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li>
                <span className="font-medium text-slate-900">Name:</span>{" "}
                {values.fullName || "—"}
              </li>
              <li>
                <span className="font-medium text-slate-900">Email:</span>{" "}
                {values.email || "—"}
              </li>
              <li>
                <span className="font-medium text-slate-900">Timezone:</span>{" "}
                {values.timezone || "—"}
              </li>
              <li>
                <span className="font-medium text-slate-900">
                  Notifications:
                </span>{" "}
                {values.notifications || "—"}
              </li>
            </ul>

            {isSubmitted ? (
              <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-100 p-4 text-sm text-emerald-700">
                Settings saved successfully.
              </div>
            ) : (
              <div className="mt-6 rounded-2xl border border-dashed border-slate-300 p-4 text-sm text-slate-600">
                Fill the form to see your changes reflected here.
              </div>
            )}
          </aside>
        </div>
      </main>
    </div>
  );
}
