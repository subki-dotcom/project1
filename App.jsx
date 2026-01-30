import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./src/contexts/AuthContext";
import ProtectedRoute from "./src/components/ProtectedRoute";

// Admin layout & pages
import Dashboard from "./src/pages/Dashboard";
import DashboardOverview from "./src/pages/DashboardOverview";
import DashboardTours from "./src/pages/DashboardTours";
import DashboardTourForm from "./src/pages/DashboardTourForm";
import Bookings from "./src/pages/Bookings";
import Availability from "./src/pages/Availability";

// Auth pages
import Login from "./src/pages/Login";
import Register from "./src/pages/Register";

// Public pages
import PublicTourList from "./src/pages/PublicTourList";
import PublicTourDetail from "./src/pages/PublicTourDetail";
import PublicCheckout from "./src/pages/PublicCheckout";
import BookingConfirmation from "./src/pages/BookingConfirmation";
import CustomerDashboard from "./src/customer/CustomerDashboard";

import "./App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* ================= PUBLIC ================= */}
          <Route path="/" element={<PublicTourList />} />
          <Route path="/tour/:id" element={<PublicTourDetail />} />
          <Route path="/checkout/:id" element={<PublicCheckout />} />
          <Route path="/booking-confirmation" element={<BookingConfirmation />} />
          <Route path="/my-bookings" element={<CustomerDashboard />} />

          {/* ================= AUTH ================= */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* ================= ADMIN DASHBOARD ================= */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            {/* DEFAULT OVERVIEW */}
            <Route index element={<DashboardOverview />} />

            {/* SUB PAGES */}
            <Route path="tours">
              <Route index element={<DashboardTours />} />
              <Route path="new" element={<DashboardTourForm />} />
              <Route path=":id/edit" element={<DashboardTourForm />} />
            </Route>
            <Route path="bookings" element={<Bookings />} />
            <Route path="availability" element={<Availability />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
