"use client";

import { ValidationError, useForm } from "@formspree/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { trackAnalyticsEvent } from "./analytics";
import { Button } from "../components/ui/button";
import { Input, Label, Textarea } from "../components/ui/field";
import { site } from "../lib/site-config";

function SubmissionStatus({ submitting, succeeded }: { submitting: boolean; succeeded: boolean }) {
  return (
    <p className={succeeded ? "form-status" : "sr-only"} role="status" aria-live="polite">
      {succeeded ? "Submission received. Redirecting to the confirmation page." : submitting ? "Submitting your form." : ""}
    </p>
  );
}

export function EmailSignup({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [state, handleSubmit] = useForm(site.formspreeFormId);
  const emailInvalid = (state.errors?.getFieldErrors("email").length ?? 0) > 0;
  const successTracked = useRef(false);

  useEffect(() => {
    if (state.succeeded && !successTracked.current) {
      successTracked.current = true;
      trackAnalyticsEvent("email_signup_success", { form_location: compact ? "compact" : "support" });
      router.push("/thank-you/");
    }
  }, [compact, router, state.succeeded]);

  if (state.succeeded) {
    return <SubmissionStatus submitting={false} succeeded />;
  }

  return (
    <form className={`signup-form ${compact ? "compact" : ""}`} onSubmit={handleSubmit} noValidate={false}>
      <Label className="sr-only" htmlFor="newsletter-email">Email</Label>
      <Input
        id="newsletter-email"
        type="email"
        name="email"
        placeholder="you@example.com"
        required
        autoComplete="email"
        aria-describedby="newsletter-email-error"
        aria-invalid={emailInvalid || undefined}
      />
      <ValidationError
        id="newsletter-email-error"
        className="form-error"
        role="alert"
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <ValidationError className="form-error form-error-general" role="alert" errors={state.errors} />
      <SubmissionStatus submitting={state.submitting} succeeded={false} />
      <Button type="submit" disabled={state.submitting}>
        {state.submitting ? "Submitting..." : "Follow our progress"}
      </Button>
    </form>
  );
}

export function ContactForm() {
  const router = useRouter();
  const [state, handleSubmit] = useForm(site.formspreeFormId);
  const nameInvalid = (state.errors?.getFieldErrors("name").length ?? 0) > 0;
  const emailInvalid = (state.errors?.getFieldErrors("email").length ?? 0) > 0;
  const messageInvalid = (state.errors?.getFieldErrors("message").length ?? 0) > 0;
  const successTracked = useRef(false);

  useEffect(() => {
    if (state.succeeded && !successTracked.current) {
      successTracked.current = true;
      trackAnalyticsEvent("contact_click", { contact_method: "form_success" });
      router.push("/thank-you/");
    }
  }, [router, state.succeeded]);

  if (state.succeeded) {
    return <SubmissionStatus submitting={false} succeeded />;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <Label htmlFor="contact-name">Name</Label>
      <Input
        id="contact-name"
        type="text"
        name="name"
        required
        autoComplete="name"
        aria-describedby="contact-name-error"
        aria-invalid={nameInvalid || undefined}
      />
      <ValidationError
        id="contact-name-error"
        className="form-error"
        role="alert"
        prefix="Name"
        field="name"
        errors={state.errors}
      />

      <Label htmlFor="contact-email">Email</Label>
      <Input
        id="contact-email"
        type="email"
        name="email"
        required
        autoComplete="email"
        aria-describedby="contact-email-error"
        aria-invalid={emailInvalid || undefined}
      />
      <ValidationError
        id="contact-email-error"
        className="form-error"
        role="alert"
        prefix="Email"
        field="email"
        errors={state.errors}
      />

      <Label htmlFor="contact-message">Message</Label>
      <Textarea
        id="contact-message"
        name="message"
        rows={4}
        required
        aria-describedby="contact-message-error"
        aria-invalid={messageInvalid || undefined}
      />
      <ValidationError
        id="contact-message-error"
        className="form-error"
        role="alert"
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <ValidationError className="form-error form-error-general" role="alert" errors={state.errors} />
      <SubmissionStatus submitting={state.submitting} succeeded={false} />

      <Button type="submit" disabled={state.submitting}>
        {state.submitting ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
