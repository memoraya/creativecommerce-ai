import { JWT } from "google-auth-library";

// Google Sheet acts as the operational attendee list AND the capacity
// counter — every row here is, by construction, a paid attendee, because
// only the Stripe webhook (after payment_status === "paid") ever appends
// one. No separate "pending" or "status" column is needed.
//
// Sheet columns (row 1 = header):
// A Timestamp | B Nombre | C Email | D WhatsApp | E Mensaje |
// F Monto MXN | G Stripe Session ID | H Stripe Payment Intent ID | I Event ID

const SHEET_TAB = process.env.GOOGLE_SHEET_TAB || "Attendees";
const DATA_RANGE = `${SHEET_TAB}!A2:I`;
const APPEND_RANGE = `${SHEET_TAB}!A:I`;
const SESSION_ID_RANGE = `${SHEET_TAB}!G2:G`;

type SheetsValuesResponse = { values?: string[][] };

function getClient() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!email || !rawKey || !sheetId) {
    throw new Error(
      "Google Sheets is not configured (missing GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY, or GOOGLE_SHEET_ID).",
    );
  }

  const jwt = new JWT({
    email,
    key: rawKey.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return { sheetId, jwt };
}

export type AttendeeRow = {
  timestamp: string;
  nombre: string;
  email: string;
  whatsapp: string;
  mensaje: string;
  montoMxn: number;
  stripeSessionId: string;
  stripePaymentIntentId: string;
  eventId: string;
};

export async function countPaidAttendees(): Promise<number> {
  const { sheetId, jwt } = getClient();
  const res = await jwt.request<SheetsValuesResponse>({
    url: `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(DATA_RANGE)}`,
  });
  return (res.data.values ?? []).filter((row) => row[1]?.trim()).length;
}

export async function isSessionAlreadyRecorded(sessionId: string): Promise<boolean> {
  const { sheetId, jwt } = getClient();
  const res = await jwt.request<SheetsValuesResponse>({
    url: `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(SESSION_ID_RANGE)}`,
  });
  return (res.data.values ?? []).some((row) => row[0] === sessionId);
}

export async function appendAttendeeRow(row: AttendeeRow): Promise<void> {
  const { sheetId, jwt } = getClient();
  await jwt.request({
    url: `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(APPEND_RANGE)}:append`,
    method: "POST",
    params: { valueInputOption: "USER_ENTERED", insertDataOption: "INSERT_ROWS" },
    data: {
      values: [
        [
          row.timestamp,
          row.nombre,
          row.email,
          row.whatsapp,
          row.mensaje,
          row.montoMxn,
          row.stripeSessionId,
          row.stripePaymentIntentId,
          row.eventId,
        ],
      ],
    },
  });
}
