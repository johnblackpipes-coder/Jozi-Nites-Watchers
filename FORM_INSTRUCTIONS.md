# Google Form & POPIA Instructions

This file explains how to create and link a Google signup form for Jozi Nites Watchers, and includes recommended POPIA/privacy wording and form fields. Add the final Google Forms link into `index.html` at the anchor with id `googleFormBtn`.

Location to update in `index.html`:
- Replace the placeholder URL `https://forms.gle/REPLACE_WITH_YOUR_FORM` in the element with id `googleFormBtn` (line: `<a class="btn" href="https://forms.gle/REPLACE_WITH_YOUR_FORM" id="googleFormBtn">Sign up (Google Form)</a>`).

Recommended Google Form fields (minimal, POPIA-friendly):
- Display name (Short answer) — required
- Social handle(s) (Short answer) — optional
- Email address (Short answer) — optional but useful — explicitly request consent if provided
- How did you hear about us? (Short answer) — optional
- Accessibility / notes (Paragraph) — optional

Required consent checkboxes (add as separate required questions):
- “I confirm I am 18 years or older.” (Required)
- “I consent to Jozi Nites Watchers storing and using the information I provide to coordinate watch events and group communication.” (Required)
- “I have read and agree to the House Rules and Terms & Conditions.” (Required)

POPIA / privacy wording (paste this into form description or a required consent field):
"By submitting this form I confirm I am 18+ and consent to Jozi Nites Watchers storing the details I provide for the purpose of event coordination. We will not share your personal information without your explicit consent. You can request deletion at any time by contacting the organisers."

Google Form settings & share steps:
1. Create a new form at https://forms.google.com.
2. Add the fields listed above and make the three consent checkboxes required.
3. (Optional) If you want to limit each person to a single response, enable "Restrict to users in your organization" or require Google sign-in — note: this will require sign-in and may reduce responses.
4. Click "Send" → copy the link (use the "Shorten URL" option if you wish).
5. Paste the final link into `index.html` by replacing the placeholder at `id="googleFormBtn"`, or provide the link and I can commit it for you.

Accessibility & best practices:
- Keep consent text clear and separate (i.e., not buried in the description).
- Use required checkbox questions for explicit consent — POPIA requires clear affirmative action.
- Offer an email/contact option for data deletion requests.
- If collecting emails, avoid auto-sharing — keep the form results private and accessible to organisers only.

Developer notes / README reminders:
- `index.html` already includes an age gate modal that stores acceptance in `localStorage` with key `jozi_age_accepted`.
- Logo file is present at `/logo.png` and is referenced by the page.
- Footer text updated to: "Let's Flip the Narative & Have Somr Fun · Jozi Nites Watchers © 2026".

If you want, I can:
- Paste the final Google Form URL into `index.html` when you provide it, and commit the change.
- Add a short `PRIVACY.md` file with a fuller POPIA policy for the repo.

Commit note: add or update this file as guidance for the project maintainers.
