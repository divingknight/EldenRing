import { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { YouTubeEmbed } from "@/components/article/YouTubeEmbed";
import { TipBox } from "@/components/article/TipBox";
import { InfoBox } from "@/components/article/InfoBox";

export const metadata: Metadata = {
  title:
    "Elden Ring Nightreign Beginner's Guide — How to Survive Your First Expedition",
  description:
    "New to Elden Ring: Nightreign? Learn how the 3-day cycle works, choose your first Nightfarer, master relics and runes, and survive your first Nightlord boss fight in this comprehensive beginner guide.",
};

export default function BeginnerGuidePage() {
  return (
    <article>
      <Breadcrumb
        items={[
          { label: "Guides", href: "/" },
          { label: "Beginner's Guide" },
        ]}
      />

      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">📖</span>
          <h1 className="text-3xl font-bold">
            Elden Ring Nightreign Beginner&apos;s Guide
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Everything you need to know to survive your first expedition, from
          choosing a Nightfarer to defeating the Nightlord on Day 3.
        </p>
      </header>

      <div className="guide-content">
        {/* ── Section 1: What Is Nightreign? ── */}
        <h2>What Is Elden Ring: Nightreign?</h2>
        <p>
          Elden Ring: Nightreign is a roguelike co-op spin-off of Elden Ring
          developed by FromSoftware. Rather than a sprawling open-world
          adventure, Nightreign is built around short, session-based expeditions
          for 1&ndash;3 players. Each run follows a 3-day cycle: you explore the
          map, collect loot, level up your Nightfarer, and ultimately face a
          devastating Nightlord boss on Day 3. If you die, you lose everything
          and start over &mdash; but the knowledge you gain carries forward.
        </p>

        <InfoBox
          items={[
            { label: "Genre", value: "Roguelike Action RPG", icon: "🎮" },
            { label: "Players", value: "1-3 Co-op", icon: "👥" },
            { label: "Platform", value: "PC / PS5 / Xbox", icon: "💻" },
            { label: "Developer", value: "FromSoftware", icon: "🏢" },
          ]}
        />

        {/* ── Section 2: Video ── */}
        <YouTubeEmbed
          videoId="FjsC-sOTTgM"
          title="Elden Ring Nightreign For Dummies — Everything You Need to Know"
        />

        {/* ── Section 3: The 3-Day Cycle ── */}
        <h2>The 3-Day Cycle Explained</h2>
        <p>
          Every expedition in Nightreign follows a strict 3-day structure. Understanding
          this cycle is the key to consistent victories.
        </p>

        <h3>Day 1 &mdash; Explore and Gather</h3>
        <p>
          The map opens up and you spawn into the Limveld. Your goal is to
          explore as much as possible: collect runes from enemies, find weapons
          and armor, and pick up relics from chests. The Limveld will shrink
          twice during the day, forcing you toward the center. At the end of
          Day 1, you must defeat a mini-boss to advance.
        </p>

        <h3>Day 2 &mdash; Power Up</h3>
        <p>
          The map resets and reopens with new item placements. Continue leveling
          your character and refining your build. Crucially, seek out golden
          Churches of Marika &mdash; each one permanently adds a flask charge
          for the rest of the run. A second mini-boss awaits at the end of
          Day 2.
        </p>

        <h3>Day 3 &mdash; The Nightlord</h3>
        <p>
          Day 3 is your final chance to prepare. Spend any remaining runes,
          equip your best relics, and then enter the Nightlord boss arena.
          Defeat the Nightlord to win the expedition. Fail, and it&apos;s back
          to the beginning.
        </p>

        {/* ── Section 4: Choosing Your First Nightfarer ── */}
        <h2>Choosing Your First Nightfarer</h2>
        <p>
          Nightreign launches with 8 base-game Nightfarers plus 2 additional
          characters available through DLC. Each Nightfarer has a unique
          playstyle, passive ability, and Ultimate Art. For your first few runs,
          we recommend one of these three beginner-friendly picks:
        </p>
        <ul>
          <li>
            <strong>Guardian</strong> &mdash; A sturdy tank with high poise and
            defensive skills. Very forgiving of mistakes.
          </li>
          <li>
            <strong>Wylder</strong> &mdash; A balanced all-rounder whose passive
            ability lets you cheat death once per run, making solo play much
            safer.
          </li>
          <li>
            <strong>Ironeye</strong> &mdash; A ranged DPS character who can deal
            damage from a safe distance, ideal for players who prefer to stay
            out of melee range.
          </li>
        </ul>

        <table>
          <thead>
            <tr>
              <th>Nightfarer</th>
              <th>Role</th>
              <th>Difficulty</th>
              <th>Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Guardian</td>
              <td>Tank</td>
              <td>Easy</td>
              <td>Beginners, co-op</td>
            </tr>
            <tr>
              <td>Wylder</td>
              <td>All-Rounder</td>
              <td>Easy</td>
              <td>Solo, first runs</td>
            </tr>
            <tr>
              <td>Ironeye</td>
              <td>Ranged DPS</td>
              <td>Easy</td>
              <td>Safe play</td>
            </tr>
            <tr>
              <td>Raider</td>
              <td>Melee DPS</td>
              <td>Medium</td>
              <td>Aggressive players</td>
            </tr>
            <tr>
              <td>Duchess</td>
              <td>Stealth / Burst</td>
              <td>Medium</td>
              <td>Team support</td>
            </tr>
            <tr>
              <td>Recluse</td>
              <td>Mage</td>
              <td>Medium</td>
              <td>Magic builds</td>
            </tr>
            <tr>
              <td>Executor</td>
              <td>Parry / Counter</td>
              <td>Hard</td>
              <td>Skilled players</td>
            </tr>
            <tr>
              <td>Revenant</td>
              <td>Summoner</td>
              <td>Hard</td>
              <td>Pet builds</td>
            </tr>
          </tbody>
        </table>

        {/* ── Section 5: Core Mechanics ── */}
        <h2>Core Mechanics</h2>

        <h3>Runes &amp; Leveling</h3>
        <p>
          Runes are the primary currency in Nightreign, earned by defeating
          enemies throughout the Limveld. Spend runes at Sites of Grace to
          level up your Nightfarer&apos;s stats. The maximum level per run is
          14, so every point matters &mdash; plan your stat distribution
          carefully based on your Nightfarer&apos;s strengths.
        </p>

        <h3>Relics</h3>
        <p>
          Relics are powerful modifiers found in chests and dropped by
          mini-bosses. They equip into three color-coded slots:
        </p>
        <ul>
          <li>
            <strong>Yellow Slot</strong> &mdash; Common passive bonuses (e.g.,
            increased stamina recovery, extra poise).
          </li>
          <li>
            <strong>Blue Slot</strong> &mdash; Powerful active or passive
            effects that can define your build.
          </li>
          <li>
            <strong>Red Slot</strong> &mdash; Ultimate modifiers that change or
            enhance your Ultimate Art.
          </li>
        </ul>

        <h3>Flask Charges</h3>
        <p>
          Your healing flasks are your lifeline, and you start each expedition
          with a limited number of charges. Finding golden Churches of Marika
          scattered across the map permanently increases your flask charges for
          the remainder of the run. Prioritizing these churches, especially on
          Day 2, is critical for surviving the Nightlord fight on Day 3.
        </p>

        <h3>Ultimates</h3>
        <p>
          Each Nightfarer has a unique Ultimate Art &mdash; a devastatingly
          powerful ability that builds up over time as you fight enemies and take
          damage. Ultimates can turn the tide of a losing boss fight, so resist
          the temptation to use them on regular enemies. Save them for the
          moments that matter most.
        </p>

        {/* ── Section 6: 5 Essential Tips ── */}
        <h2>5 Essential Tips for Your First Run</h2>

        <TipBox type="tip" title="Explore Every Corner on Day 1">
          Hidden chests containing relics are scattered throughout the Limveld.
          Thorough exploration on Day 1 can give you a massive power advantage
          for the rest of the run. Check behind buildings, inside ruins, and
          along cliff edges.
        </TipBox>

        <TipBox type="info" title="Don't Fight Everything">
          Not every enemy is worth engaging, especially early in the run. Some
          foes are simply too strong before you have leveled up. Learn to
          recognize dangerous enemies and run past them when needed. Your goal
          is to reach the mini-boss, not clear every mob.
        </TipBox>

        <TipBox type="warning" title="Visit EVERY Church of Marika">
          Each Church of Marika you find adds a permanent flask charge for the
          rest of your expedition. Missing even one church can mean the
          difference between victory and defeat against the Nightlord. Make
          them your top priority on Day 2.
        </TipBox>

        <TipBox type="tip" title="Save Your Ultimate for the Nightlord">
          Your Ultimate Art is the single most powerful tool in your arsenal. It
          can deal massive damage or provide crucial survivability during the
          Nightlord fight. Resist the urge to use it on mini-bosses or trash
          mobs &mdash; you will regret it on Day 3.
        </TipBox>

        <TipBox type="info" title="Play Co-op First">
          Nightreign is designed around 3-player co-op. Boss health does not
          scale linearly, meaning the game is significantly easier with a full
          squad. Solo play is possible but much harder. For your first few
          expeditions, team up with others to learn the mechanics in a more
          forgiving environment.
        </TipBox>

        {/* ── Section 7: Common Mistakes ── */}
        <h2>Common Mistakes</h2>

        <TipBox type="warning" title="Avoid These Costly Errors">
          New players frequently make these mistakes. Recognizing them early
          will save you many failed expeditions.
        </TipBox>

        <ul>
          <li>
            <strong>Spending all runes on one stat</strong> &mdash; A balanced
            spread across your core stats is almost always better than dumping
            everything into damage. You need HP and stamina to survive.
          </li>
          <li>
            <strong>Ignoring flask upgrades</strong> &mdash; Skipping Churches
            of Marika leaves you with too few heals for the Nightlord fight.
            Always prioritize flask charges.
          </li>
          <li>
            <strong>Using your Ultimate on trash mobs</strong> &mdash; Your
            Ultimate Art takes a long time to recharge. Wasting it on regular
            enemies means you will not have it when you need it most.
          </li>
          <li>
            <strong>Not picking up weapons</strong> &mdash; Even weapons you
            do not plan to equip provide passive stat bonuses while in your
            inventory. Always grab them.
          </li>
          <li>
            <strong>Trying to solo Heolstor on your first attempt</strong>{" "}
            &mdash; Heolstor is one of the toughest Nightlord bosses. Attempting
            him solo without experience is a recipe for frustration. Learn his
            patterns in co-op first.
          </li>
        </ul>

        {/* ── Section 8: Next Steps ── */}
        <h2>Next Steps</h2>
        <p>
          Now that you understand the fundamentals, you&apos;re ready to dive
          deeper into Nightreign. Here are the guides we recommend next:
        </p>
        <ul>
          <li>
            <a href="/guides/builds">
              <strong>Builds Guide</strong>
            </a>{" "}
            &mdash; Optimized builds for every Nightfarer, including relic
            combinations and stat priorities.
          </li>
          <li>
            <a href="/guides/walkthrough">
              <strong>Walkthrough</strong>
            </a>{" "}
            &mdash; A step-by-step breakdown of each day, covering optimal
            routes and item locations.
          </li>
          <li>
            <a href="/guides/bosses">
              <strong>Boss Guides</strong>
            </a>{" "}
            &mdash; Detailed strategies for every mini-boss and Nightlord,
            including attack patterns and weaknesses.
          </li>
        </ul>
      </div>
    </article>
  );
}
