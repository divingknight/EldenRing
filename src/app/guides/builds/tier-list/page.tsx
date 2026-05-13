import { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { YouTubeEmbed } from "@/components/article/YouTubeEmbed";
import { TipBox } from "@/components/article/TipBox";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Best Nightfarer Tier List & Who to Pick in Elden Ring Nightreign (2025)",
  description:
    "Definitive Nightfarer tier list for Elden Ring Nightreign. Ranking all 8 characters — Guardian, Ironeye, Wylder, Executor, Duchess, Raider, Recluse & Revenant — for solo, co-op, and speedrun. Updated for Patch 1.03.",
  keywords: [
    "Elden Ring Nightreign",
    "Nightfarer tier list",
    "best character",
    "who to pick",
    "Guardian",
    "Ironeye",
    "Wylder",
    "Executor",
    "Duchess",
    "Raider",
    "Recluse",
    "Revenant",
    "tier list",
    "best class",
    "solo",
    "co-op",
  ],
};

export default function TierListPage() {
  return (
    <article>
      <Breadcrumb
        items={[
          { label: "Guides", href: "/" },
          { label: "Builds & Classes", href: "/guides/builds" },
          { label: "Nightfarer Tier List" },
        ]}
      />

      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">&#x1F3C6;</span>
          <h1 className="text-3xl font-bold">
            Best Nightfarer Tier List &amp; Who to Pick
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          All 8 Nightfarers ranked for solo, co-op, and speedrun &mdash; with
          detailed breakdowns on why Ironeye, Wylder, and Undertaker are the
          most debated picks in the community. Updated for Patch 1.03.
        </p>
      </header>

      <div className="guide-content">
        {/* ── Quick Answer ── */}
        <TipBox type="tip" title="TL;DR — Quick Pick Guide">
          <ul>
            <li><strong>Best Overall:</strong> Guardian (S Tier) &mdash; unkillable tank, essential in every team</li>
            <li><strong>Best DPS:</strong> Ironeye (S Tier) &mdash; safe ranged damage + team item discovery</li>
            <li><strong>Best Solo:</strong> Executor (A Tier) &mdash; highest skill ceiling, insane damage</li>
            <li><strong>Best for Beginners:</strong> Raider (B Tier) &mdash; simple, effective, hard to mess up</li>
            <li><strong>Most Controversial:</strong> Wylder vs Executor &mdash; community split on who&apos;s #3</li>
          </ul>
        </TipBox>

        {/* ── Video ── */}
        <YouTubeEmbed
          videoId="pEHEGYBNBiE"
          title="Best Nightfarer Tier List in Elden Ring Nightreign"
        />

        {/* ── How We Rank ── */}
        <h2>How We Rank Nightfarers</h2>
        <p>
          Our tier list evaluates every Nightfarer across four criteria, then
          weighs them to produce a final ranking:
        </p>
        <table>
          <thead>
            <tr>
              <th>Criteria</th>
              <th>Weight</th>
              <th>What It Measures</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Consistency</td>
              <td>30%</td>
              <td>How well the character performs regardless of which relics/weapons you find each run</td>
            </tr>
            <tr>
              <td>Boss DPS</td>
              <td>25%</td>
              <td>Damage output during Nightlord encounters (Day 3)</td>
            </tr>
            <tr>
              <td>Survivability</td>
              <td>25%</td>
              <td>How easily the character stays alive without perfect play</td>
            </tr>
            <tr>
              <td>Team Value</td>
              <td>20%</td>
              <td>How much the character contributes to the team beyond personal damage</td>
            </tr>
          </tbody>
        </table>

        {/* ── Full Tier List ── */}
        <h2>Full Nightfarer Tier List (Patch 1.03)</h2>

        {/* S Tier */}
        <h3>S Tier &mdash; Always Pick These</h3>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Nightfarer</th>
              <th>Role</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Guardian</td>
              <td>Tank / Support</td>
              <td>9.5 / 10</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Ironeye</td>
              <td>Ranged DPS</td>
              <td>9.2 / 10</td>
            </tr>
          </tbody>
        </table>

        {/* A Tier */}
        <h3>A Tier &mdash; Excellent Picks</h3>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Nightfarer</th>
              <th>Role</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3</td>
              <td>Wylder</td>
              <td>Melee DPS / All-Rounder</td>
              <td>8.7 / 10</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Executor</td>
              <td>Counter DPS / Solo</td>
              <td>8.5 / 10</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Duchess</td>
              <td>Burst DPS / Support</td>
              <td>8.3 / 10</td>
            </tr>
          </tbody>
        </table>

        {/* B Tier */}
        <h3>B Tier &mdash; Solid but Situational</h3>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Nightfarer</th>
              <th>Role</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>6</td>
              <td>Raider</td>
              <td>Bruiser</td>
              <td>7.8 / 10</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Recluse</td>
              <td>Mage</td>
              <td>7.4 / 10</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Revenant</td>
              <td>Summoner</td>
              <td>7.0 / 10</td>
            </tr>
          </tbody>
        </table>

        {/* ── Detailed Breakdown: S Tier ── */}
        <h2>#1 Guardian &mdash; The Unkillable Anchor (S Tier)</h2>
        <table>
          <thead>
            <tr>
              <th>Criteria</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Consistency</td><td>10 / 10</td></tr>
            <tr><td>Boss DPS</td><td>7 / 10</td></tr>
            <tr><td>Survivability</td><td>10 / 10</td></tr>
            <tr><td>Team Value</td><td>10 / 10</td></tr>
          </tbody>
        </table>
        <p>
          Guardian is the single most important Nightfarer in Elden Ring
          Nightreign. In a roguelike where death ends your run, having a
          character that simply <em>does not die</em> is invaluable.
        </p>
        <h3>Why Guardian Is S Tier</h3>
        <ul>
          <li>
            <strong>Steel Guard</strong> blocks virtually every attack in the
            game, including Nightlord Heolstor&apos;s Phase 4 sweeps that wipe
            most characters.
          </li>
          <li>
            <strong>Wings of Salvation</strong> (Ultimate) revives downed
            teammates &mdash; the only revive Ultimate in the game. In co-op,
            this is a run-saver.
          </li>
          <li>
            Doesn&apos;t depend on specific relics or weapons. Any Greatshield +
            Holy weapon works. You&apos;re effective even with trash RNG.
          </li>
          <li>
            Holds boss aggro so your DPS can attack freely. The difference
            between a team with and without a Guardian is night and day.
          </li>
        </ul>
        <TipBox type="tip" title="When NOT to Pick Guardian">
          If your team already has a Guardian, pick a DPS instead. Two Guardians
          means not enough damage to clear Nightlords before the timer runs out.
          One Guardian per team is the sweet spot.
        </TipBox>

        <h2>#2 Ironeye &mdash; The Consistent Carry (S Tier)</h2>
        <table>
          <thead>
            <tr>
              <th>Criteria</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Consistency</td><td>9 / 10</td></tr>
            <tr><td>Boss DPS</td><td>10 / 10</td></tr>
            <tr><td>Survivability</td><td>9 / 10</td></tr>
            <tr><td>Team Value</td><td>9 / 10</td></tr>
          </tbody>
        </table>
        <p>
          Ironeye is the safest DPS in the game. Ranged combat means you rarely
          take damage, and your <strong>Eagle Eye</strong> passive boosts Item
          Discovery for the <em>entire team</em>, making everyone find better
          loot.
        </p>
        <h3>Why Ironeye Is S Tier</h3>
        <ul>
          <li>
            <strong>Marking</strong> creates weak points on enemies. Your
            teammates can exploit these for bonus damage, making Ironeye a
            silent force multiplier.
          </li>
          <li>
            <strong>Single Shot</strong> (Ultimate) pierces all defenses. It
            deals the highest single-hit damage in the game &mdash; perfect for
            burning through boss health gates.
          </li>
          <li>
            Ranged playstyle means you&apos;re almost never in danger. While
            melee characters eat boss combos, Ironeye is safely plinking from
            max range.
          </li>
          <li>
            Eagle Eye&apos;s team-wide item discovery boost means better relics
            for everyone. This compounds over a 3-day run.
          </li>
        </ul>

        {/* ── Detailed Breakdown: A Tier ── */}
        <h2>#3 Wylder &mdash; The Debate King (A Tier)</h2>
        <table>
          <thead>
            <tr>
              <th>Criteria</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Consistency</td><td>9 / 10</td></tr>
            <tr><td>Boss DPS</td><td>8 / 10</td></tr>
            <tr><td>Survivability</td><td>9 / 10</td></tr>
            <tr><td>Team Value</td><td>8 / 10</td></tr>
          </tbody>
        </table>
        <p>
          Wylder is the most hotly debated Nightfarer in the community. Some
          players swear he&apos;s S Tier; others say he&apos;s overrated. The truth
          is somewhere in between.
        </p>
        <h3>The Case FOR Wylder</h3>
        <ul>
          <li>
            <strong>Sixth Sense</strong> is arguably the best passive in the game
            &mdash; a free auto-revive once per Grace. In a roguelike, cheating
            death is priceless.
          </li>
          <li>
            <strong>Claw Shot</strong> gives unmatched mobility. You can
            grapple to bosses, escape danger, and reach loot faster than anyone.
          </li>
          <li>
            <strong>Onslaught Stake</strong> deals heavy AoE damage and staggers,
            making Wylder excellent at clearing mobs and pressuring bosses.
          </li>
          <li>
            Easy to play. No complex mechanics &mdash; grapple in, smash, get
            out. Works with almost any Strength weapon you find.
          </li>
        </ul>
        <h3>The Case AGAINST Wylder</h3>
        <ul>
          <li>
            Melee-only means you eat more damage than Ironeye. Sixth Sense
            compensates, but you&apos;re burning your safety net just to play
            normally.
          </li>
          <li>
            DPS ceiling is lower than Executor or Duchess when those characters
            have the right relics.
          </li>
          <li>
            Team value is limited &mdash; Wylder doesn&apos;t buff teammates
            or provide utility beyond raw damage.
          </li>
        </ul>
        <TipBox type="tip" title="Verdict">
          Wylder is the best &ldquo;no-thought&rdquo; melee pick. If you want
          a reliable melee experience without worrying about parry timing or
          relic dependency, Wylder is your character. He&apos;s A Tier because
          he&apos;s always good but never the best at anything specific.
        </TipBox>

        <h2>#4 Executor &mdash; The Skill Check (A Tier)</h2>
        <table>
          <thead>
            <tr>
              <th>Criteria</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Consistency</td><td>7 / 10</td></tr>
            <tr><td>Boss DPS</td><td>10 / 10</td></tr>
            <tr><td>Survivability</td><td>8 / 10</td></tr>
            <tr><td>Team Value</td><td>7 / 10</td></tr>
          </tbody>
        </table>
        <p>
          Executor is the most polarizing Nightfarer. In the hands of a
          skilled player, he&apos;s arguably the best character in the game.
          For everyone else, he&apos;s a liability.
        </p>
        <h3>Why Executor Is Controversial</h3>
        <ul>
          <li>
            <strong>Cursed Sword</strong> parry has the highest damage ceiling in
            Nightreign. Perfect parries deal 2&ndash;3x the damage of normal
            attacks. Chain them together and bosses melt.
          </li>
          <li>
            <strong>Aspects of the Crucible: Beast</strong> (Ultimate) transforms
            Executor into a beast with massively boosted stats &mdash; but
            you need to survive long enough to use it.
          </li>
          <li>
            The problem: miss a parry and you eat the full hit with no shield.
            In a roguelike where death is permanent, this is a massive risk.
          </li>
          <li>
            <strong>Best solo class</strong> in the game. Without teammates to
            draw aggro, Executor&apos;s parry-counter loop is actually easier
            because attack patterns are predictable in 1v1.
          </li>
        </ul>
        <TipBox type="warning" title="Skill Floor Warning">
          If you can&apos;t consistently parry Nightlord attacks, do NOT pick
          Executor. You will die. Pick Wylder or Raider instead and switch to
          Executor once you&apos;ve memorized boss movesets.
        </TipBox>

        <h2>#5 Duchess &mdash; The Chain Reaction (A Tier)</h2>
        <table>
          <thead>
            <tr>
              <th>Criteria</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Consistency</td><td>8 / 10</td></tr>
            <tr><td>Boss DPS</td><td>9 / 10</td></tr>
            <tr><td>Survivability</td><td>7 / 10</td></tr>
            <tr><td>Team Value</td><td>9 / 10</td></tr>
          </tbody>
        </table>
        <p>
          Duchess is the queen of Ultimate combos. Her{" "}
          <strong>Confluence</strong> passive chains team Ultimates together,
          enabling devastating back-to-back burst windows during boss fights.
        </p>
        <ul>
          <li>
            <strong>Confluence</strong> reduces Ultimate cooldowns for the whole
            team when you use yours. In coordinated groups, this creates a chain
            reaction of Ultimates.
          </li>
          <li>
            <strong>Invisibility</strong> provides emergency repositioning,
            safe revives, and free backstab setups.
          </li>
          <li>
            Lower survivability than other A-Tier picks. Duchess is squishy
            and relies on invisibility to avoid damage rather than tanking it.
          </li>
          <li>
            Best in organized co-op. In random matchmaking, Confluence is less
            reliable because teammates may not coordinate their Ultimates.
          </li>
        </ul>

        {/* ── Detailed Breakdown: B Tier ── */}
        <h2>#6 Raider &mdash; The Reliable Workhorse (B Tier)</h2>
        <table>
          <thead>
            <tr>
              <th>Criteria</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Consistency</td><td>9 / 10</td></tr>
            <tr><td>Boss DPS</td><td>7 / 10</td></tr>
            <tr><td>Survivability</td><td>8 / 10</td></tr>
            <tr><td>Team Value</td><td>7 / 10</td></tr>
          </tbody>
        </table>
        <p>
          Raider is the &ldquo;you can&apos;t go wrong&rdquo; pick. Simple
          moveset, good survivability, and <strong>Retaliate</strong> passively
          buffs your team&apos;s damage. He&apos;s never the best pick but
          he&apos;s never a bad one either.
        </p>
        <ul>
          <li>
            <strong>Retaliate</strong> boosts the entire team&apos;s damage after
            Raider takes a hit. This makes Raider deceptively valuable in co-op.
          </li>
          <li>
            Simple kit means low skill floor. Perfect for new players learning
            boss patterns.
          </li>
          <li>
            B Tier because his damage ceiling is lower than A-Tier picks, and his
            team utility is less impactful than Guardian or Duchess.
          </li>
        </ul>
        <TipBox type="tip" title="Best Beginner Pick">
          If this is your first roguelike or your first Soulslike, start with
          Raider. Learn the game&apos;s mechanics, then graduate to higher-tier
          characters once you&apos;re comfortable.
        </TipBox>

        <h2>#7 Recluse &mdash; The High-Roll Mage (B Tier)</h2>
        <table>
          <thead>
            <tr>
              <th>Criteria</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Consistency</td><td>6 / 10</td></tr>
            <tr><td>Boss DPS</td><td>9 / 10</td></tr>
            <tr><td>Survivability</td><td>6 / 10</td></tr>
            <tr><td>Team Value</td><td>7 / 10</td></tr>
          </tbody>
        </table>
        <p>
          Recluse has some of the highest damage potential in the game &mdash;
          when you find the right relics. The problem is that in a roguelike,
          you can&apos;t guarantee finding them.
        </p>
        <ul>
          <li>
            On a &ldquo;high-roll&rdquo; run with Intelligence-boosting relics,
            Recluse can outdamage every other character. Her sorceries hit like
            trucks.
          </li>
          <li>
            On a &ldquo;low-roll&rdquo; run, Recluse feels terrible. Without
            key relics, your damage is mediocre and you&apos;re squishy.
          </li>
          <li>
            This inconsistency is why Recluse is B Tier. A character that&apos;s
            S Tier 30% of the time and C Tier 70% of the time averages out to B.
          </li>
        </ul>

        <h2>#8 Revenant &mdash; The Untapped Potential (B Tier)</h2>
        <table>
          <thead>
            <tr>
              <th>Criteria</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Consistency</td><td>6 / 10</td></tr>
            <tr><td>Boss DPS</td><td>7 / 10</td></tr>
            <tr><td>Survivability</td><td>7 / 10</td></tr>
            <tr><td>Team Value</td><td>7 / 10</td></tr>
          </tbody>
        </table>
        <p>
          Revenant&apos;s summoner fantasy is cool but the execution falls short.
          Summon AI is inconsistent, and the build is heavily relic-dependent.
        </p>
        <ul>
          <li>
            Summons draw boss aggro, giving your team breathing room. When they
            work, it&apos;s great.
          </li>
          <li>
            The problem: summon AI often gets stuck, walks into AoE, or targets
            the wrong enemy. You can&apos;t rely on them in tight situations.
          </li>
          <li>
            Revenant has the most potential for improvement in future patches.
            If FromSoftware buffs summon AI, Revenant could jump to A Tier.
          </li>
          <li>
            Currently, Faith-scaling incantations are your real damage source.
            The summons are a bonus, not a primary strategy.
          </li>
        </ul>

        {/* ── Context-Based Tier Lists ── */}
        <h2>Tier List by Game Mode</h2>
        <p>
          Rankings change based on whether you&apos;re playing solo, co-op with
          friends, or speedrunning.
        </p>

        <h3>Solo Tier List</h3>
        <table>
          <thead>
            <tr>
              <th>Tier</th>
              <th>Nightfarers</th>
              <th>Why</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>S</td>
              <td>Executor, Ironeye</td>
              <td>Executor&apos;s parry is king in predictable 1v1. Ironeye&apos;s range keeps you safe.</td>
            </tr>
            <tr>
              <td>A</td>
              <td>Wylder, Guardian</td>
              <td>Sixth Sense auto-revive is clutch solo. Guardian can&apos;t die but kills slowly.</td>
            </tr>
            <tr>
              <td>B</td>
              <td>Duchess, Raider</td>
              <td>Confluence is wasted solo. Raider is fine but nothing special.</td>
            </tr>
            <tr>
              <td>C</td>
              <td>Recluse, Revenant</td>
              <td>Too relic-dependent and squishy for reliable solo clears.</td>
            </tr>
          </tbody>
        </table>

        <h3>Co-op Tier List (Organized Team)</h3>
        <table>
          <thead>
            <tr>
              <th>Tier</th>
              <th>Nightfarers</th>
              <th>Why</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>S</td>
              <td>Guardian, Ironeye, Duchess</td>
              <td>Guardian tanks, Ironeye carries, Duchess chains Ultimates. The dream team.</td>
            </tr>
            <tr>
              <td>A</td>
              <td>Wylder, Executor</td>
              <td>Strong DPS options. Wylder is safer, Executor has higher ceiling.</td>
            </tr>
            <tr>
              <td>B</td>
              <td>Raider, Recluse, Revenant</td>
              <td>All viable in organized play but outclassed by A/S picks.</td>
            </tr>
          </tbody>
        </table>

        <h3>Speedrun Tier List</h3>
        <table>
          <thead>
            <tr>
              <th>Tier</th>
              <th>Nightfarers</th>
              <th>Why</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>S</td>
              <td>Executor, Ironeye</td>
              <td>Highest burst damage for fast boss kills.</td>
            </tr>
            <tr>
              <td>A</td>
              <td>Duchess, Wylder</td>
              <td>Confluence speeds up Ultimate cycling. Claw Shot is fastest exploration.</td>
            </tr>
            <tr>
              <td>B</td>
              <td>Guardian, Raider, Recluse, Revenant</td>
              <td>Speedruns prioritize damage over survivability.</td>
            </tr>
          </tbody>
        </table>

        {/* ── Community Debate ── */}
        <h2>The Great Debate: Wylder vs Executor vs Undertaker</h2>
        <p>
          The Nightreign community is fiercely divided on three characters that
          play very differently but compete for the same &ldquo;best melee
          DPS&rdquo; slot:
        </p>

        <h3>Wylder Mains Say:</h3>
        <ul>
          <li>&ldquo;Sixth Sense makes Wylder the most forgiving melee character. You literally get a free life every Grace.&rdquo;</li>
          <li>&ldquo;Claw Shot mobility is unmatched. I can explore faster, reach chests faster, and escape danger faster than anyone.&rdquo;</li>
          <li>&ldquo;Consistency &gt; ceiling. Wylder is always good. Executor is only good if you never miss a parry.&rdquo;</li>
        </ul>

        <h3>Executor Mains Say:</h3>
        <ul>
          <li>&ldquo;Executor has the highest damage in the game, period. If you can parry, nothing comes close.&rdquo;</li>
          <li>&ldquo;Sixth Sense is a crutch. Learn to not die instead of relying on a safety net.&rdquo;</li>
          <li>&ldquo;Every Nightlord world record is done with Executor. That tells you everything.&rdquo;</li>
        </ul>

        <h3>Undertaker Mains Say:</h3>
        <ul>
          <li>&ldquo;Undertaker&apos;s death mechanics are underexplored. The Grave Oath passive lets you deal more damage the lower your HP &mdash; it&apos;s a high-risk, high-reward playstyle.&rdquo;</li>
          <li>&ldquo;People sleep on Undertaker because the playstyle is unintuitive. You&apos;re supposed to stay at low HP.&rdquo;</li>
          <li>&ldquo;Once the community figures out the optimal Undertaker rotation, he&apos;ll jump to A Tier.&rdquo;</li>
        </ul>

        <TipBox type="tip" title="Our Take">
          All three are viable. Wylder is the safest pick, Executor is the
          highest ceiling, and Undertaker is the wildcard that might become
          meta if someone discovers a broken interaction. Pick whichever matches
          your playstyle &mdash; skill matters more than tier placement.
        </TipBox>

        {/* ── Best Team Compositions ── */}
        <h2>Best Team Compositions</h2>
        <p>
          In 3-player co-op, team composition matters. Here are the most
          effective trios:
        </p>
        <table>
          <thead>
            <tr>
              <th>Comp Name</th>
              <th>Characters</th>
              <th>Strategy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Meta</td>
              <td>Guardian + Ironeye + Duchess</td>
              <td>Guardian tanks, Ironeye carries DPS, Duchess chains Ultimates. The most consistent team for Nightlord clears.</td>
            </tr>
            <tr>
              <td>All-Aggro</td>
              <td>Wylder + Executor + Ironeye</td>
              <td>Maximum damage, no tank. Risky but clears fast. Best for experienced teams.</td>
            </tr>
            <tr>
              <td>The Safe Run</td>
              <td>Guardian + Wylder + Ironeye</td>
              <td>Two safety nets (Steel Guard + Sixth Sense) plus ranged DPS. Almost impossible to wipe.</td>
            </tr>
            <tr>
              <td>The Meme Team</td>
              <td>Revenant + Recluse + Duchess</td>
              <td>Summons + Sorceries + Ultimates. Extremely powerful on high-roll runs, painful on bad RNG.</td>
            </tr>
          </tbody>
        </table>

        {/* ── Who Should You Pick? ── */}
        <h2>Who Should YOU Pick?</h2>
        <p>
          Tier lists are general guidelines. The best character is the one
          that matches your playstyle. Use this flowchart:
        </p>
        <ul>
          <li>
            <strong>Want to never die?</strong> &rarr; Guardian
          </li>
          <li>
            <strong>Want safe, consistent damage?</strong> &rarr; Ironeye
          </li>
          <li>
            <strong>Want easy melee with a safety net?</strong> &rarr; Wylder
          </li>
          <li>
            <strong>Want to flex your skills?</strong> &rarr; Executor
          </li>
          <li>
            <strong>Want to enable your team?</strong> &rarr; Duchess
          </li>
          <li>
            <strong>Want simple and effective?</strong> &rarr; Raider
          </li>
          <li>
            <strong>Want to gamble on a god run?</strong> &rarr; Recluse
          </li>
          <li>
            <strong>Want to summon an army?</strong> &rarr; Revenant
          </li>
        </ul>

        {/* ── FAQ ── */}
        <h2>Frequently Asked Questions</h2>

        <h3>Can I change Nightfarers mid-run?</h3>
        <p>
          No. Once you start an expedition, you&apos;re locked into your
          Nightfarer for the entire 3-day run. Choose wisely at the lobby screen.
        </p>

        <h3>Does team composition matter in random matchmaking?</h3>
        <p>
          Yes, but you can&apos;t control it. In random co-op, play whatever
          you&apos;re best at. A skilled Raider is worth more than a bad
          Executor. That said, if you see your teammates pick two DPS
          characters, switching to Guardian is always a smart move.
        </p>

        <h3>Will this tier list change with future patches?</h3>
        <p>
          Absolutely. FromSoftware regularly balances Nightfarers. We&apos;ll
          update this page after every major patch. Bookmark it and check back.
        </p>

        <h3>Is Undertaker secretly S Tier?</h3>
        <p>
          Not yet. Undertaker has untapped potential, but the current meta
          doesn&apos;t favor low-HP playstyles. If a broken interaction is
          discovered (or if FromSoftware buffs Grave Oath), Undertaker could
          jump tiers. For now, he&apos;s a fun niche pick.
        </p>

        {/* ── Related Guides ── */}
        <h2>Related Guides</h2>
        <ul>
          <li>
            <Link href="/guides/builds" className="text-primary hover:underline">
              Detailed Builds for Every Nightfarer
            </Link>{" "}
            &mdash; Weapons, relics, and stat priorities
          </li>
          <li>
            <Link href="/guides/items/legendary-weapons" className="text-primary hover:underline">
              How to Get Legendary Weapons Fast
            </Link>{" "}
            &mdash; Farming routes and drop rates
          </li>
          <li>
            <Link href="/guides/bosses/heolstor" className="text-primary hover:underline">
              How to Beat Heolstor
            </Link>{" "}
            &mdash; Full boss guide with every phase
          </li>
          <li>
            <Link href="/guides/beginner" className="text-primary hover:underline">
              Beginner&apos;s Guide
            </Link>{" "}
            &mdash; New to Nightreign? Start here
          </li>
        </ul>
      </div>
    </article>
  );
}
