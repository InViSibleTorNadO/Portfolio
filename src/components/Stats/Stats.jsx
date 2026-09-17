import { useState, useEffect } from "react";
import SectionHeader from "../ui/SectionHeader";
import FadeIn from "../ui/FadeIn";
import "./Stats.css";

// ─── Defaults (shown while loading or if API fails) ──────────────────────────
const DEFAULTS = {
  solved:      848,
  activeDays:  492,
  contests:    15,
  awards:      6,
  submissions: 261,
  maxStreak:   61,
  curStreak:   1,
  easy:        149,
  medium:      433,
  hard:        44,
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Compute current and max coding streak from a LeetCode submissionCalendar.
 * @param {Record<string, number>} cal - Map of unix-timestamp → count
 */
function calcStreaks(cal) {
  const DAY     = 86400;
  const todayDay = Math.floor(Date.now() / 1000 / DAY);

  const days = [
    ...new Set(Object.keys(cal).map((t) => Math.floor(Number(t) / DAY))),
  ].sort((a, b) => b - a); // descending

  let cur = 0;
  let max = 0;
  let streak = 0;

  for (let i = 0; i < days.length; i++) {
    if (i === 0) {
      // Current streak: count consecutive days ending today or yesterday
      if (todayDay - days[0] <= 1) {
        cur = 1;
        for (let j = 1; j < days.length; j++) {
          if (days[j - 1] - days[j] === 1) cur++;
          else break;
        }
      }
      streak = 1;
    } else if (days[i - 1] - days[i] === 1) {
      streak++;
    } else {
      streak = 1;
    }
    max = Math.max(max, streak);
  }

  return { cur, max };
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatBox({ label, value, id }) {
  return (
    <div className="stats__stat">
      <span className="stats__stat-label">{label}</span>
      <span className="stats__stat-num" id={id}>{value}</span>
    </div>
  );
}

function StreakItem({ label, value, id }) {
  return (
    <div className="stats__streak-item">
      {label} <strong id={id}>{value}</strong>
    </div>
  );
}

function DsaBar({ label, value, id, barId, color, pct }) {
  return (
    <div className="stats__dsa-item">
      <span className="stats__dsa-label" style={{ color }}>{label}</span>
      <span className="stats__dsa-num" id={id}>{value}</span>
      <div className="stats__dsa-bar">
        <div
          className="stats__dsa-fill"
          id={barId}
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

/**
 * Stats
 * Fetches live LeetCode stats from alfa-leetcode-api and renders the
 * Codolio-style widget. Falls back to hardcoded defaults if the API is down.
 */
export default function Stats() {
  const [stats, setStats] = useState(DEFAULTS);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(
          "https://alfa-leetcode-api.onrender.com/userProfile/InVis1bleT0rnado",
          { signal: AbortSignal.timeout(8000) }
        );
        if (!res.ok) throw new Error(`API ${res.status}`);
        const d = await res.json();

        const easy   = d.easySolved   ?? 149;
        const medium = d.mediumSolved ?? 433;
        const hard   = d.hardSolved   ?? 44;
        const total  = easy + medium + hard;

        const totalSubs =
          d.totalSubmissions?.find((x) => x.difficulty === "All")?.submissions ?? 843;

        const { cur, max } = d.submissionCalendar
          ? calcStreaks(d.submissionCalendar)
          : { cur: 1, max: 61 };

        const activeDays = d.submissionCalendar
          ? new Set(
              Object.keys(d.submissionCalendar).map((t) =>
                Math.floor(Number(t) / 86400)
              )
            ).size
          : 492;

        setStats({
          solved:      total,
          activeDays,
          contests:    DEFAULTS.contests,
          awards:      DEFAULTS.awards,
          submissions: totalSubs,
          maxStreak:   max,
          curStreak:   cur,
          easy,
          medium,
          hard,
        });
      } catch (err) {
        console.warn("Stats fetch failed, showing cached values.", err.message);
      }
    };

    fetchStats();
  }, []);

  const total = stats.easy + stats.medium + stats.hard || 1; // avoid /0

  return (
    <section id="stats">
      <FadeIn>
        <SectionHeader title="Coding Activity" subtitle="Codolio · @InvisibleTornado" />
      </FadeIn>

      <FadeIn delay={50}>
        <div className="stats__widget">

          {/* ── Top row: headline stats + profile link ──────────────────── */}
          <div className="stats__top">
            <div className="stats__stat-row">
              <StatBox label="Questions Solved" value={stats.solved}      id="st-solved"   />
              <StatBox label="Active Days"       value={stats.activeDays}  id="st-active"   />
              <StatBox label="Contests"          value={stats.contests}    id="st-contests" />
              <StatBox label="Awards"            value={stats.awards}      id="st-awards"   />
            </div>
            <a
              href="https://codolio.com/profile/InvisibleTornado"
              target="_blank"
              rel="noopener noreferrer"
              className="stats__profile-link"
              id="codo-profile-link"
            >
              View Profile
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </div>

          {/* ── Streak bar ──────────────────────────────────────────────── */}
          <div className="stats__streak-bar">
            <StreakItem label="Submissions"    value={stats.submissions} id="st-submissions" />
            <div className="stats__streak-sep" />
            <StreakItem label="Max. Streak"    value={stats.maxStreak}   id="st-maxstreak"   />
            <div className="stats__streak-sep" />
            <StreakItem label="Current Streak" value={stats.curStreak}   id="st-streak"      />
          </div>

          {/* ── GitHub contributions heatmap ────────────────────────────── */}
          <div className="stats__heatmap">
            <img
              src="https://ghchart.rshah.org/1a9e5f/InViSibleTorNadO"
              alt="Beer Singh coding activity heatmap"
              loading="lazy"
              onError={(e) => { e.target.src = "https://ghchart.rshah.org/InViSibleTorNadO"; }}
            />
          </div>

          {/* ── DSA difficulty breakdown ─────────────────────────────────── */}
          <div className="stats__dsa">
            <DsaBar
              label="Easy"   value={stats.easy}   id="st-easy"   barId="st-easy-bar"
              color="#22c55e" pct={Math.round((stats.easy   / total) * 100)}
            />
            <DsaBar
              label="Medium" value={stats.medium} id="st-medium" barId="st-medium-bar"
              color="#f59e0b" pct={Math.round((stats.medium / total) * 100)}
            />
            <DsaBar
              label="Hard"   value={stats.hard}   id="st-hard"   barId="st-hard-bar"
              color="#ef4444" pct={Math.round((stats.hard   / total) * 100)}
            />
          </div>

          {/* ── Footer ─────────────────────────────────────────────────── */}
          <div className="stats__footer">
            <a
              href="https://codolio.com/profile/InvisibleTornado"
              target="_blank"
              rel="noopener noreferrer"
              className="stats__footer-link"
            >
              Learn how we count contributions
            </a>
            <div className="stats__legend">
              <span>Less</span>
              <span className="stats__legend-dot" style={{ background: "var(--brd)" }} />
              <span className="stats__legend-dot" style={{ background: "#9be9a8" }} />
              <span className="stats__legend-dot" style={{ background: "#40c463" }} />
              <span className="stats__legend-dot" style={{ background: "#30a14e" }} />
              <span className="stats__legend-dot" style={{ background: "#216e39" }} />
              <span>More</span>
            </div>
          </div>

        </div>
      </FadeIn>
    </section>
  );
}
