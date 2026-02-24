import { useState } from "react";
import { useTheme } from "../ThemeContext";
import { mono, sans } from "../tokens";
import Icon from "./Icon";

const ICONS = ["crisis_alert", "hearing", "compare_arrows", "payments"];
const LABELS = ["Pain \u2192 NVIDIA Win", "GSI Deal Signals", "Competitive Displacement", "ROI Proof Points"];

export default function InsightCarousel({ insights }) {
  const { T } = useTheme();
  const COLORS = [T.cyan, T.amber, T.red, T.green];
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? insights.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === insights.length - 1 ? 0 : i + 1));
  const cur = insights[idx];
  const c = COLORS[idx];

  return (
    <div style={{
      background: `${c}06`, border: `1px solid ${c}20`,
      borderRadius: 8, marginTop: 12, overflow: "hidden",
    }}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "8px 12px", background: `${c}10`, borderBottom: `1px solid ${c}15`,
      }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 6,
          fontSize: 10, fontFamily: mono, fontWeight: 700, color: c,
          textTransform: "uppercase", letterSpacing: "0.5px",
        }}>
          <Icon name={ICONS[idx]} size={14} color={c} />
          <span>{LABELS[idx]}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            {insights.map((_, i) => (
              <div key={i} onClick={() => setIdx(i)} style={{
                width: i === idx ? 14 : 6, height: 6, borderRadius: 3,
                background: i === idx ? c : `${T.textMuted}50`,
                cursor: "pointer", transition: "all 0.25s ease",
              }} />
            ))}
          </div>
          <div style={{ display: "flex", gap: 2 }}>
            {[{ fn: prev, icon: "chevron_left" }, { fn: next, icon: "chevron_right" }].map((b, i) => (
              <div key={i} onClick={b.fn} style={{
                width: 22, height: 22, borderRadius: 4,
                background: `${c}15`, border: `1px solid ${c}30`,
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer",
              }}>
                <Icon name={b.icon} size={16} color={c} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ padding: "10px 14px", minHeight: 52 }}>
        <div style={{ fontSize: 11.5, fontFamily: sans, color: T.textSec, lineHeight: 1.65 }}>
          <strong style={{ color: c }}>{cur.title}: </strong>{cur.text}
        </div>
        {cur.stat && (
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 4,
            marginTop: 6, padding: "2px 8px", borderRadius: 4,
            fontSize: 10, fontFamily: mono, fontWeight: 700,
            background: `${c}15`, color: c, border: `1px solid ${c}30`,
          }}>
            <Icon name="bar_chart" size={12} color={c} /> {cur.stat}
          </div>
        )}
      </div>
    </div>
  );
}
