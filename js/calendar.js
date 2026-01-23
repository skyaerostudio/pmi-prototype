// Calendar Logic for PMI Blood Donation Events

let currentDate = new Date(2026, 0, 1); // January 2026
let selectedEvent = null;

// Initialize calendar
document.addEventListener('DOMContentLoaded', function () {
  renderCalendar();
  renderEventList();
  setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
  document.getElementById('prevMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  });

  document.getElementById('nextMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  });

  document.getElementById('locationFilter').addEventListener('change', () => {
    renderCalendar();
    renderEventList();
  });

  document.getElementById('typeFilter').addEventListener('change', () => {
    renderCalendar();
    renderEventList();
  });
}

// Render calendar
function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Update month display
  const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  document.getElementById('currentMonth').textContent = `${monthNames[month]} ${year}`;

  // Get first day of month and number of days
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const calendarGrid = document.getElementById('calendarGrid');

  // Remove existing day elements (keep headers)
  const dayElements = calendarGrid.querySelectorAll('.calendar-day');
  dayElements.forEach(el => el.remove());

  // Get filtered events
  const filteredEvents = getFilteredEvents();

  // Previous month days
  for (let i = firstDay - 1; i >= 0; i--) {
    const day = daysInPrevMonth - i;
    const dayEl = createDayElement(day, 'other-month', []);
    calendarGrid.appendChild(dayEl);
  }

  // Current month days
  for (let day = 1; day <= daysInMonth; day++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const dayEvents = filteredEvents.filter(event => {
      const eventDate = new Date(event.start);
      return eventDate.getFullYear() === year &&
        eventDate.getMonth() === month &&
        eventDate.getDate() === day;
    });

    const dayEl = createDayElement(day, '', dayEvents);
    calendarGrid.appendChild(dayEl);
  }

  // Next month days
  const totalCells = calendarGrid.querySelectorAll('.calendar-day').length;
  const cellsToFill = 42 - totalCells - 7; // 6 rows × 7 days minus 7 headers
  for (let day = 1; day <= cellsToFill; day++) {
    const dayEl = createDayElement(day, 'other-month', []);
    calendarGrid.appendChild(dayEl);
  }
}

// Create day element
function createDayElement(day, className, events) {
  const dayEl = document.createElement('div');
  dayEl.className = `calendar-day ${className}`;

  const dateEl = document.createElement('div');
  dateEl.className = 'calendar-date';
  dateEl.textContent = day;
  dayEl.appendChild(dateEl);

  events.forEach(event => {
    const eventEl = document.createElement('div');
    eventEl.className = `calendar-event event-${event.type}`;
    eventEl.textContent = event.title;
    eventEl.onclick = (e) => {
      e.stopPropagation();
      showEventModal(event);
    };
    dayEl.appendChild(eventEl);
  });

  return dayEl;
}

// Render event list
function renderEventList() {
  const eventList = document.getElementById('eventList');
  eventList.innerHTML = '';

  const filteredEvents = getFilteredEvents();
  const upcomingEvents = filteredEvents
    .filter(event => new Date(event.start) >= new Date())
    .sort((a, b) => new Date(a.start) - new Date(b.start))
    .slice(0, 10);

  if (upcomingEvents.length === 0) {
    eventList.innerHTML = '<p style="text-align: center; color: var(--gray-500); padding: 2rem;">Tidak ada event mendatang</p>';
    return;
  }

  upcomingEvents.forEach(event => {
    const card = createEventCard(event);
    eventList.appendChild(card);
  });
}

// Create event card
function createEventCard(event) {
  const card = document.createElement('div');
  card.className = `event-card ${event.type}`;

  const eventDate = new Date(event.start);
  const eventEndDate = new Date(event.end);

  card.innerHTML = `
    <div class="flex justify-between items-center">
      <h4 style="margin: 0;">${event.title}</h4>
      <span class="badge badge-${getEventBadgeClass(event.type)}">${getEventTypeLabel(event.type)}</span>
    </div>
    <div class="event-meta">
      <div class="event-meta-item">
        📅 ${formatDate(eventDate)}
      </div>
      <div class="event-meta-item">
        🕐 ${formatTime(eventDate)} - ${formatTime(eventEndDate)}
      </div>
      <div class="event-meta-item">
        📍 ${event.location}
      </div>
      <div class="event-meta-item">
        👥 ${event.registered}/${event.capacity} terdaftar
      </div>
    </div>
    <p style="color: var(--gray-600); margin-bottom: 0.5rem;">${event.description}</p>
    <div class="event-tags">
      ${event.bloodTypesNeeded.length > 0 ?
      event.bloodTypesNeeded.map(type =>
        `<span class="badge badge-danger">${type} Dibutuhkan</span>`
      ).join('') :
      '<span class="badge badge-secondary">Semua Golongan Darah</span>'
    }
      ${event.registered >= event.capacity * 0.8 ?
      '<span class="badge badge-warning">Hampir Penuh</span>' : ''
    }
    </div>
    <div style="margin-top: 1rem;">
      <button class="btn btn-primary btn-sm" onclick='showEventModal(${JSON.stringify(event)})'>
        Lihat Detail & Daftar
      </button>
    </div>
  `;

  return card;
}

// Get filtered events
function getFilteredEvents() {
  const location = document.getElementById('locationFilter').value;
  const type = document.getElementById('typeFilter').value;

  return calendarEvents.filter(event => {
    if (location && !event.location.includes(location)) return false;
    if (type && event.type !== type) return false;
    return true;
  });
}

// Show event modal
function showEventModal(event) {
  selectedEvent = event;
  const modal = document.getElementById('eventModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');

  modalTitle.textContent = event.title;

  const eventDate = new Date(event.start);
  const eventEndDate = new Date(event.end);
  const availableSlots = event.capacity - event.registered;
  const percentFull = Math.round((event.registered / event.capacity) * 100);

  modalBody.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <span class="badge badge-${getEventBadgeClass(event.type)}">${getEventTypeLabel(event.type)}</span>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="margin-bottom: 0.5rem;">📅 Tanggal & Waktu</h4>
      <p style="color: var(--gray-700); margin: 0;">
        ${formatDate(eventDate)}<br>
        ${formatTime(eventDate)} - ${formatTime(eventEndDate)} WIB
      </p>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="margin-bottom: 0.5rem;">📍 Lokasi</h4>
      <p style="color: var(--gray-700); margin: 0;">${event.location}</p>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="margin-bottom: 0.5rem;">🏢 Penyelenggara</h4>
      <p style="color: var(--gray-700); margin: 0;">${event.organizer}</p>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="margin-bottom: 0.5rem;">📝 Deskripsi</h4>
      <p style="color: var(--gray-700); margin: 0;">${event.description}</p>
    </div>

    ${event.bloodTypesNeeded.length > 0 ? `
      <div style="margin-bottom: 1.5rem;">
        <h4 style="margin-bottom: 0.5rem;">🩸 Golongan Darah yang Dibutuhkan</h4>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          ${event.bloodTypesNeeded.map(type =>
    `<span class="badge badge-danger">${type}</span>`
  ).join('')}
        </div>
      </div>
    ` : ''}

    <div style="margin-bottom: 1.5rem;">
      <h4 style="margin-bottom: 0.5rem;">👥 Kapasitas</h4>
      <div style="background: var(--gray-100); border-radius: var(--radius-md); padding: 1rem;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <span>${event.registered} terdaftar</span>
          <span>${availableSlots} slot tersisa</span>
        </div>
        <div style="background: var(--gray-200); height: 8px; border-radius: 4px; overflow: hidden;">
          <div style="background: ${percentFull >= 80 ? 'var(--danger)' : 'var(--success)'}; width: ${percentFull}%; height: 100%;"></div>
        </div>
        <div style="text-align: center; margin-top: 0.5rem; font-size: 0.875rem; color: var(--gray-600);">
          ${percentFull}% terisi
        </div>
      </div>
    </div>

    ${availableSlots === 0 ? `
      <div class="badge badge-danger" style="width: 100%; justify-content: center; padding: 0.75rem;">
        ⚠️ Event ini sudah penuh
      </div>
    ` : ''}
  `;

  modal.classList.remove('hidden');
}

// Close event modal
function closeEventModal() {
  document.getElementById('eventModal').classList.add('hidden');
  selectedEvent = null;
}

// Handle RSVP
function handleRSVP() {
  if (!selectedEvent) return;

  if (selectedEvent.registered >= selectedEvent.capacity) {
    alert('Maaf, event ini sudah penuh!');
    return;
  }

  // Simulate RSVP
  selectedEvent.registered++;
  alert(`✅ Pendaftaran berhasil!\n\nAnda telah terdaftar untuk:\n${selectedEvent.title}\n\nKonfirmasi telah dikirim via email.`);

  closeEventModal();
  renderCalendar();
  renderEventList();
}

// Helper: Get event type label
function getEventTypeLabel(type) {
  const labels = {
    'fixed': 'Lokasi Tetap',
    'mobile': 'Mobile Drive',
    'emergency': 'Darurat'
  };
  return labels[type] || type;
}

// Helper: Get event badge class
function getEventBadgeClass(type) {
  const classes = {
    'fixed': 'secondary',
    'mobile': 'success',
    'emergency': 'danger'
  };
  return classes[type] || 'primary';
}

// Helper: Format date
function formatDate(date) {
  return date.toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

// Helper: Format time
function formatTime(date) {
  return date.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit'
  });
}
