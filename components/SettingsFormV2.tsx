"use client";

import { ChangeEvent, FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  password: string;
  notifications: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialValues: FormState = {
  name: "",
  email: "",
  password: "",
  notifications: false,
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SettingsFormV2() {
  const [values, setValues] = useState<FormState>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (nextValues: FormState) => {
    const nextErrors: FormErrors = {};

    if (!nextValues.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!nextValues.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!emailRegex.test(nextValues.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!nextValues.password) {
      nextErrors.password = "Password is required.";
    } else if (nextValues.password.length < 8) {
      nextErrors.password = "Password must be at least 8 characters.";
    }

    return nextErrors;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const nextValue = type === "checkbox" ? checked : value;

    setValues((current) => ({ ...current, [name]: nextValue }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    console.log("Settings form submitted", {
      name: values.name,
      email: values.email,
      password: values.password,
      notifications: values.notifications,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-xl flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
      noValidate
    >
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-slate-900">Settings form</h2>
        <p className="text-sm text-slate-600">
          Use this form to update your profile details.
        </p>
      </div>

      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-slate-700">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
        />
        {errors.name ? (
          <p
            id="name-error"
            role="alert"
            aria-label="name error"
            className="text-sm text-rose-600"
          >
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-slate-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
        />
        {errors.email ? (
          <p
            id="email-error"
            role="alert"
            aria-label="email error"
            className="text-sm text-rose-600"
          >
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="password"
          className="text-sm font-medium text-slate-700"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          aria-invalid={Boolean(errors.password)}
          aria-describedby={errors.password ? "password-error" : undefined}
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
        />
        {errors.password ? (
          <p
            id="password-error"
            role="alert"
            aria-label="password error"
            className="text-sm text-rose-600"
          >
            {errors.password}
          </p>
        ) : null}
      </div>

      <label
        htmlFor="notifications"
        className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
      >
        <input
          id="notifications"
          name="notifications"
          type="checkbox"
          checked={values.notifications}
          onChange={handleChange}
          className="h-4 w-4 rounded border-slate-300 text-indigo-600"
        />
        Receive notifications
      </label>

      <button
        type="submit"
        className="rounded-2xl bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700"
      >
        Save settings
      </button>
    </form>
  );
}
