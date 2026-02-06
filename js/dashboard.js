// Blood type to CSS class mapping - REMOVED, now using status-based colors

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function () {
    populateFilters();
    renderDashboard();
    simulateRealTimeUpdates();
});

// Populate filter dropdowns
function populateFilters() {
    const provinceFilter = document.getElementById('provinceFilter');
    const uniqueProvinces = [...new Set(bloodStockData.map(stock => stock.province))];

    uniqueProvinces.forEach(province => {
        const option = document.createElement('option');
        option.value = province;
        option.textContent = province;
        provinceFilter.appendChild(option);
    });

    // Add event listeners
    provinceFilter.addEventListener('change', function () {
        updateCityFilter(this.value);
        renderDashboard();
    });

    document.getElementById('cityFilter').addEventListener('change', renderDashboard);
}

// Update city filter based on province selection
function updateCityFilter(province) {
    const cityFilter = document.getElementById('cityFilter');
    cityFilter.innerHTML = '<option value="">Semua Kota</option>';

    if (!province) {
        const uniqueCities = [...new Set(bloodStockData.map(stock => stock.city))];
        uniqueCities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            cityFilter.appendChild(option);
        });
    } else {
        const filteredCities = [...new Set(
            bloodStockData
                .filter(stock => stock.province === province)
                .map(stock => stock.city)
        )];

        filteredCities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            cityFilter.appendChild(option);
        });
    }
}

// Get filtered data
function getFilteredData() {
    const province = document.getElementById('provinceFilter').value;
    const city = document.getElementById('cityFilter').value;

    return bloodStockData.filter(stock => {
        if (province && stock.province !== province) return false;
        if (city && stock.city !== city) return false;
        return true;
    });
}

// Render dashboard
function renderDashboard() {
    const filteredData = getFilteredData();
    renderSummaryCards(filteredData);
    renderBloodTypeCards(filteredData);
    renderStockTable(filteredData);
}

// Render summary cards
function renderSummaryCards(data) {
    const totalUnits = data.reduce((sum, stock) => sum + stock.units, 0);
    const sufficientCount = data.filter(stock => stock.status === 'sufficient').length;
    const lowCount = data.filter(stock => stock.status === 'low').length;
    const criticalCount = data.filter(stock => stock.status === 'critical').length;

    document.getElementById('totalUnits').textContent = totalUnits.toLocaleString('id-ID');
    document.getElementById('sufficientCount').textContent = sufficientCount;
    document.getElementById('lowCount').textContent = lowCount;
    document.getElementById('criticalCount').textContent = criticalCount;
}

// Render blood type cards
function renderBloodTypeCards(data) {
    const bloodTypeGrid = document.getElementById('bloodTypeGrid');
    bloodTypeGrid.innerHTML = '';

    // Aggregate units by blood type
    const bloodTypeData = {};
    BLOOD_TYPES.forEach(type => {
        const stocks = data.filter(stock => stock.bloodType === type);
        const totalUnits = stocks.reduce((sum, stock) => sum + stock.units, 0);
        const hasData = stocks.length > 0;

        let status = 'sufficient';
        if (hasData) {
            const criticalStocks = stocks.filter(s => s.status === 'critical').length;
            const lowStocks = stocks.filter(s => s.status === 'low').length;
            if (criticalStocks > stocks.length / 2) status = 'critical';
            else if (lowStocks > stocks.length / 3 || criticalStocks > 0) status = 'low';
        }

        bloodTypeData[type] = { totalUnits, status, hasData };
    });

    // Render cards
    BLOOD_TYPES.forEach(type => {
        const data = bloodTypeData[type];
        const card = document.createElement('div');
        card.className = 'blood-type-card';
        card.innerHTML = `
      <div class="blood-type-header">
        <div class="blood-badge blood-badge-sm blood-status-${data.status}">${type}</div>
        <span class="badge badge-${data.status}">${getStatusLabel(data.status)}</span>
      </div>
      <div class="blood-type-units">${data.totalUnits}</div>
      <div style="font-size: 0.875rem; color: var(--gray-600);">Unit tersedia</div>
    `;
        bloodTypeGrid.appendChild(card);
    });
}

// Render stock table
function renderStockTable(data) {
    const tbody = document.getElementById('stockTableBody');
    tbody.innerHTML = '';

    if (data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 2rem; color: var(--gray-500);">Tidak ada data untuk filter yang dipilih</td></tr>';
        return;
    }

    data.forEach(stock => {
        const row = document.createElement('tr');
        row.innerHTML = `
      <td><strong>${stock.city}</strong></td>
      <td>${stock.province}</td>
      <td>
        <span class="blood-badge blood-badge-sm blood-status-${stock.status}">${stock.bloodType}</span>
      </td>
      <td><strong>${stock.units}</strong> unit</td>
      <td>
        <span class="status-indicator status-${stock.status}">
          <span class="status-dot"></span>
          ${getStatusLabel(stock.status)}
        </span>
      </td>
      <td>${formatDateTime(stock.lastUpdate)}</td>
    `;
        tbody.appendChild(row);
    });
}

// Helper: Get status label
function getStatusLabel(status) {
    const labels = {
        'sufficient': 'Cukup',
        'low': 'Rendah',
        'critical': 'Kritis'
    };
    return labels[status] || status;
}

// Helper: Format date/time
function formatDateTime(isoString) {
    const date = new Date(isoString);
    return date.toLocaleString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Simulate real-time updates
function simulateRealTimeUpdates() {
    setInterval(() => {
        const now = new Date();
        document.getElementById('lastUpdateTime').textContent =
            now.toLocaleString('id-ID', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
            });

        // Randomly update a few stock values to simulate real-time changes
        const randomIndex = Math.floor(Math.random() * bloodStockData.length);
        const randomChange = Math.floor(Math.random() * 10) - 5; // -5 to +5
        bloodStockData[randomIndex].units = Math.max(0, bloodStockData[randomIndex].units + randomChange);

        // Recalculate status based on new units
        const units = bloodStockData[randomIndex].units;
        if (units > 50) bloodStockData[randomIndex].status = 'sufficient';
        else if (units > 20) bloodStockData[randomIndex].status = 'low';
        else bloodStockData[randomIndex].status = 'critical';

        // Re-render dashboard
        renderDashboard();
    }, 10000); // Update every 10 seconds
}
