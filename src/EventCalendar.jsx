function EventCalendar() {
  return (
    <div className="event-calendar">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%237CB342&showCalendars=0&showTabs=0&showPrint=0&src=Mzk1ZDhmMzkyNGM5MGM3NWNkMDU5NzMzYjQ5N2U3YTY1YmUwYmYyYjUzMzNlNTQ4NDExMTVjNWZhNWI3NTEyOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23E67C73"
        style={{ border: 0 }}
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
}

export default EventCalendar;
