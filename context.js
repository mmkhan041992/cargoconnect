// context.js
export const appContext = {
  appName: "CargoConnect",
  objective: "Optimize cargo booking with return-trip pricing",
  users: {
    customers: "Shippers needing cargo transport",
    serviceProviders: "Truck owners and drivers",
  },
  technicalStack: {
    frontend: "React Native",
    backend: "Next.js",
    database: "MongoDB",
    externalServices: ["Google Maps API", "Firebase"],
  },
  styleGuidelines: {
    colors: {
      primary: "#007BFF", // Blue for buttons/accents
      secondary: "#28A745", // Green for Return highlights
      background: "#F5F5F5", // Light Gray
      card: "#FFFFFF", // White
    },
    typography: {
      title: { size: 20, weight: "bold" },
      body: { size: 16, weight: "normal" },
      secondary: { size: 14, weight: "normal" },
    },
    spacing: 16,
  },
  features: {
    search: "Find Home-Town and Return Vehicles",
    booking: "Book cargo transport",
    tracking: "Real-time shipment tracking",
  },
  sampleData: {
    searchInputs: {
      pickupLocation: "Mumbai",
      dropOffLocation: "Pune",
      date: "2025-04-12",
      cargoWeight: 5,
      cargoVolume: 10,
    },
    searchResults: [
      {
        vehicleId: "123",
        type: "Return",
        price: 25000,
        capacity: { weight: 10, volume: 20 },
        availableDate: "2025-04-12",
      },
      {
        vehicleId: "456",
        type: "Home-Town",
        price: 50000,
        capacity: { weight: 15, volume: 30 },
        availableDate: "2025-04-12",
      },
    ],
  },
};

// Usage: Import in frontend/backend files
// import { appContext } from './context';