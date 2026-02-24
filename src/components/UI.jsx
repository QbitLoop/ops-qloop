import { useState } from "react";
import { useTheme } from "../ThemeContext";
import { mono, sans } from "../tokens";
import Icon from "./Icon";

// ─── SEARCH BAR ───
export function SearchBar({ value, onChange }) {
  const { T } = useTheme();
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 8,
      background: T.searchBg, border: `1px solid ${T.searchBorder}`,
      borderRadius: 8, padding: "10px 14px", maxWidth: 420, width: "100%",
    }}>
      <Icon name="search" size={16} color={T.textMuted} />
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)}
        placeholder="Search pages, topics, tools..."
        style={{
          background: "transparent", border: "none", outline: "none",
          fontFamily: sans, fontSize: 13, color: T.text, width: "100%",
        }}
      />
      {value && <div onClick={() => onChange("")} style={{ cursor: "pointer" }}><Icon name="close" size={14} color={T.textMuted} /></div>}
    </div>
  );
}

// ─── CODE PILL ───
export function CodePill({ children }) {
  const { T } = useTheme();
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard?.writeText(children); setCopied(true); setTimeout(() => setCopied(false), 1500); };
  return (
    <div onClick={copy} style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: T.code, border: `1px solid ${T.border}`, borderRadius: 8,
      padding: "12px 16px", fontFamily: mono, fontSize: 13, color: T.ice,
      cursor: "pointer", maxWidth: 480,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Icon name="terminal" size={16} color={T.textMuted} />
        <span>{children}</span>
      </div>
      <Icon name={copied ? "check" : "content_copy"} size={14} color={copied ? T.green : T.textMuted} />
    </div>
  );
}

// ─── TAG ───
export function Tag({ children, color }) {
  const { T } = useTheme();
  return (
    <span style={{
      fontFamily: mono, fontSize: 10, fontWeight: 500, color: color || T.textSec,
      border: `1px solid ${color ? color + "40" : T.border}`, borderRadius: 5,
      padding: "3px 8px", display: "inline-block", letterSpacing: "0.3px",
    }}>{children}</span>
  );
}

// ─── STAT BOX ───
export function Stat({ value, label, color }) {
  const { T } = useTheme();
  const c = color || T.cyan;
  return (
    <div style={{
      background: `${c}06`, border: `1px solid ${c}18`,
      borderRadius: 10, padding: "20px 16px", textAlign: "center", flex: 1, minWidth: 120,
    }}>
      <div style={{ fontFamily: mono, fontSize: 28, fontWeight: 800, color: c, letterSpacing: "-1.5px" }}>{value}</div>
      <div style={{ fontFamily: sans, fontSize: 11, color: T.textMuted, marginTop: 4, lineHeight: 1.4 }}>{label}</div>
    </div>
  );
}

// ─── PAGE CARD ───
export function PageCard({ icon, title, description, tag, color, onClick }) {
  const { T } = useTheme();
  const [hov, setHov] = useState(false);
  const c = color || T.cyan;
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} onClick={onClick}
      style={{
        background: T.surface, border: `1px solid ${hov ? c + "50" : T.border}`,
        borderRadius: 10, padding: 20, cursor: "pointer", transition: "border-color 0.2s",
      }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Icon name={icon} size={18} color={c} />
          <span style={{ fontFamily: mono, fontSize: 13, fontWeight: 600, color: T.text }}>{title}</span>
        </div>
        <Tag color={c}>{tag}</Tag>
      </div>
      <div style={{ fontFamily: sans, fontSize: 12.5, color: T.textSec, lineHeight: 1.6 }}>{description}</div>
      <div style={{
        marginTop: 12, fontFamily: mono, fontSize: 10, color: hov ? c : T.textMuted,
        display: "flex", alignItems: "center", gap: 4, transition: "color 0.2s",
        textTransform: "uppercase", letterSpacing: "0.5px",
      }}>explore <Icon name="arrow_forward" size={12} color={hov ? c : T.textMuted} /></div>
    </div>
  );
}

// ─── CALLOUT ───
export function Callout({ color, children }) {
  const { T } = useTheme();
  const c = color || T.cyan;
  return (
    <div style={{
      background: `${c}06`, border: `1px solid ${c}18`, borderLeft: `3px solid ${c}`,
      borderRadius: 8, padding: "14px 16px", marginBottom: 16,
      fontFamily: sans, fontSize: 12.5, color: T.textSec, lineHeight: 1.65,
    }}>{children}</div>
  );
}

// ─── LAYER CARD ───
export function LayerCard({ color, children }) {
  const { T } = useTheme();
  return (
    <div style={{
      background: `linear-gradient(135deg, ${color}06, ${color}03)`,
      border: `1px solid ${color}20`, borderLeft: `3px solid ${color}`,
      borderRadius: 8, padding: "16px 18px", marginBottom: 10,
    }}>{children}</div>
  );
}

// ─── FLOW ARROW ───
export function FlowArrow() {
  const { T } = useTheme();
  return (
    <div style={{ textAlign: "center", margin: "4px 0", opacity: 0.3 }}>
      <Icon name="keyboard_arrow_down" size={18} color={T.textMuted} />
    </div>
  );
}

// ─── DIVIDER ───
export function Divider() {
  const { T } = useTheme();
  return <div style={{ height: 1, background: T.borderMuted, margin: "48px 0" }} />;
}

// ─── SECTION HEADER ───
export function SectionHeader({ color, children }) {
  const { T } = useTheme();
  return (
    <h2 style={{
      fontFamily: mono, fontSize: 12, fontWeight: 700, color: T.textMuted,
      textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 16,
    }}>
      <span style={{ color: color || T.cyan }}>// </span>{children}
    </h2>
  );
}

// ─── PAGE TITLE ───
export function PageTitle({ subtitle, children }) {
  const { T } = useTheme();
  return (
    <>
      <h1 style={{
        fontFamily: mono, fontSize: 26, fontWeight: 700, color: T.text,
        letterSpacing: "-0.5px", lineHeight: 1.3, marginBottom: 16,
      }}>
        {children}
        {subtitle && <><br /><span style={{ color: T.cyan }}>{subtitle}</span></>}
      </h1>
    </>
  );
}

// ─── BODY TEXT ───
export function Body({ children, maxWidth = 640 }) {
  const { T } = useTheme();
  return (
    <p style={{ fontFamily: sans, fontSize: 14, color: T.textSec, lineHeight: 1.75, maxWidth, marginBottom: 12 }}>{children}</p>
  );
}

// ─── FOOTER ───
export function Footer() {
  const { T } = useTheme();
  return (
    <div style={{
      borderTop: `1px solid ${T.borderMuted}`, paddingTop: 24, marginTop: 48,
      display: "flex", justifyContent: "space-between", alignItems: "center",
      flexWrap: "wrap", gap: 12,
    }}>
      <div style={{ fontFamily: mono, fontSize: 11, color: T.textMuted }}>
        <span style={{ color: T.cyan }}>ops.qloop.com</span> / waseem qbitloop
      </div>
      <div style={{ display: "flex", gap: 16 }}>
        {[
          { icon: "code", label: "GitHub", url: "https://github.com/QbitLoop" },
          { icon: "article", label: "Medium", url: "#" },
          { icon: "work", label: "LinkedIn", url: "#" },
        ].map((l) => (
          <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" style={{
            fontFamily: mono, fontSize: 10, color: T.textMuted,
            display: "flex", alignItems: "center", gap: 4,
            textTransform: "uppercase", letterSpacing: "0.5px",
          }}>
            <Icon name={l.icon} size={14} color={T.textMuted} /> {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}
