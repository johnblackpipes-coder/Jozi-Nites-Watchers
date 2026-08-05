/**
 * Google Apps Script Web App: append_to_sheet.gs
 *
 * Paste into a new Google Apps Script project (https://script.google.com), set the SPREADSHEET_ID
 * and deploy as a Web App. The Web App URL becomes the endpoint to accept POST requests.
 *
 * IMPORTANT: Replace 'REPLACE_SPREADSHEET_ID' with your spreadsheet ID.
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({status:'error', message: 'Invalid JSON'})).setMimeType(ContentService.MimeType.JSON);
  }

  var SPREADSHEET_ID = 'REPLACE_SPREADSHEET_ID'; // <-- replace with your Google Sheet ID
  var SHEET_NAME = 'Requests';

  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);

  var timestamp = new Date();

  // Build the row. Adjust columns as needed.
  var row = [
    timestamp,
    data.r1_title || '',
    data.r1_date || '',
    data.r2_title || '',
    data.r2_date || '',
    data.r3_title || '',
    data.r3_date || '',
    data.source || '',
    data.note || ''
  ];

  sheet.appendRow(row);

  return ContentService.createTextOutput(JSON.stringify({status:'success'})).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Optional doGet for testing the endpoint in the browser.
 */
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({status:'ok', message:'Endpoint active'})).setMimeType(ContentService.MimeType.JSON);
}
