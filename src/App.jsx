import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "./ThemeContext";
import Nav from "./components/Nav";
import Landing from "./pages/Landing";
import Architecture from "./pages/Architecture";
import VisaGoldman from "./pages/VisaGoldman";
import Inference from "./pages/Inference";
import Agents from "./pages/Agents";
import Governance from "./pages/Governance";
import Finance from "./pages/Finance";
import Lab from "./pages/Lab";
import Roles from "./pages/Roles";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  const { T } = useTheme();
  return (
    <div style={{ background: T.bg, color: T.text, minHeight: "100vh", transition: "background 0.3s, color 0.3s" }}>
      <ScrollToTop />
      <Nav />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px 80px" }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/visa-goldman" element={<VisaGoldman />} />
          <Route path="/inference" element={<Inference />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/roles" element={<Roles />} />
        </Routes>
      </main>
    </div>
  );
}
