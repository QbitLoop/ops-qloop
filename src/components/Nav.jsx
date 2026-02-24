import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { mono } from "../tokens";
import Icon from "./Icon";

const ITEMS = [
  { path: "/", label: "Home", icon: "home" },
  { path: "/architecture", label: "Architecture", icon: "layers" },
  { path: "/visa-goldman", label: "Visa & GS", icon: "account_balance" },
  { path: "/inference", label: "Inference", icon: "speed" },
  { path: "/agents", label: "Agents", icon: "hub" },
  { path: "/governance", label: "Governance", icon: "shield" },
  { path: "/finance", label: "Finance", icon: "swap_horiz" },
  { path: "/lab", label: "Lab", icon: "science" },
  { path: "/roles", label: "Roles", icon: "group" },
];

export default function Nav() {
  const { T, isDark, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100, background: T.navBg,
      backdropFilter: "blur(12px)", borderBottom: `1px solid ${T.borderMuted}`,
    }}>
      <div style={{
        maxWidth: 900, margin: "0 auto", padding: "0 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between", height: 52,
      }}>
        <Link to="/" style={{
          fontFamily: mono, fontSize: 13, fontWeight: 700, color: T.cyan,
          letterSpacing: "1.5px", textTransform: "uppercase",
          display: "flex", alignItems: "center", gap: 6,
        }}>
          <span style={{ color: T.textMuted }}>//</span> AIOps in 2026+
        </Link>

        {/* Desktop */}
        <div className="desktop-nav" style={{ display: "flex", gap: 2, alignItems: "center" }}>
          {ITEMS.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path} style={{
                fontFamily: mono, fontSize: 10.5, fontWeight: active ? 600 : 400,
                color: active ? T.cyan : T.textMuted,
                padding: "6px 8px", letterSpacing: "0.4px",
                textTransform: "uppercase", borderRadius: 4, whiteSpace: "nowrap",
                background: active ? `${T.cyan}0a` : "transparent",
                transition: "all 0.15s",
              }}>{item.label}</Link>
            );
          })}
          <div onClick={toggle} style={{
            marginLeft: 8, padding: "5px 8px", cursor: "pointer", borderRadius: 6,
            border: `1px solid ${T.border}`, display: "flex", alignItems: "center",
            background: T.surface,
          }}>
            <Icon name={isDark ? "light_mode" : "dark_mode"} size={14} color={T.textSec} />
          </div>
        </div>

        {/* Mobile controls */}
        <div className="mobile-controls" style={{ display: "none", gap: 8, alignItems: "center" }}>
          <div onClick={toggle} style={{
            padding: "5px 8px", cursor: "pointer", borderRadius: 6,
            border: `1px solid ${T.border}`, display: "flex", alignItems: "center",
            background: T.surface,
          }}>
            <Icon name={isDark ? "light_mode" : "dark_mode"} size={14} color={T.textSec} />
          </div>
          <div onClick={() => setMenuOpen(!menuOpen)} style={{ cursor: "pointer", padding: 4 }}>
            <Icon name={menuOpen ? "close" : "menu"} size={22} color={T.text} />
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{ padding: "8px 24px 16px", borderTop: `1px solid ${T.borderMuted}`, background: T.bg }}>
          {ITEMS.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path} onClick={() => setMenuOpen(false)} style={{
                fontFamily: mono, fontSize: 12, padding: "10px 0",
                color: active ? T.cyan : T.textSec,
                display: "flex", alignItems: "center", gap: 8,
                borderBottom: `1px solid ${T.borderMuted}`,
                textTransform: "uppercase", letterSpacing: "0.5px",
              }}>
                <Icon name={item.icon} size={16} color={active ? T.cyan : T.textMuted} />
                {item.label}
              </Link>
            );
          })}
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-controls { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-controls { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
