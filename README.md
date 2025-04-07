# CargoConnect

CargoConnect is a full-stack React Native mobile application that optimizes cargo booking with return-trip pricing. The app connects customers (shippers) with service providers (truck owners/drivers) and includes features like search, booking, and tracking.

## Objective

Enable customers to search for vehicles, book cargo transport, and track shipments, emphasizing cost savings with Return Vehicles.

## Technical Stack

- **Frontend**: React Native (cross-platform for iOS/Android)
- **Backend**: Next.js (API routes)
- **Database**: MongoDB
- **External Services**: Google Maps API (distance/routing), Firebase (auth/notifications)

## Features

- **Search**: Find Home-Town and Return Vehicles
- **Booking**: Book cargo transport with optimized pricing
- **Tracking**: Real-time shipment tracking

## Project Structure

```
├── components/           # React Native components
│   ├── SearchForm.js     # Search input form
│   ├── SearchResults.js  # Search results display
│   ├── VehicleCard.js    # Vehicle card component
│   └── BookingConfirmation.js # Booking confirmation screen
├── models/               # MongoDB models
│   ├── User.js           # User model (customers & service providers)
│   ├── Vehicle.js        # Vehicle model
│   └── Trip.js           # Trip/booking model
├── pages/                # Next.js pages
│   └── api/              # API routes
│       └── search/       # Search API endpoints
│           └── vehicles.js # Vehicle search endpoint
├── lib/                  # Utility functions
│   └── mongodb.js        # MongoDB connection utility
├── App.js                # Main application component
├── context.js            # Application context
└── next.config.js        # Next.js configuration
```

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set up environment variables:
   - Create a `.env.local` file with the following variables:
     ```
     MONGODB_URI=your_mongodb_connection_string
     GOOGLE_MAPS_API_KEY=your_google_maps_api_key
     ```
4. Run the development server:
   ```
   npm run dev
   ```

## Algorithm

The core algorithm for matching customer search inputs with vehicles:

1. Filter vehicles by capacity and availability
2. Classify vehicles as Home-Town or Return based on route matching
3. Apply pricing logic (50% discount for Return vehicles)
4. Sort results by price (lowest first)

## Enhancements

- **Frontend**: Added loading states and error handling for better UX
- **Backend**: Implemented caching for frequently searched routes
- **Algorithm**: Designed for future AI optimization with route clustering