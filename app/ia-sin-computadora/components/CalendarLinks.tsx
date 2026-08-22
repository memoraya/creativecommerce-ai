"use client";

import { secondaryButton, venue } from "../theme";

const TITLE = "IA sin Computadora";
const DETAILS =
  "Conversación de dos horas sobre cómo trabajar mejor con IA. No necesitas llevar computadora.";
const START = "20260912T170000Z"; // 11:00 CDMX (UTC-6)
const END = "20260912T190000Z"; // 13:00 CDMX

function buildIcs() {
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//CreativeCommerce.ai//IA sin Computadora//ES",
    "BEGIN:VEVENT",
    `UID:ia-sin-computadora-${START}@creativecommerce.ai`,
    `DTSTAMP:${START}`,
    `DTSTART:${START}`,
    `DTEND:${END}`,
    `SUMMARY:${TITLE}`,
    `DESCRIPTION:${DETAILS}`,
    `LOCATION:${venue.full}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

function googleCalendarUrl() {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: TITLE,
    dates: `${START}/${END}`,
    details: DETAILS,
    location: venue.full,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export default function CalendarLinks() {
  function handleDownloadIcs() {
    const blob = new Blob([buildIcs()], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ia-sin-computadora.ics";
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <a
        href={googleCalendarUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className={secondaryButton}
      >
        Agregar a Google Calendar
      </a>
      <button type="button" onClick={handleDownloadIcs} className={secondaryButton}>
        Descargar .ics (Apple / Outlook)
      </button>
    </div>
  );
}
