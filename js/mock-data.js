// PMI Blood Donation System - Mock Data

// Blood Types Reference
const BLOOD_TYPES = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

// Indonesian Provinces
const PROVINCES = [
  'DKI Jakarta', 'Jawa Barat', 'Jawa Tengah', 'Jawa Timur', 'Banten',
  'Bali', 'Sumatera Utara', 'Sumatera Barat', 'Sumatera Selatan',
  'Kalimantan Timur', 'Sulawesi Selatan', 'Papua', 'Aceh'
];

// Mock Blood Stock Data
const bloodStockData = [
  // Jakarta
  { id: 1, city: 'Jakarta Pusat', province: 'DKI Jakarta', bloodType: 'A+', units: 145, status: 'sufficient', lastUpdate: '2026-01-17T13:45:00' },
  { id: 2, city: 'Jakarta Pusat', province: 'DKI Jakarta', bloodType: 'A-', units: 23, status: 'low', lastUpdate: '2026-01-17T13:45:00' },
  { id: 3, city: 'Jakarta Pusat', province: 'DKI Jakarta', bloodType: 'B+', units: 98, status: 'sufficient', lastUpdate: '2026-01-17T13:45:00' },
  { id: 4, city: 'Jakarta Pusat', province: 'DKI Jakarta', bloodType: 'B-', units: 12, status: 'critical', lastUpdate: '2026-01-17T13:45:00' },
  { id: 5, city: 'Jakarta Pusat', province: 'DKI Jakarta', bloodType: 'AB+', units: 45, status: 'low', lastUpdate: '2026-01-17T13:45:00' },
  { id: 6, city: 'Jakarta Pusat', province: 'DKI Jakarta', bloodType: 'AB-', units: 8, status: 'critical', lastUpdate: '2026-01-17T13:45:00' },
  { id: 7, city: 'Jakarta Pusat', province: 'DKI Jakarta', bloodType: 'O+', units: 187, status: 'sufficient', lastUpdate: '2026-01-17T13:45:00' },
  { id: 8, city: 'Jakarta Pusat', province: 'DKI Jakarta', bloodType: 'O-', units: 19, status: 'low', lastUpdate: '2026-01-17T13:45:00' },
  
  // Surabaya
  { id: 9, city: 'Surabaya', province: 'Jawa Timur', bloodType: 'A+', units: 112, status: 'sufficient', lastUpdate: '2026-01-17T14:00:00' },
  { id: 10, city: 'Surabaya', province: 'Jawa Timur', bloodType: 'A-', units: 15, status: 'low', lastUpdate: '2026-01-17T14:00:00' },
  { id: 11, city: 'Surabaya', province: 'Jawa Timur', bloodType: 'B+', units: 89, status: 'sufficient', lastUpdate: '2026-01-17T14:00:00' },
  { id: 12, city: 'Surabaya', province: 'Jawa Timur', bloodType: 'B-', units: 7, status: 'critical', lastUpdate: '2026-01-17T14:00:00' },
  { id: 13, city: 'Surabaya', province: 'Jawa Timur', bloodType: 'AB+', units: 34, status: 'low', lastUpdate: '2026-01-17T14:00:00' },
  { id: 14, city: 'Surabaya', province: 'Jawa Timur', bloodType: 'AB-', units: 5, status: 'critical', lastUpdate: '2026-01-17T14:00:00' },
  { id: 15, city: 'Surabaya', province: 'Jawa Timur', bloodType: 'O+', units: 156, status: 'sufficient', lastUpdate: '2026-01-17T14:00:00' },
  { id: 16, city: 'Surabaya', province: 'Jawa Timur', bloodType: 'O-', units: 11, status: 'critical', lastUpdate: '2026-01-17T14:00:00' },
  
  // Bandung
  { id: 17, city: 'Bandung', province: 'Jawa Barat', bloodType: 'A+', units: 92, status: 'sufficient', lastUpdate: '2026-01-17T13:30:00' },
  { id: 18, city: 'Bandung', province: 'Jawa Barat', bloodType: 'O+', units: 134, status: 'sufficient', lastUpdate: '2026-01-17T13:30:00' },
  { id: 19, city: 'Bandung', province: 'Jawa Barat', bloodType: 'B+', units: 67, status: 'sufficient', lastUpdate: '2026-01-17T13:30:00' },
  { id: 20, city: 'Bandung', province: 'Jawa Barat', bloodType: 'O-', units: 6, status: 'critical', lastUpdate: '2026-01-17T13:30:00' },
  
  // Medan
  { id: 21, city: 'Medan', province: 'Sumatera Utara', bloodType: 'A+', units: 78, status: 'sufficient', lastUpdate: '2026-01-17T13:50:00' },
  { id: 22, city: 'Medan', province: 'Sumatera Utara', bloodType: 'O+', units: 102, status: 'sufficient', lastUpdate: '2026-01-17T13:50:00' },
  { id: 23, city: 'Medan', province: 'Sumatera Utara', bloodType: 'B-', units: 4, status: 'critical', lastUpdate: '2026-01-17T13:50:00' },
  { id: 24, city: 'Medan', province: 'Sumatera Utara', bloodType: 'AB-', units: 3, status: 'critical', lastUpdate: '2026-01-17T13:50:00' },
];

// Mock Calendar Events
const calendarEvents = [
  {
    id: 1,
    title: 'Donor Darah PMI Jakarta Pusat',
    start: '2026-01-20T09:00:00',
    end: '2026-01-20T15:00:00',
    location: 'PMI Jakarta Pusat, Jl. Kramat Raya No.47',
    type: 'fixed',
    bloodTypesNeeded: ['O-', 'AB-'],
    capacity: 50,
    registered: 23,
    organizer: 'PMI DKI Jakarta',
    description: 'Kegiatan donor darah rutin di PMI Jakarta Pusat'
  },
  {
    id: 2,
    title: 'Mobile Drive - Gedung BCA Tower',
    start: '2026-01-22T10:00:00',
    end: '2026-01-22T14:00:00',
    location: 'BCA Tower, Jakarta',
    type: 'mobile',
    bloodTypesNeeded: ['A+', 'O+'],
    capacity: 100,
    registered: 87,
    organizer: 'PMI Jakarta & BCA',
    description: 'Donor darah mobile di kantor BCA Tower'
  },
  {
    id: 3,
    title: 'URGENT: Kampanye Donor Darah',
    start: '2026-01-18T08:00:00',
    end: '2026-01-18T17:00:00',
    location: 'RS Cipto Mangunkusumo',
    type: 'emergency',
    bloodTypesNeeded: ['O-', 'B-', 'AB-'],
    capacity: 200,
    registered: 45,
    organizer: 'PMI Jakarta & RSCM',
    description: 'Kampanye darurat untuk stok darah langka'
  },
  {
    id: 4,
    title: 'Donor Darah Universitas Indonesia',
    start: '2026-01-25T09:00:00',
    end: '2026-01-25T15:00:00',
    location: 'Kampus UI Depok',
    type: 'mobile',
    bloodTypesNeeded: [],
    capacity: 150,
    registered: 92,
    organizer: 'PMI Depok & UI',
    description: 'Kegiatan donor darah mahasiswa UI'
  },
  {
    id: 5,
    title: 'Donor Darah PMI Surabaya',
    start: '2026-01-21T08:00:00',
    end: '2026-01-21T14:00:00',
    location: 'PMI Surabaya, Jl. Embong Ploso',
    type: 'fixed',
    bloodTypesNeeded: ['B-', 'AB+'],
    capacity: 60,
    registered: 34,
    organizer: 'PMI Jawa Timur',
    description: 'Donor darah rutin PMI Surabaya'
  },
  {
    id: 6,
    title: 'Mobile Drive - Mall Tunjungan Plaza',
    start: '2026-01-27T11:00:00',
    end: '2026-01-27T17:00:00',
    location: 'Tunjungan Plaza, Surabaya',
    type: 'mobile',
    bloodTypesNeeded: [],
    capacity: 80,
    registered: 12,
    organizer: 'PMI Surabaya',
    description: 'Donor darah di mall Tunjungan Plaza'
  },
  {
    id: 7,
    title: 'Donor Darah ITB',
    start: '2026-01-23T09:00:00',
    end: '2026-01-23T15:00:00',
    location: 'Institut Teknologi Bandung',
    type: 'mobile',
    bloodTypesNeeded: ['O+', 'A+'],
    capacity: 120,
    registered: 103,
    organizer: 'PMI Bandung & ITB',
    description: 'Kegiatan donor darah mahasiswa ITB'
  },
  {
    id: 8,
    title: 'Donor Darah PMI Medan',
    start: '2026-01-19T08:00:00',
    end: '2026-01-19T14:00:00',
    location: 'PMI Medan, Jl. Listrik',
    type: 'fixed',
    bloodTypesNeeded: ['AB-', 'B-'],
    capacity: 40,
    registered: 18,
    organizer: 'PMI Sumatera Utara',
    description: 'Donor darah rutin PMI Medan'
  }
];

// Mock Patient Data
const patientData = [
  {
    id: 1,
    name: 'Ahmad Rizki',
    age: 12,
    bloodType: 'B+',
    diagnosis: 'Thalassemia Major',
    frequency: 'Setiap 2 minggu',
    hospital: 'RS Cipto Mangunkusumo, Jakarta',
    location: 'Jakarta',
    matchStatus: 'matched',
    donorId: 2,
    nextTransfusion: '2026-01-25',
    profilePicture: null
  },
  {
    id: 2,
    name: 'Siti Aminah',
    age: 8,
    bloodType: 'O-',
    diagnosis: 'Thalassemia Major',
    frequency: 'Setiap 3 minggu',
    hospital: 'RS Soetomo, Surabaya',
    location: 'Surabaya',
    matchStatus: 'matched',
    donorId: 5,
    nextTransfusion: '2026-01-30',
    profilePicture: null
  },
  {
    id: 3,
    name: 'Budi Santoso',
    age: 15,
    bloodType: 'A+',
    diagnosis: 'Aplastic Anemia',
    frequency: 'Setiap bulan',
    hospital: 'RS Hasan Sadikin, Bandung',
    location: 'Bandung',
    matchStatus: 'searching',
    donorId: null,
    nextTransfusion: '2026-02-05',
    profilePicture: null
  },
  {
    id: 4,
    name: 'Dewi Lestari',
    age: 10,
    bloodType: 'AB+',
    diagnosis: 'Thalassemia Intermedia',
    frequency: 'Setiap bulan',
    hospital: 'RS Sardjito, Yogyakarta',
    location: 'Yogyakarta',
    matchStatus: 'matched',
    donorId: 8,
    nextTransfusion: '2026-02-01',
    profilePicture: null
  },
  {
    id: 5,
    name: 'Rudi Hermawan',
    age: 14,
    bloodType: 'B-',
    diagnosis: 'Thalassemia Major',
    frequency: 'Setiap 2 minggu',
    hospital: 'RS Adam Malik, Medan',
    location: 'Medan',
    matchStatus: 'searching',
    donorId: null,
    nextTransfusion: '2026-01-28',
    profilePicture: null
  }
];

// Mock Donor Data
const donorData = [
  {
    id: 1,
    name: 'Andi Wijaya',
    age: 32,
    bloodType: 'A+',
    totalDonations: 24,
    lastDonation: '2025-12-15',
    frequency: 'Setiap 3 bulan',
    location: 'Jakarta Selatan',
    availability: 'Tersedia',
    matchedPatientId: null,
    joinDate: '2020-03-10'
  },
  {
    id: 2,
    name: 'Rina Susanti',
    age: 28,
    bloodType: 'B+',
    totalDonations: 18,
    lastDonation: '2026-01-05',
    frequency: 'Setiap 3 bulan',
    location: 'Jakarta Pusat',
    availability: 'Terjadwal',
    matchedPatientId: 1,
    joinDate: '2021-06-20'
  },
  {
    id: 3,
    name: 'Bambang Hartono',
    age: 45,
    bloodType: 'O+',
    totalDonations: 42,
    lastDonation: '2025-11-22',
    frequency: 'Setiap 2 bulan',
    location: 'Tangerang',
    availability: 'Tersedia',
    matchedPatientId: null,
    joinDate: '2015-01-15'
  },
  {
    id: 4,
    name: 'Linda Kusuma',
    age: 35,
    bloodType: 'AB+',
    totalDonations: 15,
    lastDonation: '2025-12-28',
    frequency: 'Setiap 4 bulan',
    location: 'Jakarta Barat',
    availability: 'Tersedia',
    matchedPatientId: null,
    joinDate: '2022-08-05'
  },
  {
    id: 5,
    name: 'Hendra Gunawan',
    age: 38,
    bloodType: 'O-',
    totalDonations: 31,
    lastDonation: '2026-01-08',
    frequency: 'Setiap 3 bulan',
    location: 'Surabaya',
    availability: 'Terjadwal',
    matchedPatientId: 2,
    joinDate: '2018-04-12'
  },
  {
    id: 6,
    name: 'Sri Wahyuni',
    age: 29,
    bloodType: 'A-',
    totalDonations: 12,
    lastDonation: '2025-12-01',
    frequency: 'Setiap 3 bulan',
    location: 'Bandung',
    availability: 'Tersedia',
    matchedPatientId: null,
    joinDate: '2022-11-20'
  },
  {
    id: 7,
    name: 'Agus Setiawan',
    age: 41,
    bloodType: 'B-',
    totalDonations: 27,
    lastDonation: '2025-11-18',
    frequency: 'Setiap 3 bulan',
    location: 'Semarang',
    availability: 'Tersedia',
    matchedPatientId: null,
    joinDate: '2017-09-08'
  },
  {
    id: 8,
    name: 'Mega Pratiwi',
    age: 33,
    bloodType: 'AB+',
    totalDonations: 20,
    lastDonation: '2026-01-02',
    frequency: 'Setiap 3 bulan',
    location: 'Yogyakarta',
    availability: 'Terjadwal',
    matchedPatientId: 4,
    joinDate: '2020-07-25'
  }
];

// Mock Match Data
const matchData = [
  {
    id: 1,
    patientId: 1,
    donorId: 2,
    compatibilityScore: 95,
    matchedDate: '2025-06-15',
    status: 'active',
    totalDonations: 12,
    nextScheduledDonation: '2026-01-25',
    lastCommunication: '2026-01-10'
  },
  {
    id: 2,
    patientId: 2,
    donorId: 5,
    compatibilityScore: 92,
    matchedDate: '2025-08-20',
    status: 'active',
    totalDonations: 8,
    nextScheduledDonation: '2026-01-30',
    lastCommunication: '2026-01-12'
  },
  {
    id: 3,
    patientId: 4,
    donorId: 8,
    compatibilityScore: 88,
    matchedDate: '2025-10-05',
    status: 'active',
    totalDonations: 4,
    nextScheduledDonation: '2026-02-01',
    lastCommunication: '2026-01-15'
  }
];

// Helper Functions
function getBloodStockByCity(city) {
  return bloodStockData.filter(stock => stock.city === city);
}

function getBloodStockByProvince(province) {
  return bloodStockData.filter(stock => stock.province === province);
}

function getEventsByDateRange(startDate, endDate) {
  return calendarEvents.filter(event => {
    const eventDate = new Date(event.start);
    return eventDate >= new Date(startDate) && eventDate <= new Date(endDate);
  });
}

function getPatientsByStatus(status) {
  return patientData.filter(patient => patient.matchStatus === status);
}

function getDonorsByAvailability(availability) {
  return donorData.filter(donor => donor.availability === availability);
}

function getMatchesByStatus(status) {
  return matchData.filter(match => match.status === status);
}

// Export all data
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    BLOOD_TYPES,
    PROVINCES,
    bloodStockData,
    calendarEvents,
    patientData,
    donorData,
    matchData,
    getBloodStockByCity,
    getBloodStockByProvince,
    getEventsByDateRange,
    getPatientsByStatus,
    getDonorsByAvailability,
    getMatchesByStatus
  };
}
