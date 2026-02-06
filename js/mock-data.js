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
  { id: 18, city: 'Bandung', province: 'Jawa Barat', bloodType: 'A-', units: 18, status: 'low', lastUpdate: '2026-01-17T13:30:00' },
  { id: 19, city: 'Bandung', province: 'Jawa Barat', bloodType: 'B+', units: 67, status: 'sufficient', lastUpdate: '2026-01-17T13:30:00' },
  { id: 20, city: 'Bandung', province: 'Jawa Barat', bloodType: 'B-', units: 9, status: 'critical', lastUpdate: '2026-01-17T13:30:00' },
  { id: 21, city: 'Bandung', province: 'Jawa Barat', bloodType: 'AB+', units: 38, status: 'low', lastUpdate: '2026-01-17T13:30:00' },
  { id: 22, city: 'Bandung', province: 'Jawa Barat', bloodType: 'AB-', units: 7, status: 'critical', lastUpdate: '2026-01-17T13:30:00' },
  { id: 23, city: 'Bandung', province: 'Jawa Barat', bloodType: 'O+', units: 134, status: 'sufficient', lastUpdate: '2026-01-17T13:30:00' },
  { id: 24, city: 'Bandung', province: 'Jawa Barat', bloodType: 'O-', units: 6, status: 'critical', lastUpdate: '2026-01-17T13:30:00' },

  // Medan
  { id: 25, city: 'Medan', province: 'Sumatera Utara', bloodType: 'A+', units: 78, status: 'sufficient', lastUpdate: '2026-01-17T13:50:00' },
  { id: 26, city: 'Medan', province: 'Sumatera Utara', bloodType: 'A-', units: 12, status: 'critical', lastUpdate: '2026-01-17T13:50:00' },
  { id: 27, city: 'Medan', province: 'Sumatera Utara', bloodType: 'B+', units: 65, status: 'sufficient', lastUpdate: '2026-01-17T13:50:00' },
  { id: 28, city: 'Medan', province: 'Sumatera Utara', bloodType: 'B-', units: 4, status: 'critical', lastUpdate: '2026-01-17T13:50:00' },
  { id: 29, city: 'Medan', province: 'Sumatera Utara', bloodType: 'AB+', units: 29, status: 'low', lastUpdate: '2026-01-17T13:50:00' },
  { id: 30, city: 'Medan', province: 'Sumatera Utara', bloodType: 'AB-', units: 3, status: 'critical', lastUpdate: '2026-01-17T13:50:00' },
  { id: 31, city: 'Medan', province: 'Sumatera Utara', bloodType: 'O+', units: 102, status: 'sufficient', lastUpdate: '2026-01-17T13:50:00' },
  { id: 32, city: 'Medan', province: 'Sumatera Utara', bloodType: 'O-', units: 8, status: 'critical', lastUpdate: '2026-01-17T13:50:00' },

  // Semarang
  { id: 33, city: 'Semarang', province: 'Jawa Tengah', bloodType: 'A+', units: 85, status: 'sufficient', lastUpdate: '2026-01-17T14:15:00' },
  { id: 34, city: 'Semarang', province: 'Jawa Tengah', bloodType: 'A-', units: 14, status: 'low', lastUpdate: '2026-01-17T14:15:00' },
  { id: 35, city: 'Semarang', province: 'Jawa Tengah', bloodType: 'B+', units: 72, status: 'sufficient', lastUpdate: '2026-01-17T14:15:00' },
  { id: 36, city: 'Semarang', province: 'Jawa Tengah', bloodType: 'B-', units: 6, status: 'critical', lastUpdate: '2026-01-17T14:15:00' },
  { id: 37, city: 'Semarang', province: 'Jawa Tengah', bloodType: 'AB+', units: 31, status: 'low', lastUpdate: '2026-01-17T14:15:00' },
  { id: 38, city: 'Semarang', province: 'Jawa Tengah', bloodType: 'AB-', units: 5, status: 'critical', lastUpdate: '2026-01-17T14:15:00' },
  { id: 39, city: 'Semarang', province: 'Jawa Tengah', bloodType: 'O+', units: 118, status: 'sufficient', lastUpdate: '2026-01-17T14:15:00' },
  { id: 40, city: 'Semarang', province: 'Jawa Tengah', bloodType: 'O-', units: 9, status: 'critical', lastUpdate: '2026-01-17T14:15:00' },

  // Yogyakarta
  { id: 41, city: 'Yogyakarta', province: 'DI Yogyakarta', bloodType: 'A+', units: 95, status: 'sufficient', lastUpdate: '2026-01-17T14:20:00' },
  { id: 42, city: 'Yogyakarta', province: 'DI Yogyakarta', bloodType: 'A-', units: 17, status: 'low', lastUpdate: '2026-01-17T14:20:00' },
  { id: 43, city: 'Yogyakarta', province: 'DI Yogyakarta', bloodType: 'B+', units: 81, status: 'sufficient', lastUpdate: '2026-01-17T14:20:00' },
  { id: 44, city: 'Yogyakarta', province: 'DI Yogyakarta', bloodType: 'B-', units: 8, status: 'critical', lastUpdate: '2026-01-17T14:20:00' },
  { id: 45, city: 'Yogyakarta', province: 'DI Yogyakarta', bloodType: 'AB+', units: 42, status: 'low', lastUpdate: '2026-01-17T14:20:00' },
  { id: 46, city: 'Yogyakarta', province: 'DI Yogyakarta', bloodType: 'AB-', units: 6, status: 'critical', lastUpdate: '2026-01-17T14:20:00' },
  { id: 47, city: 'Yogyakarta', province: 'DI Yogyakarta', bloodType: 'O+', units: 128, status: 'sufficient', lastUpdate: '2026-01-17T14:20:00' },
  { id: 48, city: 'Yogyakarta', province: 'DI Yogyakarta', bloodType: 'O-', units: 13, status: 'critical', lastUpdate: '2026-01-17T14:20:00' },

  // Malang
  { id: 49, city: 'Malang', province: 'Jawa Timur', bloodType: 'A+', units: 68, status: 'sufficient', lastUpdate: '2026-01-17T14:25:00' },
  { id: 50, city: 'Malang', province: 'Jawa Timur', bloodType: 'A-', units: 11, status: 'critical', lastUpdate: '2026-01-17T14:25:00' },
  { id: 51, city: 'Malang', province: 'Jawa Timur', bloodType: 'B+', units: 59, status: 'sufficient', lastUpdate: '2026-01-17T14:25:00' },
  { id: 52, city: 'Malang', province: 'Jawa Timur', bloodType: 'B-', units: 5, status: 'critical', lastUpdate: '2026-01-17T14:25:00' },
  { id: 53, city: 'Malang', province: 'Jawa Timur', bloodType: 'AB+', units: 27, status: 'low', lastUpdate: '2026-01-17T14:25:00' },
  { id: 54, city: 'Malang', province: 'Jawa Timur', bloodType: 'AB-', units: 4, status: 'critical', lastUpdate: '2026-01-17T14:25:00' },
  { id: 55, city: 'Malang', province: 'Jawa Timur', bloodType: 'O+', units: 94, status: 'sufficient', lastUpdate: '2026-01-17T14:25:00' },
  { id: 56, city: 'Malang', province: 'Jawa Timur', bloodType: 'O-', units: 7, status: 'critical', lastUpdate: '2026-01-17T14:25:00' },

  // Solo
  { id: 57, city: 'Solo', province: 'Jawa Tengah', bloodType: 'A+', units: 62, status: 'sufficient', lastUpdate: '2026-01-17T14:30:00' },
  { id: 58, city: 'Solo', province: 'Jawa Tengah', bloodType: 'A-', units: 10, status: 'critical', lastUpdate: '2026-01-17T14:30:00' },
  { id: 59, city: 'Solo', province: 'Jawa Tengah', bloodType: 'B+', units: 54, status: 'sufficient', lastUpdate: '2026-01-17T14:30:00' },
  { id: 60, city: 'Solo', province: 'Jawa Tengah', bloodType: 'B-', units: 4, status: 'critical', lastUpdate: '2026-01-17T14:30:00' },
  { id: 61, city: 'Solo', province: 'Jawa Tengah', bloodType: 'AB+', units: 24, status: 'low', lastUpdate: '2026-01-17T14:30:00' },
  { id: 62, city: 'Solo', province: 'Jawa Tengah', bloodType: 'AB-', units: 3, status: 'critical', lastUpdate: '2026-01-17T14:30:00' },
  { id: 63, city: 'Solo', province: 'Jawa Tengah', bloodType: 'O+', units: 87, status: 'sufficient', lastUpdate: '2026-01-17T14:30:00' },
  { id: 64, city: 'Solo', province: 'Jawa Tengah', bloodType: 'O-', units: 6, status: 'critical', lastUpdate: '2026-01-17T14:30:00' },

  // Bogor
  { id: 65, city: 'Bogor', province: 'Jawa Barat', bloodType: 'A+', units: 76, status: 'sufficient', lastUpdate: '2026-01-17T14:35:00' },
  { id: 66, city: 'Bogor', province: 'Jawa Barat', bloodType: 'A-', units: 13, status: 'critical', lastUpdate: '2026-01-17T14:35:00' },
  { id: 67, city: 'Bogor', province: 'Jawa Barat', bloodType: 'B+', units: 64, status: 'sufficient', lastUpdate: '2026-01-17T14:35:00' },
  { id: 68, city: 'Bogor', province: 'Jawa Barat', bloodType: 'B-', units: 7, status: 'critical', lastUpdate: '2026-01-17T14:35:00' },
  { id: 69, city: 'Bogor', province: 'Jawa Barat', bloodType: 'AB+', units: 32, status: 'low', lastUpdate: '2026-01-17T14:35:00' },
  { id: 70, city: 'Bogor', province: 'Jawa Barat', bloodType: 'AB-', units: 5, status: 'critical', lastUpdate: '2026-01-17T14:35:00' },
  { id: 71, city: 'Bogor', province: 'Jawa Barat', bloodType: 'O+', units: 105, status: 'sufficient', lastUpdate: '2026-01-17T14:35:00' },
  { id: 72, city: 'Bogor', province: 'Jawa Barat', bloodType: 'O-', units: 8, status: 'critical', lastUpdate: '2026-01-17T14:35:00' },

  // Depok
  { id: 73, city: 'Depok', province: 'Jawa Barat', bloodType: 'A+', units: 71, status: 'sufficient', lastUpdate: '2026-01-17T14:40:00' },
  { id: 74, city: 'Depok', province: 'Jawa Barat', bloodType: 'A-', units: 12, status: 'critical', lastUpdate: '2026-01-17T14:40:00' },
  { id: 75, city: 'Depok', province: 'Jawa Barat', bloodType: 'B+', units: 61, status: 'sufficient', lastUpdate: '2026-01-17T14:40:00' },
  { id: 76, city: 'Depok', province: 'Jawa Barat', bloodType: 'B-', units: 6, status: 'critical', lastUpdate: '2026-01-17T14:40:00' },
  { id: 77, city: 'Depok', province: 'Jawa Barat', bloodType: 'AB+', units: 28, status: 'low', lastUpdate: '2026-01-17T14:40:00' },
  { id: 78, city: 'Depok', province: 'Jawa Barat', bloodType: 'AB-', units: 4, status: 'critical', lastUpdate: '2026-01-17T14:40:00' },
  { id: 79, city: 'Depok', province: 'Jawa Barat', bloodType: 'O+', units: 98, status: 'sufficient', lastUpdate: '2026-01-17T14:40:00' },
  { id: 80, city: 'Depok', province: 'Jawa Barat', bloodType: 'O-', units: 7, status: 'critical', lastUpdate: '2026-01-17T14:40:00' },

  // Bekasi
  { id: 81, city: 'Bekasi', province: 'Jawa Barat', bloodType: 'A+', units: 88, status: 'sufficient', lastUpdate: '2026-01-17T14:45:00' },
  { id: 82, city: 'Bekasi', province: 'Jawa Barat', bloodType: 'A-', units: 16, status: 'low', lastUpdate: '2026-01-17T14:45:00' },
  { id: 83, city: 'Bekasi', province: 'Jawa Barat', bloodType: 'B+', units: 75, status: 'sufficient', lastUpdate: '2026-01-17T14:45:00' },
  { id: 84, city: 'Bekasi', province: 'Jawa Barat', bloodType: 'B-', units: 8, status: 'critical', lastUpdate: '2026-01-17T14:45:00' },
  { id: 85, city: 'Bekasi', province: 'Jawa Barat', bloodType: 'AB+', units: 36, status: 'low', lastUpdate: '2026-01-17T14:45:00' },
  { id: 86, city: 'Bekasi', province: 'Jawa Barat', bloodType: 'AB-', units: 6, status: 'critical', lastUpdate: '2026-01-17T14:45:00' },
  { id: 87, city: 'Bekasi', province: 'Jawa Barat', bloodType: 'O+', units: 122, status: 'sufficient', lastUpdate: '2026-01-17T14:45:00' },
  { id: 88, city: 'Bekasi', province: 'Jawa Barat', bloodType: 'O-', units: 10, status: 'critical', lastUpdate: '2026-01-17T14:45:00' },

  // Palembang
  { id: 89, city: 'Palembang', province: 'Sumatera Selatan', bloodType: 'A+', units: 73, status: 'sufficient', lastUpdate: '2026-01-17T14:50:00' },
  { id: 90, city: 'Palembang', province: 'Sumatera Selatan', bloodType: 'A-', units: 11, status: 'critical', lastUpdate: '2026-01-17T14:50:00' },
  { id: 91, city: 'Palembang', province: 'Sumatera Selatan', bloodType: 'B+', units: 63, status: 'sufficient', lastUpdate: '2026-01-17T14:50:00' },
  { id: 92, city: 'Palembang', province: 'Sumatera Selatan', bloodType: 'B-', units: 5, status: 'critical', lastUpdate: '2026-01-17T14:50:00' },
  { id: 93, city: 'Palembang', province: 'Sumatera Selatan', bloodType: 'AB+', units: 26, status: 'low', lastUpdate: '2026-01-17T14:50:00' },
  { id: 94, city: 'Palembang', province: 'Sumatera Selatan', bloodType: 'AB-', units: 4, status: 'critical', lastUpdate: '2026-01-17T14:50:00' },
  { id: 95, city: 'Palembang', province: 'Sumatera Selatan', bloodType: 'O+', units: 101, status: 'sufficient', lastUpdate: '2026-01-17T14:50:00' },
  { id: 96, city: 'Palembang', province: 'Sumatera Selatan', bloodType: 'O-', units: 7, status: 'critical', lastUpdate: '2026-01-17T14:50:00' },

  // Padang
  { id: 97, city: 'Padang', province: 'Sumatera Barat', bloodType: 'A+', units: 66, status: 'sufficient', lastUpdate: '2026-01-17T14:55:00' },
  { id: 98, city: 'Padang', province: 'Sumatera Barat', bloodType: 'A-', units: 9, status: 'critical', lastUpdate: '2026-01-17T14:55:00' },
  { id: 99, city: 'Padang', province: 'Sumatera Barat', bloodType: 'B+', units: 57, status: 'sufficient', lastUpdate: '2026-01-17T14:55:00' },
  { id: 100, city: 'Padang', province: 'Sumatera Barat', bloodType: 'B-', units: 4, status: 'critical', lastUpdate: '2026-01-17T14:55:00' },
  { id: 101, city: 'Padang', province: 'Sumatera Barat', bloodType: 'AB+', units: 23, status: 'low', lastUpdate: '2026-01-17T14:55:00' },
  { id: 102, city: 'Padang', province: 'Sumatera Barat', bloodType: 'AB-', units: 3, status: 'critical', lastUpdate: '2026-01-17T14:55:00' },
  { id: 103, city: 'Padang', province: 'Sumatera Barat', bloodType: 'O+', units: 92, status: 'sufficient', lastUpdate: '2026-01-17T14:55:00' },
  { id: 104, city: 'Padang', province: 'Sumatera Barat', bloodType: 'O-', units: 6, status: 'critical', lastUpdate: '2026-01-17T14:55:00' },

  // Pekanbaru
  { id: 105, city: 'Pekanbaru', province: 'Riau', bloodType: 'A+', units: 69, status: 'sufficient', lastUpdate: '2026-01-17T15:00:00' },
  { id: 106, city: 'Pekanbaru', province: 'Riau', bloodType: 'A-', units: 10, status: 'critical', lastUpdate: '2026-01-17T15:00:00' },
  { id: 107, city: 'Pekanbaru', province: 'Riau', bloodType: 'B+', units: 60, status: 'sufficient', lastUpdate: '2026-01-17T15:00:00' },
  { id: 108, city: 'Pekanbaru', province: 'Riau', bloodType: 'B-', units: 5, status: 'critical', lastUpdate: '2026-01-17T15:00:00' },
  { id: 109, city: 'Pekanbaru', province: 'Riau', bloodType: 'AB+', units: 25, status: 'low', lastUpdate: '2026-01-17T15:00:00' },
  { id: 110, city: 'Pekanbaru', province: 'Riau', bloodType: 'AB-', units: 3, status: 'critical', lastUpdate: '2026-01-17T15:00:00' },
  { id: 111, city: 'Pekanbaru', province: 'Riau', bloodType: 'O+', units: 96, status: 'sufficient', lastUpdate: '2026-01-17T15:00:00' },
  { id: 112, city: 'Pekanbaru', province: 'Riau', bloodType: 'O-', units: 6, status: 'critical', lastUpdate: '2026-01-17T15:00:00' },

  // Balikpapan
  { id: 113, city: 'Balikpapan', province: 'Kalimantan Timur', bloodType: 'A+', units: 58, status: 'sufficient', lastUpdate: '2026-01-17T15:05:00' },
  { id: 114, city: 'Balikpapan', province: 'Kalimantan Timur', bloodType: 'A-', units: 8, status: 'critical', lastUpdate: '2026-01-17T15:05:00' },
  { id: 115, city: 'Balikpapan', province: 'Kalimantan Timur', bloodType: 'B+', units: 51, status: 'sufficient', lastUpdate: '2026-01-17T15:05:00' },
  { id: 116, city: 'Balikpapan', province: 'Kalimantan Timur', bloodType: 'B-', units: 3, status: 'critical', lastUpdate: '2026-01-17T15:05:00' },
  { id: 117, city: 'Balikpapan', province: 'Kalimantan Timur', bloodType: 'AB+', units: 21, status: 'low', lastUpdate: '2026-01-17T15:05:00' },
  { id: 118, city: 'Balikpapan', province: 'Kalimantan Timur', bloodType: 'AB-', units: 2, status: 'critical', lastUpdate: '2026-01-17T15:05:00' },
  { id: 119, city: 'Balikpapan', province: 'Kalimantan Timur', bloodType: 'O+', units: 81, status: 'sufficient', lastUpdate: '2026-01-17T15:05:00' },
  { id: 120, city: 'Balikpapan', province: 'Kalimantan Timur', bloodType: 'O-', units: 5, status: 'critical', lastUpdate: '2026-01-17T15:05:00' },

  // Samarinda
  { id: 121, city: 'Samarinda', province: 'Kalimantan Timur', bloodType: 'A+', units: 54, status: 'sufficient', lastUpdate: '2026-01-17T15:10:00' },
  { id: 122, city: 'Samarinda', province: 'Kalimantan Timur', bloodType: 'A-', units: 7, status: 'critical', lastUpdate: '2026-01-17T15:10:00' },
  { id: 123, city: 'Samarinda', province: 'Kalimantan Timur', bloodType: 'B+', units: 47, status: 'low', lastUpdate: '2026-01-17T15:10:00' },
  { id: 124, city: 'Samarinda', province: 'Kalimantan Timur', bloodType: 'B-', units: 3, status: 'critical', lastUpdate: '2026-01-17T15:10:00' },
  { id: 125, city: 'Samarinda', province: 'Kalimantan Timur', bloodType: 'AB+', units: 19, status: 'critical', lastUpdate: '2026-01-17T15:10:00' },
  { id: 126, city: 'Samarinda', province: 'Kalimantan Timur', bloodType: 'AB-', units: 2, status: 'critical', lastUpdate: '2026-01-17T15:10:00' },
  { id: 127, city: 'Samarinda', province: 'Kalimantan Timur', bloodType: 'O+', units: 75, status: 'sufficient', lastUpdate: '2026-01-17T15:10:00' },
  { id: 128, city: 'Samarinda', province: 'Kalimantan Timur', bloodType: 'O-', units: 4, status: 'critical', lastUpdate: '2026-01-17T15:10:00' },

  // Pontianak
  { id: 129, city: 'Pontianak', province: 'Kalimantan Barat', bloodType: 'A+', units: 61, status: 'sufficient', lastUpdate: '2026-01-17T15:15:00' },
  { id: 130, city: 'Pontianak', province: 'Kalimantan Barat', bloodType: 'A-', units: 9, status: 'critical', lastUpdate: '2026-01-17T15:15:00' },
  { id: 131, city: 'Pontianak', province: 'Kalimantan Barat', bloodType: 'B+', units: 53, status: 'sufficient', lastUpdate: '2026-01-17T15:15:00' },
  { id: 132, city: 'Pontianak', province: 'Kalimantan Barat', bloodType: 'B-', units: 4, status: 'critical', lastUpdate: '2026-01-17T15:15:00' },
  { id: 133, city: 'Pontianak', province: 'Kalimantan Barat', bloodType: 'AB+', units: 22, status: 'low', lastUpdate: '2026-01-17T15:15:00' },
  { id: 134, city: 'Pontianak', province: 'Kalimantan Barat', bloodType: 'AB-', units: 3, status: 'critical', lastUpdate: '2026-01-17T15:15:00' },
  { id: 135, city: 'Pontianak', province: 'Kalimantan Barat', bloodType: 'O+', units: 85, status: 'sufficient', lastUpdate: '2026-01-17T15:15:00' },
  { id: 136, city: 'Pontianak', province: 'Kalimantan Barat', bloodType: 'O-', units: 5, status: 'critical', lastUpdate: '2026-01-17T15:15:00' },

  // Banjarmasin
  { id: 137, city: 'Banjarmasin', province: 'Kalimantan Selatan', bloodType: 'A+', units: 64, status: 'sufficient', lastUpdate: '2026-01-17T15:20:00' },
  { id: 138, city: 'Banjarmasin', province: 'Kalimantan Selatan', bloodType: 'A-', units: 10, status: 'critical', lastUpdate: '2026-01-17T15:20:00' },
  { id: 139, city: 'Banjarmasin', province: 'Kalimantan Selatan', bloodType: 'B+', units: 56, status: 'sufficient', lastUpdate: '2026-01-17T15:20:00' },
  { id: 140, city: 'Banjarmasin', province: 'Kalimantan Selatan', bloodType: 'B-', units: 4, status: 'critical', lastUpdate: '2026-01-17T15:20:00' },
  { id: 141, city: 'Banjarmasin', province: 'Kalimantan Selatan', bloodType: 'AB+', units: 24, status: 'low', lastUpdate: '2026-01-17T15:20:00' },
  { id: 142, city: 'Banjarmasin', province: 'Kalimantan Selatan', bloodType: 'AB-', units: 3, status: 'critical', lastUpdate: '2026-01-17T15:20:00' },
  { id: 143, city: 'Banjarmasin', province: 'Kalimantan Selatan', bloodType: 'O+', units: 89, status: 'sufficient', lastUpdate: '2026-01-17T15:20:00' },
  { id: 144, city: 'Banjarmasin', province: 'Kalimantan Selatan', bloodType: 'O-', units: 6, status: 'critical', lastUpdate: '2026-01-17T15:20:00' },

  // Makassar
  { id: 145, city: 'Makassar', province: 'Sulawesi Selatan', bloodType: 'A+', units: 82, status: 'sufficient', lastUpdate: '2026-01-17T15:25:00' },
  { id: 146, city: 'Makassar', province: 'Sulawesi Selatan', bloodType: 'A-', units: 14, status: 'low', lastUpdate: '2026-01-17T15:25:00' },
  { id: 147, city: 'Makassar', province: 'Sulawesi Selatan', bloodType: 'B+', units: 71, status: 'sufficient', lastUpdate: '2026-01-17T15:25:00' },
  { id: 148, city: 'Makassar', province: 'Sulawesi Selatan', bloodType: 'B-', units: 7, status: 'critical', lastUpdate: '2026-01-17T15:25:00' },
  { id: 149, city: 'Makassar', province: 'Sulawesi Selatan', bloodType: 'AB+', units: 33, status: 'low', lastUpdate: '2026-01-17T15:25:00' },
  { id: 150, city: 'Makassar', province: 'Sulawesi Selatan', bloodType: 'AB-', units: 5, status: 'critical', lastUpdate: '2026-01-17T15:25:00' },
  { id: 151, city: 'Makassar', province: 'Sulawesi Selatan', bloodType: 'O+', units: 114, status: 'sufficient', lastUpdate: '2026-01-17T15:25:00' },
  { id: 152, city: 'Makassar', province: 'Sulawesi Selatan', bloodType: 'O-', units: 9, status: 'critical', lastUpdate: '2026-01-17T15:25:00' },

  // Manado
  { id: 153, city: 'Manado', province: 'Sulawesi Utara', bloodType: 'A+', units: 57, status: 'sufficient', lastUpdate: '2026-01-17T15:30:00' },
  { id: 154, city: 'Manado', province: 'Sulawesi Utara', bloodType: 'A-', units: 8, status: 'critical', lastUpdate: '2026-01-17T15:30:00' },
  { id: 155, city: 'Manado', province: 'Sulawesi Utara', bloodType: 'B+', units: 49, status: 'low', lastUpdate: '2026-01-17T15:30:00' },
  { id: 156, city: 'Manado', province: 'Sulawesi Utara', bloodType: 'B-', units: 3, status: 'critical', lastUpdate: '2026-01-17T15:30:00' },
  { id: 157, city: 'Manado', province: 'Sulawesi Utara', bloodType: 'AB+', units: 20, status: 'low', lastUpdate: '2026-01-17T15:30:00' },
  { id: 158, city: 'Manado', province: 'Sulawesi Utara', bloodType: 'AB-', units: 2, status: 'critical', lastUpdate: '2026-01-17T15:30:00' },
  { id: 159, city: 'Manado', province: 'Sulawesi Utara', bloodType: 'O+', units: 79, status: 'sufficient', lastUpdate: '2026-01-17T15:30:00' },
  { id: 160, city: 'Manado', province: 'Sulawesi Utara', bloodType: 'O-', units: 5, status: 'critical', lastUpdate: '2026-01-17T15:30:00' },

  // Denpasar
  { id: 161, city: 'Denpasar', province: 'Bali', bloodType: 'A+', units: 103, status: 'sufficient', lastUpdate: '2026-01-17T15:35:00' },
  { id: 162, city: 'Denpasar', province: 'Bali', bloodType: 'A-', units: 19, status: 'low', lastUpdate: '2026-01-17T15:35:00' },
  { id: 163, city: 'Denpasar', province: 'Bali', bloodType: 'B+', units: 88, status: 'sufficient', lastUpdate: '2026-01-17T15:35:00' },
  { id: 164, city: 'Denpasar', province: 'Bali', bloodType: 'B-', units: 9, status: 'critical', lastUpdate: '2026-01-17T15:35:00' },
  { id: 165, city: 'Denpasar', province: 'Bali', bloodType: 'AB+', units: 41, status: 'low', lastUpdate: '2026-01-17T15:35:00' },
  { id: 166, city: 'Denpasar', province: 'Bali', bloodType: 'AB-', units: 7, status: 'critical', lastUpdate: '2026-01-17T15:35:00' },
  { id: 167, city: 'Denpasar', province: 'Bali', bloodType: 'O+', units: 142, status: 'sufficient', lastUpdate: '2026-01-17T15:35:00' },
  { id: 168, city: 'Denpasar', province: 'Bali', bloodType: 'O-', units: 12, status: 'critical', lastUpdate: '2026-01-17T15:35:00' },
];

// Mock Calendar Events
const calendarEvents = [
  // JANUARI 2026
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
    location: 'RS Cipto Mangunkusumo, Jakarta',
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
    location: 'Kampus UI, Depok',
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
  },
  {
    id: 9,
    title: 'Donor Darah UGM',
    start: '2026-01-28T09:00:00',
    end: '2026-01-28T15:00:00',
    location: 'Universitas Gadjah Mada, Yogyakarta',
    type: 'mobile',
    bloodTypesNeeded: ['A+', 'B+'],
    capacity: 130,
    registered: 78,
    organizer: 'PMI Yogyakarta & UGM',
    description: 'Donor darah mahasiswa UGM'
  },
  {
    id: 10,
    title: 'Mobile Drive - Grand Indonesia',
    start: '2026-01-30T10:00:00',
    end: '2026-01-30T16:00:00',
    location: 'Grand Indonesia Mall, Jakarta',
    type: 'mobile',
    bloodTypesNeeded: [],
    capacity: 90,
    registered: 45,
    organizer: 'PMI Jakarta',
    description: 'Donor darah di Grand Indonesia'
  },

  // FEBRUARI 2026
  {
    id: 11,
    title: 'Donor Darah PMI Semarang',
    start: '2026-02-03T08:00:00',
    end: '2026-02-03T14:00:00',
    location: 'PMI Semarang, Jl. Pemuda',
    type: 'fixed',
    bloodTypesNeeded: ['O-', 'AB-'],
    capacity: 55,
    registered: 28,
    organizer: 'PMI Jawa Tengah',
    description: 'Donor darah rutin PMI Semarang'
  },
  {
    id: 12,
    title: 'Mobile Drive - Universitas Brawijaya',
    start: '2026-02-05T09:00:00',
    end: '2026-02-05T15:00:00',
    location: 'Universitas Brawijaya, Malang',
    type: 'mobile',
    bloodTypesNeeded: ['A+', 'O+'],
    capacity: 110,
    registered: 65,
    organizer: 'PMI Malang & UB',
    description: 'Donor darah mahasiswa Universitas Brawijaya'
  },
  {
    id: 13,
    title: 'Donor Darah PMI Denpasar',
    start: '2026-02-07T08:00:00',
    end: '2026-02-07T14:00:00',
    location: 'PMI Denpasar, Jl. Hayam Wuruk',
    type: 'fixed',
    bloodTypesNeeded: ['B-', 'AB+'],
    capacity: 65,
    registered: 42,
    organizer: 'PMI Bali',
    description: 'Donor darah rutin PMI Denpasar'
  },
  {
    id: 14,
    title: 'URGENT: Kebutuhan Darah Darurat',
    start: '2026-02-10T07:00:00',
    end: '2026-02-10T18:00:00',
    location: 'RS Hasan Sadikin, Bandung',
    type: 'emergency',
    bloodTypesNeeded: ['O-', 'A-', 'B-'],
    capacity: 180,
    registered: 52,
    organizer: 'PMI Bandung & RSHS',
    description: 'Kampanye darurat untuk pasien kritis'
  },
  {
    id: 15,
    title: 'Mobile Drive - Mall Ciputra',
    start: '2026-02-12T10:00:00',
    end: '2026-02-12T16:00:00',
    location: 'Ciputra World, Surabaya',
    type: 'mobile',
    bloodTypesNeeded: [],
    capacity: 85,
    registered: 31,
    organizer: 'PMI Surabaya',
    description: 'Donor darah di Ciputra World'
  },
  {
    id: 16,
    title: 'Donor Darah PMI Makassar',
    start: '2026-02-14T08:00:00',
    end: '2026-02-14T14:00:00',
    location: 'PMI Makassar, Jl. Jend. Sudirman',
    type: 'fixed',
    bloodTypesNeeded: ['AB-', 'O-'],
    capacity: 50,
    registered: 19,
    organizer: 'PMI Sulawesi Selatan',
    description: 'Donor darah rutin PMI Makassar'
  },
  {
    id: 17,
    title: 'Donor Darah Unpad',
    start: '2026-02-17T09:00:00',
    end: '2026-02-17T15:00:00',
    location: 'Universitas Padjadjaran, Bandung',
    type: 'mobile',
    bloodTypesNeeded: ['A+', 'B+'],
    capacity: 125,
    registered: 88,
    organizer: 'PMI Bandung & Unpad',
    description: 'Donor darah mahasiswa Unpad'
  },
  {
    id: 18,
    title: 'Mobile Drive - Kantor Telkom',
    start: '2026-02-19T09:00:00',
    end: '2026-02-19T13:00:00',
    location: 'Telkom Indonesia, Jakarta',
    type: 'mobile',
    bloodTypesNeeded: ['O+'],
    capacity: 95,
    registered: 74,
    organizer: 'PMI Jakarta & Telkom',
    description: 'Donor darah karyawan Telkom'
  },
  {
    id: 19,
    title: 'Donor Darah PMI Palembang',
    start: '2026-02-21T08:00:00',
    end: '2026-02-21T14:00:00',
    location: 'PMI Palembang, Jl. Merdeka',
    type: 'fixed',
    bloodTypesNeeded: ['B-', 'AB-'],
    capacity: 45,
    registered: 22,
    organizer: 'PMI Sumatera Selatan',
    description: 'Donor darah rutin PMI Palembang'
  },
  {
    id: 20,
    title: 'Mobile Drive - Universitas Airlangga',
    start: '2026-02-24T09:00:00',
    end: '2026-02-24T15:00:00',
    location: 'Universitas Airlangga, Surabaya',
    type: 'mobile',
    bloodTypesNeeded: [],
    capacity: 140,
    registered: 96,
    organizer: 'PMI Surabaya & Unair',
    description: 'Donor darah mahasiswa Unair'
  },
  {
    id: 21,
    title: 'Donor Darah PMI Solo',
    start: '2026-02-26T08:00:00',
    end: '2026-02-26T14:00:00',
    location: 'PMI Solo, Jl. Slamet Riyadi',
    type: 'fixed',
    bloodTypesNeeded: ['O-', 'A-'],
    capacity: 48,
    registered: 25,
    organizer: 'PMI Jawa Tengah',
    description: 'Donor darah rutin PMI Solo'
  },
  {
    id: 22,
    title: 'Mobile Drive - Plaza Indonesia',
    start: '2026-02-28T10:00:00',
    end: '2026-02-28T16:00:00',
    location: 'Plaza Indonesia, Jakarta',
    type: 'mobile',
    bloodTypesNeeded: ['A+', 'O+'],
    capacity: 100,
    registered: 58,
    organizer: 'PMI Jakarta',
    description: 'Donor darah di Plaza Indonesia'
  },

  // MARET 2026
  {
    id: 23,
    title: 'Donor Darah PMI Bogor',
    start: '2026-03-03T08:00:00',
    end: '2026-03-03T14:00:00',
    location: 'PMI Bogor, Jl. Pajajaran',
    type: 'fixed',
    bloodTypesNeeded: ['AB-', 'B-'],
    capacity: 52,
    registered: 30,
    organizer: 'PMI Jawa Barat',
    description: 'Donor darah rutin PMI Bogor'
  },
  {
    id: 24,
    title: 'Mobile Drive - IPB University',
    start: '2026-03-05T09:00:00',
    end: '2026-03-05T15:00:00',
    location: 'IPB University, Bogor',
    type: 'mobile',
    bloodTypesNeeded: ['A+', 'B+'],
    capacity: 135,
    registered: 102,
    organizer: 'PMI Bogor & IPB',
    description: 'Donor darah mahasiswa IPB'
  },
  {
    id: 25,
    title: 'Donor Darah PMI Padang',
    start: '2026-03-07T08:00:00',
    end: '2026-03-07T14:00:00',
    location: 'PMI Padang, Jl. Dr. Sutomo',
    type: 'fixed',
    bloodTypesNeeded: ['O-', 'AB-'],
    capacity: 42,
    registered: 18,
    organizer: 'PMI Sumatera Barat',
    description: 'Donor darah rutin PMI Padang'
  },
  {
    id: 26,
    title: 'URGENT: Stok Darah Kritis',
    start: '2026-03-10T07:00:00',
    end: '2026-03-10T18:00:00',
    location: 'RS Soetomo, Surabaya',
    type: 'emergency',
    bloodTypesNeeded: ['O-', 'B-', 'AB-', 'A-'],
    capacity: 220,
    registered: 67,
    organizer: 'PMI Surabaya & RS Soetomo',
    description: 'Kampanye darurat untuk stok darah kritis'
  },
  {
    id: 27,
    title: 'Mobile Drive - Universitas Diponegoro',
    start: '2026-03-12T09:00:00',
    end: '2026-03-12T15:00:00',
    location: 'Universitas Diponegoro, Semarang',
    type: 'mobile',
    bloodTypesNeeded: [],
    capacity: 115,
    registered: 73,
    organizer: 'PMI Semarang & Undip',
    description: 'Donor darah mahasiswa Undip'
  },
  {
    id: 28,
    title: 'Donor Darah PMI Pekanbaru',
    start: '2026-03-14T08:00:00',
    end: '2026-03-14T14:00:00',
    location: 'PMI Pekanbaru, Jl. Jend. Sudirman',
    type: 'fixed',
    bloodTypesNeeded: ['B-', 'O-'],
    capacity: 38,
    registered: 15,
    organizer: 'PMI Riau',
    description: 'Donor darah rutin PMI Pekanbaru'
  },
  {
    id: 29,
    title: 'Mobile Drive - Kantor Pertamina',
    start: '2026-03-17T09:00:00',
    end: '2026-03-17T13:00:00',
    location: 'Pertamina Tower, Jakarta',
    type: 'mobile',
    bloodTypesNeeded: ['A+', 'O+'],
    capacity: 105,
    registered: 89,
    organizer: 'PMI Jakarta & Pertamina',
    description: 'Donor darah karyawan Pertamina'
  },
  {
    id: 30,
    title: 'Donor Darah PMI Balikpapan',
    start: '2026-03-19T08:00:00',
    end: '2026-03-19T14:00:00',
    location: 'PMI Balikpapan, Jl. MT Haryono',
    type: 'fixed',
    bloodTypesNeeded: ['AB-', 'A-'],
    capacity: 35,
    registered: 12,
    organizer: 'PMI Kalimantan Timur',
    description: 'Donor darah rutin PMI Balikpapan'
  },
  {
    id: 31,
    title: 'Mobile Drive - Universitas Sebelas Maret',
    start: '2026-03-21T09:00:00',
    end: '2026-03-21T15:00:00',
    location: 'Universitas Sebelas Maret, Solo',
    type: 'mobile',
    bloodTypesNeeded: ['B+', 'A+'],
    capacity: 108,
    registered: 67,
    organizer: 'PMI Solo & UNS',
    description: 'Donor darah mahasiswa UNS'
  },
  {
    id: 32,
    title: 'Donor Darah PMI Manado',
    start: '2026-03-24T08:00:00',
    end: '2026-03-24T14:00:00',
    location: 'PMI Manado, Jl. 17 Agustus',
    type: 'fixed',
    bloodTypesNeeded: ['O-', 'B-'],
    capacity: 40,
    registered: 16,
    organizer: 'PMI Sulawesi Utara',
    description: 'Donor darah rutin PMI Manado'
  },
  {
    id: 33,
    title: 'Mobile Drive - Mall Kelapa Gading',
    start: '2026-03-26T10:00:00',
    end: '2026-03-26T16:00:00',
    location: 'Mall Kelapa Gading, Jakarta',
    type: 'mobile',
    bloodTypesNeeded: [],
    capacity: 92,
    registered: 48,
    organizer: 'PMI Jakarta',
    description: 'Donor darah di Mall Kelapa Gading'
  },
  {
    id: 34,
    title: 'Donor Darah PMI Bekasi',
    start: '2026-03-28T08:00:00',
    end: '2026-03-28T14:00:00',
    location: 'PMI Bekasi, Jl. Ahmad Yani',
    type: 'fixed',
    bloodTypesNeeded: ['AB-', 'O-'],
    capacity: 58,
    registered: 33,
    organizer: 'PMI Jawa Barat',
    description: 'Donor darah rutin PMI Bekasi'
  },

  // APRIL 2026
  {
    id: 35,
    title: 'Donor Darah PMI Pontianak',
    start: '2026-04-02T08:00:00',
    end: '2026-04-02T14:00:00',
    location: 'PMI Pontianak, Jl. Sutan Syahrir',
    type: 'fixed',
    bloodTypesNeeded: ['B-', 'AB-'],
    capacity: 36,
    registered: 14,
    organizer: 'PMI Kalimantan Barat',
    description: 'Donor darah rutin PMI Pontianak'
  },
  {
    id: 36,
    title: 'Mobile Drive - Universitas Hasanuddin',
    start: '2026-04-04T09:00:00',
    end: '2026-04-04T15:00:00',
    location: 'Universitas Hasanuddin, Makassar',
    type: 'mobile',
    bloodTypesNeeded: ['A+', 'O+'],
    capacity: 118,
    registered: 81,
    organizer: 'PMI Makassar & Unhas',
    description: 'Donor darah mahasiswa Unhas'
  },
  {
    id: 37,
    title: 'Donor Darah PMI Samarinda',
    start: '2026-04-07T08:00:00',
    end: '2026-04-07T14:00:00',
    location: 'PMI Samarinda, Jl. Pangeran Antasari',
    type: 'fixed',
    bloodTypesNeeded: ['O-', 'A-'],
    capacity: 33,
    registered: 11,
    organizer: 'PMI Kalimantan Timur',
    description: 'Donor darah rutin PMI Samarinda'
  },
  {
    id: 38,
    title: 'URGENT: Kebutuhan Darah Mendesak',
    start: '2026-04-09T07:00:00',
    end: '2026-04-09T18:00:00',
    location: 'RS Sardjito, Yogyakarta',
    type: 'emergency',
    bloodTypesNeeded: ['O-', 'B-', 'AB-'],
    capacity: 195,
    registered: 58,
    organizer: 'PMI Yogyakarta & RS Sardjito',
    description: 'Kampanye darurat untuk pasien thalassemia'
  },
  {
    id: 39,
    title: 'Mobile Drive - Universitas Udayana',
    start: '2026-04-11T09:00:00',
    end: '2026-04-11T15:00:00',
    location: 'Universitas Udayana, Denpasar',
    type: 'mobile',
    bloodTypesNeeded: [],
    capacity: 122,
    registered: 76,
    organizer: 'PMI Bali & Unud',
    description: 'Donor darah mahasiswa Unud'
  },
  {
    id: 40,
    title: 'Donor Darah PMI Banjarmasin',
    start: '2026-04-14T08:00:00',
    end: '2026-04-14T14:00:00',
    location: 'PMI Banjarmasin, Jl. A. Yani',
    type: 'fixed',
    bloodTypesNeeded: ['AB-', 'B-'],
    capacity: 37,
    registered: 13,
    organizer: 'PMI Kalimantan Selatan',
    description: 'Donor darah rutin PMI Banjarmasin'
  },
  {
    id: 41,
    title: 'Mobile Drive - Kantor Mandiri',
    start: '2026-04-16T09:00:00',
    end: '2026-04-16T13:00:00',
    location: 'Bank Mandiri Pusat, Jakarta',
    type: 'mobile',
    bloodTypesNeeded: ['A+', 'O+'],
    capacity: 98,
    registered: 72,
    organizer: 'PMI Jakarta & Bank Mandiri',
    description: 'Donor darah karyawan Bank Mandiri'
  },
  {
    id: 42,
    title: 'Donor Darah PMI Depok',
    start: '2026-04-18T08:00:00',
    end: '2026-04-18T14:00:00',
    location: 'PMI Depok, Jl. Margonda Raya',
    type: 'fixed',
    bloodTypesNeeded: ['O-', 'AB-'],
    capacity: 54,
    registered: 29,
    organizer: 'PMI Jawa Barat',
    description: 'Donor darah rutin PMI Depok'
  },
  {
    id: 43,
    title: 'Mobile Drive - ITS Surabaya',
    start: '2026-04-21T09:00:00',
    end: '2026-04-21T15:00:00',
    location: 'Institut Teknologi Sepuluh Nopember, Surabaya',
    type: 'mobile',
    bloodTypesNeeded: ['B+', 'A+'],
    capacity: 128,
    registered: 94,
    organizer: 'PMI Surabaya & ITS',
    description: 'Donor darah mahasiswa ITS'
  },
  {
    id: 44,
    title: 'Mobile Drive - Summarecon Mall',
    start: '2026-04-23T10:00:00',
    end: '2026-04-23T16:00:00',
    location: 'Summarecon Mall Bekasi',
    type: 'mobile',
    bloodTypesNeeded: [],
    capacity: 88,
    registered: 41,
    organizer: 'PMI Bekasi',
    description: 'Donor darah di Summarecon Mall'
  },
  {
    id: 45,
    title: 'Donor Darah PMI Jakarta Selatan',
    start: '2026-04-25T08:00:00',
    end: '2026-04-25T14:00:00',
    location: 'PMI Jakarta Selatan, Jl. Fatmawati',
    type: 'fixed',
    bloodTypesNeeded: ['B-', 'O-'],
    capacity: 62,
    registered: 38,
    organizer: 'PMI DKI Jakarta',
    description: 'Donor darah rutin PMI Jakarta Selatan'
  },
  {
    id: 46,
    title: 'Mobile Drive - Universitas Andalas',
    start: '2026-04-28T09:00:00',
    end: '2026-04-28T15:00:00',
    location: 'Universitas Andalas, Padang',
    type: 'mobile',
    bloodTypesNeeded: ['A+', 'O+'],
    capacity: 102,
    registered: 64,
    organizer: 'PMI Padang & Unand',
    description: 'Donor darah mahasiswa Unand'
  },

  // MEI 2026
  {
    id: 47,
    title: 'Donor Darah PMI Malang',
    start: '2026-05-02T08:00:00',
    end: '2026-05-02T14:00:00',
    location: 'PMI Malang, Jl. Ade Irma Suryani',
    type: 'fixed',
    bloodTypesNeeded: ['AB-', 'O-'],
    capacity: 51,
    registered: 27,
    organizer: 'PMI Jawa Timur',
    description: 'Donor darah rutin PMI Malang'
  },
  {
    id: 48,
    title: 'Mobile Drive - Universitas Sriwijaya',
    start: '2026-05-05T09:00:00',
    end: '2026-05-05T15:00:00',
    location: 'Universitas Sriwijaya, Palembang',
    type: 'mobile',
    bloodTypesNeeded: ['A+', 'B+'],
    capacity: 112,
    registered: 69,
    organizer: 'PMI Palembang & Unsri',
    description: 'Donor darah mahasiswa Unsri'
  },
  {
    id: 49,
    title: 'URGENT: Kampanye Donor Darah',
    start: '2026-05-07T07:00:00',
    end: '2026-05-07T18:00:00',
    location: 'RS Adam Malik, Medan',
    type: 'emergency',
    bloodTypesNeeded: ['O-', 'A-', 'B-', 'AB-'],
    capacity: 210,
    registered: 72,
    organizer: 'PMI Medan & RS Adam Malik',
    description: 'Kampanye darurat untuk stok darah langka'
  },
  {
    id: 50,
    title: 'Donor Darah PMI Yogyakarta',
    start: '2026-05-09T08:00:00',
    end: '2026-05-09T14:00:00',
    location: 'PMI Yogyakarta, Jl. Kusumanegara',
    type: 'fixed',
    bloodTypesNeeded: ['B-', 'AB-'],
    capacity: 59,
    registered: 34,
    organizer: 'PMI DI Yogyakarta',
    description: 'Donor darah rutin PMI Yogyakarta'
  },
  {
    id: 51,
    title: 'Mobile Drive - Kantor Gojek',
    start: '2026-05-12T09:00:00',
    end: '2026-05-12T13:00:00',
    location: 'Gojek HQ, Jakarta',
    type: 'mobile',
    bloodTypesNeeded: [],
    capacity: 110,
    registered: 95,
    organizer: 'PMI Jakarta & Gojek',
    description: 'Donor darah karyawan Gojek'
  },
  {
    id: 52,
    title: 'Donor Darah PMI Bandung',
    start: '2026-05-14T08:00:00',
    end: '2026-05-14T14:00:00',
    location: 'PMI Bandung, Jl. Aceh',
    type: 'fixed',
    bloodTypesNeeded: ['O-', 'AB-'],
    capacity: 68,
    registered: 42,
    organizer: 'PMI Jawa Barat',
    description: 'Donor darah rutin PMI Bandung'
  },
  {
    id: 53,
    title: 'Mobile Drive - Universitas Riau',
    start: '2026-05-16T09:00:00',
    end: '2026-05-16T15:00:00',
    location: 'Universitas Riau, Pekanbaru',
    type: 'mobile',
    bloodTypesNeeded: ['A+', 'O+'],
    capacity: 96,
    registered: 58,
    organizer: 'PMI Pekanbaru & UR',
    description: 'Donor darah mahasiswa UR'
  },
  {
    id: 54,
    title: 'Mobile Drive - Pakuwon Mall',
    start: '2026-05-19T10:00:00',
    end: '2026-05-19T16:00:00',
    location: 'Pakuwon Mall, Surabaya',
    type: 'mobile',
    bloodTypesNeeded: [],
    capacity: 84,
    registered: 37,
    organizer: 'PMI Surabaya',
    description: 'Donor darah di Pakuwon Mall'
  },
  {
    id: 55,
    title: 'Donor Darah PMI Semarang',
    start: '2026-05-21T08:00:00',
    end: '2026-05-21T14:00:00',
    location: 'PMI Semarang, Jl. Pemuda',
    type: 'fixed',
    bloodTypesNeeded: ['B-', 'O-'],
    capacity: 56,
    registered: 31,
    organizer: 'PMI Jawa Tengah',
    description: 'Donor darah rutin PMI Semarang'
  },
  {
    id: 56,
    title: 'Mobile Drive - Universitas Sam Ratulangi',
    start: '2026-05-23T09:00:00',
    end: '2026-05-23T15:00:00',
    location: 'Universitas Sam Ratulangi, Manado',
    type: 'mobile',
    bloodTypesNeeded: ['A+', 'B+'],
    capacity: 92,
    registered: 54,
    organizer: 'PMI Manado & Unsrat',
    description: 'Donor darah mahasiswa Unsrat'
  },
  {
    id: 57,
    title: 'Donor Darah PMI Jakarta Utara',
    start: '2026-05-26T08:00:00',
    end: '2026-05-26T14:00:00',
    location: 'PMI Jakarta Utara, Jl. Pluit Raya',
    type: 'fixed',
    bloodTypesNeeded: ['AB-', 'A-'],
    capacity: 64,
    registered: 39,
    organizer: 'PMI DKI Jakarta',
    description: 'Donor darah rutin PMI Jakarta Utara'
  },
  {
    id: 58,
    title: 'Mobile Drive - Universitas Mulawarman',
    start: '2026-05-28T09:00:00',
    end: '2026-05-28T15:00:00',
    location: 'Universitas Mulawarman, Samarinda',
    type: 'mobile',
    bloodTypesNeeded: [],
    capacity: 88,
    registered: 46,
    organizer: 'PMI Samarinda & Unmul',
    description: 'Donor darah mahasiswa Unmul'
  },
  {
    id: 59,
    title: 'Mobile Drive - Central Park Mall',
    start: '2026-05-30T10:00:00',
    end: '2026-05-30T16:00:00',
    location: 'Central Park Mall, Jakarta',
    type: 'mobile',
    bloodTypesNeeded: ['O+', 'A+'],
    capacity: 102,
    registered: 67,
    organizer: 'PMI Jakarta',
    description: 'Donor darah di Central Park Mall'
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
