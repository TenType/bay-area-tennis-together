import React from 'react';

function EventCalendar() {
  return (
    <div className="event-calendar">
      <iframe 
        src="https://calendar.google.com/calendar/embed?src=jacksonhtoo07%40gmail.com&ctz=America%2FLos_Angeles"
        style={{ border: 0 }} 
        width="800" 
        height="600" 
        frame-border="0" 
      ></iframe>
    </div>
  );
}

export default EventCalendar;