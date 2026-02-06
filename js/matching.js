// Matching Logic for PMI Donor Commitment Program

// Initialize page
document.addEventListener('DOMContentLoaded', function () {
  renderImpactStats();
  renderSuccessStories();
  renderCommittedDonors();
  setupRegistrationForm();
});

// Render impact statistics
function renderImpactStats() {
  const grid = document.getElementById('impactGrid');
  const stats = [
    { label: 'Pasien Terbantu', value: impactStats.totalPatientsHelped, icon: '❤️' },
    { label: 'Donor Berkomitmen', value: impactStats.totalCommittedDonors, icon: '🤝' },
    { label: 'Total Donasi', value: impactStats.totalDonations, icon: '🩸' },
    { label: 'Kota Terjangkau', value: impactStats.citiesCovered, icon: '🏙️' }
  ];

  grid.innerHTML = stats.map(stat => `
        <div class="impact-card">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">${stat.icon}</div>
            <div class="impact-number">${stat.value.toLocaleString('id-ID')}</div>
            <div class="impact-label">${stat.label}</div>
        </div>
    `).join('');
}

// Render success stories
function renderSuccessStories() {
  const container = document.getElementById('successStories');
  container.innerHTML = successStories.map(story => `
        <div class="success-story">
            <div class="story-icon">${story.icon}</div>
            <div class="story-text">"${story.story}"</div>
            <div class="story-date">${story.date}</div>
        </div>
    `).join('');
}

// Render committed donors showcase
function renderCommittedDonors() {
  const grid = document.getElementById('committedDonorsGrid');
  grid.innerHTML = committedDonors.map(donor => `
        <div class="donor-card">
            ${getBadgeHtml(donor.badge)}
            <div class="donor-avatar">${donor.initials}</div>
            <div style="text-align: center; margin-bottom: 1rem;">
                <div style="font-weight: 600; font-size: 1.125rem;">Donor ${donor.initials}</div>
                <div style="font-size: 0.875rem; color: var(--gray-600);">${donor.location}</div>
            </div>
            
            <div style="text-align: center; margin-bottom: 1rem;">
                <span class="blood-badge blood-badge-sm ${getBloodTypeClass(donor.bloodType)}">${donor.bloodType}</span>
            </div>

            <div class="donor-stats">
                <div class="stat-item">
                    <span class="stat-value">${donor.totalDonations}</span>
                    <span class="stat-label">Donasi</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${donor.patientsHelped}</span>
                    <span class="stat-label">Pasien</span>
                </div>
            </div>
            
            <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--gray-100); font-size: 0.75rem; color: var(--gray-500); text-align: center;">
                Komitmen: ${donor.frequency}
            </div>
        </div>
    `).join('');
}

// Get badge HTML
function getBadgeHtml(badge) {
  if (!badge) return '';
  let className = 'badge-committed';
  if (badge === 'Life Saver') className = 'badge-lifesaver';
  return `<div class="donor-badge ${className}">${badge}</div>`;
}

// Setup registration form
function setupRegistrationForm() {
  const form = document.getElementById('donorRegistrationForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulate processing
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Memproses...';

    setTimeout(() => {
      // Get form values
      const name = document.getElementById('donorName').value;
      const bloodType = document.getElementById('donorBloodType').value;
      const location = document.getElementById('donorLocation').value;
      const frequency = document.getElementById('donorFrequency').value;
      const consent = document.getElementById('donorConsent').checked;

      // Show success modal (reusing donation modal for convenience or standard alert)
      // Here we'll use a custom success message
      showRegistrationSuccess(name, bloodType, frequency);

      btn.disabled = false;
      btn.textContent = originalText;
      form.reset();

      // Simulate adding to list if consent is given
      if (consent) {
        addNewDonorToList(name, bloodType, location, frequency);
      }
    }, 1500);
  });
}

// Show registration success
function showRegistrationSuccess(name, bloodType, frequency) {
  const successMsg = document.createElement('div');
  successMsg.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 2.5rem;
        border-radius: 1.5rem;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        z-index: 9999;
        text-align: center;
        max-width: 400px;
        width: 90%;
        animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    `;

  successMsg.innerHTML = `
        <div style="font-size: 4rem; margin-bottom: 1rem;">🎉</div>
        <h2 style="margin-bottom: 0.5rem; color: var(--primary);">Terima Kasih!</h2>
        <p style="color: var(--gray-600); margin-bottom: 1.5rem; line-height: 1.6;">
            <strong>${name}</strong>, komitmen Anda untuk donor <strong>${bloodType}</strong> setiap <strong>${frequency}</strong> sangat berarti.
        </p>
        <div style="background: var(--success-light); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; font-size: 0.875rem;">
            Tim PMI akan menghubungi Anda untuk jadwal donasi pertama.
        </div>
        <button class="btn btn-primary" style="width: 100%;" onclick="this.parentElement.remove()">Tutup</button>
    `;

  // Add backdrop
  const backdrop = document.createElement('div');
  backdrop.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 9998;
        backdrop-filter: blur(4px);
    `;
  backdrop.onclick = () => {
    successMsg.remove();
    backdrop.remove();
  };

  document.body.appendChild(backdrop);
  document.body.appendChild(successMsg);
}

// Simulate adding new donor to the list
function addNewDonorToList(name, bloodType, location, frequency) {
  const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  const newDonor = {
    initials: initials,
    bloodType: bloodType,
    location: location.split(',')[0], // Take just the city
    frequency: frequency,
    patientsHelped: 0,
    totalDonations: 0,
    badge: 'New'
  };

  // Add to beginning of array
  committedDonors.unshift(newDonor);
  renderCommittedDonors();

  // Update stats
  impactStats.totalCommittedDonors++;
  renderImpactStats();
}

// Scroll to registration
function scrollToRegistration() {
  document.getElementById('registrationSection').scrollIntoView({ behavior: 'smooth' });
}

// Helper: Get blood type CSS class (reused logic or defined here)
function getBloodTypeClass(bloodType) {
  // We can assume status is sufficient for generic display or map specifically
  // Since we changed CSS to status-based, valid classes are blood-status-sufficient/low/critical
  // But for donor badges, we might want just a generic style or use the sufficient green
  return 'blood-status-sufficient';
}
