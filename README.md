## Setup

1. Create a free [Resend](https://resend.com/) account and API key.
2. Set `RESEND_API_KEY` and `CONTACT_EMAIL` in `.env`.
3. During testing, keep `RESEND_FROM_EMAIL=Portfolio <onboarding@resend.dev>`.
   Resend's test sender can only deliver to the email address associated with
   your Resend account.
4. For public production delivery, verify a domain in Resend and replace
   `RESEND_FROM_EMAIL` with an address on that domain.

Also add the same environment variables to the Vercel project settings before
deploying.
