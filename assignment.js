// ------------------ FULL MONTH CALENDAR --------------------

const calendar = document.getElementById("calendar");
const monthYear = document.getElementById("month-year");

let currentDate = new Date();

function renderCalendar(date) {
    calendar.innerHTML = "";

    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const monthNames = [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
    ];

    monthYear.textContent = `${monthNames[month]} ${year}`;

    // Day names row
    const dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    dayNames.forEach(d => {
        const day = document.createElement("div");
        day.textContent = d;
        day.classList.add("day-name");
        calendar.appendChild(day);
    });

    // Empty spaces before 1st
    for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement("div");
        calendar.appendChild(empty);
    }

    // Dates
    const realToday = new Date(); // used for today highlight only

    for (let d = 1; d <= lastDate; d++) {
        const cell = document.createElement("div");
        cell.textContent = d;

        // Highlight today
        if (
            d === realToday.getDate() &&
            month === realToday.getMonth() &&
            year === realToday.getFullYear()
        ) {
            cell.classList.add("today");
        }

        calendar.appendChild(cell);
    }
}

// Navigation
document.getElementById("prevMonth").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

document.getElementById("nextMonth").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

// Initial render
renderCalendar(currentDate);


$(document).ready(function() {

    const currentFile = window.location.pathname.split("/").pop().toLowerCase();
    $('.nav-bar a').each(function() {
        const href = $(this).attr('href').toLowerCase();
        if(href === currentFile) {
            $('.nav-bar a .nav-icon').removeClass('active'); 
            $(this).find('.nav-icon').addClass('active');    
        }
    });
});



