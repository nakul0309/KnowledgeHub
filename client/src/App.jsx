import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./components/layouts/DashboardLayout";
import Workspaces from "./pages/Workspaces";
import Documents from "./pages/Documents";
import AIChat from "./pages/AIChat";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>

  <Route path="/" element={<Home />} />

  <Route path="/login" element={<Login />} />

  <Route path="/register" element={<Register />} />

  {/* Dashboard Layout */}

  <Route element={<DashboardLayout />}>

    <Route
      path="/dashboard"
      element={<Dashboard />}
    />

    <Route
      path="/workspaces"
      element={<Workspaces />}
    />

    <Route
      path="/documents"
      element={<Documents />}
    />

    <Route
      path="/ai"
      element={<AIChat />}
    />

    <Route
      path="/analytics"
      element={<Analytics />}
    />

    <Route
      path="/settings"
      element={<Settings />}
    />

  </Route>

</Routes>
  );
}

export default App;