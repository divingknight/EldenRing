import { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { YouTubeEmbed } from "@/components/article/YouTubeEmbed";
import { TipBox } from "@/components/article/TipBox";

export const metadata: Metadata = {
  title: "Elden Ring Nightreign Day-by-Day Walkthrough — Optimal Routes & Strategy",
  description:
    "Complete Day 1-3 expedition guide for Elden Ring Nightreign. Optimal routes, leveling targets, Church locations, relic priorities, and Nightlord boss strategies.",
};

export default function WalkthroughPage() {
  return (
    <article>
      <Breadcrumb items={[{ label: "Guides", href: "/" }, { label: "Walkthrough" }]} />

      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">
            Elden Ring Nightreign Day-by-Day Walkthrough
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          A complete expedition guide covering optimal routes, leveling targets,
          and boss strategies for Days 1 through 3 in Elden Ring: Nightreign.
        </p>
      </header>

      <div className="guide-content">
        {/* ── How Expeditions Work ── */}
        <h2>How Expeditions Work</h2>
        <p>
          Every run in Nightreign is called an <strong>expedition</strong>, and
          each expedition spans exactly <strong>3 in-game days</strong>. The
          Limveld map shrinks twice per day, collapsing inward like a battle
          royale ring and forcing you toward the center. At the end of each day
          you must defeat a <strong>mini-boss</strong> to advance. On Day 3 the
          map converges on the <strong>Nightlord</strong> arena for the final
          boss fight.
        </p>
        <p>
          If you die at any point during an expedition you restart from scratch.
          Runes, weapons, relics, and flask upgrades all reset between
          expeditions. The only things that persist are meta-progression unlocks
          earned through repeated runs.
        </p>

        {/* ── Video 1 ── */}
        <YouTubeEmbed
          videoId="b6K08aj7UmQ"
          title="The Best Day ONE Route — Elden Ring Nightreign Guide"
        />

        {/* ── Day 1 ── */}
        <h2>Day 1: Exploration &amp; Foundation (Level 1 &rarr; 5)</h2>
        <ul>
          <li>
            <strong>Priority:</strong> Explore as much of the map as possible
            before the first shrink. The Limveld is enormous and you want to
            uncover as many points of interest as you can.
          </li>
          <li>
            <strong>Find your first weapon upgrade</strong> &mdash; look for
            weapon chests hidden in ruins and caves scattered across the map.
          </li>
          <li>
            <strong>Collect runes from enemy camps.</strong> Target groups of
            weaker enemies rather than elites. You need runes to level up at
            Sites of Grace, and dying to an elite this early ends your run.
          </li>
          <li>
            <strong>Visit the Church of Marika</strong> if one spawns in your
            zone &mdash; it adds a flask charge, which is invaluable for later
            days.
          </li>
          <li>
            <strong>Grab any relics you find.</strong> Even weak Yellow relics
            provide useful passive bonuses that compound over the course of a
            run.
          </li>
          <li>
            <strong>Day 1 Mini-Boss:</strong> Relatively easy. Save your
            Ultimate ability if you are struggling, but most characters can
            handle this fight with basic attacks and dodges.
          </li>
        </ul>

        <TipBox type="tip" title="Day 1 Priority">
          On Day 1, prioritize exploration over combat. The map is huge and
          chests contain weapons that carry you through the entire run.
        </TipBox>

        {/* ── Day 2 ── */}
        <h2>Day 2: Power Spike (Level 5 &rarr; 10)</h2>
        <ul>
          <li>
            <strong>The map resets</strong> &mdash; you can explore the same
            areas again with entirely new loot. Take advantage of this to
            revisit high-value locations.
          </li>
          <li>
            <strong>Focus on leveling up to 10+</strong> at Sites of Grace.
            This is your biggest power spike and directly increases your
            survivability on Day 3.
          </li>
          <li>
            <strong>Find more Churches of Marika</strong> for flask charges. You
            want <strong>5&ndash;6 minimum</strong> heading into Day 3.
          </li>
          <li>
            <strong>Start looking for your endgame weapon.</strong> Holy damage
            weapons are the strongest choice against most Nightlords, so
            prioritize those when given the option.
          </li>
          <li>
            <strong>Equip complementary relics.</strong> Check your relic slots:
            Yellow (passive), Blue (powerful active), and Red (ultimate
            modifier). A well-rounded loadout makes a noticeable difference in
            the final fight.
          </li>
          <li>
            <strong>Day 2 Mini-Boss:</strong> Significantly harder than Day 1.
            Use your Ultimate ability if needed &mdash; it will recharge before
            Day 3.
          </li>
        </ul>

        <TipBox type="warning" title="Flask Charges Matter">
          Don&apos;t skip Churches of Marika! Each one adds a flask charge. Going
          into Day 3 with only 3 flasks is a death sentence.
        </TipBox>

        {/* ── Day 3 ── */}
        <h2>Day 3: The Final Confrontation (Level 10 &rarr; 14)</h2>
        <ul>
          <li>
            <strong>Spend early Day 3 farming remaining runes</strong> to hit
            level 13&ndash;14. Every stat point counts in the Nightlord fight.
          </li>
          <li>
            <strong>Buy key consumables from merchants:</strong> Scarlet Rot
            grease, Holy grease, and Wending Grace (essential for solo players
            to return to grace upon death).
          </li>
          <li>
            <strong>Apply weapon buffs before entering the boss arena.</strong>{" "}
            Greases and resins should be applied proactively since you may not
            have time mid-fight.
          </li>
          <li>
            <strong>Apply Scarlet Rot early in the fight</strong> &mdash; the
            percentage-based damage is massive on high-HP Nightlord bosses and
            ticks throughout all phases.
          </li>
          <li>
            <strong>The Nightlord has 2 health bars (4 phases).</strong> See our{" "}
            <a href="/bosses" className="text-primary hover:underline">
              Boss Guides
            </a>{" "}
            for detailed breakdowns of each Nightlord&apos;s moveset and
            strategy.
          </li>
        </ul>

        <TipBox type="danger" title="Point of No Return">
          On Day 3, the Limveld shrinks for the LAST time into the Nightlord
          arena. Make sure you are prepared BEFORE this happens &mdash; there is
          no going back.
        </TipBox>

        {/* ── Optimal Route Checklist ── */}
        <h2>Optimal Route Checklist</h2>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Priority</th>
              <th>Target Level</th>
              <th>Key Items</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Explore + Loot</td>
              <td>5</td>
              <td>First weapon, 1&ndash;2 relics, 1 Church</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Level + Gear</td>
              <td>10</td>
              <td>Holy weapon, 3+ relics, 2&ndash;3 Churches</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Prep + Boss</td>
              <td>13&ndash;14</td>
              <td>Consumables, buffs, max flask charges</td>
            </tr>
          </tbody>
        </table>

        {/* ── Nightlord Rotation ── */}
        <h2>Nightlord Rotation</h2>
        <p>
          The Nightlord you face on Day 3 rotates between expeditions. Each has
          different weaknesses and difficulty levels:
        </p>
        <table>
          <thead>
            <tr>
              <th>Nightlord</th>
              <th>Difficulty</th>
              <th>Weakness</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tricephalos</td>
              <td>Medium</td>
              <td>Fire, Lightning</td>
              <td>Three-headed dragon. First Nightlord most players face.</td>
            </tr>
            <tr>
              <td>Maris (Augur)</td>
              <td>Medium</td>
              <td>Fire, Holy</td>
              <td>Water-based boss. Watch for tidal wave attacks.</td>
            </tr>
            <tr>
              <td>Gnoster (Sentient Pest)</td>
              <td>Hard</td>
              <td>Fire, Strike</td>
              <td>Fast insect boss. Hard to hit with slow weapons.</td>
            </tr>
            <tr>
              <td>Caligo (Fissure in Fog)</td>
              <td>Hard</td>
              <td>Holy, Lightning</td>
              <td>Fog attacks reduce visibility significantly.</td>
            </tr>
            <tr>
              <td>Heolstor (Night Aspect)</td>
              <td>Extreme</td>
              <td>Holy, Fire</td>
              <td>
                Final boss. Requires defeating all 4 other Nightlords first.
              </td>
            </tr>
          </tbody>
        </table>

        {/* ── Co-op vs Solo ── */}
        <h2>Co-op vs Solo</h2>
        <p>
          Nightreign supports both <strong>co-op (up to 3 players)</strong> and{" "}
          <strong>solo</strong> play. In co-op, boss HP triples to compensate
          for the extra players, so fights take roughly the same amount of time.
          Solo players receive a <strong>+60% rune bonus</strong> and face
          dramatically lower boss HP, making it easier to keep pace with
          leveling targets.
        </p>
        <p>
          Both modes are fully viable. If you are learning the game, we
          recommend <strong>co-op for your first few clears</strong> &mdash;
          having teammates to revive you and share aggro makes the Nightlord
          fight far more forgiving while you learn the mechanics.
        </p>

        {/* ── Video 2 ── */}
        <YouTubeEmbed
          videoId="JOv-IorXCcY"
          title="WHAT TO DO — Full Level Pathing EASY GUIDE"
        />
      </div>
    </article>
  );
}
