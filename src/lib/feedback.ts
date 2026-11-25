import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const feedbackSchema = z.object({
  answer: z.enum(["yes", "not-yet"]),
  message: z.string().trim().min(1).max(2000),
});

export const sendWebsiteFeedback = createServerFn({ method: "POST" })
  .validator((data: unknown) => feedbackSchema.parse(data))
  .handler(async ({ data }) => {
    const supabaseUrl = process.env.SUPABASE_URL?.replace(/\/+$/, "");
    const publishableKey = process.env.SUPABASE_PUBLISHABLE_KEY;
    if (!supabaseUrl || !publishableKey) {
      throw new Error("Supabase feedback storage is not configured.");
    }

    const response = await fetch(`${supabaseUrl}/rest/v1/website_feedback`, {
      method: "POST",
      headers: {
        apikey: publishableKey,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ answer: data.answer, message: data.message }),
    });

    if (!response.ok) {
      const errorDetails = await response.text();
      console.error("Supabase rejected the feedback insert.", {
        status: response.status,
        details: errorDetails,
      });
      throw new Error(`Feedback storage failed with status ${response.status}.`);
    }
  });
