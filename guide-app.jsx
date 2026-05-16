// Foundations Guide — Main App
const { useState, useEffect, useCallback, useRef, Fragment } = React;

// ─── APP SHELL ───────────────────────────────────────────
function App() {
  const [screen, setScreen] = useState("home");
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [selectedTool, setSelectedTool] = useState(null);
  const scrollRef = useRef(null);

  const navigate = useCallback((target, data) => {
    if (target === "weekDetail") {
      setSelectedWeek(data);
      setScreen("weekDetail");
    } else if (target === "toolDetail") {
      setSelectedTool(data);
      setScreen("toolDetail");
    } else {
      setScreen(target);
    }
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, []);

  const goBack = useCallback(() => {
    if (screen === "weekDetail") navigate("weeks");
    else if (screen === "toolDetail") navigate("tools");
    else navigate("home");
  }, [screen, navigate]);

  const activeTab = screen === "weekDetail" ? "weeks" : screen === "toolDetail" ? "tools" : screen;

  return (
    <div style={appStyles.shell}>
      <div ref={scrollRef} style={appStyles.content}>
        {screen === "home" && <HomeScreen onNavigate={navigate} />}
        {screen === "weeks" && <WeeksScreen onNavigate={navigate} />}
        {screen === "weekDetail" && <WeekDetailScreen week={selectedWeek} onBack={goBack} onNavigate={navigate} />}
        {screen === "tools" && <ToolsScreen onNavigate={navigate} />}
        {screen === "toolDetail" && <ToolDetailScreen toolKey={selectedTool} onBack={goBack} />}
        {screen === "about" && <AboutScreen />}
      </div>
      <BottomNav active={activeTab} onNavigate={navigate} />
    </div>
  );
}

const appStyles = {
  shell: {
    width: "100%", minHeight: "100dvh",
    background: "var(--bg)", position: "relative",
    fontFamily: "var(--font-body)",
  },
  content: {
    paddingBottom: 80, minHeight: "100dvh",
    maxWidth: 600, margin: "0 auto",
  },
};

// ─── HOME SCREEN ─────────────────────────────────────────
function HomeScreen({ onNavigate }) {
  return (
    <div>
      {/* Hero */}
      <div style={homeStyles.hero}>
        <div style={homeStyles.heroInner}>
          <div style={homeStyles.churchLabel}>ONE FAMILY CHURCH</div>
          <h1 style={homeStyles.heroTitle}>Foundations</h1>
          <h2 style={homeStyles.heroSubtitle}>A 10-Week Journey into the Life Jesus Offers</h2>
          <p style={homeStyles.heroVerse}>
            For seekers exploring the faith and new believers taking their first steps.
          </p>
        </div>
        <div style={homeStyles.heroAccent}></div>
      </div>

      <div style={homeStyles.body}>
        {/* Before You Begin */}
        <section style={homeStyles.section}>
          <h3 style={homeStyles.sectionTitle}>Before You Begin</h3>
          <p style={homeStyles.sectionDesc}>
            Each week covers one essential area of the Christian life. You can work through this on your own, but it was designed to be walked through with another person — a mentor, a pastor, a friend, or a small group.
          </p>
          <button onClick={() => onNavigate("about")} style={homeStyles.aboutBtn}>
            How to use this guide
            <Icon name="chevronRight" size={16} color="var(--accent)" />
          </button>
        </section>

        {/* Quick Tools */}
        <section style={homeStyles.section}>
          <h3 style={homeStyles.sectionTitle}>Quick Reference Tools</h3>
          <p style={homeStyles.sectionDesc}>Return to these as you walk through the journey.</p>
          <div style={homeStyles.toolsRow}>
            {[
              { key: "gospel", label: "Gospel", color: "#FF953E" },
              { key: "hear", label: "HEAR", color: "#94D8E9" },
              { key: "prayer", label: "4x4 Prayer", color: "#FFB76B" },
              { key: "mature", label: "M.A.T.U.R.E.", color: "#5E6C7A" },
            ].map(t => (
              <button
                key={t.key}
                onClick={() => onNavigate("toolDetail", t.key)}
                style={homeStyles.quickTool}
              >
                <div style={{ ...homeStyles.quickToolIcon, background: t.color + "18" }}>
                  <Icon name={QUICK_TOOLS[t.key].icon} size={20} color={t.color} />
                </div>
                <span style={homeStyles.quickToolLabel}>{t.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Gospel Conversation Tools */}
        <section style={homeStyles.section}>
          <h3 style={homeStyles.sectionTitle}>Gospel Conversation Tools</h3>
          <p style={homeStyles.sectionDesc}>For trusting the Spirit as He opens doors — and discerning what comes next.</p>
          <div style={homeStyles.featureRow}>
            {[
              { key: "shifts", label: "3 Shifts", caption: "Opening doors for the gospel", color: "#FF953E" },
              { key: "signals", label: "3 Signals", caption: "Discerning their response", color: "#94D8E9" },
            ].map(t => (
              <button
                key={t.key}
                onClick={() => onNavigate("toolDetail", t.key)}
                style={homeStyles.featureTool}
                onMouseEnter={e => { e.currentTarget.style.borderColor = t.color; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ ...homeStyles.featureToolIcon, background: t.color + "18" }}>
                    <Icon name={QUICK_TOOLS[t.key].icon} size={22} color={t.color} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ ...homeStyles.featureToolLabel, color: t.color }}>{t.label}</div>
                    <div style={homeStyles.featureToolCaption}>{t.caption}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Gospel Sharing Tools */}
        <section style={homeStyles.section}>
          <h3 style={homeStyles.sectionTitle}>Gospel Sharing Tools</h3>
          <p style={homeStyles.sectionDesc}>Four approaches — one for every person you'll encounter.</p>
          <div style={homeStyles.toolsRow}>
            {[
              { key: "romansRoad", label: "Romans Road", color: "#FF953E" },
              { key: "threeCircles", label: "3 Circles", color: "#94D8E9" },
              { key: "testimony", label: "Testimony", color: "#FFB76B" },
              { key: "creationToChrist", label: "Creation→Christ", color: "#5E6C7A" },
            ].map(t => (
              <button
                key={t.key}
                onClick={() => onNavigate("toolDetail", t.key)}
                style={homeStyles.quickTool}
              >
                <div style={{ ...homeStyles.quickToolIcon, background: t.color + "18" }}>
                  <Icon name={QUICK_TOOLS[t.key].icon} size={20} color={t.color} />
                </div>
                <span style={homeStyles.quickToolLabel}>{t.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* The Journey */}
        <section style={homeStyles.section}>
          <div style={homeStyles.sectionHeader}>
            <h3 style={homeStyles.sectionTitle}>The Journey</h3>
            <button onClick={() => onNavigate("weeks")} style={homeStyles.seeAllBtn}>See all →</button>
          </div>
          <div style={homeStyles.weekPreview}>
            {WEEKS_DATA.slice(0, 4).map(week => (
              <WeekCard key={week.id} week={week} onClick={() => onNavigate("weekDetail", week)} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

const homeStyles = {
  hero: {
    background: "var(--dark)", position: "relative", overflow: "hidden",
    padding: "48px 24px 40px",
  },
  heroInner: { position: "relative", zIndex: 1 },
  heroAccent: {
    position: "absolute", top: -60, right: -60,
    width: 200, height: 200, borderRadius: "50%",
    background: "var(--accent)", opacity: 0.08,
  },
  churchLabel: {
    fontSize: 11, fontWeight: 800, letterSpacing: "0.15em",
    color: "var(--accent)", marginBottom: 16,
    fontFamily: "var(--font-body)",
  },
  heroTitle: {
    fontSize: 40, fontWeight: 800, color: "#fff", margin: 0,
    fontFamily: "var(--font-heading)", lineHeight: 1.1,
  },
  heroSubtitle: {
    fontSize: 18, fontWeight: 400, color: "var(--accent-light)", margin: 0,
    fontFamily: "var(--font-heading)", marginTop: 8, lineHeight: 1.3,
  },
  heroVerse: {
    fontSize: 13, color: "rgba(255,255,255,0.55)", marginTop: 20,
    fontStyle: "italic", lineHeight: 1.5,
  },
  body: { padding: "8px 16px 24px" },
  section: { marginTop: 28 },
  sectionHeader: {
    display: "flex", justifyContent: "space-between", alignItems: "baseline",
  },
  sectionTitle: {
    fontSize: 18, fontWeight: 700, color: "var(--text)", margin: "0 0 4px",
    fontFamily: "var(--font-heading)",
  },
  sectionDesc: {
    fontSize: 13, color: "var(--text-muted)", margin: "0 0 14px", lineHeight: 1.5,
  },
  seeAllBtn: {
    background: "none", border: "none", color: "var(--accent)",
    fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "var(--font-body)",
  },
  aboutBtn: {
    display: "flex", alignItems: "center", gap: 6,
    background: "var(--surface)", border: "1px solid var(--border)",
    borderRadius: 10, padding: "10px 14px",
    color: "var(--accent)", fontWeight: 700, fontSize: 13,
    cursor: "pointer", fontFamily: "var(--font-body)",
  },
  toolsRow: {
    display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10,
  },
  quickTool: {
    display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
    padding: 12, background: "var(--surface)",
    border: "1px solid var(--border)", borderRadius: 12,
    cursor: "pointer", fontFamily: "var(--font-body)",
  },
  quickToolIcon: {
    width: 40, height: 40, borderRadius: 10,
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  quickToolLabel: { fontSize: 11, fontWeight: 700, color: "var(--text)", textAlign: "center" },
  weekPreview: { display: "flex", flexDirection: "column", gap: 8 },
  featureRow: {
    display: "grid", gridTemplateColumns: "1fr", gap: 10,
  },
  featureTool: {
    display: "flex", flexDirection: "column", alignItems: "stretch",
    padding: "14px 16px", background: "var(--surface)",
    border: "1.5px solid var(--border)", borderRadius: 12,
    cursor: "pointer", textAlign: "left", fontFamily: "var(--font-body)",
    transition: "border-color 0.18s ease",
  },
  featureToolIcon: {
    width: 44, height: 44, borderRadius: 10, flexShrink: 0,
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  featureToolLabel: { fontSize: 16, fontWeight: 800, letterSpacing: -0.3, fontFamily: "var(--font-heading)" },
  featureToolCaption: { fontSize: 13, color: "var(--text-muted)", marginTop: 2, lineHeight: 1.4 },
};

// ─── ABOUT SCREEN ───────────────────────────────────────
function AboutScreen() {
  return (
    <div>
      <HeaderBar title="About Foundations" subtitle="How to use this guide" />
      <div style={{ padding: "16px 16px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
        <Block title="If You Are Exploring the Faith">
          You may be holding this guide because someone who loves you gave it to you. Or maybe you walked into a church and something stirred inside you. Whatever brought you here, you are welcome. This guide does not assume you have made up your mind about Jesus. It assumes you are willing to look honestly at what He said, what He did, and what He offers.
        </Block>
        <Block title="If You Have Recently Come to Faith">
          Something has happened to you. You have turned from sin and placed your faith in Jesus Christ as Lord and Savior. The God of the universe has forgiven you, adopted you, and given you new life. But now what? God did not save you to leave you stranded. He saved you to transform you. This guide will help you take your first steps with clarity and confidence.
        </Block>
        <Block title="Each Week Includes">
          <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6, lineHeight: 1.6 }}>
            <li>An opening reflection — connecting the topic to everyday life.</li>
            <li>Core Scripture passages — the biblical foundation.</li>
            <li>Guided teaching — explanation of what the Scriptures teach.</li>
            <li>Reflection questions — to help you think honestly.</li>
            <li>A practical tool — a habit or resource to begin using.</li>
          </ul>
        </Block>
        <Block title="The M.A.T.U.R.E. Framework">
          Scripture identifies several markers of a maturing believer. This guide is organized around six of them. These are not programs to join. They describe the Christ-shaped life God is building in you — week by week, day by day, for the rest of your life.
        </Block>
        <div style={{
          padding: 18, background: "var(--accent-soft)",
          borderRadius: 12, borderLeft: "4px solid var(--accent)",
        }}>
          <p style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "var(--text)", lineHeight: 1.5 }}>
            This is not a course to complete. It is a life to begin.
          </p>
        </div>
      </div>
    </div>
  );
}

function Block({ title, children }) {
  return (
    <div style={{
      padding: 18, background: "var(--surface)",
      border: "1px solid var(--border)", borderRadius: 12,
    }}>
      <h3 style={{
        fontSize: 15, fontWeight: 700, color: "var(--text)",
        fontFamily: "var(--font-heading)", margin: "0 0 8px",
      }}>{title}</h3>
      <div style={{ fontSize: 14, lineHeight: 1.65, color: "var(--text-secondary)" }}>
        {children}
      </div>
    </div>
  );
}

// ─── WEEKS SCREEN ────────────────────────────────────────
function WeeksScreen({ onNavigate }) {
  return (
    <div>
      <HeaderBar title="The Journey" subtitle="One essential area each week" />
      <div style={{ padding: "16px 16px 24px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {WEEKS_DATA.map(week => (
            <WeekCard
              key={week.id}
              week={week}
              onClick={() => onNavigate("weekDetail", week)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── WEEK DETAIL SCREEN ──────────────────────────────────
function WeekDetailScreen({ week, onBack, onNavigate }) {
  if (!week) return null;

  return (
    <div>
      {/* Week Header */}
      <div style={weekDetailStyles.hero}>
        <button onClick={onBack} style={weekDetailStyles.backBtn}>
          <Icon name="back" size={20} color="#fff" />
          <span style={{ color: "#fff", fontSize: 14 }}>Back</span>
        </button>
        <div style={weekDetailStyles.heroContent}>
          <div style={weekDetailStyles.weekNum}>WEEK {week.id}</div>
          <h1 style={weekDetailStyles.title}>{week.title}</h1>
          <p style={weekDetailStyles.subtitle}>{week.subtitle}</p>
        </div>
      </div>

      <div style={{ padding: "16px 16px 24px" }}>
        {/* Opening Reflection */}
        <div style={weekDetailStyles.openingCard}>
          <div style={weekDetailStyles.sectionLabel}>OPENING REFLECTION</div>
          <p style={weekDetailStyles.openingText}>{week.opening}</p>
        </div>

        {/* Core Scriptures */}
        <Expandable title="Core Scriptures" icon="scripture" defaultOpen={true}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {week.coreScriptures.map((s, i) => (
              <div key={i} style={weekDetailStyles.scriptureCard}>
                <p style={weekDetailStyles.scriptureText}>"{s.text}"</p>
                <div style={weekDetailStyles.scriptureRef}>— {s.ref}</div>
              </div>
            ))}
          </div>
        </Expandable>

        <div style={{ height: 10 }}></div>

        {/* Teaching */}
        <Expandable title="Teaching" icon="book" defaultOpen={true}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {week.teaching.map((t, i) => (
              <div key={i}>
                <h4 style={weekDetailStyles.teachingHeading}>{t.heading}</h4>
                <p style={weekDetailStyles.teachingBody}>{t.body}</p>
              </div>
            ))}
          </div>
        </Expandable>

        {/* Identity Truths (Week 1 only) */}
        {week.identityTruths && (
          <>
            <div style={{ height: 10 }}></div>
            <Expandable title="What is Now True of You in Christ" icon="sparkle">
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {week.identityTruths.map((t, i) => (
                  <div key={i} style={weekDetailStyles.identityCard}>
                    <div style={weekDetailStyles.identityLabel}>{t.label}</div>
                    <div style={weekDetailStyles.identityText}>{t.text}</div>
                    <div style={{ marginTop: 6 }}>
                      <ScriptureTag reference={t.ref} />
                    </div>
                  </div>
                ))}
              </div>
            </Expandable>
          </>
        )}

        <div style={{ height: 10 }}></div>

        {/* Reflection Questions */}
        <Expandable title="Reflection Questions" icon="quote">
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {week.reflectionQuestions.map((q, i) => (
              <div key={i} style={weekDetailStyles.questionCard}>
                <span style={weekDetailStyles.questionNum}>{i + 1}</span>
                <span style={weekDetailStyles.questionText}>{q}</span>
              </div>
            ))}
          </div>
        </Expandable>

        <div style={{ height: 10 }}></div>

        {/* Tool */}
        <Expandable title="This Week's Tool" icon="target">
          <div style={weekDetailStyles.toolCard}>
            <h4 style={weekDetailStyles.toolTitle}>{week.tool.title}</h4>
            <ul style={weekDetailStyles.toolList}>
              {week.tool.steps.map((step, i) => (
                <li key={i} style={weekDetailStyles.toolStep}>{step}</li>
              ))}
            </ul>
            {week.tool.note && (
              <p style={weekDetailStyles.toolNote}>{week.tool.note}</p>
            )}
          </div>
        </Expandable>

        {/* Nav between weeks */}
        <div style={weekDetailStyles.weekNav}>
          {week.id > 1 && (
            <button
              onClick={() => onNavigate("weekDetail", WEEKS_DATA[week.id - 2])}
              style={weekDetailStyles.weekNavBtn}
            >
              <Icon name="back" size={16} /> Week {week.id - 1}
            </button>
          )}
          <div style={{ flex: 1 }}></div>
          {week.id < 10 && (
            <button
              onClick={() => onNavigate("weekDetail", WEEKS_DATA[week.id])}
              style={{ ...weekDetailStyles.weekNavBtn, color: "var(--accent)" }}
            >
              Week {week.id + 1} <Icon name="chevronRight" size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const weekDetailStyles = {
  hero: { padding: "16px 20px 28px", background: "var(--dark)", position: "relative" },
  backBtn: {
    display: "flex", alignItems: "center", gap: 6,
    background: "none", border: "none", cursor: "pointer",
    marginBottom: 16, padding: 0, fontFamily: "var(--font-body)",
  },
  heroContent: { position: "relative", zIndex: 1 },
  weekNum: {
    fontSize: 12, fontWeight: 800, letterSpacing: "0.12em",
    color: "var(--accent)",
  },
  title: {
    fontSize: 28, fontWeight: 800, color: "#fff", margin: "8px 0 0",
    fontFamily: "var(--font-heading)", lineHeight: 1.15,
  },
  subtitle: {
    fontSize: 15, color: "rgba(255,255,255,0.65)", margin: "8px 0 0",
    fontFamily: "var(--font-heading)", lineHeight: 1.4,
  },
  openingCard: {
    padding: 16, background: "var(--accent-soft)", borderRadius: 12,
    marginBottom: 16, borderLeft: "4px solid var(--accent)",
  },
  sectionLabel: {
    fontSize: 11, fontWeight: 800, letterSpacing: "0.1em",
    color: "var(--accent)", marginBottom: 8,
  },
  openingText: {
    fontSize: 14, lineHeight: 1.65, color: "var(--text)", margin: 0,
    fontStyle: "italic",
  },
  scriptureCard: {
    padding: 14, background: "var(--bg)", borderRadius: 10,
    borderLeft: "3px solid var(--accent)",
  },
  scriptureText: {
    fontSize: 14, lineHeight: 1.6, color: "var(--text-secondary)",
    margin: 0, fontStyle: "italic",
  },
  scriptureRef: {
    fontSize: 12, fontWeight: 700, color: "var(--accent)", marginTop: 8,
  },
  teachingHeading: {
    fontSize: 15, fontWeight: 700, color: "var(--text)",
    fontFamily: "var(--font-heading)", margin: "0 0 6px",
  },
  teachingBody: { fontSize: 14, lineHeight: 1.65, color: "var(--text-secondary)", margin: 0 },
  identityCard: {
    padding: "12px 14px", background: "var(--bg)", borderRadius: 10,
  },
  identityLabel: { fontSize: 14, fontWeight: 700, color: "var(--text)" },
  identityText: { fontSize: 13, lineHeight: 1.55, color: "var(--text-muted)", marginTop: 4 },
  questionCard: {
    display: "flex", alignItems: "flex-start", gap: 10,
    padding: "10px 12px", background: "var(--bg)", borderRadius: 8,
  },
  questionNum: {
    width: 24, height: 24, borderRadius: 6,
    background: "var(--accent)", color: "#fff",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontWeight: 800, fontSize: 12, flexShrink: 0,
  },
  questionText: {
    fontSize: 14, lineHeight: 1.55, color: "var(--text)",
  },
  toolCard: {
    padding: 14, background: "var(--bg)", borderRadius: 10,
  },
  toolTitle: {
    fontSize: 15, fontWeight: 700, color: "var(--text)",
    fontFamily: "var(--font-heading)", margin: "0 0 10px",
  },
  toolList: { margin: 0, paddingLeft: 0, display: "flex", flexDirection: "column", gap: 6 },
  toolStep: { fontSize: 14, lineHeight: 1.5 },
  toolNote: {
    fontSize: 13, lineHeight: 1.55, color: "var(--text-muted)",
    margin: "12px 0 0", fontStyle: "italic",
  },
  weekNav: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    marginTop: 24, paddingTop: 16, borderTop: "1px solid var(--border)",
  },
  weekNavBtn: {
    display: "flex", alignItems: "center", gap: 6,
    background: "none", border: "none", cursor: "pointer",
    color: "var(--text-muted)", fontSize: 14, fontWeight: 600,
    fontFamily: "var(--font-body)",
  },
};

// ─── TOOLS SCREEN ────────────────────────────────────────
function ToolsScreen({ onNavigate }) {
  return (
    <div>
      <HeaderBar title="Quick Reference Tools" subtitle="Return to these as you grow" />
      <div style={{ padding: "16px 16px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {Object.entries(QUICK_TOOLS).map(([key, tool]) => (
            <ToolCard key={key} tool={tool} toolKey={key} onClick={(k) => onNavigate("toolDetail", k)} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── TOOL DETAIL SCREEN ──────────────────────────────────
function ToolDetailScreen({ toolKey, onBack }) {
  const tool = QUICK_TOOLS[toolKey];
  if (!tool) return null;

  const isReligionVsGospel = toolKey === "religionVsGospel";
  const isMature = toolKey === "mature";
  const isGospelTool = tool.kind === "gospel-tool";
  const isShifts = tool.kind === "shifts-tool";
  const isSignals = tool.kind === "signals-tool";

  return (
    <div>
      <HeaderBar title={tool.title} subtitle={tool.subtitle} onBack={onBack} />
      <div style={{ padding: "16px 16px 24px" }}>
        {isShifts ? (
          <ShiftsToolDetail tool={tool} />
        ) : isSignals ? (
          <SignalsToolDetail tool={tool} />
        ) : isGospelTool ? (
          <GospelToolDetail tool={tool} toolKey={toolKey} />
        ) : isReligionVsGospel ? (
          <div style={toolDetailStyles.rvgTable}>
            <div style={toolDetailStyles.rvgHeader}>
              <div style={{ ...toolDetailStyles.rvgHeaderCell, background: "var(--text-muted)" }}>Religion Says</div>
              <div style={{ ...toolDetailStyles.rvgHeaderCell, background: "var(--accent)" }}>The Gospel Says</div>
            </div>
            {tool.content.map((row, i) => (
              <div key={i} style={toolDetailStyles.rvgRow}>
                <div style={toolDetailStyles.rvgCellLeft}>{row.religion}</div>
                <div style={toolDetailStyles.rvgCellRight}>{row.gospel}</div>
              </div>
            ))}
          </div>
        ) : isMature ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {tool.content.map((item, i) => (
              <div key={i} style={toolDetailStyles.matureCard}>
                <div style={toolDetailStyles.matureLetter}>{item.letter}</div>
                <div style={{ flex: 1 }}>
                  <div style={toolDetailStyles.matureLabel}>{item.label}</div>
                  <div style={toolDetailStyles.matureText}>{item.text}</div>
                  {item.scripture && (
                    <div style={{ marginTop: 6 }}>
                      <ScriptureTag reference={item.scripture} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {tool.content.map((item, i) => (
              <div key={i} style={toolDetailStyles.stepCard}>
                <div style={toolDetailStyles.stepLabel}>{item.label}</div>
                <p style={toolDetailStyles.stepText}>{item.text}</p>
                {item.scripture && (
                  <div style={{ marginTop: 6 }}>
                    <ScriptureTag reference={item.scripture} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const toolDetailStyles = {
  stepCard: {
    padding: 16, background: "var(--surface)",
    border: "1px solid var(--border)", borderRadius: 12,
  },
  stepLabel: {
    fontSize: 12, fontWeight: 800, letterSpacing: "0.08em",
    color: "var(--accent)", marginBottom: 6,
    textTransform: "uppercase",
  },
  stepText: { fontSize: 14, lineHeight: 1.7, color: "var(--text)", margin: 0 },
  rvgTable: {
    borderRadius: 12, overflow: "hidden",
    border: "1px solid var(--border)",
  },
  rvgHeader: { display: "grid", gridTemplateColumns: "1fr 1fr" },
  rvgHeaderCell: {
    padding: "10px 12px", color: "#fff", fontSize: 13,
    fontWeight: 700, textAlign: "center",
  },
  rvgRow: {
    display: "grid", gridTemplateColumns: "1fr 1fr",
    borderTop: "1px solid var(--border)",
  },
  rvgCellLeft: {
    padding: "12px", fontSize: 13, lineHeight: 1.5,
    color: "var(--text-muted)", background: "var(--surface)",
    borderRight: "1px solid var(--border)",
  },
  rvgCellRight: {
    padding: "12px", fontSize: 13, lineHeight: 1.5,
    color: "var(--text)", background: "var(--accent-soft)",
    fontWeight: 500,
  },
  matureCard: {
    display: "flex", gap: 14, padding: 16,
    background: "var(--surface)", border: "1px solid var(--border)",
    borderRadius: 12,
  },
  matureLetter: {
    width: 40, height: 40, borderRadius: 10,
    background: "var(--accent)", color: "#fff",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontWeight: 800, fontSize: 18, flexShrink: 0,
    fontFamily: "var(--font-heading)",
  },
  matureLabel: { fontSize: 15, fontWeight: 700, color: "var(--text)" },
  matureText: { fontSize: 13, lineHeight: 1.5, color: "var(--text-muted)", marginTop: 2 },
};

// ─── THREE CIRCLES DIAGRAM ───────────────────────────────
function ThreeCirclesDiagram() {
  return (
    <div style={{ padding: 16, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12 }}>
      <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: 14 }}>THE DIAGRAM</div>
      <svg viewBox="-15 -10 370 268" style={{ width: "100%", height: "auto", display: "block", overflow: "visible" }}>
        <defs>
          <marker id="tc-arrow" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto">
            <polygon points="0,0 9,3.5 0,7" fill="#5E6C7A" />
          </marker>
        </defs>
        {/* God's Plan — top left */}
        <ellipse cx="83" cy="78" rx="70" ry="58" fill="#94D8E912" stroke="#94D8E9" strokeWidth="2.5" />
        <path d="M83,100 C83,100 63,85 63,70 C63,62 70,56 78,59 C81,60 83,64 83,68 C83,64 85,60 88,59 C96,56 103,62 103,70 C103,85 83,100 83,100 Z" fill="#94D8E9" opacity="0.55" />
        <text x="83" y="51" textAnchor="middle" fontSize="10" fontWeight="800" fill="#20242A" fontFamily="Montserrat,sans-serif">GOD'S PLAN</text>
        {/* Brokenness — top right */}
        <ellipse cx="247" cy="78" rx="67" ry="57" fill="#FF953E08" stroke="#FF953E" strokeWidth="2" strokeDasharray="5,3" />
        <polyline points="217,78 227,63 237,85 247,63 257,85 267,63 277,78" fill="none" stroke="#FF953E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="247" y="52" textAnchor="middle" fontSize="10" fontWeight="800" fill="#20242A" fontFamily="Montserrat,sans-serif">BROKENNESS</text>
        {/* Jesus — bottom center */}
        <ellipse cx="165" cy="196" rx="67" ry="52" fill="#FF953E14" stroke="#FF953E" strokeWidth="2.5" />
        <line x1="165" y1="173" x2="165" y2="217" stroke="#FF953E" strokeWidth="4" strokeLinecap="round" />
        <line x1="148" y1="188" x2="182" y2="188" stroke="#FF953E" strokeWidth="4" strokeLinecap="round" />
        <text x="165" y="169" textAnchor="middle" fontSize="9" fontWeight="800" fill="#FF953E" fontFamily="Montserrat,sans-serif">JESUS</text>
        <text x="165" y="236" textAnchor="middle" fontSize="9" fontWeight="800" fill="#5E6C7A" fontFamily="Montserrat,sans-serif">FOLLOW</text>
        {/* Arrow 1: God's Plan → Brokenness via SIN */}
        <path d="M149 28 Q165 4 181 28" fill="none" stroke="#5E6C7A" strokeWidth="1.8" markerEnd="url(#tc-arrow)" />
        <text x="165" y="1" textAnchor="middle" fontSize="9" fontWeight="800" fill="#5E6C7A" fontFamily="Montserrat,sans-serif">SIN</text>
        {/* Arrow 2: Brokenness → Jesus (TURN & BELIEVE) */}
        <path d="M295 120 Q318 165 231 188" fill="none" stroke="#5E6C7A" strokeWidth="1.8" markerEnd="url(#tc-arrow)" />
        <text x="322" y="142" textAnchor="start" fontSize="8" fontWeight="700" fill="#5E6C7A" fontFamily="Montserrat,sans-serif">TURN &amp;</text>
        <text x="322" y="154" textAnchor="start" fontSize="8" fontWeight="700" fill="#5E6C7A" fontFamily="Montserrat,sans-serif">BELIEVE</text>
        {/* Arrow 3: Jesus → God's Plan (RESTORED & FORGIVEN) */}
        <path d="M99 188 Q26 168 46 118" fill="none" stroke="#5E6C7A" strokeWidth="1.8" markerEnd="url(#tc-arrow)" />
        <text x="-13" y="148" textAnchor="start" fontSize="8" fontWeight="700" fill="#5E6C7A" fontFamily="Montserrat,sans-serif">RESTORED</text>
        <text x="-13" y="160" textAnchor="start" fontSize="8" fontWeight="700" fill="#5E6C7A" fontFamily="Montserrat,sans-serif">&amp; FORGIVEN</text>
      </svg>
      <div style={{ borderTop: "1px solid var(--border)", marginTop: 10, paddingTop: 12 }}>
        <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 8 }}>KEY QUESTIONS</div>
        {[
          "Which circle are you in?",
          "Which circle do you want to be in?",
          "Is there anything stopping you from turning from sin, believing in Jesus, and being restored to God's plan?",
        ].map((q, i) => (
          <div key={i} style={{ fontSize: 12, lineHeight: 1.55, color: "var(--text)", fontStyle: "italic", marginBottom: 5 }}>
            — "{q}"
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── GOSPEL TOOL DETAIL ──────────────────────────────────
function GospelToolDetail({ tool, toolKey }) {
  const [activeStep, setActiveStep] = React.useState(0);

  const toolColors = {
    romansRoad: "#FF953E",
    threeCircles: "#94D8E9",
    testimony: "#FFB76B",
    creationToChrist: "#5E6C7A",
  };
  const color = toolColors[toolKey] || "var(--accent)";

  const handleStepClick = (i) => {
    setActiveStep(i);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

      {/* Best For */}
      <div style={{ padding: 16, background: color + "14", borderRadius: 12, borderLeft: `4px solid ${color}` }}>
        <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", color: color, marginBottom: 6 }}>BEST FOR</div>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--text)", margin: "0 0 8px" }}>{tool.bestFor}</p>
        <div style={{ fontSize: 12, color: "var(--text-muted)", fontStyle: "italic" }}>Emphasis: {tool.emphasis}</div>
      </div>

      {/* Three Circles visual */}
      {toolKey === "threeCircles" && <ThreeCirclesDiagram />}

      {/* Flow Steps */}
      <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
        <div style={{ padding: "14px 16px 10px", fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", color: "var(--text-muted)" }}>
          {tool.verses ? "TAP A STEP TO SEE ITS VERSE" : (tool.flowDetails ? "TAP A STEP TO LEARN MORE" : "THE FLOW")}
        </div>
        {tool.flow.map((step, i) => (
          <button
            key={i}
            onClick={() => handleStepClick(i)}
            style={{
              display: "flex", alignItems: "center", gap: 12,
              width: "100%", padding: "11px 16px",
              background: activeStep === i ? color + "10" : "none",
              border: "none", borderTop: "1px solid var(--border)",
              cursor: "pointer", textAlign: "left",
              fontFamily: "var(--font-body)", transition: "background 0.15s",
            }}
          >
            <div style={{
              width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
              background: activeStep === i ? color : color + "22",
              color: activeStep === i ? "#fff" : color,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 800, fontSize: 12, transition: "all 0.2s",
            }}>
              {i + 1}
            </div>
            <span style={{
              fontSize: 14,
              fontWeight: activeStep === i ? 700 : 500,
              color: activeStep === i ? "var(--text)" : "var(--text-secondary)",
              transition: "all 0.2s",
            }}>
              {step}
            </span>
          </button>
        ))}
      </div>

      {/* Flow detail card for non-Romans-Road tools */}
      {!tool.verses && tool.flowDetails && (
        <div style={{ padding: 16, background: color + "10", borderRadius: 12, borderLeft: `3px solid ${color}` }}>
          <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", color: color, marginBottom: 8 }}>
            STEP {activeStep + 1} — {tool.flow[activeStep]}
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--text)", margin: "0 0 12px" }}>
            {tool.flowDetails[activeStep]}
          </p>
          <div style={{ display: "flex", gap: 7 }}>
            {tool.flow.map((_, i) => (
              <button
                key={i}
                onClick={() => handleStepClick(i)}
                style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: activeStep === i ? color : color + "40",
                  border: "none", cursor: "pointer", padding: 0,
                  transition: "all 0.2s",
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Verse card for Romans Road */}
      {tool.verses && (
        <div style={{ padding: 16, background: color + "10", borderRadius: 12, borderLeft: `3px solid ${color}` }}>
          <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", color: color, marginBottom: 8 }}>
            {(tool.verses[activeStep] || tool.verses[0]).ref}
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--text)", margin: "0 0 14px", fontStyle: "italic" }}>
            "{(tool.verses[activeStep] || tool.verses[0]).text}"
          </p>
          <div style={{ display: "flex", gap: 7 }}>
            {tool.verses.map((_, i) => (
              <button
                key={i}
                onClick={() => handleStepClick(i)}
                style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: activeStep === i ? color : color + "40",
                  border: "none", cursor: "pointer", padding: 0,
                  transition: "all 0.2s",
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Conversation Starters */}
      <Expandable title="Conversation Starters" icon="quote" defaultOpen={true}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {tool.transitionQuestions.map((q, i) => (
            <div key={i} style={{
              padding: "10px 12px", background: "var(--bg)", borderRadius: 8,
              fontSize: 14, lineHeight: 1.55, color: "var(--text)", fontStyle: "italic",
            }}>
              "{q}"
            </div>
          ))}
        </div>
      </Expandable>

      {/* Sample Summary */}
      <div style={{ padding: 16, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12 }}>
        <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: 8 }}>SAMPLE SUMMARY</div>
        <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--text)", margin: 0, fontStyle: "italic" }}>"{tool.summary}"</p>
      </div>

      {/* Strengths & Watch-Fors */}
      <Expandable title="Strengths & Watch-Fors" icon="sparkle">
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", color: color, marginBottom: 8 }}>STRENGTHS</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {tool.strengths.map((s, i) => (
                <div key={i} style={{
                  fontSize: 13, lineHeight: 1.5, color: "var(--text)",
                  paddingLeft: 12, borderLeft: `2px solid ${color}`,
                }}>
                  {s}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 8 }}>WATCH FOR</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {tool.watchFor.map((w, i) => (
                <div key={i} style={{
                  fontSize: 13, lineHeight: 1.5, color: "var(--text-muted)",
                  paddingLeft: 12, borderLeft: "2px solid var(--border)",
                }}>
                  {w}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Expandable>
    </div>
  );
}

// ─── SHIFTS TOOL DETAIL ──────────────────────────────────
function ShiftsToolDetail({ tool }) {
  const [open, setOpen] = React.useState(0);
  const accent = "var(--accent)";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {/* Intro */}
      <div style={{ padding: 16, background: "var(--accent-soft)", borderRadius: 12, borderLeft: "4px solid var(--accent)" }}>
        <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", color: "var(--accent)", marginBottom: 6 }}>HOW TO USE</div>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--text)", margin: 0 }}>{tool.intro}</p>
      </div>

      {/* Stages — vertical journey */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {tool.stages.map((stage, i) => {
          const isOpen = open === i;
          return (
            <div key={i} style={{ position: "relative" }}>
              {/* Shift connector + label (between stages) */}
              {i > 0 && (
                <div style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "10px 0 10px 28px", position: "relative",
                }}>
                  <div style={{
                    position: "absolute", left: 30, top: 0, bottom: 0,
                    width: 2, background: "var(--accent)", opacity: 0.25,
                  }} />
                  <div style={{
                    position: "absolute", left: 22, top: "50%", transform: "translateY(-50%)",
                    width: 18, height: 18, borderRadius: "50%",
                    background: "var(--accent)", color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 0 0 4px var(--bg)",
                  }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div style={{
                    marginLeft: 40,
                    fontSize: 10, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase",
                    color: "var(--accent)",
                  }}>
                    Shift {i} · {stage.shiftLabel}
                  </div>
                </div>
              )}

              {/* Stage card */}
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                style={{
                  width: "100%", textAlign: "left",
                  background: isOpen ? "var(--accent-soft)" : "var(--surface)",
                  border: `1.5px solid ${isOpen ? "var(--accent)" : "var(--border)"}`,
                  borderRadius: 14,
                  padding: "16px 18px",
                  display: "flex", flexDirection: "column", gap: 10,
                  cursor: "pointer", fontFamily: "var(--font-body)",
                  transition: "all 200ms ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{
                    width: 52, height: 52, flexShrink: 0,
                    borderRadius: 12,
                    background: stage.final ? "var(--accent)" : "var(--dark)",
                    color: stage.final ? "#fff" : "var(--accent)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 800, fontSize: 28, letterSpacing: -1,
                    fontFamily: "var(--font-heading)",
                  }}>
                    {stage.letter}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontSize: 11, fontWeight: 800, letterSpacing: "0.15em",
                      color: "var(--text-muted)", textTransform: "uppercase",
                    }}>
                      Stage {i + 1}
                    </div>
                    <div style={{
                      fontSize: 20, fontWeight: 800, color: "var(--text)",
                      letterSpacing: -0.5, marginTop: 2, fontFamily: "var(--font-heading)",
                    }}>
                      {stage.title}
                    </div>
                  </div>

                  <Icon
                    name={isOpen ? "chevronUp" : "chevronDown"}
                    size={18}
                    color="var(--text-muted)"
                  />
                </div>

                {isOpen && (
                  <div style={{ paddingTop: 6 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>
                      {stage.headline}
                    </div>
                    <div style={{ fontSize: 14, lineHeight: 1.65, color: "var(--text-secondary)" }}>
                      {stage.body}
                    </div>

                    <div style={{
                      marginTop: 14, paddingTop: 14,
                      borderTop: "1px solid var(--border)",
                    }}>
                      <div style={{
                        fontSize: 10, fontWeight: 800, letterSpacing: "0.15em",
                        color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 8,
                      }}>
                        What it looks like
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        {stage.examples.map((e, j) => (
                          <div key={j} style={{
                            fontSize: 13.5, color: "var(--text-secondary)",
                            paddingLeft: 18, position: "relative", lineHeight: 1.5,
                          }}>
                            <span style={{
                              position: "absolute", left: 0, top: 8,
                              width: 6, height: 6, borderRadius: "50%",
                              background: "var(--accent)",
                            }} />
                            {e}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Closing verse */}
      {tool.closing && (
        <div style={{ padding: 16, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12 }}>
          <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--text-secondary)", margin: 0, fontStyle: "italic" }}>
            "{tool.closing.text}"
          </p>
          <div style={{ marginTop: 8 }}>
            <ScriptureTag reference={tool.closing.ref} />
          </div>
        </div>
      )}
    </div>
  );
}

// ─── SIGNALS TOOL DETAIL ─────────────────────────────────
function SignalsToolDetail({ tool }) {
  const [open, setOpen] = React.useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {/* Intro */}
      <div style={{ padding: 16, background: "var(--accent-soft)", borderRadius: 12, borderLeft: "4px solid var(--accent)" }}>
        <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", color: "var(--accent)", marginBottom: 6 }}>HOW TO USE</div>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--text)", margin: 0 }}>{tool.intro}</p>
      </div>

      {/* Signal cards — collapsible */}
      {tool.signals.map((sig, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderLeft: `4px solid ${sig.color}`,
            borderRadius: 14,
            overflow: "hidden",
            transition: "border-color 200ms ease",
          }}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              style={{
                width: "100%", textAlign: "left",
                background: "none", border: "none", cursor: "pointer",
                padding: "16px 18px",
                fontFamily: "var(--font-body)",
                display: "flex", alignItems: "center", gap: 14,
              }}
            >
              <div style={{
                width: 44, height: 44, flexShrink: 0,
                borderRadius: "50%",
                background: sig.soft,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <div style={{
                  width: 22, height: 22, borderRadius: "50%",
                  background: sig.color,
                  boxShadow: `0 0 0 4px ${sig.soft}`,
                }} />
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: 11, fontWeight: 800, letterSpacing: "0.15em",
                  color: "var(--text-muted)", textTransform: "uppercase",
                }}>
                  Signal {i + 1}
                </div>
                <div style={{
                  fontSize: 20, fontWeight: 800, color: "var(--text)",
                  letterSpacing: -0.5, marginTop: 2, fontFamily: "var(--font-heading)",
                }}>
                  {sig.label}
                </div>
              </div>

              <Icon
                name={isOpen ? "chevronUp" : "chevronDown"}
                size={18}
                color="var(--text-muted)"
              />
            </button>

            {isOpen && (
              <div>
                <div style={{ padding: "0 20px 18px" }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>
                    {sig.headline}
                  </div>
                  <div style={{ fontSize: 14, lineHeight: 1.65, color: "var(--text-secondary)" }}>
                    {sig.body}
                  </div>
                </div>

                <div style={{
                  background: sig.soft,
                  padding: "14px 20px 18px",
                }}>
                  <div style={{
                    fontSize: 10, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase",
                    color: sig.color, marginBottom: 10,
                  }}>
                    Your next step
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {sig.actions.map((a, j) => (
                      <div key={j} style={{
                        display: "flex", alignItems: "flex-start", gap: 10,
                        fontSize: 13.5, color: "var(--text)", lineHeight: 1.5, fontWeight: 500,
                      }}>
                        <span style={{
                          width: 18, height: 18, borderRadius: "50%", flexShrink: 0,
                          background: sig.color, color: "#fff",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 10, fontWeight: 800, marginTop: 1,
                        }}>
                          {j + 1}
                        </span>
                        <span>{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// Make App global
Object.assign(window, { App });
