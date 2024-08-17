function EventCalendar() {
  return (
    <div className="event-calendar">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=395d8f3924c90c75cd059733b497e7a65be0bf2b5333e54841115c5fa5b75128%40group.calendar.google.com&ctz=America%2FLos_Angeles"
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
