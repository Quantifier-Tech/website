"use client";

import { useForm } from "@formspree/react";
import { useState, type SubmitEvent } from "react";

const FORMSPREE_FORM_ID = "mwlknpwe";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [state, formspreeSubmit] = useForm(FORMSPREE_FORM_ID);

  function validate(): FieldErrors {
    const next: FieldErrors = {};

    if (!name.trim()) {
      next.name = "Please enter your name.";
    }

    if (!email.trim()) {
      next.email = "Please enter your email.";
    } else if (!isValidEmail(email.trim())) {
      next.email = "Please enter a valid email address.";
    }

    if (!message.trim()) {
      next.message = "Please enter a message.";
    }

    return next;
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    void formspreeSubmit(event);
  }

  if (state.succeeded) {
    return (
      <div className="contact-success" role="status">
        <h3>Thanks for reaching out</h3>
        <p>Your message has been sent. We will get back to you soon.</p>
      </div>
    );
  }

  const formError =
    state.errors
      ?.getFormErrors()
      .map((error) => error.message)
      .filter(Boolean)
      .join(" ") ||
    (state.errors ? "Something went wrong. Please try again." : null);

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          disabled={state.submitting}
        />
        {errors.name ? (
          <p id="contact-name-error" className="field-error">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          disabled={state.submitting}
        />
        {errors.email ? (
          <p id="contact-email-error" className="field-error">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? "contact-message-error" : undefined
          }
          disabled={state.submitting}
        />
        {errors.message ? (
          <p id="contact-message-error" className="field-error">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="form-actions">
        <button className="button" type="submit" disabled={state.submitting}>
          {state.submitting ? "Sending…" : "Send"}
        </button>
      </div>

      {formError ? (
        <p className="field-error" role="alert">
          {formError}
        </p>
      ) : null}
    </form>
  );
}
