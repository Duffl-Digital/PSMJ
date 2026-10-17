import { NextResponse } from "next/server";

import { ContactSchema } from "@/src/lib/validation";
import { sendContactMail } from "@/src/lib/mail";

import { logger } from "@/src/lib/logger";
import { sanitizeInput } from "@/src/lib/sanitize";
import { rateLimiter } from "@/src/lib/rateLimit";
export async function POST(req: Request) {

    let body: any;

    logger.info({
        module: "Contact",
        action: "API Request Started",
        time: new Date().toISOString(),
    });

    // // Get Client IP
    // const forwardedFor = req.headers.get("x-forwarded-for");
    // const ip =
    //     forwardedFor?.split(",")[0]?.trim() ||
    //     req.headers.get("x-real-ip") ||
    //     "unknown";

    // // Rate Limit
    // try {
    //     await rateLimiter.consume(ip);
    // } catch {
    //     logger.warn({
    //         module: "Contact",
    //         action: "Rate Limit Exceeded",
    //         ip,
    //         time: new Date().toISOString(),
    //     });

    //     return NextResponse.json(
    //         {
    //             success: false,
    //             message:
    //                 "Too many requests. Please try again after 1 minute.",
    //         },
    //         {
    //             status: 429,
    //         }
    //     );
    // }

    try {

        // Read Request Body
        body = await req.json();
        const { captchaToken, honeypot } = body;

        logger.info({
            module: "Contact",
            action: "Request Body Received",
            email: body.email,
            time: new Date().toISOString(),
        });
// Honeypot validation
if (honeypot) {
  logger.warn({
    module: "Contact",
    action: "Spam detected (Honeypot)",
    email: body?.email,
    time: new Date().toISOString(),
  });

  return NextResponse.json(
    {
      success: false,
      message: "Spam detected.",
    },
    {
      status: 400,
    }
  );
}
// Verify Google reCAPTCHA
const verifyResponse = await fetch(
  "https://www.google.com/recaptcha/api/siteverify",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY!,
      response: captchaToken,
    }),
  }
);
console.log(process.env.RECAPTCHA_SECRET_KEY);
console.log(verifyResponse.json());
const captchaResult = await verifyResponse.json();
if (!captchaResult.success) {
  logger.warn({
    module: "Contact",
    action: "Captcha Verification Failed",
    email: body?.email,
    time: new Date().toISOString(),
  });

  return NextResponse.json(
    {
      success: false,
      message: "Captcha verification failed.",
    },
    {
      status: 400,
    }
  );
}
        // Validation
        const validation = ContactSchema.safeParse(body);

        if (!validation.success) {
         
            logger.warn({
                module: "Contact",
                action: "Validation Failed",
                email: body?.email,
                errors: validation.error.flatten(),
                time: new Date().toISOString(),
            });

            return NextResponse.json(
                {
                    success: false,
                    errors: validation.error.flatten(),
                },
                {
                    status: 400,
                }
            );
        }
const cleanData = sanitizeInput(validation.data);
        logger.info({
            module: "Contact",
            action: "Validation Success",
            email: cleanData.email,
            time: new Date().toISOString(),
        });

        // Sending Mail
        logger.info({
            module: "Contact",
            action: "Sending Email",
            email: cleanData.email,
            time: new Date().toISOString(),
        });

   await sendContactMail(cleanData);

        logger.info({
            module: "Contact",
            action: "Mail Sent Successfully",
            email: cleanData.email,
            time: new Date().toISOString(),
        });

        return NextResponse.json(
            {
                success: true,
                message: "Mail Sent Successfully",
            },
            {
                status: 200,
            }
        );

    } catch (error) {

        logger.error({
            module: "Contact",
            action: "Mail Sending Failed",
            email: body?.email ?? "Unknown",
            error: error instanceof Error ? error.message : String(error),
            stack: error instanceof Error ? error.stack : undefined,
            time: new Date().toISOString(),
        });

        return NextResponse.json(
            {
                success: false,
                message: "Internal Server Error",
            },
            {
                status: 500,
            }
        );
    }
}