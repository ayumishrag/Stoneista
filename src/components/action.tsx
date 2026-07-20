// // app/components/action.tsx
// "use server";

// import { getPayloadClient } from "@/lib/payload"; // adjust path to your helper

// export async function sendWelcomeEmail(body:string,subject:string,to ="info@edquest.co.in")
//    {
//   const payload = await getPayloadClient();

//   await payload.sendEmail({
//     to: to,
//     subject: subject,
//     html:body,
//     // text: "Welcome to our app!"  // optional plain text
//   });

//   return { ok: true };
// }

// app/components/action.ts
"use server";

import { getPayloadClient } from "@/lib/payload"; // adjust path if needed

export async function sendWelcomeEmail(
  body: string,
  subject: string,
  to: string = "sales@stoneista.com"
) {
  console.log("SERVER RECEIVED:", { body, subject, to });
  try {
    const payload = await getPayloadClient();

    await payload.sendEmail({
      to,
      subject,
      html: body,
    });
    console.log("payload of email", payload);

    return { ok: true };
  } catch (error) {
    console.error("Email send error:", error);
    return { ok: false };
  }
}
