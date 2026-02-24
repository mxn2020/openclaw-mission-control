import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/dashboard/Sidebar";
import LandingPage from "./pages/LandingPage";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
import DocsPage from "./pages/DocsPage";
import AboutPage from "./pages/AboutPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import AgentsPage from "./pages/dashboard/AgentsPage";
import TasksPage from "./pages/dashboard/TasksPage";
import ChatPage from "./pages/dashboard/ChatPage";
import TeamsPage from "./pages/dashboard/TeamsPage";
import ConnectionsPage from "./pages/dashboard/ConnectionsPage";
import SettingsPage from "./pages/dashboard/SettingsPage";
import "./App.css";

function MarketingLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <Outlet />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Marketing pages */}
        <Route element={<MarketingLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>

        {/* Dashboard pages */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="agents" element={<AgentsPage />} />
          <Route path="tasks" element={<TasksPage />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="teams" element={<TeamsPage />} />
          <Route path="connections" element={<ConnectionsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
