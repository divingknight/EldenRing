import { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { YouTubeEmbed } from "@/components/article/YouTubeEmbed";
import { TipBox } from "@/components/article/TipBox";

export const metadata: Metadata = {
  title:
    "Elden Ring Nightreign Tips & Tricks — Advanced Strategies & Hidden Mechanics",
  description:
    "Advanced tips, hidden mechanics, rune farming routes, and pro strategies for Elden Ring Nightreign. Optimize your expeditions with these veteran-tested techniques.",
};

export default function TipsPage() {
  return (
    <article>
      <Breadcrumb
        items={[{ label: "Guides", href: "/" }, { label: "Tips & Tricks" }]}
      />

      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Tips &amp; Tricks</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Advanced strategies, hidden mechanics, and pro tips from veteran
          Nightfarers to take your expeditions to the next level.
        </p>
      </header>

      <div className="guide-content">
        {/* ── Video ── */}
        <YouTubeEmbed
          videoId="IJ5t5S9sVFc"
          title="38 Advanced Tips I Wish I Knew SOONER — Elden Ring Nightreign"
        />

        {/* ── Combat Tips ── */}
        <h2>Combat Tips</h2>
        <ul>
          <li>
            <strong>Guard Counter is king.</strong> After blocking an
            attack with a shield, press R2/heavy attack immediately for a
            Guard Counter. This deals massive poise damage and is safer
            than trying to dodge and punish.
          </li>
          <li>
            <strong>Dodge into attacks, not away.</strong> Rolling toward
            a boss&apos;s attack puts you behind them during recovery,
            giving you free hits. Rolling away often keeps you in range
            of follow-up swings.
          </li>
          <li>
            <strong>Charged R2 for stagger.</strong> Charged heavy attacks
            deal significantly more poise damage than regular attacks. A
            staggered boss = 3&ndash;4 seconds of free DPS for the whole
            team.
          </li>
          <li>
            <strong>Jump attacks avoid ground hazards.</strong> Many boss
            attacks create ground-based effects (fire, poison, fissures).
            Jump attacks let you deal damage while avoiding these hazards.
          </li>
          <li>
            <strong>Sprint, don&apos;t roll, against multi-hit combos.</strong>{" "}
            When a boss chains 4+ attacks, sprinting sideways is often
            safer than trying to time multiple dodge rolls.
          </li>
          <li>
            <strong>Lock-on for humanoid bosses, unlock for beasts.</strong>{" "}
            Lock-on helps track fast humanoid bosses like Caligo. Against
            large beasts like Tricephalos, unlocked camera gives better
            spatial awareness.
          </li>
          <li>
            <strong>Ironeye&apos;s Marking has a hidden damage threshold.</strong>{" "}
            The mark isn&apos;t just a debuff &mdash; when teammates deal enough
            accumulated damage to a marked target, it triggers a massive burst
            of bonus damage plus a guaranteed stagger. Coordinate burst damage
            on marked enemies.
          </li>
          <li>
            <strong>Dual-wielding same weapon types doubles your output.</strong>{" "}
            When you equip two weapons of the same category (e.g., two katanas),
            your left-hand attacks swing both weapons simultaneously. This
            effectively doubles your hit count and status buildup.
          </li>
          <li>
            <strong>Use your character skill on cooldown.</strong>{" "}
            Nightfarer skills have very short cooldowns compared to other
            action RPGs. Don&apos;t save them &mdash; use them constantly
            during combat for maximum DPS and utility.
          </li>
        </ul>

        {/* ── Exploration Tips ── */}
        <h2>Exploration &amp; Routing</h2>
        <ul>
          <li>
            <strong>Mark Churches of Marika on your map.</strong> Churches
            spawn in semi-random locations each run but tend to appear
            near the same landmarks. Learn the common spawn points and
            check them first on Day 2.
          </li>
          <li>
            <strong>Explore outward on Day 1.</strong> The Limveld
            shrinks inward, so explore the edges of the map first before
            the first shrink forces you toward the center.
          </li>
          <li>
            <strong>Check behind buildings and inside ruins.</strong>{" "}
            Hidden chests containing relics are often tucked away in
            easily missed locations. Thorough exploration on Day 1 can
            give you a massive power advantage.
          </li>
          <li>
            <strong>The map resets on Day 2.</strong> All chest contents,
            enemy placements, and item locations change. Revisit high-value
            areas you cleared on Day 1 for fresh loot.
          </li>
          <li>
            <strong>Prioritize Sites of Grace near the center.</strong>{" "}
            As the Limveld shrinks, central Sites of Grace become your
            only leveling spots. Don&apos;t rely on outer ones.
          </li>
          <li>
            <strong>Spiritsprings are the fastest travel method.</strong>{" "}
            Marked as blue cracks on the map, Spiritsprings launch you into
            the air and cover huge distances. Memorize their locations on
            Day 1 and use them to speed-run Day 2.
          </li>
          <li>
            <strong>The map is extremely vertical.</strong> Don&apos;t just
            explore horizontally. Look up for elevated platforms and down for
            cave entrances. Many high-value chests and Churches are hidden
            on different elevation levels.
          </li>
        </ul>

        <TipBox type="tip" title="Optimal Day 1 Route">
          Start by exploring the outer rim of the Limveld. Hit chests and
          enemy camps along the edges, then spiral inward as the map
          shrinks. This maximizes your exploration coverage before the
          first collapse.
        </TipBox>

        {/* ── Rune Farming ── */}
        <h2>Rune Farming Strategies</h2>
        <ul>
          <li>
            <strong>Target enemy camps over lone elites.</strong> Groups
            of weaker enemies give more total runes than a single elite,
            with far less risk of dying.
          </li>
          <li>
            <strong>Solo players get +60% runes.</strong> If you&apos;re
            comfortable playing alone, solo expeditions are the most
            efficient way to level up quickly.
          </li>
          <li>
            <strong>Field Bosses drop massive rune rewards.</strong>{" "}
            Optional Field Bosses scattered across the Limveld drop
            5&ndash;10x more runes than regular enemies. If you can
            handle them, they&apos;re worth the fight.
          </li>
          <li>
            <strong>Don&apos;t die holding runes.</strong> Level up at
            Sites of Grace frequently. Dying with a full rune pouch
            means losing everything &mdash; there&apos;s no rune
            recovery in Nightreign.
          </li>
          <li>
            <strong>Day 2 is your main farming day.</strong> Day 1 is
            for exploration, Day 3 is for preparation and the boss. Day 2
            gives you the most time and the best enemy density for rune
            farming.
          </li>
        </ul>

        {/* ── Relic Tips ── */}
        <h2>Relic &amp; Equipment Tips</h2>
        <ul>
          <li>
            <strong>Weapon upgrades &gt; stat levels early.</strong> A +3
            weapon deals more damage than 3 extra stat points. Always
            upgrade your weapon when possible.
          </li>
          <li>
            <strong>Pick up every weapon, even ones you won&apos;t use.</strong>{" "}
            Weapons in your inventory provide passive stat bonuses. Even
            an unequipped weapon contributes to your overall power.
          </li>
          <li>
            <strong>Match relics to your Nightfarer.</strong> A Holy
            damage relic on Guardian is far more valuable than on Recluse.
            Learn which relics synergize with your class before each run.
          </li>
          <li>
            <strong>Blue relics define your build.</strong> Yellow relics
            provide small passive bonuses, but a single Blue relic can
            completely change how your character plays. Prioritize Blue
            relics at shops.
          </li>
          <li>
            <strong>Red relics modify your Ultimate.</strong> Some Red
            relics change your Ultimate Art entirely. Read the description
            carefully &mdash; a bad Red relic can actually make your
            Ultimate worse.
          </li>
        </ul>

        <TipBox type="warning" title="Red Relic Caution">
          Not all Red relics are upgrades. Some change your Ultimate in
          ways that may not suit your playstyle. Read the effect carefully
          before equipping, and keep your old Red relic in case you need
          to swap back.
        </TipBox>

        {/* ── Co-op Tips ── */}
        <h2>Co-op Tips</h2>
        <ul>
          <li>
            <strong>One Guardian per team is ideal.</strong> Guardian&apos;s
            tank capabilities and revival Ultimate make them the backbone
            of any co-op team. Two DPS + one Guardian is the most
            consistent setup.
          </li>
          <li>
            <strong>Spread out during exploration.</strong> Cover more
            ground by splitting up on Day 1 and Day 2. Regroup for
            mini-bosses and the Nightlord fight.
          </li>
          <li>
            <strong>Coordinate Ultimate usage.</strong> Stagger your
            team&apos;s Ultimates instead of popping them all at once.
            Three consecutive Ultimates create 10+ seconds of DPS windows.
          </li>
          <li>
            <strong>Revive teammates from range.</strong> Ironeye and
            ranged characters can revive downed players from a safe
            distance. Prioritize revives over damage &mdash; a dead
            teammate deals zero DPS.
          </li>
          <li>
            <strong>Share Church locations.</strong> When you find a
            Church of Marika, ping it for your team. All players need to
            interact with it individually to get the flask charge.
          </li>
        </ul>

        {/* ── Solo Tips ── */}
        <h2>Solo Tips</h2>
        <ul>
          <li>
            <strong>Always buy Wending Grace.</strong> The free
            resurrection is non-negotiable for solo play. One mistake in
            the Nightlord fight without it means restarting from scratch.
          </li>
          <li>
            <strong>Wylder&apos;s Sixth Sense is a free life.</strong> If
            you&apos;re new to solo, Wylder&apos;s passive lets you
            cheat death once per Grace &mdash; essentially a built-in
            safety net.
          </li>
          <li>
            <strong>Play more cautiously on Day 3.</strong> In co-op,
            teammates can revive you. Solo, one death = run over. Don&apos;t
            take unnecessary risks near the end.
          </li>
          <li>
            <strong>Executor is the best solo class.</strong> The parry/
            deflection mechanic lets you turn enemy attacks into damage
            windows. High skill ceiling but extremely rewarding.
          </li>
        </ul>

        {/* ── Hidden Mechanics ── */}
        <h2>Hidden Mechanics</h2>
        <ul>
          <li>
            <strong>Weapon passives stack from inventory.</strong> Even
            weapons you&apos;re not actively wielding contribute their
            passive bonuses. Carry multiple weapons for stacking effects.
          </li>
          <li>
            <strong>Scarlet Rot scales with boss HP.</strong> Rot deals
            percentage-based damage, making it exponentially more
            effective against high-HP Nightlords. Always apply it early
            in boss fights.
          </li>
          <li>
            <strong>Ultimates have i-frames.</strong> The activation
            animation of every Ultimate Art grants invincibility frames.
            You can use this to dodge lethal attacks like Heolstor&apos;s
            Final Slam.
          </li>
          <li>
            <strong>The Limveld shrink has a grace period.</strong> You
            have approximately 10 seconds after the shrink warning before
            damage starts. Use this time to finish looting or reach safety.
          </li>
          <li>
            <strong>Poise breakpoints matter.</strong> At certain poise
            thresholds, you can tank hits without being staggered. Guardian
            with heavy armor can reach poise breakpoints that let them
            attack through boss combos.
          </li>
          <li>
            <strong>Silver-Pickled Fowl Foot before kills.</strong> Pop
            this item before killing the Nightlord to boost item
            discovery. It increases your chance of getting rare weapon
            drops.
          </li>
          <li>
            <strong>All equipment passives are global.</strong> Weapon passives
            apply from ALL equipment slots, not just your active weapon. This
            means carrying a weapon with a useful passive (like +Item Discovery
            or +HP on kill) benefits you even if you never swing it.
          </li>
        </ul>

        <TipBox type="info" title="Meta-Progression">
          Every completed expedition contributes to permanent unlocks, even
          failed ones to a lesser degree. Don&apos;t be discouraged by
          losses &mdash; each run teaches you the map, enemy patterns, and
          boss mechanics that carry forward as player skill.
        </TipBox>

        {/* ── Common Mistakes ── */}
        <h2>Common Mistakes to Avoid</h2>
        <ul>
          <li>
            <strong>Using your Ultimate on trash mobs.</strong> Your
            Ultimate Art takes a long time to recharge. Save it for
            mini-bosses and the Nightlord.
          </li>
          <li>
            <strong>Skipping Churches of Marika.</strong> Every Church you
            miss is one less heal against the Nightlord. On Day 2,
            Churches should be your #1 priority.
          </li>
          <li>
            <strong>Entering Day 3 at low level.</strong> You should be
            Level 10+ entering Day 3, ideally 13&ndash;14. If you&apos;re
            below 10, consider farming more on Day 2.
          </li>
          <li>
            <strong>Hoarding consumables.</strong> Everything resets
            between expeditions. Use your greases, resins, and buffs
            before the Nightlord fight &mdash; there&apos;s no reason to
            save them.
          </li>
          <li>
            <strong>Spreading stats too thin.</strong> Focus on your
            primary stat first, then Vigor for survivability. Splitting
            across multiple damage stats produces mediocre scaling.
          </li>
          <li>
            <strong>Fighting elites on Day 1.</strong> Elite enemies are
            extremely dangerous early in the run when you&apos;re
            under-leveled. Skip them unless you&apos;re confident in
            your skill.
          </li>
        </ul>

        {/* ── Video Guides ── */}
        <h2>Recommended Video Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <YouTubeEmbed
            videoId="9UZNe-AnHtE"
            title="Pro Tips and Tricks You NEED to Know — Elden Ring Nightreign"
            caption="Essential advanced tips from veteran players. Covers combat, routing, and hidden mechanics."
          />
          <YouTubeEmbed
            videoId="zZG8vTq_knQ"
            title="Actually Useful Tips for Every Field Boss — Elden Ring Nightreign"
            caption="Specific strategies for each Field Boss encounter, including optimal positioning and dodge timings."
          />
        </div>

        {/* ── Leveling Targets ── */}
        <h2>Leveling Targets by Day</h2>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Target Level</th>
              <th>Focus</th>
              <th>Key Goal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Day 1</td>
              <td>5</td>
              <td>Exploration + first weapon</td>
              <td>Find 1 Church, 1&ndash;2 relics</td>
            </tr>
            <tr>
              <td>Day 2</td>
              <td>10</td>
              <td>Rune farming + Churches</td>
              <td>5&ndash;6 flask charges, endgame weapon</td>
            </tr>
            <tr>
              <td>Day 3</td>
              <td>13&ndash;14</td>
              <td>Final prep + Nightlord</td>
              <td>Buy consumables, apply buffs, boss fight</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
}
