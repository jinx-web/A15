// ==========================================
// USER CONFIGURATION SECTION
// Edit your schedule and electives here
// ==========================================
// Elective Subjects Configuration
// Format: "key": { name: "Display Name", room: "Room Number", teacher: "Teacher Name" }
const electives = {
    "management": { name: "Principles of Management", room: "Block B-101", teacher: "Dr. Roberts" },
    "cloud": { name: "Cloud Computing", room: "Lab 3", teacher: "Prof. Alan" },
    "mining": { name: "Data Mining", room: "Lab 2", teacher: "Ms. Davis" },
    "spanish": { name: "Spanish Language", room: "Lang Lab", teacher: "Mrs. Garcia" }
};
// Weekly Schedule Configuration
// Days: 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday
// Types: "core" or "elective"
// For electives, the subject, room, and teacher will be filled dynamically
const schedule = {
    1: [ // Monday
        { start: "09:00", end: "10:00", subject: "Computer Networks", room: "Room 304", teacher: "Mr. Wilson", type: "core" },
        { start: "10:00", end: "11:00", subject: "Database Systems", room: "Lab 1", teacher: "Ms. Lee", type: "core" },
        { start: "11:00", end: "11:15", subject: "Morning Break", room: "-", teacher: "-", type: "break" },
        { start: "11:15", end: "12:15", subject: "ELECTIVE", type: "elective" }, // Dynamic Slot
        { start: "12:15", end: "13:15", subject: "Software Engineering", room: "Room 304", teacher: "Dr. James", type: "core" },
        { start: "13:15", end: "14:00", subject: "Lunch Break", room: "Cafeteria", teacher: "-", type: "break" }
    ],
    2: [ // Tuesday
        { start: "09:00", end: "11:00", subject: "Web Development Lab", room: "Lab 4", teacher: "Mr. Smith", type: "core" },
        { start: "11:00", end: "11:15", subject: "Morning Break", room: "-", teacher: "-", type: "break" },
        { start: "11:15", end: "12:15", subject: "Operating Systems", room: "Room 202", teacher: "Prof. White", type: "core" },
        { start: "12:15", end: "13:15", subject: "ELECTIVE", type: "elective" },
        { start: "13:15", end: "14:00", subject: "Lunch Break", room: "Cafeteria", teacher: "-", type: "break" },
        { start: "14:00", end: "15:00", subject: "Library Hour", room: "Library", teacher: "-", type: "core" }
    ],
    3: [ // Wednesday
        { start: "09:00", end: "10:00", subject: "Artificial Intelligence", room: "Room 105", teacher: "Dr. K.", type: "core" },
        { start: "10:00", end: "11:00", subject: "Computer Networks", room: "Room 304", teacher: "Mr. Wilson", type: "core" },
        { start: "11:00", end: "11:15", subject: "Break", room: "-", teacher: "-", type: "break" },
        { start: "11:15", end: "13:15", subject: "Project Work", room: "Project Lab", teacher: "Various", type: "core" },
        { start: "13:15", end: "14:00", subject: "Lunch", room: "Cafeteria", teacher: "-", type: "break" }
    ],
    4: [ // Thursday
        { start: "09:00", end: "10:00", subject: "Software Engineering", room: "Room 304", teacher: "Dr. James", type: "core" },
        { start: "10:00", end: "11:00", subject: "ELECTIVE", type: "elective" },
        { start: "11:00", end: "11:15", subject: "Break", room: "-", teacher: "-", type: "break" },
        { start: "11:15", end: "12:15", subject: "Operating Systems", room: "Room 202", teacher: "Prof. White", type: "core" },
        { start: "12:15", end: "14:00", subject: "Sports / Gym", room: "Ground", teacher: "Coach", type: "core" }
    ],
    5: [ // Friday
        { start: "09:00", end: "10:00", subject: "Database Systems", room: "Lab 1", teacher: "Ms. Lee", type: "core" },
        { start: "10:00", end: "11:00", subject: "Artificial Intelligence", room: "Room 105", teacher: "Dr. K.", type: "core" },
        { start: "11:00", end: "11:15", subject: "Break", room: "-", teacher: "-", type: "break" },
        { start: "11:15", end: "12:15", subject: "Mentoring", room: "Staff Room", teacher: "Mentor", type: "core" },
        { start: "12:15", end: "13:15", subject: "ELECTIVE", type: "elective" }
    ],
    6: [ // Saturday
        { start: "09:00", end: "12:00", subject: "Hackathon / Workshops", room: "Auditorium", teacher: "Guest", type: "core" }
    ]
};
// ==========================================
// LOGIC SECTION
// ==========================================
// Constants
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const SHORT_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// State
let currentDayIndex = new Date().getDay();
// If Sunday (0), default to Monday (1)
if (currentDayIndex === 0) currentDayIndex = 1;
let selectedElective = localStorage.getItem('selectedElective') || "";
// DOM Elements
const dayTabsContainer = document.getElementById('day-tabs');
const scheduleContainer = document.getElementById('schedule-container');
const electiveSelect = document.getElementById('elective-select');
const themeToggleBtn = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const htmlEl = document.documentElement;
// Initialization
function init() {
    setupElectives();
    renderTabs();
    renderSchedule(currentDayIndex);
    setupTheme();
    updateTimeAndStatus();
    
    // Update status every second
    setInterval(updateTimeAndStatus, 1000);
}
// 1. Setup Electives Dropdown
function setupElectives() {
    for (const [key, data] of Object.entries(electives)) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = data.name;
        if (key === selectedElective) option.selected = true;
        electiveSelect.appendChild(option);
    }
    electiveSelect.addEventListener('change', (e) => {
        selectedElective = e.target.value;
        localStorage.setItem('selectedElective', selectedElective);
        renderSchedule(currentDayIndex); // Re-render to update elective slots
        updateTimeAndStatus(); // Update current status immediately
    });
}
// 2. Render Day Tabs
function renderTabs() {
    dayTabsContainer.innerHTML = '';
    
    // Render Mon (1) to Sat (6)
    for (let i = 1; i <= 6; i++) {
        const btn = document.createElement('button');
        btn.textContent = SHORT_DAYS[i];
        btn.className = `px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 whitespace-nowrap 
            ${currentDayIndex === i 
                ? 'bg-blue-600 text-white border-blue-600 shadow-md transform scale-105' 
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'}`;
        
        btn.onclick = () => {
            currentDayIndex = i;
            renderTabs();
            renderSchedule(i);
        };
        
        dayTabsContainer.appendChild(btn);
    }
}
// 3. Render Schedule List
function renderSchedule(dayIndex) {
    scheduleContainer.innerHTML = '';
    
    const todaysClasses = schedule[dayIndex];
    
    if (!todaysClasses || todaysClasses.length === 0) {
        scheduleContainer.innerHTML = `
            <div class="text-center py-10 text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
                <p>No classes scheduled for this day.</p>
            </div>
        `;
        return;
    }
    todaysClasses.forEach((slot, index) => {
        let displaySubject = slot.subject;
        let displayRoom = slot.room;
        let displayTeacher = slot.teacher;
        let isElectiveSlot = false;
        // Handle Elective Slot
        if (slot.type === 'elective') {
            isElectiveSlot = true;
            if (selectedElective && electives[selectedElective]) {
                const elecData = electives[selectedElective];
                displaySubject = elecData.name;
                displayRoom = elecData.room;
                displayTeacher = elecData.teacher;
            } else {
                displaySubject = "Elective (Select Subject)";
                displayRoom = "Check Selection";
                displayTeacher = "-";
            }
        }
        const card = document.createElement('div');
        card.className = `schedule-card relative p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between group`;
        card.dataset.start = slot.start;
        card.dataset.end = slot.end;
        
        // Visual indicator for type
        const indicatorColor = slot.type === 'break' ? 'bg-green-400' : (isElectiveSlot ? 'bg-purple-500' : 'bg-blue-500');
        
        card.innerHTML = `
            <div class="flex items-center gap-4 w-full sm:w-auto">
                <div class="h-12 w-1 rounded-full ${indicatorColor}"></div>
                <div>
                    <h3 class="font-bold text-lg text-gray-800 dark:text-white leading-tight">${displaySubject}</h3>
                    <div class="text-sm text-gray-500 dark:text-gray-400 mt-1 flex flex-wrap gap-x-4">
                        ${slot.type !== 'break' ? `
                            <span class="flex items-center gap-1">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                ${displayRoom}
                            </span>
                            <span class="flex items-center gap-1">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                ${displayTeacher}
                            </span>
                        ` : '<span class="italic text-green-600 dark:text-green-400">Relax & Recharge</span>'}
                    </div>
                </div>
            </div>
            <div class="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 border-gray-100 dark:border-gray-700 pt-3 sm:pt-0 mt-2 sm:mt-0">
                <div class="text-right">
                    <p class="font-mono font-semibold text-gray-700 dark:text-gray-300 text-lg whitespace-nowrap">${convertTo12Hour(slot.start)}</p>
                    <p class="text-xs text-gray-400 uppercase font-medium text-right">Start</p>
                </div>
                <div class="h-8 w-px bg-gray-200 dark:bg-gray-600 mx-2 hidden sm:block"></div>
                <div class="text-right sm:text-left">
                    <p class="font-mono font-semibold text-gray-500 dark:text-gray-500 text-lg whitespace-nowrap">${convertTo12Hour(slot.end)}</p>
                    <p class="text-xs text-gray-400 uppercase font-medium text-right sm:text-left">End</p>
                </div>
            </div>
        `;
        
        scheduleContainer.appendChild(card);
    });
}
// 4. Update Time and Status Logic
function updateTimeAndStatus() {
    const now = new Date();
    
    // Update Header Clock
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dateString = now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });
    
    document.getElementById('current-time').textContent = timeString;
    document.getElementById('current-date').textContent = dateString;
    // Check Status
    const day = now.getDay(); // 0-6
    const currentTimeVal = now.getHours() * 60 + now.getMinutes();
    let activeSlot = null;
    let nextSlot = null;
    
    // Only check schedule if it's the current day of the week
    // But for the UI's "What's Happening" section, we usually care about NOW, 
    // so we only look at today's schedule.
    
    const todaysClasses = schedule[day]; // day index matches key
    if (todaysClasses) {
        for (let i = 0; i < todaysClasses.length; i++) {
            const slot = todaysClasses[i];
            const startVal = timeToMinutes(slot.start);
            const endVal = timeToMinutes(slot.end);
            if (currentTimeVal >= startVal && currentTimeVal < endVal) {
                activeSlot = slot;
                break;
            }
            if (currentTimeVal < startVal && !nextSlot) {
                nextSlot = slot;
            }
        }
    }
    // Update UI based on active slot
    const statusName = document.getElementById('current-class-name');
    const statusDetails = document.getElementById('current-class-details');
    const statusSection = document.getElementById('status-section');
    const progressContainer = document.getElementById('progress-container');
    const progressBar = document.getElementById('class-progress');
    if (activeSlot) {
        let subject = activeSlot.subject;
        let location = activeSlot.room;
        if (activeSlot.type === 'elective') {
             if (selectedElective && electives[selectedElective]) {
                subject = electives[selectedElective].name;
                location = electives[selectedElective].room;
            } else {
                subject = "Elective Slot";
                location = "Select Subject";
            }
        }
        statusName.textContent = subject;
        statusDetails.textContent = activeSlot.type === 'break' 
            ? "It's break time!" 
            : `Ongoing in ${location} until ${convertTo12Hour(activeSlot.end)}`;
        
        statusSection.className = `mb-8 p-6 rounded-2xl shadow-lg transform transition-all ${
            activeSlot.type === 'break' 
            ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
            : 'bg-gradient-to-r from-blue-500 to-indigo-600'
        }`;
        // Progress Bar
        progressContainer.classList.remove('hidden');
        const startVal = timeToMinutes(activeSlot.start);
        const endVal = timeToMinutes(activeSlot.end);
        const totalDuration = endVal - startVal;
        const elapsed = currentTimeVal - startVal;
        const percentage = Math.min(100, Math.max(0, (elapsed / totalDuration) * 100));
        progressBar.style.width = `${percentage}%`;
    } else {
        progressContainer.classList.add('hidden');
        if (day === 0) { // Sunday
            statusName.textContent = "It's Sunday!";
            statusDetails.textContent = "No classes today. Enjoy your weekend.";
            statusSection.className = 'mb-8 p-6 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg';
        } else if (currentTimeVal < timeToMinutes("08:00")) {
            statusName.textContent = "Good Morning!";
            statusDetails.textContent = "Classes haven't started yet.";
            statusSection.className = 'mb-8 p-6 rounded-2xl bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-lg';
        } else if (nextSlot) {
            statusName.textContent = "Free Period";
            let nextSub = nextSlot.subject;
            if (nextSlot.type === 'elective' && selectedElective && electives[selectedElective]) {
                nextSub = electives[selectedElective].name;
            }
            statusDetails.textContent = `Next up: ${nextSub} at ${convertTo12Hour(nextSlot.start)}`;
            statusSection.className = 'mb-8 p-6 rounded-2xl bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-lg';
        } else {
            statusName.textContent = "Classes Over";
            statusDetails.textContent = "You're done for the day!";
            statusSection.className = 'mb-8 p-6 rounded-2xl bg-gradient-to-r from-indigo-800 to-slate-900 text-white shadow-lg';
        }
    }
    // Highlight Active Card if viewing today
    if (currentDayIndex === day) {
        const cards = document.querySelectorAll('.schedule-card');
        cards.forEach(card => {
            const start = timeToMinutes(card.dataset.start);
            const end = timeToMinutes(card.dataset.end);
            if (currentTimeVal >= start && currentTimeVal < end) {
                card.classList.add('active-card');
            } else {
                card.classList.remove('active-card');
            }
        });
    }
}
// 5. Theme Toggle
function setupTheme() {
    // Check local storage or system preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlEl.classList.add('dark');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    } else {
        htmlEl.classList.remove('dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    }
    themeToggleBtn.addEventListener('click', () => {
        if (htmlEl.classList.contains('dark')) {
            htmlEl.classList.remove('dark');
            localStorage.theme = 'light';
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        } else {
            htmlEl.classList.add('dark');
            localStorage.theme = 'dark';
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        }
    });
}
// Helpers
function timeToMinutes(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
}
function convertTo12Hour(timeStr) {
    let [hours, minutes] = timeStr.split(':');
    hours = parseInt(hours);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    return `${hours}:${minutes} ${ampm}`;
}
// Run
init();
