const today = new Date();

let currentYear = today.getFullYear();
let currentMonth = today.getMonth();

const calendarView = document.getElementById("calendarView");

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function renderCalendar() {

    const firstDay = new Date(currentYear, currentMonth, 1);

    const daysInMonth = new Date(
        currentYear,
        currentMonth + 1,
        0
    ).getDate();

    const startDay = firstDay.getDay();

    let html = `
        <div class="calendar-header">
            <h2>${monthNames[currentMonth]} ${currentYear}</h2>
        </div>

        <div class="calendar-grid">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
    `;

    for (let i = 0; i < startDay; i++) {
        html += `<div class="calendar-day empty"></div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
        html += `
            <div class="calendar-day">
                ${day}
            </div>
        `;
    }

    html += `</div>`;

    calendarView.innerHTML = html;
}

renderCalendar();