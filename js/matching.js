// Matching Logic for PMI Donor-Patient Matching System

let selectedPatient = null;
let selectedDonor = null;

// Initialize matching page
document.addEventListener('DOMContentLoaded', function () {
  setupTabs();
  renderPatients();
  renderDonors();
  renderMatches();
  setupFilters();
});

// Setup tab navigation
function setupTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all tabs
      tabBtns.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

      // Add active to clicked tab
      btn.classList.add('active');
      const tabId = btn.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });
}

// Setup filters
function setupFilters() {
  document.getElementById('patientStatusFilter').addEventListener('change', renderPatients);
  document.getElementById('donorAvailabilityFilter').addEventListener('change', renderDonors);
}

// Render patients
function renderPatients() {
  const filter = document.getElementById('patientStatusFilter').value;
  const filteredPatients = filter ?
    patientData.filter(p => p.matchStatus === filter) :
    patientData;

  document.getElementById('patientCount').textContent = filteredPatients.length;

  const grid = document.getElementById('patientGrid');
  grid.innerHTML = '';

  filteredPatients.forEach(patient => {
    const card = createPatientCard(patient);
    grid.appendChild(card);
  });
}

// Create patient card
function createPatientCard(patient) {
  const card = document.createElement('div');
  card.className = 'profile-card';

  const initials = patient.name.split(' ').map(n => n[0]).join('');
  const matchBadge = patient.matchStatus === 'matched' ?
    '<span class="badge badge-success">✓ Terhubung</span>' :
    '<span class="badge badge-warning">Mencari Donor</span>';

  card.innerHTML = `
    <div class="profile-header">
      <div class="profile-avatar">${initials}</div>
      <div class="profile-info">
        <div class="profile-name">${patient.name}</div>
        <div class="profile-meta">${patient.age} tahun • ${patient.location}</div>
      </div>
    </div>
    <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem; align-items: center;">
      <span class="blood-badge blood-badge-sm ${getBloodTypeClass(patient.bloodType)}">${patient.bloodType}</span>
      ${matchBadge}
    </div>
    <div style="background: var(--gray-50); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1rem;">
      <div style="font-weight: 600; margin-bottom: 0.5rem;">📋 Informasi Medis</div>
      <div style="font-size: 0.875rem; color: var(--gray-700);">
        <div>Diagnosis: <strong>${patient.diagnosis}</strong></div>
        <div>Frekuensi: <strong>${patient.frequency}</strong></div>
        <div>Transfusi berikutnya: <strong>${formatDate(new Date(patient.nextTransfusion))}</strong></div>
      </div>
    </div>
    <div style="font-size: 0.875rem; color: var(--gray-600); margin-bottom: 1rem;">
      🏥 ${patient.hospital}
    </div>
    ${patient.matchStatus === 'searching' ?
      `<button class="btn btn-primary" style="width: 100%;" onclick='findMatchesForPatient(${JSON.stringify(patient)})'>
        Cari Donor Cocok
      </button>` :
      `<button class="btn btn-secondary" style="width: 100%;" onclick='viewMatchDetail(${patient.id})'>
        Lihat Donor
      </button>`
    }
  `;

  return card;
}

// Render donors
function renderDonors() {
  const filter = document.getElementById('donorAvailabilityFilter').value;
  const filteredDonors = filter ?
    donorData.filter(d => d.availability === filter) :
    donorData;

  document.getElementById('donorCount').textContent = filteredDonors.length;

  const grid = document.getElementById('donorGrid');
  grid.innerHTML = '';

  filteredDonors.forEach(donor => {
    const card = createDonorCard(donor);
    grid.appendChild(card);
  });
}

// Create donor card
function createDonorCard(donor) {
  const card = document.createElement('div');
  card.className = 'profile-card';

  const initials = donor.name.split(' ').map(n => n[0]).join('');
  const availabilityBadge = donor.availability === 'Tersedia' ?
    '<span class="badge badge-success">✓ Tersedia</span>' :
    '<span class="badge badge-secondary">Terjadwal</span>';

  card.innerHTML = `
    <div class="profile-header">
      <div class="profile-avatar" style="background: linear-gradient(135deg, var(--success), var(--secondary));">${initials}</div>
      <div class="profile-info">
        <div class="profile-name">${donor.name}</div>
        <div class="profile-meta">${donor.age} tahun • ${donor.location}</div>
      </div>
    </div>
    <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem; align-items: center;">
      <span class="blood-badge blood-badge-sm ${getBloodTypeClass(donor.bloodType)}">${donor.bloodType}</span>
      ${availabilityBadge}
    </div>
    <div class="profile-stats">
      <div class="stat-box">
        <span class="stat-value">${donor.totalDonations}</span>
        <span class="stat-label">Total Donasi</span>
      </div>
      <div class="stat-box">
        <span class="stat-value">${donor.frequency}</span>
        <span class="stat-label">Frekuensi</span>
      </div>
    </div>
    <div style="font-size: 0.875rem; color: var(--gray-600); margin-bottom: 1rem;">
      📅 Donor terakhir: ${formatDate(new Date(donor.lastDonation))}
    </div>
    ${donor.availability === 'Tersedia' ?
      `<button class="btn btn-outline" style="width: 100%;" onclick='findPatientsForDonor(${JSON.stringify(donor)})'>
        Lihat Pasien Cocok
      </button>` :
      `<button class="btn btn-outline" style="width: 100%;" onclick='viewMatchDetail(null, ${donor.id})'>
        Lihat Pasien
      </button>`
    }
  `;

  return card;
}

// Render active matches
function renderMatches() {
  document.getElementById('matchCount').textContent = matchData.length;

  const matchList = document.getElementById('matchList');
  matchList.innerHTML = '';

  matchData.forEach(match => {
    const patient = patientData.find(p => p.id === match.patientId);
    const donor = donorData.find(d => d.id === match.donorId);

    if (!patient || !donor) return;

    const card = createMatchCard(match, patient, donor);
    matchList.appendChild(card);
  });
}

// Create match card
function createMatchCard(match, patient, donor) {
  const card = document.createElement('div');
  card.className = 'match-card';

  const matchDuration = Math.floor((new Date() - new Date(match.matchedDate)) / (1000 * 60 * 60 * 24));

  card.innerHTML = `
    <div class="match-header">
      <div>
        <h3 style="margin: 0 0 0.5rem 0;">Match #${match.id}</h3>
        <div style="font-size: 0.875rem; color: var(--gray-600);">
          Terhubung sejak ${formatDate(new Date(match.matchedDate))} (${matchDuration} hari)
        </div>
      </div>
      <div>
        <div class="match-score">Cocok ${match.compatibilityScore}%</div>
      </div>
    </div>

    <div class="match-profiles">
      <div style="background: var(--gray-50); padding: 1.5rem; border-radius: var(--radius-lg);">
        <div style="text-align: center; margin-bottom: 1rem;">
          <div style="width: 60px; height: 60px; margin: 0 auto 0.75rem; border-radius: var(--radius-md); background: linear-gradient(135deg, var(--primary), var(--primary-dark)); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; font-weight: 700;">
            ${patient.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div style="font-weight: 600; margin-bottom: 0.25rem;">${patient.name}</div>
          <div style="font-size: 0.875rem; color: var(--gray-600);">Pasien</div>
        </div>
        <div style="text-align: center;">
          <span class="blood-badge blood-badge-sm ${getBloodTypeClass(patient.bloodType)}">${patient.bloodType}</span>
        </div>
      </div>

      <div class="match-connection">
        <div style="font-size: 3rem;">🤝</div>
        <div style="font-size: 0.875rem; color: var(--gray-600); margin-top: 0.5rem;">
          ${match.totalDonations} donasi
        </div>
      </div>

    <div style="background: var(--gray-50); padding: 1.5rem; border-radius: var(--radius-lg);">
        <div style="text-align: center; margin-bottom: 1rem;">
          <div style="width: 60px; height: 60px; margin: 0 auto 0.75rem; border-radius: var(--radius-md); background: linear-gradient(135deg, var(--success), var(--secondary)); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; font-weight: 700;">
            ${donor.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div style="font-weight: 600; margin-bottom: 0.25rem;">${donor.name}</div>
          <div style="font-size: 0.875rem; color: var(--gray-600);">Donor</div>
        </div>
        <div style="text-align: center;">
          <span class="blood-badge blood-badge-sm ${getBloodTypeClass(donor.bloodType)}">${donor.bloodType}</span>
        </div>
      </div>
    </div>

    <div class="grid grid-3" style="margin-top: 1.5rem;">
      <div style="background: var(--gray-50); padding: 1rem; border-radius: var(--radius-md); text-align: center;">
        <div style="font-weight: 700; margin-bottom: 0.25rem;">📅 Donasi Berikutnya</div>
        <div style="font-size: 0.875rem; color: var(--gray-700);">${formatDate(new Date(match.nextScheduledDonation))}</div>
      </div>
      <div style="background: var(--gray-50); padding: 1rem; border-radius: var(--radius-md); text-align: center;">
        <div style="font-weight: 700; margin-bottom: 0.25rem;">💬 Komunikasi Terakhir</div>
        <div style="font-size: 0.875rem; color: var(--gray-700);">${formatDate(new Date(match.lastCommunication))}</div>
      </div>
      <div style="background: var(--gray-50); padding: 1rem; border-radius: var(--radius-md); text-align: center;">
        <div style="font-weight: 700; margin-bottom: 0.25rem;">⭐ Status</div>
        <div><span class="badge badge-success">Aktif</span></div>
      </div>
    </div>

    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">17 Jan 2026</div>
        <div class="timeline-content">Reminder donasi dikirim</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">${formatDate(new Date(match.lastCommunication))}</div>
        <div class="timeline-content">Komunikasi koordinasi jadwal</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">${formatDate(new Date(match.matchedDate))}</div>
        <div class="timeline-content">Match berhasil dibuat</div>
      </div>
    </div>
  `;

  return card;
}

// Find matches for patient
function findMatchesForPatient(patient) {
  selectedPatient = patient;

  // Find compatible donors
  const compatibleDonors = donorData.filter(donor =>
    donor.bloodType === patient.bloodType &&
    donor.availability === 'Tersedia'
  );

  if (compatibleDonors.length === 0) {
    alert('Maaf, saat ini tidak ada donor tersedia dengan golongan darah yang cocok.');
    return;
  }

  // Calculate compatibility scores
  const donorsWithScores = compatibleDonors.map(donor => ({
    ...donor,
    score: calculateCompatibilityScore(patient, donor)
  })).sort((a, b) => b.score - a.score);

  showMatchSuggestions(patient, donorsWithScores);
}

// Find patients for donor
function findPatientsForDonor(donor) {
  selectedDonor = donor;

  const compatiblePatients = patientData.filter(patient =>
    patient.bloodType === donor.bloodType &&
    patient.matchStatus === 'searching'
  );

  if (compatiblePatients.length === 0) {
    alert('Saat ini tidak ada pasien yang membutuhkan donor dengan golongan darah Anda.');
    return;
  }

  const patientsWithScores = compatiblePatients.map(patient => ({
    ...patient,
    score: calculateCompatibilityScore(patient, donor)
  })).sort((a, b) => b.score - a.score);

  showMatchSuggestions(patientsWithScores[0], [donor]);
}

// Calculate compatibility score
function calculateCompatibilityScore(patient, donor) {
  let score = 60; // Base score for blood type match

  // Location proximity (simple check)
  if (patient.location === donor.location) score += 20;
  else if (patient.location.includes(donor.location.split(' ')[0])) score += 10;

  // Donor experience
  if (donor.totalDonations > 20) score += 15;
  else if (donor.totalDonations > 10) score += 10;
  else score += 5;

  // Donor frequency compatibility
  if (donor.frequency.includes('2 bulan') || donor.frequency.includes('3 bulan')) score += 5;

  return Math.min(100, score);
}

// Show match suggestions
function showMatchSuggestions(patient, donors) {
  const modal = document.getElementById('matchModal');
  const modalBody = document.getElementById('matchModalBody');

  const topDonor = donors[0];

  modalBody.innerHTML = `
    <div style="text-align: center; margin-bottom: 2rem;">
      <div style="font-size: 3rem; margin-bottom: 1rem;">✨</div>
      <h3>Kami menemukan donor cocok!</h3>
      <p style="color: var(--gray-600);">Tingkat kesesuaian: <strong>${topDonor.score}%</strong></p>
    </div>

    <div class="grid grid-2" style="margin-bottom: 2rem;">
      <div style="background: var(--gray-50); padding: 1.5rem; border-radius: var(--radius-lg);">
        <div style="text-align: center; margin-bottom: 1rem; font-weight: 600;">Pasien</div>
        <div style="text-align: center; margin-bottom: 1rem;">${patient.name}</div>
        <div style="text-align: center;">
          <span class="blood-badge ${getBloodTypeClass(patient.bloodType)}">${patient.bloodType}</span>
        </div>
        <div style="margin-top: 1rem; font-size: 0.875rem; color: var(--gray-600);">
          📍 ${patient.location}<br>
          🏥 ${patient.hospital.split(',')[0]}
        </div>
      </div>

      <div style="background: var(--gray-50); padding: 1.5rem; border-radius: var(--radius-lg);">
        <div style="text-align: center; margin-bottom: 1rem; font-weight: 600;">Donor</div>
        <div style="text-align: center; margin-bottom: 1rem;">${topDonor.name}</div>
        <div style="text-align: center;">
          <span class="blood-badge ${getBloodTypeClass(topDonor.bloodType)}">${topDonor.bloodType}</span>
        </div>
        <div style="margin-top: 1rem; font-size: 0.875rem; color: var(--gray-600);">
          📍 ${topDonor.location}<br>
          💉 ${topDonor.totalDonations} donasi
        </div>
      </div>
    </div>

    <div style="background: var(--success-light); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1rem;">
      <div style="font-weight: 600; margin-bottom: 0.5rem;">✅ Alasan Cocok:</div>
      <ul style="margin: 0; padding-left: 1.5rem; font-size: 0.875rem;">
        <li>Golongan darah sama: ${patient.bloodType}</li>
        ${patient.location === topDonor.location ? '<li>Lokasi sama atau berdekatan</li>' : ''}
        <li>Donor berpengalaman (${topDonor.totalDonations} kali donasi)</li>
        <li>Frekuensi donor: ${topDonor.frequency}</li>
      </ul>
    </div>

    <p style="font-size: 0.875rem; color: var(--gray-600);">
      Dengan menghubungkan, PMI akan memfasilitasi perkenalan antara donor dan pasien untuk membangun hubungan donor tetap.
    </p>
  `;

  modal.classList.remove('hidden');
}

// Confirm match
function confirmMatch() {
  if (!selectedPatient) {
    alert('Error: Pasien tidak ditemukan');
    return;
  }

  // Close match modal first
  closeMatchModal();

  // Show success message briefly
  const successMsg = document.createElement('div');
  successMsg.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        z-index: 9998;
        text-align: center;
    `;
  successMsg.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 1rem;">✅</div>
        <h3 style="margin-bottom: 0.5rem;">Match Berhasil Dibuat!</h3>
        <p style="color: var(--gray-600); margin: 0;">PMI akan segera menghubungi kedua pihak.</p>
    `;
  document.body.appendChild(successMsg);

  // Show donation modal after brief delay
  setTimeout(() => {
    document.body.removeChild(successMsg);

    donationModal.show({
      context: 'Terima kasih telah menghubungkan donor dengan pasien!',
      onDonate: (amount) => {
        console.log(`Donasi sebesar Rp ${amount.toLocaleString('id-ID')} diterima`);
        // Reload after donation
        setTimeout(() => {
          location.reload();
        }, 500);
      },
      onSkip: () => {
        // Reload after skip
        setTimeout(() => {
          location.reload();
        }, 300);
      }
    });
  }, 1500);
}

// Close match modal
function closeMatchModal() {
  document.getElementById('matchModal').classList.add('hidden');
  selectedPatient = null;
  selectedDonor = null;
}

// View match detail
function viewMatchDetail(patientId, donorId) {
  let match;
  if (patientId) {
    match = matchData.find(m => m.patientId === patientId);
  } else if (donorId) {
    match = matchData.find(m => m.donorId === donorId);
  }

  if (match) {
    // Switch to matches tab
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.querySelector('[data-tab="matches"]').classList.add('active');
    document.getElementById('matches').classList.add('active');
  }
}

// Helper: Get blood type CSS class
function getBloodTypeClass(bloodType) {
  const classes = {
    'A+': 'blood-a-plus',
    'A-': 'blood-a-minus',
    'B+': 'blood-b-plus',
    'B-': 'blood-b-minus',
    'AB+': 'blood-ab-plus',
    'AB-': 'blood-ab-minus',
    'O+': 'blood-o-plus',
    'O-': 'blood-o-minus'
  };
  return classes[bloodType] || '';
}

// Helper: Format date
function formatDate(date) {
  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}
