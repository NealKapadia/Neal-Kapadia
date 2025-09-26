"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Please provide more details"),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="text-[color:var(--muted)] text-sm">Let’s connect. This form sends directly to my inbox.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm">Name</label>
          <input className="mt-1 w-full rounded border border-black/10 dark:border-white/15 bg-white/80 dark:bg-black/20 p-2" {...register("name")} />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm">Email</label>
          <input className="mt-1 w-full rounded border border-black/10 dark:border-white/15 bg-white/80 dark:bg-black/20 p-2" {...register("email")} />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm">Message</label>
          <textarea rows={5} className="mt-1 w-full rounded border border-black/10 dark:border-white/15 bg-white/80 dark:bg-black/20 p-2" {...register("message")} />
          {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message.message}</p>}
        </div>
        <button disabled={status === "sending"} className="px-4 py-2 rounded bg-[color:var(--foreground)] text-[color:var(--background)] hover:opacity-90 disabled:opacity-60">
          {status === "sending" ? "Sending..." : "Send"}
        </button>
        {status === "success" && <p className="text-sm text-green-700">Thanks! I’ll be in touch soon.</p>}
        {status === "error" && <p className="text-sm text-red-600">Something went wrong. Please try again later.</p>}
      </form>
      <div className="pt-2 text-sm">
        <a className="underline" href="https://www.linkedin.com/in/neal-kapadia" target="_blank" rel="noreferrer">LinkedIn</a>
        <span className="mx-2">•</span>
        <a className="underline" href="https://github.com/nealkapadia" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
  );
}
