import { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { YouTubeEmbed } from "@/components/article/YouTubeEmbed";
import { TipBox } from "@/components/article/TipBox";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Elden Ring Nightreign Boss Guides — All Nightlords & Mini-Boss Strategies",
  description:
    "Complete boss guide for Elden Ring Nightreign. Strategies, weaknesses, and attack patterns for all 5 Nightlords (Tricephalos, Maris, Gnoster, Caligo, Heolstor) and Day 1-2 mini-bosses.",
};

export default function BossesPage() {
  return (
    <article>
      <Breadcrumb
        items={[{ label: "Guides", href: "/" }, { label: "Boss Guides" }]}
      />

      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Boss Guides</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Strategies, weaknesses, and attack patterns for every Nightlord
          and mini-boss in Elden Ring: Nightreign.
        </p>
      </header>

      <div className="guide-content">
        {/* ── Overview ── */}
        <h2>How Bosses Work in Nightreign</h2>
        <p>
          Every expedition features <strong>two mini-bosses</strong> (end of
          Day 1 and Day 2) and one <strong>Nightlord</strong> (Day 3 final
          boss). Mini-bosses are randomized each run and scale with your
          current level. The Nightlord you face rotates between expeditions
          &mdash; you must defeat all 4 base Nightlords to unlock the final
          boss, <strong>Heolstor</strong>.
        </p>
        <p>
          In co-op, boss HP triples to compensate for extra players. Solo
          players face significantly lower HP pools but have no teammates to
          revive them.
        </p>

        {/* ── Video ── */}
        <YouTubeEmbed
          videoId="6Wb0F5AGI_k"
          title="How to Beat EVERY Boss in Elden Ring Nightreign"
        />

        {/* ── Nightlord Overview ── */}
        <h2>All Nightlords — Quick Reference</h2>
        <table>
          <thead>
            <tr>
              <th>Nightlord</th>
              <th>Difficulty</th>
              <th>Weakness</th>
              <th>Immune</th>
              <th>HP (Solo / Co-op)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tricephalos</td>
              <td>Medium</td>
              <td>Fire, Lightning</td>
              <td>Poison</td>
              <td>~12k / ~26k</td>
            </tr>
            <tr>
              <td>Maris (Augur)</td>
              <td>Medium</td>
              <td>Fire, Holy</td>
              <td>Frost</td>
              <td>~11k / ~24k</td>
            </tr>
            <tr>
              <td>Gnoster (Sentient Pest)</td>
              <td>Hard</td>
              <td>Fire, Strike</td>
              <td>Poison</td>
              <td>~13k / ~28k</td>
            </tr>
            <tr>
              <td>Caligo (Fissure in Fog)</td>
              <td>Hard</td>
              <td>Holy, Lightning</td>
              <td>Frost</td>
              <td>~14k / ~30k</td>
            </tr>
            <tr>
              <td>
                <Link
                  href="/guides/bosses/heolstor"
                  className="text-primary hover:underline"
                >
                  Heolstor (Night Aspect)
                </Link>
              </td>
              <td>Extreme</td>
              <td>Holy (+35%)</td>
              <td>Bleed, Poison</td>
              <td>~16k / ~34k</td>
            </tr>
          </tbody>
        </table>

        {/* ── Tricephalos ── */}
        <h2>Tricephalos — The Three-Headed Dragon</h2>
        <p>
          The first Nightlord most players encounter. A massive three-headed
          dragon that combines fire breath, lightning strikes, and physical
          slams. Despite three heads, the boss has predictable attack
          patterns once you learn which head telegraphs each attack.
        </p>
        <h3>Key Attacks</h3>
        <ul>
          <li>
            <strong>Triple Fire Breath</strong> &mdash; All three heads
            breathe fire in a wide cone. Sprint to the sides or get behind
            the boss.
          </li>
          <li>
            <strong>Lightning Slam</strong> &mdash; Rears up and slams the
            ground with lightning AoE. Roll away when you see the rear-up
            animation.
          </li>
          <li>
            <strong>Tail Sweep</strong> &mdash; Quick 180-degree tail swipe
            hitting anyone behind. Jump or roll through it.
          </li>
          <li>
            <strong>Head Charge</strong> &mdash; One head lunges forward
            for a bite. Dodge sideways.
          </li>
        </ul>
        <h3>Strategy</h3>
        <p>
          Stay at the dragon&apos;s flanks &mdash; the safest position is
          near the hind legs. Fire and Lightning greases are both effective.
          Focus damage on one head at a time; staggering a head creates a
          long punish window for the whole team.
        </p>
        <TipBox type="tip" title="Weakness Exploit">
          Apply Fire grease to your weapon. Tricephalos takes +20% Fire
          damage despite being a fire-breathing dragon. The left head is
          weakest to stagger &mdash; focus it first.
        </TipBox>

        {/* ── Maris ── */}
        <h2>Maris (Augur) — The Tidal Sorcerer</h2>
        <p>
          A water-based humanoid boss that combines melee staff strikes with
          devastating tidal wave magic. Maris is highly mobile and
          teleports frequently, making her one of the more frustrating
          Nightlords for melee players.
        </p>
        <h3>Key Attacks</h3>
        <ul>
          <li>
            <strong>Tidal Wave</strong> &mdash; Summons a massive wave that
            sweeps across the arena. Jump or use high ground to avoid.
          </li>
          <li>
            <strong>Water Prison</strong> &mdash; Encases a player in a
            water bubble. Teammates must break the bubble before it
            drowns the trapped player.
          </li>
          <li>
            <strong>Staff Combo</strong> &mdash; 4-hit melee combo ending
            with a water explosion. Roll backward after the 3rd hit.
          </li>
          <li>
            <strong>Whirlpool</strong> &mdash; Creates a pulling vortex
            in the center of the arena. Sprint outward to avoid being
            dragged in.
          </li>
        </ul>
        <h3>Strategy</h3>
        <p>
          Fire damage is extremely effective &mdash; apply Fire grease and
          stay aggressive. Maris is weak to stagger during her casting
          animations. In co-op, always free teammates from Water Prison
          immediately; the drown timer is only 5 seconds.
        </p>

        <TipBox type="warning" title="Water Prison">
          In solo play, Water Prison targets YOU. You must break free by
          mashing the dodge button. Having high Vigor helps survive the
          damage if you&apos;re slow to escape.
        </TipBox>

        {/* ── Gnoster ── */}
        <h2>Gnoster (Sentient Pest) — The Insect Swarm</h2>
        <p>
          A fast, erratic insect boss that&apos;s widely considered the most
          annoying Nightlord. Gnoster moves constantly, rarely giving you
          clean openings. Slow weapons struggle significantly in this
          fight.
        </p>
        <h3>Key Attacks</h3>
        <ul>
          <li>
            <strong>Pounce Chain</strong> &mdash; 3 rapid pounces across
            the arena. Each landing creates a small AoE. Sprint sideways.
          </li>
          <li>
            <strong>Poison Cloud</strong> &mdash; Releases a large
            lingering poison zone. Reposition immediately.
          </li>
          <li>
            <strong>Burrow + Emerge</strong> &mdash; Digs underground
            and erupts beneath a player. Watch for the ground tremor
            indicator and dodge when it peaks.
          </li>
          <li>
            <strong>Swarm Summon</strong> &mdash; Calls smaller insects
            that harass players. AoE attacks clear them quickly.
          </li>
        </ul>
        <h3>Strategy</h3>
        <p>
          Use fast weapons (katanas, daggers, curved swords) to land hits
          during Gnoster&apos;s brief pauses between pounces. Fire damage
          and Strike damage (hammers, fists) are both highly effective.
          Clear summoned insects immediately &mdash; they apply Rot if
          left alive too long.
        </p>

        <TipBox type="tip" title="Positioning">
          Don&apos;t chase Gnoster. Let him come to you. Position near a
          wall to limit his pounce directions and create more predictable
          openings.
        </TipBox>

        {/* ── Caligo ── */}
        <h2>Caligo (Fissure in Fog) — The Fog Walker</h2>
        <p>
          A terrifying boss that uses fog and darkness to obscure the arena.
          Caligo&apos;s attacks are individually avoidable but the reduced
          visibility makes them far more dangerous. Lock-on is essential
          for this fight.
        </p>
        <h3>Key Attacks</h3>
        <ul>
          <li>
            <strong>Fog Blanket</strong> &mdash; Fills the arena with
            thick fog, reducing visibility to a few meters. Use lock-on
            to track the boss.
          </li>
          <li>
            <strong>Shadow Strike</strong> &mdash; Teleports behind a
            player and delivers a massive overhead slash. Listen for the
            audio cue (a distinct whisper) and roll immediately.
          </li>
          <li>
            <strong>Dark Eruption</strong> &mdash; Ground-based explosion
            with a 2-second delay. Watch for the dark circle forming
            beneath you.
          </li>
          <li>
            <strong>Fog Minions</strong> &mdash; Summons shadowy copies
            that attack from the fog. They die in 1&ndash;2 hits but are
            hard to see.
          </li>
        </ul>
        <h3>Strategy</h3>
        <p>
          Holy and Lightning damage cut through Caligo&apos;s defenses.
          Keep your lock-on active at all times &mdash; losing track of
          Caligo in the fog is the #1 cause of death. Use AoE attacks to
          clear fog minions without needing to see them. Audio cues are
          critical in this fight; play with sound on.
        </p>

        <TipBox type="danger" title="Fog Visibility">
          Caligo&apos;s fog reduces visibility dramatically. If you lose
          lock-on, immediately sprint to the arena edge where the fog is
          thinner. Re-acquire lock-on before re-engaging.
        </TipBox>

        {/* ── Heolstor ── */}
        <h2>Heolstor (Night Aspect) — The Final Nightlord</h2>
        <p>
          The hardest boss in Nightreign. Heolstor has 4 distinct phases,
          2 health bars, and is immune to Bleed and Poison. Holy damage
          is his primary weakness (+35% in Phase 1). You must defeat all
          4 other Nightlords before unlocking his expedition.
        </p>
        <p>
          For a complete phase-by-phase breakdown, attack tables, team
          compositions, and solo strategy, see our dedicated guide:
        </p>
        <div className="my-4">
          <Link
            href="/guides/bosses/heolstor"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Full Heolstor Boss Guide &rarr;
          </Link>
        </div>

        {/* ── Mini-Bosses ── */}
        <h2>Day 1 &amp; Day 2 Mini-Bosses</h2>
        <p>
          Mini-bosses appear at the end of Day 1 and Day 2. They are
          randomized each run and are significantly easier than Nightlords.
          Here are the most common ones and how to handle them:
        </p>
        <table>
          <thead>
            <tr>
              <th>Mini-Boss</th>
              <th>Day</th>
              <th>Danger</th>
              <th>Strategy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Erdtree Avatar</td>
              <td>1</td>
              <td>Low</td>
              <td>
                Slow tree guardian. Dodge the ground slam, punish from
                behind. Fire is effective.
              </td>
            </tr>
            <tr>
              <td>Crucible Knight</td>
              <td>1&ndash;2</td>
              <td>Medium</td>
              <td>
                Shield + sword combo fighter. Parry or roll through the
                thrust. Don&apos;t get greedy.
              </td>
            </tr>
            <tr>
              <td>Night&apos;s Cavalry</td>
              <td>1&ndash;2</td>
              <td>Medium</td>
              <td>
                Mounted knight with wide swings. Stay close to the horse
                to avoid the halberd. Strike weapons stagger the mount.
              </td>
            </tr>
            <tr>
              <td>Magma Wyrm</td>
              <td>2</td>
              <td>Medium</td>
              <td>
                Charges and leaves magma trails. Fight on clean ground.
                Attack the head for extra stagger damage.
              </td>
            </tr>
            <tr>
              <td>Black Knife Assassin</td>
              <td>2</td>
              <td>High</td>
              <td>
                Fast and aggressive. Lock-on is essential. Dodge the
                leaping grab &mdash; it deals massive damage.
              </td>
            </tr>
            <tr>
              <td>Tree Sentinel</td>
              <td>2</td>
              <td>High</td>
              <td>
                Heavy-hitting mounted boss. Bait the charge attack, dodge
                sideways, punish during recovery.
              </td>
            </tr>
          </tbody>
        </table>

        <TipBox type="tip" title="Mini-Boss Strategy">
          Day 1 mini-bosses are manageable with basic attacks and dodges.
          Save your Ultimate Art for Day 2 mini-bosses if you&apos;re
          struggling &mdash; it will recharge before the Nightlord fight.
        </TipBox>

        {/* ── General Tips ── */}
        <h2>General Boss Fight Tips</h2>
        <ul>
          <li>
            <strong>Learn before you DPS.</strong> Spend the first 30
            seconds of any new boss observing attack patterns. One death
            ends your expedition.
          </li>
          <li>
            <strong>Match elemental weaknesses.</strong> The right grease
            or weapon element can increase your damage by 20&ndash;35%.
            Check the weakness table above before each fight.
          </li>
          <li>
            <strong>Apply Scarlet Rot early.</strong> Rot deals
            percentage-based damage that scales with the boss&apos;s HP
            pool &mdash; it&apos;s strongest against Nightlords.
          </li>
          <li>
            <strong>Coordinate Ultimates in co-op.</strong> Staggering
            your team&apos;s Ultimate Arts creates extended DPS windows
            instead of wasting overlap.
          </li>
          <li>
            <strong>Don&apos;t get greedy.</strong> One extra hit often
            means eating a boss combo. Back off after 2&ndash;3 hits and
            wait for the next opening.
          </li>
          <li>
            <strong>Buy Wending Grace for solo runs.</strong> The free
            resurrection is your safety net against one-shot attacks in
            later phases.
          </li>
        </ul>
      </div>
    </article>
  );
}
