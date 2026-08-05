Google Apps Script — deployment & client instructions

1) Create a new Google Sheet where you want requests saved.
   - Note the spreadsheet ID from the URL: https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit

2) Create a new Apps Script project
   - Go to https://script.google.com
   - Create a new project and paste the contents of `append_to_sheet.gs`.
   - Replace the placeholder `REPLACE_SPREADSHEET_ID` with your sheet ID.

3) Deploy the script as a Web App
   - Click "Deploy" -> "New deployment" -> Select "Web app".
   - Set "Execute as" to: Me
   - Set "Who has access" to: Anyone (even anonymous) — note: this allows public POSTs without authentication. If you require authentication, choose a different access level and handle auth in client code.
   - Click Deploy and copy the Web App URL.

4) Client-side: POST requests to the Web App URL
   - Use the following JavaScript snippet to send quick requests to the Apps Script endpoint (replace WEB_APP_URL with your deployment URL):

```javascript
const endpoint = 'WEB_APP_URL'; // replace with your web app url

function postQuickRequests(data) {
  return fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(r => r.json());
}

// Example usage after collecting the form values:
const data = {
  r1_title: 'Movie 1',
  r1_date: '2026-09-12',
  r2_title: 'Movie 2',
  r2_date: '2026-09-19',
  r3_title: '',
  r3_date: '',
  source: 'quick-form' // optional
};

postQuickRequests(data).then(res => console.log('posted', res)).catch(console.error);
```

5) Security notes
   - If you allow "Anyone (even anonymous)" the endpoint will accept POSTs from any origin. Consider adding simple secret token checking in the Apps Script (e.g., include a secret in the JSON and verify it before appending the row).
   - For higher security, configure the Web App access to your account domain and implement OAuth flows.

6) Troubleshooting
   - If you see a 403 or 401, check the deployment access settings and re-deploy.
   - Check Executions in Apps Script editor to debug runtime errors.
