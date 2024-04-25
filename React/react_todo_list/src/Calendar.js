import React from 'react';
import './Calendar.css'; // Importing CSS for calendar styling

// Calendar functional component
function Calendar() {
    // Get today's date details
    const today = new Date();
    const currentYear = today.getFullYear(); // Current year
    const currentMonth = today.getMonth(); // Current month (0-indexed)
    const currentDate = today.getDate(); // Current day of the month

    // Calculate the day of the week the month starts on
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    // Calculate the number of days in the current month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Array of short names for days of the week
    const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    // Array of month names for display
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];

    // Create an array to fill up the empty grid items for days before the start of the month
    const emptyDays = Array(firstDayOfMonth).fill(null);

    // Create an array representing each day of the current month
    const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    // Render the calendar with the month header, day names, and days
    return (
        <div className='calendar'>
            <div className='calendar-header'>{monthNames[currentMonth]} {currentYear}</div>
            <div className='calendar-day-names'>
                {dayNames.map((name, index) => (
                    <div key={index} className='calendar-day-name'>{name}</div>
                ))}
            </div>
            <div className='calendar-grid'>
                {emptyDays.map((_, index) => (
                    <div key={`empty-${index}`} className='calendar-day empty'></div>
                ))}
                {monthDays.map(day => (
                    <div key={day} className={`calendar-day ${day === currentDate ? 'current-day' : ''}`}>
                        {day}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Calendar; // Export the Calendar component
