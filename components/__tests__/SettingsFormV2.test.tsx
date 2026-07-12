import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import SettingsFormV2 from "../SettingsFormV2";

describe("SettingsFormV2", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("shows inline errors for empty submission", async () => {
    const user = userEvent.setup();
    render(<SettingsFormV2 />);

    await user.click(screen.getByRole("button", { name: /save settings/i }));

    expect(
      screen.getByRole("alert", { name: /name error/i }),
    ).toHaveTextContent("Name is required.");
    expect(
      screen.getByRole("alert", { name: /email error/i }),
    ).toHaveTextContent("Email is required.");
    expect(
      screen.getByRole("alert", { name: /password error/i }),
    ).toHaveTextContent("Password is required.");
  });

  it("shows an error for an invalid email", async () => {
    const user = userEvent.setup();
    render(<SettingsFormV2 />);

    await user.type(screen.getByLabelText(/name/i), "Ada Lovelace");
    await user.type(screen.getByLabelText(/email/i), "not-an-email");
    await user.type(screen.getByLabelText(/password/i), "Password1!");
    await user.click(screen.getByRole("button", { name: /save settings/i }));

    expect(
      screen.getByRole("alert", { name: /email error/i }),
    ).toHaveTextContent("Please enter a valid email address.");
  });

  it("shows an error for a short password", async () => {
    const user = userEvent.setup();
    render(<SettingsFormV2 />);

    await user.type(screen.getByLabelText(/name/i), "Ada Lovelace");
    await user.type(screen.getByLabelText(/email/i), "ada@example.com");
    await user.type(screen.getByLabelText(/password/i), "Short1");
    await user.click(screen.getByRole("button", { name: /save settings/i }));

    expect(
      screen.getByRole("alert", { name: /password error/i }),
    ).toHaveTextContent("Password must be at least 8 characters.");
  });

  it("logs valid form data on submit", async () => {
    const user = userEvent.setup();
    const consoleSpy = vi
      .spyOn(console, "log")
      .mockImplementation(() => undefined);
    render(<SettingsFormV2 />);

    await user.type(screen.getByLabelText(/name/i), "Ada Lovelace");
    await user.type(screen.getByLabelText(/email/i), "ada@example.com");
    await user.type(screen.getByLabelText(/password/i), "Password1!");
    await user.click(screen.getByLabelText(/receive notifications/i));
    await user.click(screen.getByRole("button", { name: /save settings/i }));

    expect(consoleSpy).toHaveBeenCalledWith("Settings form submitted", {
      name: "Ada Lovelace",
      email: "ada@example.com",
      password: "Password1!",
      notifications: true,
    });
  });
});
