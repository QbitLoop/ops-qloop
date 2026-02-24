export default function Icon({ name, size = 16, color, fill = 0, style: x = {} }) {
  return (
    <span className="material-symbols-outlined" style={{
      fontSize: size, color: color || "inherit",
      fontVariationSettings: `'FILL' ${fill}, 'wght' 400, 'GRAD' 0, 'opsz' ${size}`,
      verticalAlign: "middle", lineHeight: 1, userSelect: "none", ...x,
    }}>{name}</span>
  );
}
