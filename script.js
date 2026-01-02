// ==========================================
// USER CONFIGURATION SECTION
// ==========================================

// Core Classes (Common for everyone)
const coreSchedule = {
    1: [ // Monday
        { start: "09:00", end: "09:50", subject: "Intro. to Microfabrication Technology", room: "FF-6", teacher: "Dr. Shivani" },
        { start: "11:00", end: "11:50", subject: "Analog Electronic Circuits", room: "FF-8", teacher: "Dr. NITIN MUCHHAL" },
        { start: "14:00", end: "14:50", subject: "Analog Electronic Circuits", room: "FF-5", teacher: "Dr. NITIN MUCHHAL" }, 
    ],
    2: [ // Tuesday
        { start: "09:00", end: "10:50", subject: "Introduction to Microfabrication Lab", room: "ABB-3, 4th Floor FABLAB", teacher: "Dr. HEMANT KUMAR" },
        { start: "11:00", end: "11:50", subject: "Communication Engineering", room: "G-3", teacher: "Dr. NEETU JOSHI" },
        { start: "15:00", end: "15:50", subject: "FUNDAMENTALS OF EMBEDDED SYSTEMS", room: "FF-8", teacher: "Dr. Shivani" },
        { start: "16:00", end: "16:50", subject: "Discrete Signal Processing", room: "FF-6", teacher: "Dr. KULDEEP BADERIA" },
    ],
    3: [ // Wednesday
        { start: "09:00", end: "10:50", subject: "Introduction to Microfabrication Lab", room: "ABB-3, 4th Floor FABLAB", teacher: "Dr. HEMANT KUMAR" },
        { start: "11:00", end: "12:50", subject: "ANALOG ELECTRONIC CIRCUITS LAB", room: "ABB-2,3rd FLoor, Analog and Digital Electronics Lab", teacher: "Dr. BHUVANESHWARI SHANKAR" },
        { start: "16:00", end: "16:50", subject: "Analog Electronic Circuits", room: "FF-7", teacher: "Dr. NITIN MUCHHAL" }
    ],
    4: [ // Thursday
        { start: "11:00", end: "11:50", subject: "Communication Engineering", room: "FF-6", teacher: "Dr. NEETU JOSHI" },
        { start: "12:00", end: "12:50", subject: "FUNDAMENTALS OF EMBEDDED SYSTEMS", room: "FF-8", teacher: "Dr. Shivani" },
        { start: "15:00", end: "15:50", subject: "Discrete Signal Processing", room: "FF-1", teacher: "Dr. KULDEEP BADERIA" },
    ],
    5: [ // Friday
        { start: "11:00", end: "12:50", subject: "Intro. to VLSI lifecycle", room: "ABB-3,5th-Floor SPL", teacher: "Dr. GARIMA KAPUR" },
        { start: "14:00", end: "14:50", subject: "Intro. to Microfabrication Technology", room: "G-3", teacher: "Dr. Shivani" },
        { start: "15:00", end: "15:50", subject: "FUNDAMENTALS OF EMBEDDED SYSTEMS", room: "FF-7", teacher: "Dr. Shivani" },
    ],
    6: [ // Saturday
        { start: "09:00", end: "09:50", subject: "Communication Engineering", room: "CR325", teacher: "Dr. NEETU JOSHI" },
        { start: "10:00", end: "10:50", subject: "Intro. to Microfabrication Technology", room: "FF-7", teacher: "Dr. Shivani" },
        { start: "11:00", end: "11:50", subject: "Discrete Signal Processing", room: "FF-7", teacher: "Dr. KULDEEP BADERIA" },
        { start: "12:00", end: "12:50", subject: "Introduction to Microfabrication Lab", room: "ABB-3, 4th Floor FABLAB", teacher: "Dr. HEMANT KUMAR" },
    ]
};

// Elective Schedules (Each elective has its own complete schedule)
// Add classes for each day (1=Mon, 2=Tue, etc.) with start, end, room, teacher
const electiveSchedules = {
    "15B1NHS434": {
        name: "Principles of Management",
        schedule: {
            1: [ // Monday
                { start: "10:00", end: "10:50", room: "G3", teacher: "Ms. Sikha Kumari" }
            ],
            2: [ // Tuesday
                { start: "14:00", end: "14:50", room: "FF-5", teacher: "Ms. Sikha Kumari" }
            ],
            3: [ // Wednesday
                { start: "14:00", end: "14:50", room: "FF-7", teacher: "Ms. Sikha Kumari" }
            ]
        }
    },
    "19B12HS412": {
        name: "Industrial Economics",
        schedule: {
            1: [ // Monday
                { start: "10:00", end: "10:50", room: "FF-5", teacher: "Dr Neha Singh" }
            ],
            2: [ // Tuesday
                { start: "14:00", end: "14:50", room: "F8", teacher: "Dr Neha Singh" }
            ],
            3: [ // Wednesday
                { start: "14:00", end: "14:50", room: "FF-6", teacher: "Dr Neha Singh" }
            ]
        }
    },
    "15B1NHS435": {
        name: "Financial Accounting",
        schedule: {
            1: [ // Monday
                { start: "10:00", end: "10:50", room: "G8", teacher: "Dr. Purwa Shriwastava" }
            ],
            2: [ // Tuesday
                { start: "14:00", end: "14:50", room: "G6", teacher: "Dr. Purwa Shriwastava" }
            ],
            3: [ // Wednesday
                { start: "14:00", end: "14:50", room: "TS-20", teacher: "Dr. Purwa Shriwastava" }
            ]
        }
    },
    "24B12HS212": {
        name: "Science of Happiness",
        schedule: {
            1: [ // Monday
                { start: "10:00", end: "10:50", room: "FF8", teacher: "Dr. Badri Bajaj" }
            ],
            2: [ // Tuesday
                { start: "14:00", end: "14:50", room: "G9", teacher: "Dr. Badri Bajaj" }
            ],
            3: [ // Wednesday
                { start: "14:00", end: "14:50", room: "TS-16", teacher: "Dr. Ekta Singh" }
            ]
        }
    },
    "24B12HS213": {
        name: "Sociology of Work",
        schedule: {
            1: [ // Monday
                { start: "10:00", end: "10:50", room: "G4", teacher: "Dr Yogita Naruka" }
            ],
            2: [ // Tuesday
                { start: "14:00", end: "14:50", room: "LT-3", teacher: "Dr Yogita Naruka" }
            ],
            3: [ // Wednesday
                { start: "14:00", end: "14:50", room: "FF-8", teacher: "Dr Yogita Naruka" }
            ]
        }
    },
    "24B12HS211": {
        name: "Media, Culture and Society",
        schedule: {
            1: [ // Monday
                { start: "10:00", end: "10:50", room: "F8", teacher: "Dr. Nibha Sinha" }
            ],
            2: [ // Tuesday
                { start: "14:00", end: "14:50", room: "FF-9", teacher: "Dr. Nibha Sinha" }
            ],
            3: [ // Wednesday
                { start: "14:00", end: "14:50", room: "TS-12", teacher: "Dr. Nibha Sinha" }
            ]
        }
    },
    "23B12HS211": {
        name: "Introduction to Political Science",
        schedule: {
            1: [ // Monday
                { start: "10:00", end: "10:50", room: "CR-526", teacher: "Dr. Namreeta Kumari" }
            ],
            2: [ // Tuesday
                { start: "14:00", end: "14:50", room: "G8", teacher: "Dr. Namreeta Kumari" }
            ],
            3: [ // Wednesday
                { start: "14:00", end: "14:50", room: "F10", teacher: "Dr. Namreeta Kumari" }
            ]
        }
    },
    "25B12HS211": {
        name: "Introduction to Neoliberalism",
        schedule: {
            1: [ // Monday
                { start: "10:00", end: "10:50", room: "G8", teacher: "Dr. Purwa Shriwastava" }
            ],
            2: [ // Tuesday
                { start: "14:00", end: "14:50", room: "G6", teacher: "Dr. Purwa Shriwastava" }
            ],
            3: [ // Wednesday
                { start: "14:00", end: "14:50", room: "TS-20", teacher: "Dr. Purwa Shriwastava" }
            ]
        }
    },
    "16B1NHS332": {
        name: "Quantitative Methods for Social Sciences",
        schedule: {
            1: [ // Monday
                { start: "10:00", end: "10:50", room: "G8", teacher: "Dr. Purwa Shriwastava" }
            ],
            2: [ // Tuesday
                { start: "14:00", end: "14:50", room: "G6", teacher: "Dr. Purwa Shriwastava" }
            ],
            3: [ // Wednesday
                { start: "14:00", end: "14:50", room: "TS-20", teacher: "Dr. Purwa Shriwastava" }
            ]
        }
    },
    "15B1NHS433": {
        name: "Introduction to Sociology",
        schedule: {
            1: [ // Monday
                { start: "10:00", end: "10:50", room: "G8", teacher: "Dr. Purwa Shriwastava" }
            ],
            2: [ // Tuesday
                { start: "14:00", end: "14:50", room: "G6", teacher: "Dr. Purwa Shriwastava" }
            ],
            3: [ // Wednesday
                { start: "14:00", end: "14:50", room: "TS-20", teacher: "Dr. Purwa Shriwastava" }
            ]
        }
    },
    "15B1NHS431": {
        name: "Introduction to Literature",
        schedule: {
            1: [ // Monday
                { start: "10:00", end: "10:50", room: "LT-3", teacher: "Dr.Monali Bhattacharya" }
            ],
            2: [ // Tuesday
                { start: "14:00", end: "14:50", room: "G6", teacher: "Dr.Monali Bhattacharya" }
            ],
            3: [ // Wednesday
                { start: "14:00", end: "14:50", room: "TS-20", teacher: "Dr.Monali Bhattacharya" }
            ]
        }
    }
};

// ==========================================
// LOGIC
// ==========================================

const DAYS = ["Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const SHORT_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// State
let currentDayIndex = new Date().getDay();
let viewingDayIndex = currentDayIndex === 0 ? 1 : currentDayIndex;
let selectedElective = localStorage.getItem('selectedElective') || "";

// DOM Elements
const dayTabsContainer = document.getElementById('day-tabs');
const scheduleContainer = document.getElementById('schedule-container');
const electiveSelect = document.getElementById('elective-select');
const statusCard = document.getElementById('status-card');
const htmlEl = document.documentElement;

function init() {
    setupTheme();
    setupElectives();
    renderTabs();
    renderSchedule(viewingDayIndex);
    updateStatus();
    setInterval(updateStatus, 1000);
    
    window.addEventListener('storage', (e) => {
        if (e.key === 'selectedElective') {
            selectedElective = e.newValue;
            electiveSelect.value = selectedElective;
            renderSchedule(viewingDayIndex);
            updateStatus();
        }
        if (e.key === 'theme') {
            applyTheme(e.newValue);
        }
    });
}

function setupElectives() {
    electiveSelect.innerHTML = '<option value="" disabled selected>Select Your Elective...</option>';
    for (const [code, data] of Object.entries(electiveSchedules)) {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = `${code} - ${data.name}`;
        if (code === selectedElective) option.selected = true;
        electiveSelect.appendChild(option);
    }
    
    electiveSelect.addEventListener('change', (e) => {
        selectedElective = e.target.value;
        localStorage.setItem('selectedElective', selectedElective);
        renderSchedule(viewingDayIndex);
        updateStatus();
    });
}

function renderTabs() {
    dayTabsContainer.innerHTML = '';
    const today = new Date().getDay();

    for (let i = 1; i <= 6; i++) {
        const btn = document.createElement('button');
        const isActive = viewingDayIndex === i;
        const isToday = today === i;
        
        btn.className = `flex-none snap-start px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
            isActive 
            ? 'day-tab-active shadow-md' 
            : 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700'
        }`;
        
        btn.innerHTML = `
            ${SHORT_DAYS[i]}
            ${isToday ? '<span class="ml-1 text-indigo-500 font-bold">•</span>' : ''}
        `;
        
        btn.onclick = () => {
            viewingDayIndex = i;
            renderTabs();
            renderSchedule(i);
        };
        
        dayTabsContainer.appendChild(btn);
        
        if (isActive) {
            setTimeout(() => {
                btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }, 100);
        }
    }
}

function getCombinedSchedule(dayIndex) {
    // Start with core classes
    let combined = [...(coreSchedule[dayIndex] || [])];
    
    // Add elective classes if selected
    if (selectedElective && electiveSchedules[selectedElective]) {
        const electiveClasses = electiveSchedules[selectedElective].schedule[dayIndex] || [];
        electiveClasses.forEach(electiveClass => {
            combined.push({
                ...electiveClass,
                subject: `${selectedElective} - ${electiveSchedules[selectedElective].name}`,
                isElective: true
            });
        });
    }
    
    // Sort by start time
    combined.sort((a, b) => timeToMinutes(a.start) - timeToMinutes(b.start));
    
    return combined;
}

function renderSchedule(dayIndex) {
    scheduleContainer.innerHTML = '';
    const classes = getCombinedSchedule(dayIndex);

    if (!classes || classes.length === 0) {
        scheduleContainer.innerHTML = `
            <div class="text-center py-10 opacity-50">
                <p>No classes scheduled.</p>
                ${!selectedElective ? '<p class="text-sm mt-2">Select your elective to see your complete schedule.</p>' : ''}
            </div>
        `;
        return;
    }

    const now = new Date();
    const currentMins = now.getHours() * 60 + now.getMinutes();
    const isToday = dayIndex === now.getDay();

    classes.forEach(slot => {
        const startMins = timeToMinutes(slot.start);
        const endMins = timeToMinutes(slot.end);
        const isActive = isToday && currentMins >= startMins && currentMins < endMins;

        const el = document.createElement('div');
        el.className = `bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm flex gap-4 transition-all ${isActive ? 'card-active ring-1 ring-indigo-500' : ''}`;
        
        const electiveBadge = slot.isElective ? '<span class="ml-2 px-2 py-0.5 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs rounded-full font-medium">Elective</span>' : '';
        
        el.innerHTML = `
            <div class="flex flex-col items-center justify-center min-w-[3.5rem] border-r border-gray-100 dark:border-gray-700 pr-4">
                <span class="text-xs font-bold text-gray-900 dark:text-white">${formatTime(slot.start)}</span>
                <span class="text-[10px] text-gray-400 my-1">TO</span>
                <span class="text-xs text-gray-500 dark:text-gray-400">${formatTime(slot.end)}</span>
            </div>
            <div class="flex-1 min-w-0">
                <h3 class="font-bold text-gray-900 dark:text-white truncate flex items-center">${slot.subject}${electiveBadge}</h3>
                <div class="flex items-center gap-3 mt-1 text-xs text-gray-500 dark:text-gray-400">
                    <span class="flex items-center gap-1 truncate">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        ${slot.room}
                    </span>
                    <span class="flex items-center gap-1 truncate">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        ${slot.teacher}
                    </span>
                </div>
            </div>
        `;
        scheduleContainer.appendChild(el);
    });
}

function updateStatus() {
    const now = new Date();
    const day = now.getDay();
    const currentMins = now.getHours() * 60 + now.getMinutes();

    document.getElementById('live-clock').textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    let activeSlot = null;
    let nextSlot = null;
    const classes = getCombinedSchedule(day);

    if (classes) {
        for (let slot of classes) {
            const s = timeToMinutes(slot.start);
            const e = timeToMinutes(slot.end);
            if (currentMins >= s && currentMins < e) {
                activeSlot = slot;
                break;
            }
            if (currentMins < s && !nextSlot) nextSlot = slot;
        }
    }

    const nameEl = document.getElementById('current-class-name');
    const detailsEl = document.getElementById('current-class-details');
    const timeRemainingEl = document.getElementById('time-remaining');
    const bar = document.getElementById('class-progress');
    const pStart = document.getElementById('progress-start');
    const pEnd = document.getElementById('progress-end');
    const progressContainer = document.getElementById('progress-container');
    const progressLabels = document.getElementById('progress-labels');

    if (activeSlot) {
        progressContainer.style.display = 'block';
        progressLabels.style.display = 'flex';
        
        nameEl.textContent = activeSlot.subject;
        detailsEl.textContent = `In ${activeSlot.room}`;
        
        const endMins = timeToMinutes(activeSlot.end);
        const minsLeft = endMins - currentMins;
        timeRemainingEl.textContent = formatTimeRemaining(minsLeft, "ends in");
        
        const s = timeToMinutes(activeSlot.start);
        const e = timeToMinutes(activeSlot.end);
        const pct = ((currentMins - s) / (e - s)) * 100;
        bar.style.width = `${Math.max(0, Math.min(100, pct))}%`;
        pStart.textContent = formatTime(activeSlot.start);
        pEnd.textContent = formatTime(activeSlot.end);
    } else {
        progressContainer.style.display = 'none';
        progressLabels.style.display = 'none';
        
        if (day === 0) {
            nameEl.textContent = "Happy Sunday!";
            detailsEl.textContent = "No classes today";
            timeRemainingEl.textContent = "Enjoy your day off! 🌟";
            if (viewingDayIndex === 0) {
                viewingDayIndex = 1;
                renderTabs();
                renderSchedule(1);
            }
        } else if (currentMins < timeToMinutes("08:00")) {
            nameEl.textContent = "Good Morning";
            detailsEl.textContent = "Classes haven't started yet";
            if (nextSlot) {
                const startMins = timeToMinutes(nextSlot.start);
                const minsUntil = startMins - currentMins;
                timeRemainingEl.textContent = formatTimeRemaining(minsUntil, "starts in");
            } else {
                timeRemainingEl.textContent = "Have a great day!";
            }
        } else if (nextSlot) {
            nameEl.textContent = "Free Period";
            detailsEl.textContent = `Next: ${nextSlot.subject}`;
            
            const startMins = timeToMinutes(nextSlot.start);
            const minsUntil = startMins - currentMins;
            timeRemainingEl.textContent = formatTimeRemaining(minsUntil, "starts in");
        } else {
            nameEl.textContent = "All Classes Done! 🎉";
            detailsEl.textContent = "See you tomorrow";
            timeRemainingEl.textContent = "Great work today!";
            
            let nextDay = day + 1;
            if (nextDay > 6) nextDay = 1;
            if (viewingDayIndex === day) {
                viewingDayIndex = nextDay;
                renderTabs();
                renderSchedule(nextDay);
            }
        }
    }
}

function timeToMinutes(t) {
    const [h, m] = t.split(':').map(Number);
    return h * 60 + m;
}

function formatTime(t) {
    let [h, m] = t.split(':');
    h = parseInt(h);
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    return `${h}:${m} ${ampm}`;
}

function setupTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) applyTheme(saved);
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) applyTheme('dark');

    document.getElementById('theme-toggle').addEventListener('click', () => {
        const isDark = htmlEl.classList.contains('dark');
        applyTheme(isDark ? 'light' : 'dark');
    });
}

function applyTheme(theme) {
    if (theme === 'dark') {
        htmlEl.classList.add('dark');
        htmlEl.classList.remove('light');
        document.getElementById('sun-icon').classList.remove('hidden');
        document.getElementById('moon-icon').classList.add('hidden');
    } else {
        htmlEl.classList.remove('dark');
        htmlEl.classList.add('light');
        document.getElementById('sun-icon').classList.add('hidden');
        document.getElementById('moon-icon').classList.remove('hidden');
    }
    localStorage.setItem('theme', theme);
}

function formatTimeRemaining(minutes, prefix) {
    if (minutes >= 60) {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        if (mins === 0) {
            return `${prefix} ${hours} hour${hours > 1 ? 's' : ''}`;
        }
        return `${prefix} ${hours}h ${mins}m`;
    } else if (minutes > 0) {
        return `${prefix} ${minutes} minute${minutes > 1 ? 's' : ''}`;
    } else {
        return `${prefix} < 1 minute`;
    }
}

init();
