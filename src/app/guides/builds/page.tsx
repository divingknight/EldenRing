import { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { YouTubeEmbed } from "@/components/article/YouTubeEmbed";
import { TipBox } from "@/components/article/TipBox";

export const metadata: Metadata = {
  title:
    "Best Builds for All Nightfarers in Elden Ring Nightreign — Weapons, Relics & Stats",
  description:
    "Optimized builds for every Nightfarer class in Elden Ring Nightreign. Stat priorities, best weapons, key relics, and playstyle breakdowns for Guardian, Ironeye, Wylder, Executor, Duchess, Raider, Recluse, and Revenant.",
};

export default function BuildsPage() {
  return (
    <article>
      <Breadcrumb
        items={[
          { label: "Guides", href: "/" },
          { label: "Builds & Classes" },
        ]}
      />

      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">&#x2694;&#xFE0F;</span>
          <h1 className="text-3xl font-bold">
            Best Nightfarer Builds &amp; Classes
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Optimized builds for every Nightfarer in Elden Ring Nightreign
          &mdash; weapons, relics, stat priorities, and playstyle tips.
        </p>
      </header>

      <div className="guide-content">
        {/* ── Build Overview ── */}
        <h2>Build Overview</h2>
        <p>
          Elden Ring Nightreign is a roguelike experience, which means the
          weapons and relics you find each run are randomized. You cannot
          guarantee a specific loadout, but you <em>can</em> plan your stat
          priorities and know which relics to look for when they appear. The
          builds below outline the ideal direction for every Nightfarer so
          you can make smart decisions on the fly.
        </p>
        <p>
          All builds on this page have been updated for{" "}
          <strong>Patch 1.03</strong>.
        </p>

        {/* ── Video Guide ── */}
        <YouTubeEmbed
          videoId="pEHEGYBNBiE"
          title="Best Builds For Every Character in Elden Ring Nightreign"
        />

        {/* ── Build Tier List ── */}
        <h2>Build Tier List</h2>
        <p>
          This tier list ranks every Nightfarer based on overall effectiveness
          in co-op and solo play, factoring in consistency across randomized
          runs.
        </p>
        <table>
          <thead>
            <tr>
              <th>Tier</th>
              <th>Nightfarer</th>
              <th>Role</th>
              <th>Why</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>S</td>
              <td>Guardian</td>
              <td>Tank</td>
              <td>
                Unkillable with proper play. Revival Ultimate is essential for
                Nightlord Heolstor and other endgame encounters.
              </td>
            </tr>
            <tr>
              <td>S</td>
              <td>Ironeye</td>
              <td>Ranged DPS</td>
              <td>
                Safe, consistent damage from range. Eagle Eye passive boosts
                item drops for the whole team.
              </td>
            </tr>
            <tr>
              <td>A</td>
              <td>Wylder</td>
              <td>Melee DPS</td>
              <td>
                Grappling hook mobility plus Flaming Stake creates devastating
                stagger combos.
              </td>
            </tr>
            <tr>
              <td>A</td>
              <td>Executor</td>
              <td>Counter DPS</td>
              <td>
                Parry god with the highest skill ceiling. Best solo class in
                the game.
              </td>
            </tr>
            <tr>
              <td>A</td>
              <td>Duchess</td>
              <td>Burst DPS</td>
              <td>
                Confluence chains Ultimates together. Invisibility offers
                strong team support.
              </td>
            </tr>
            <tr>
              <td>B</td>
              <td>Raider</td>
              <td>Bruiser</td>
              <td>
                Retaliate boosts team damage. Simple but effective &mdash;
                great for beginners.
              </td>
            </tr>
            <tr>
              <td>B</td>
              <td>Recluse</td>
              <td>Mage</td>
              <td>
                Strong magic builds are possible but rely on finding specific
                relics each run.
              </td>
            </tr>
            <tr>
              <td>B</td>
              <td>Revenant</td>
              <td>Summoner</td>
              <td>
                Pet builds are viable but inconsistent due to summon AI and
                relic dependency.
              </td>
            </tr>
          </tbody>
        </table>

        {/* ── Guardian Build ── */}
        <h2>Guardian Build &mdash; &ldquo;The Immortal Wall&rdquo;</h2>
        <p>
          <strong>Role:</strong> Tank / Support
        </p>
        <p>
          <strong>Primary Stat:</strong> Vigor &nbsp;|&nbsp;{" "}
          <strong>Secondary Stat:</strong> Endurance
        </p>
        <p>
          <strong>Best Weapons:</strong> Greatshield paired with any Holy
          weapon (e.g., Coded Sword, Cipher Pata).
        </p>
        <p>
          <strong>Key Relics:</strong> Anything that boosts guard stability,
          Holy damage, or flask recovery.
        </p>
        <h3>Playstyle</h3>
        <p>
          Use <strong>Steel Guard</strong> to block virtually everything bosses
          throw at you. <strong>Whirlwind</strong> is your crowd-control tool
          for clearing mobs around your teammates. Your job is to hold boss
          aggro while your DPS players work. Save your Ultimate,{" "}
          <strong>Wings of Salvation</strong>, for critical moments &mdash; it
          rescues teammates and revives downed allies.
        </p>
        <TipBox type="tip" title="Ultimate Timing">
          Guardian&apos;s Ultimate can revive downed teammates. Save it for
          emergencies in Phase 4 of Nightlord fights &mdash; a well-timed
          Wings of Salvation can turn a wipe into a clear.
        </TipBox>

        {/* ── Ironeye Build ── */}
        <h2>Ironeye Build &mdash; &ldquo;The Eagle&rdquo;</h2>
        <p>
          <strong>Role:</strong> Ranged DPS
        </p>
        <p>
          <strong>Primary Stat:</strong> Dexterity &nbsp;|&nbsp;{" "}
          <strong>Secondary Stat:</strong> Vigor
        </p>
        <p>
          <strong>Best Weapons:</strong> Longbow, Greatbow, or any
          Dex-scaling weapon.
        </p>
        <p>
          <strong>Key Relics:</strong> Dex scaling bonuses, ranged damage
          amplifiers, Eagle Eye passives.
        </p>
        <h3>Playstyle</h3>
        <p>
          Stay at maximum range at all times. Use{" "}
          <strong>Marking</strong> to create weak points on enemies that your
          entire team can exploit. Your Ultimate,{" "}
          <strong>Single Shot</strong>, pierces all defenses and deals massive
          single-target damage &mdash; save it for boss health gates or
          clutch moments.
        </p>

        {/* ── Wylder Build ── */}
        <h2>Wylder Build &mdash; &ldquo;The Survivor&rdquo;</h2>
        <p>
          <strong>Role:</strong> All-Rounder / Melee DPS
        </p>
        <p>
          <strong>Primary Stat:</strong> Strength &nbsp;|&nbsp;{" "}
          <strong>Secondary Stat:</strong> Vigor
        </p>
        <p>
          <strong>Best Weapons:</strong> Greatswords, Halberds, or any
          Strength weapon.
        </p>
        <p>
          <strong>Key Relics:</strong> Strength scaling, Sixth Sense
          enhancement, fire damage.
        </p>
        <h3>Playstyle</h3>
        <p>
          Use <strong>Claw Shot</strong> (grappling hook) to close gaps
          instantly, then follow up with{" "}
          <strong>Onslaught Stake</strong> for massive AoE damage and
          stagger. Wylder&apos;s <strong>Sixth Sense</strong> passive is one
          of the best survival tools in the game &mdash; it gives you a free
          death cheat once per Grace, effectively letting you die and come
          back automatically.
        </p>

        {/* ── Executor Build ── */}
        <h2>Executor Build &mdash; &ldquo;The Parry King&rdquo;</h2>
        <p>
          <strong>Role:</strong> Counter DPS / Solo Specialist
        </p>
        <p>
          <strong>Primary Stat:</strong> Dexterity &nbsp;|&nbsp;{" "}
          <strong>Secondary Stat:</strong> Strength
        </p>
        <p>
          <strong>Best Weapons:</strong> Katanas, Curved Swords, or any fast
          weapon.
        </p>
        <h3>Playstyle</h3>
        <p>
          Executor is built around the{" "}
          <strong>Cursed Sword</strong> parry mechanic. Nail the parry timing
          to counter enemy attacks, then unleash your true form for
          devastating follow-up damage. Your Ultimate,{" "}
          <strong>Aspects of the Crucible: Beast</strong>, transforms you into
          a beast with massively boosted stats. Executor has the highest
          damage ceiling in the game but demands perfect timing &mdash; miss
          a parry and you eat the full hit.
        </p>
        <TipBox type="warning" title="Solo Tip">
          Executor is the best solo class in Nightreign. Buy{" "}
          <strong>Wending Grace</strong> before Day 3 for a free resurrection
          &mdash; it can be the difference between a successful run and a
          restart.
        </TipBox>

        {/* ── Duchess Build (brief) ── */}
        <h2>Duchess Build &mdash; &ldquo;The Phantom&rdquo;</h2>
        <p>
          <strong>Role:</strong> Burst DPS &nbsp;|&nbsp;{" "}
          <strong>Primary Stat:</strong> Dexterity &nbsp;|&nbsp;{" "}
          <strong>Secondary Stat:</strong> Vigor
        </p>
        <p>
          Duchess excels at chaining Ultimates through{" "}
          <strong>Confluence</strong>, enabling back-to-back team Ultimates
          during boss fights. Her invisibility skill provides strong
          repositioning and emergency support for reviving teammates under
          pressure.
        </p>

        {/* ── Raider Build (brief) ── */}
        <h2>Raider Build &mdash; &ldquo;The Warhound&rdquo;</h2>
        <p>
          <strong>Role:</strong> Bruiser &nbsp;|&nbsp;{" "}
          <strong>Primary Stat:</strong> Strength &nbsp;|&nbsp;{" "}
          <strong>Secondary Stat:</strong> Vigor
        </p>
        <p>
          A straightforward melee bruiser. <strong>Retaliate</strong> boosts
          your entire team&apos;s damage output, making Raider a silent force
          multiplier. Simple to play and effective in any composition. Pair
          with axes and hammers for maximum stagger.
        </p>

        {/* ── Recluse Build (brief) ── */}
        <h2>Recluse Build &mdash; &ldquo;The Spellweaver&rdquo;</h2>
        <p>
          <strong>Role:</strong> Mage &nbsp;|&nbsp;{" "}
          <strong>Primary Stat:</strong> Intelligence &nbsp;|&nbsp;{" "}
          <strong>Secondary Stat:</strong> Mind
        </p>
        <p>
          Recluse can achieve some of the highest burst damage in the game
          with the right relics. Prioritize Intelligence scaling and seek out
          staves and sorcery-boosting relics. The catch: Recluse is heavily
          relic-dependent, so weaker runs will feel noticeably worse.
        </p>

        {/* ── Revenant Build (brief) ── */}
        <h2>Revenant Build &mdash; &ldquo;The Shepherd&rdquo;</h2>
        <p>
          <strong>Role:</strong> Summoner &nbsp;|&nbsp;{" "}
          <strong>Primary Stat:</strong> Faith &nbsp;|&nbsp;{" "}
          <strong>Secondary Stat:</strong> Vigor
        </p>
        <p>
          Pet-based builds that use summons to draw aggro and deal passive
          damage. Viable but inconsistent &mdash; summon AI can be unreliable
          in chaotic fights. Works best when you find relics that boost summon
          damage and survivability. Use Seals and Faith-scaling incantations
          to supplement your summons.
        </p>

        {/* ── Quick Reference Table ── */}
        <h2>Quick Reference Table</h2>
        <table>
          <thead>
            <tr>
              <th>Nightfarer</th>
              <th>Primary Stat</th>
              <th>Weapon Type</th>
              <th>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Guardian</td>
              <td>Vigor</td>
              <td>Greatshield + Holy</td>
              <td>Easy</td>
            </tr>
            <tr>
              <td>Ironeye</td>
              <td>Dexterity</td>
              <td>Bows</td>
              <td>Easy</td>
            </tr>
            <tr>
              <td>Wylder</td>
              <td>Strength</td>
              <td>Greatswords</td>
              <td>Easy</td>
            </tr>
            <tr>
              <td>Raider</td>
              <td>Strength</td>
              <td>Axes, Hammers</td>
              <td>Medium</td>
            </tr>
            <tr>
              <td>Duchess</td>
              <td>Dexterity</td>
              <td>Daggers, Thrusting</td>
              <td>Medium</td>
            </tr>
            <tr>
              <td>Recluse</td>
              <td>Intelligence</td>
              <td>Staves, Seals</td>
              <td>Medium</td>
            </tr>
            <tr>
              <td>Executor</td>
              <td>Dexterity</td>
              <td>Katanas</td>
              <td>Hard</td>
            </tr>
            <tr>
              <td>Revenant</td>
              <td>Faith</td>
              <td>Seals, Summoning</td>
              <td>Hard</td>
            </tr>
          </tbody>
        </table>

        {/* ── Build Tips ── */}
        <h2>Build Tips</h2>
        <ul>
          <li>
            Always prioritize your primary stat first. In Nightreign&apos;s
            roguelike format, consistent scaling matters more than spreading
            stats thin.
          </li>
          <li>
            Vigor is a strong secondary stat for every Nightfarer &mdash;
            survivability keeps your run alive.
          </li>
          <li>
            Learn which relics synergize with your class before each run so
            you can make fast decisions at relic shops.
          </li>
          <li>
            Weapon upgrades are more impactful than raw stat points in the
            early game. Prioritize upgrading your weapon at every opportunity.
          </li>
          <li>
            In co-op, build around your team composition. One Guardian plus
            two DPS Nightfarers is the most consistent setup for Nightlord
            clears.
          </li>
          <li>
            Buy <strong>Wending Grace</strong> from merchants before Day 3 if
            you can afford it &mdash; the free resurrection is invaluable.
          </li>
          <li>
            Hybrid builds (splitting between two damage stats) are viable but
            require specific relics to work. Focused builds are more
            consistent across randomized runs.
          </li>
          <li>
            Check the Items &amp; Equipment guide for detailed relic
            breakdowns and drop locations.
          </li>
        </ul>
      </div>
    </article>
  );
}
