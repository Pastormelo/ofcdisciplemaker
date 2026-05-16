// Disciple Maker Leaders Guide — UI Components
const { useState, useRef, useEffect, useCallback } = React;

// ─── ICONS ───────────────────────────────────────────────
function Icon({ name, size = 24, color = "currentColor" }) {
  const icons = {
    home: <><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" /></>,
    weeks: <><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></>,
    tools: <><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></>,
    journey: <><path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></>,
    back: <><path d="M15 19l-7-7 7-7" /></>,
    chevronRight: <><path d="M9 5l7 7-7 7" /></>,
    chevronDown: <><path d="M19 9l-7 7-7-7" /></>,
    chevronUp: <><path d="M5 15l7-7 7 7" /></>,
    check: <><path d="M5 13l4 4L19 7" /></>,
    book: <><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></>,
    cross: <><circle cx="12" cy="12" r="9" /><path d="M12 7v10m-5-5h10" /></>,
    pray: <><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></>,
    heart: <><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></>,
    contrast: <><circle cx="12" cy="12" r="9" /><path d="M12 3v18" /></>,
    framework: <><path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm10 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6z" /></>,
    change: <><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></>,
    star: <><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></>,
    users: <><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></>,
    sparkle: <><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></>,
    scripture: <><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></>,
    target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
    quote: <><path d="M7.5 8C5.5 8 4 9.5 4 11.5c0 1.5.8 2.8 2 3.4-.2 1.2-.8 2.2-1.5 2.9.6.1 1.2.2 1.8.2 1.5 0 2.8-.6 3.7-1.5.3-.3.6-.7.8-1.1.1-.3.2-.6.2-1 0-2-1.5-3.5-3.5-3.5zm9 0c-2 0-3.5 1.5-3.5 3.5 0 1.5.8 2.8 2 3.4-.2 1.2-.8 2.2-1.5 2.9.6.1 1.2.2 1.8.2 1.5 0 2.8-.6 3.7-1.5.3-.3.6-.7.8-1.1.1-.3.2-.6.2-1 0-2-1.5-3.5-3.5-3.5z" /></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {icons[name] || icons.star}
    </svg>
  );
}

// ─── BOTTOM NAV ──────────────────────────────────────────
function BottomNav({ active, onNavigate }) {
  const navItems = [
    { id: "home", label: "Home", icon: "home" },
    { id: "weeks", label: "Weeks", icon: "weeks" },
    { id: "tools", label: "Tools", icon: "tools" },
    { id: "about", label: "About", icon: "book" },
  ];

  return (
    <nav style={bottomNavStyles.nav}>
      {navItems.map(item => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          style={{
            ...bottomNavStyles.btn,
            color: active === item.id ? "var(--accent)" : "var(--text-muted)",
          }}
        >
          <Icon name={item.icon} size={22} />
          <span style={bottomNavStyles.label}>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

const bottomNavStyles = {
  nav: {
    position: "fixed", bottom: 0, left: 0, right: 0,
    display: "flex", justifyContent: "space-around", alignItems: "center",
    height: 64, background: "var(--surface)", borderTop: "1px solid var(--border)",
    zIndex: 100, paddingBottom: "env(safe-area-inset-bottom, 0px)",
  },
  btn: {
    display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
    background: "none", border: "none", cursor: "pointer", padding: "8px 16px",
    fontFamily: "var(--font-body)", transition: "color 0.2s",
  },
  label: { fontSize: 11, fontWeight: 600, letterSpacing: "0.02em" },
};

// ─── HEADER BAR ──────────────────────────────────────────
function HeaderBar({ title, subtitle, onBack, rightAction }) {
  return (
    <header style={headerStyles.bar}>
      <div style={headerStyles.left}>
        {onBack && (
          <button onClick={onBack} style={headerStyles.backBtn}>
            <Icon name="back" size={20} />
          </button>
        )}
        <div>
          <h1 style={headerStyles.title}>{title}</h1>
          {subtitle && <p style={headerStyles.subtitle}>{subtitle}</p>}
        </div>
      </div>
      {rightAction && <div>{rightAction}</div>}
    </header>
  );
}

const headerStyles = {
  bar: {
    position: "sticky", top: 0, zIndex: 50,
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "16px 20px", background: "var(--bg)",
    borderBottom: "1px solid var(--border)",
  },
  left: { display: "flex", alignItems: "center", gap: 12 },
  backBtn: {
    background: "none", border: "none", cursor: "pointer",
    color: "var(--accent)", padding: 4, display: "flex",
  },
  title: {
    fontSize: 18, fontWeight: 700, color: "var(--text)",
    fontFamily: "var(--font-heading)", margin: 0, lineHeight: 1.2,
  },
  subtitle: {
    fontSize: 13, color: "var(--text-muted)", margin: 0, marginTop: 2,
    fontFamily: "var(--font-body)",
  },
};

// ─── EXPANDABLE SECTION ──────────────────────────────────
function Expandable({ title, icon, defaultOpen = false, accent, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={expandableStyles.wrapper}>
      <button onClick={() => setOpen(!open)} style={expandableStyles.header}>
        <div style={expandableStyles.headerLeft}>
          {icon && (
            <span style={{ ...expandableStyles.iconBadge, background: accent || "var(--accent-soft)" }}>
              <Icon name={icon} size={16} color={accent ? "#fff" : "var(--accent)"} />
            </span>
          )}
          <span style={expandableStyles.title}>{title}</span>
        </div>
        <Icon name={open ? "chevronUp" : "chevronDown"} size={18} color="var(--text-muted)" />
      </button>
      {open && <div style={expandableStyles.body}>{children}</div>}
    </div>
  );
}

const expandableStyles = {
  wrapper: {
    background: "var(--surface)", borderRadius: 12,
    border: "1px solid var(--border)", overflow: "hidden",
  },
  header: {
    width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "14px 16px", background: "none", border: "none", cursor: "pointer",
    fontFamily: "var(--font-body)",
  },
  headerLeft: { display: "flex", alignItems: "center", gap: 10 },
  iconBadge: {
    width: 32, height: 32, borderRadius: 8, display: "flex",
    alignItems: "center", justifyContent: "center", flexShrink: 0,
  },
  title: {
    fontSize: 15, fontWeight: 600, color: "var(--text)", textAlign: "left",
  },
  body: {
    padding: "0 16px 16px", fontSize: 14, lineHeight: 1.6,
    color: "var(--text-secondary)",
  },
};

// ─── DIALOG DISPLAY ──────────────────────────────────────
function Dialog({ dialog }) {
  return (
    <div style={dialogStyles.wrapper}>
      {dialog.map((line, i) => (
        <div key={i} style={dialogStyles.line}>
          <span style={{
            ...dialogStyles.speaker,
            color: line.speaker === "You" ? "var(--accent)" : "var(--blue)",
          }}>
            {line.speaker}:
          </span>
          <span style={dialogStyles.text}>{line.text}</span>
        </div>
      ))}
    </div>
  );
}

const dialogStyles = {
  wrapper: { display: "flex", flexDirection: "column", gap: 12 },
  line: { display: "flex", flexDirection: "column", gap: 2 },
  speaker: { fontSize: 12, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" },
  text: { fontSize: 14, lineHeight: 1.6, color: "var(--text-secondary)" },
};

// ─── SCRIPTURE TAG ───────────────────────────────────────
function ScriptureTag({ reference }) {
  return (
    <span style={scriptureTagStyles.tag}>{reference}</span>
  );
}

const scriptureTagStyles = {
  tag: {
    display: "inline-block", padding: "3px 8px", borderRadius: 6,
    background: "var(--accent-soft)", color: "var(--accent)",
    fontSize: 12, fontWeight: 600, fontFamily: "var(--font-body)",
  },
};

// ─── WEEK CARD (for list view) ───────────────────────────
function WeekCard({ week, onClick, isActive }) {
  const stageColors = {
    gospel: "#FF953E",
    word: "#94D8E9",
    prayer: "#FFB76B",
    community: "#FF953E",
    suffering: "#5E6C7A",
    battle: "#94D8E9",
    stewardship: "#FFB76B",
    gifts: "#5E6C7A",
    mission: "#FF953E",
    evangelism: "#94D8E9",
  };

  return (
    <button onClick={onClick} style={weekCardStyles.card}>
      <div style={{
        ...weekCardStyles.number,
        background: stageColors[week.stage] || "var(--accent)",
      }}>
        {week.id}
      </div>
      <div style={weekCardStyles.content}>
        <h3 style={weekCardStyles.title}>{week.title}</h3>
        <p style={weekCardStyles.subtitle}>{week.subtitle}</p>
      </div>
      <Icon name="chevronRight" size={18} color="var(--text-muted)" />
    </button>
  );
}

const weekCardStyles = {
  card: {
    width: "100%", display: "flex", alignItems: "center", gap: 14,
    padding: "14px 16px", background: "var(--surface)",
    border: "1px solid var(--border)", borderRadius: 12,
    cursor: "pointer", textAlign: "left", fontFamily: "var(--font-body)",
    transition: "transform 0.15s, box-shadow 0.15s",
  },
  number: {
    width: 40, height: 40, borderRadius: 10, display: "flex",
    alignItems: "center", justifyContent: "center",
    color: "#fff", fontWeight: 800, fontSize: 16, flexShrink: 0,
    fontFamily: "var(--font-heading)",
  },
  content: { flex: 1, minWidth: 0 },
  title: { fontSize: 15, fontWeight: 700, color: "var(--text)", margin: 0 },
  subtitle: { fontSize: 13, color: "var(--text-muted)", margin: 0, marginTop: 2 },
};

// ─── TOOL CARD (for tools grid) ──────────────────────────
function ToolCard({ tool, toolKey, onClick }) {
  const iconColors = {
    gospel: "#FF953E",
    hear: "#94D8E9",
    prayer: "#FFB76B",
    heart: "#FF953E",
    religionVsGospel: "#5E6C7A",
    mature: "#94D8E9",
    changeProcess: "#D0ECF6",
    disciplines: "#94D8E9",
    accountability: "#5E6C7A",
    romansRoad: "#FF953E",
    threeCircles: "#94D8E9",
    testimony: "#FFB76B",
    creationToChrist: "#5E6C7A",
    shifts: "#FF953E",
    signals: "#94D8E9",
  };

  return (
    <button onClick={() => onClick(toolKey)} style={toolCardStyles.card}>
      <div style={{
        ...toolCardStyles.iconWrap,
        background: (iconColors[toolKey] || "#FF953E") + "18",
      }}>
        <Icon name={tool.icon} size={22} color={iconColors[toolKey] || "#FF953E"} />
      </div>
      <h3 style={toolCardStyles.title}>{tool.title}</h3>
      <p style={toolCardStyles.subtitle}>{tool.subtitle}</p>
    </button>
  );
}

const toolCardStyles = {
  card: {
    display: "flex", flexDirection: "column", alignItems: "flex-start",
    padding: 16, background: "var(--surface)",
    border: "1px solid var(--border)", borderRadius: 12,
    cursor: "pointer", textAlign: "left", fontFamily: "var(--font-body)",
    transition: "transform 0.15s",
  },
  iconWrap: {
    width: 44, height: 44, borderRadius: 10, display: "flex",
    alignItems: "center", justifyContent: "center", marginBottom: 10,
  },
  title: { fontSize: 14, fontWeight: 700, color: "var(--text)", margin: 0 },
  subtitle: { fontSize: 12, color: "var(--text-muted)", margin: 0, marginTop: 4 },
};

// ─── JOURNEY STAGE CARD ─────────────────────────────────
function StageCard({ stage, onClick, isSelected }) {
  return (
    <button
      onClick={() => onClick(stage)}
      style={{
        ...stageCardStyles.card,
        borderColor: isSelected ? stage.color : "var(--border)",
        background: isSelected ? stage.color + "10" : "var(--surface)",
      }}
    >
      <div style={{ ...stageCardStyles.dot, background: stage.color }}></div>
      <div style={stageCardStyles.content}>
        <h3 style={stageCardStyles.label}>{stage.label}</h3>
        <p style={stageCardStyles.desc}>{stage.description}</p>
      </div>
    </button>
  );
}

const stageCardStyles = {
  card: {
    width: "100%", display: "flex", alignItems: "center", gap: 14,
    padding: "14px 16px", border: "2px solid var(--border)",
    borderRadius: 12, cursor: "pointer", textAlign: "left",
    fontFamily: "var(--font-body)", transition: "all 0.2s", background: "none",
  },
  dot: { width: 12, height: 12, borderRadius: "50%", flexShrink: 0 },
  content: { flex: 1 },
  label: { fontSize: 15, fontWeight: 700, color: "var(--text)", margin: 0 },
  desc: { fontSize: 13, color: "var(--text-muted)", margin: 0, marginTop: 2 },
};

// ─── PILL BADGE ──────────────────────────────────────────
function Pill({ label, color }) {
  return (
    <span style={{
      display: "inline-block", padding: "3px 10px", borderRadius: 20,
      background: color + "20", color: color,
      fontSize: 12, fontWeight: 700, letterSpacing: "0.02em",
    }}>
      {label}
    </span>
  );
}

// Export all
Object.assign(window, {
  Icon, BottomNav, HeaderBar, Expandable, Dialog, ScriptureTag,
  WeekCard, ToolCard, StageCard, Pill,
});
