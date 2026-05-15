import { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { YouTubeEmbed } from "@/components/article/YouTubeEmbed";
import { TipBox } from "@/components/article/TipBox";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "How to Get Legendary Weapons Fast in Elden Ring Nightreign — Farming Guide",
  description:
    "Farm legendary weapons efficiently in Elden Ring Nightreign. Field Boss farming routes, item discovery boosts, weapon upgrade paths, and drop rate mechanics explained.",
  keywords: [
    "Elden Ring Nightreign",
    "legendary weapons",
    "weapon farming",
    "item discovery",
    "Field Boss",
    "drop rate",
    "best weapons",
    "weapon upgrade",
  ],
};

export default function LegendaryWeaponsPage() {
  return (
    <article>
      <Breadcrumb
        items={[
          { label: "Guides", href: "/" },
          { label: "Items & Relics", href: "/guides/items" },
          { label: "Legendary Weapons" },
        ]}
      />

      <header className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <span>Last updated: May 12, 2026</span>
          <span>&middot;</span>
          <span>Patch: Launch Version (May 2026)</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          How to Get Legendary Weapons Fast in Elden Ring Nightreign
        </h1>
        <p className="text-muted-foreground text-lg">
          Legendary weapons have extremely low drop rates in Nightreign, but
          with the right strategy you can dramatically increase your chances.
          This guide covers Field Boss farming, item discovery stacking,
          weapon upgrade paths, and the exact drop rate mechanics behind
          every legendary weapon in the game.
        </p>
      </header>

      <div className="guide-content">
        {/* ── Video ── */}
        <YouTubeEmbed
          videoId="oBK-biCcIek"
          title="Fastest Way to Get Legendary Weapons — Elden Ring Nightreign"
        />

        {/* ── TL;DR ── */}
        <h2>TL;DR &mdash; Quick Summary</h2>
        <div className="bg-card border border-primary/30 rounded-xl p-5 mb-6">
          <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
            <li>
              Legendary weapons drop from{" "}
              <strong className="text-foreground">
                Field Bosses and Nightlords only
              </strong>{" "}
              &mdash; regular enemies never drop them.
            </li>
            <li>
              Stack{" "}
              <strong className="text-foreground">Item Discovery</strong>{" "}
              before the kill: Silver-Pickled Fowl Foot + Eagle&apos;s Crest
              relic + Ironeye&apos;s passive.
            </li>
            <li>
              <strong className="text-foreground">
                Farm Field Bosses on Day 1 and Day 2
              </strong>{" "}
              &mdash; they respawn each day with fresh loot tables.
            </li>
            <li>
              Nightlords have the{" "}
              <strong className="text-foreground">
                highest legendary drop rate (~8&ndash;12%)
              </strong>
              , especially Heolstor.
            </li>
            <li>
              Any weapon can be upgraded to{" "}
              <strong className="text-foreground">+10</strong> at the
              Smithing Table &mdash; a +10 rare weapon rivals an unupgraded
              legendary.
            </li>
          </ol>
        </div>

        {/* ── Drop Rate Mechanics ── */}
        <h2>Drop Rate Mechanics Explained</h2>
        <p>
          Nightreign uses a weighted loot table system. Every enemy that can
          drop weapons has a fixed pool of possible drops, with each weapon
          assigned a rarity weight. Legendary weapons sit at the bottom of
          this table with the lowest weight &mdash; but several mechanics
          can shift the odds in your favor.
        </p>
        <table>
          <thead>
            <tr>
              <th>Rarity</th>
              <th>Base Drop Rate</th>
              <th>With Max Item Discovery</th>
              <th>Sources</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Common</td>
              <td>60%</td>
              <td>40%</td>
              <td>All enemies, chests</td>
            </tr>
            <tr>
              <td>Uncommon</td>
              <td>25%</td>
              <td>28%</td>
              <td>All enemies, chests</td>
            </tr>
            <tr>
              <td>Rare</td>
              <td>12%</td>
              <td>18%</td>
              <td>Elite enemies, Field Bosses, chests</td>
            </tr>
            <tr>
              <td>Legendary</td>
              <td>3%</td>
              <td>8&ndash;12%</td>
              <td>Field Bosses, Nightlords only</td>
            </tr>
          </tbody>
        </table>
        <p>
          The key insight:{" "}
          <strong>
            Item Discovery doesn&apos;t add flat drop chance &mdash; it
            redistributes weight from lower rarities to higher ones.
          </strong>{" "}
          This means stacking Item Discovery is multiplicatively more
          effective the higher your base rarity target is.
        </p>
        <p>
          Each legendary weapon has <strong>two passive effects</strong>:
          one fixed passive unique to the weapon, and one random passive
          that changes each time you find it. This means the same legendary
          weapon can vary significantly between runs, adding another layer
          of RNG to weapon farming.
        </p>

        <TipBox type="tip" title="Critical Knowledge">
          Legendary weapons ONLY drop from Field Bosses and Nightlords.
          No matter how much Item Discovery you stack, regular enemies
          and trash mobs will never drop legendaries. Focus your farming
          on bosses exclusively.
        </TipBox>

        {/* ── Item Discovery Stacking ── */}
        <h2>How to Maximize Item Discovery</h2>
        <p>
          Item Discovery is the single most important stat for weapon
          farming. Here&apos;s every source of Item Discovery in the game
          and how to stack them:
        </p>
        <table>
          <thead>
            <tr>
              <th>Source</th>
              <th>Item Discovery Boost</th>
              <th>How to Get</th>
              <th>Stacks?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Silver-Pickled Fowl Foot</td>
              <td>+50</td>
              <td>Buy from merchants, craft</td>
              <td>Yes (with all)</td>
            </tr>
            <tr>
              <td>Eagle&apos;s Crest (Relic)</td>
              <td>+75</td>
              <td>Yellow relic slot, random drop</td>
              <td>Yes (with all)</td>
            </tr>
            <tr>
              <td>Ironeye&apos;s Eagle Eye (Passive)</td>
              <td>+100 (team-wide)</td>
              <td>Play as Ironeye or have one on your team</td>
              <td>Yes (with all)</td>
            </tr>
            <tr>
              <td>Silver Scarab (Relic)</td>
              <td>+75</td>
              <td>Blue relic slot, rare drop</td>
              <td>Yes (with all)</td>
            </tr>
            <tr>
              <td>Arcane stat scaling</td>
              <td>+1 per point</td>
              <td>Level up Arcane at Sites of Grace</td>
              <td>Yes (with all)</td>
            </tr>
          </tbody>
        </table>

        <div className="bg-card border border-border rounded-xl p-5 my-6">
          <h3 className="text-lg font-semibold mb-3">
            Maximum Item Discovery Build
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            Stack all sources for the highest possible legendary drop rate:
          </p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>
              <strong className="text-foreground">Nightfarer:</strong>{" "}
              Ironeye (+100 team-wide Eagle Eye)
            </li>
            <li>
              <strong className="text-foreground">Yellow Relic:</strong>{" "}
              Eagle&apos;s Crest (+75)
            </li>
            <li>
              <strong className="text-foreground">Blue Relic:</strong>{" "}
              Silver Scarab (+75)
            </li>
            <li>
              <strong className="text-foreground">Consumable:</strong>{" "}
              Silver-Pickled Fowl Foot (+50) &mdash; use right before
              the kill
            </li>
            <li>
              <strong className="text-foreground">Total Boost:</strong>{" "}
              +300 Item Discovery = approximately 12% legendary drop rate
              from Nightlords
            </li>
          </ul>
        </div>

        <TipBox type="warning" title="Timing Matters">
          Silver-Pickled Fowl Foot only lasts 60 seconds. Pop it when
          the Field Boss or Nightlord is below 10% HP, not at the start
          of the fight. Wasting the timer is the #1 farming mistake.
        </TipBox>

        {/* ── Field Boss Farming ── */}
        <h2>Field Boss Farming Guide</h2>
        <p>
          Field Bosses are optional bosses scattered across the Limveld.
          They are the most reliable source of legendary weapons because
          they can be farmed repeatedly across Day 1 and Day 2 of each
          expedition.
        </p>

        <h3>Best Field Bosses to Farm</h3>
        <table>
          <thead>
            <tr>
              <th>Field Boss</th>
              <th>Difficulty</th>
              <th>Kill Time</th>
              <th>Notable Drops</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Erdtree Avatar</td>
              <td>Easy</td>
              <td>~1 min</td>
              <td>Erdtree Greatbow, Golden Halberd</td>
            </tr>
            <tr>
              <td>Night&apos;s Cavalry</td>
              <td>Medium</td>
              <td>~2 min</td>
              <td>Night Rider weapons (Glaive, Flail)</td>
            </tr>
            <tr>
              <td>Crucible Knight</td>
              <td>Medium</td>
              <td>~2 min</td>
              <td>Crucible Hornshield, Siluria&apos;s Tree</td>
            </tr>
            <tr>
              <td>Black Knife Assassin</td>
              <td>Hard</td>
              <td>~3 min</td>
              <td>Black Knife (legendary dagger)</td>
            </tr>
            <tr>
              <td>Tree Sentinel</td>
              <td>Hard</td>
              <td>~3 min</td>
              <td>Golden Greatshield, Erdtree Seal</td>
            </tr>
          </tbody>
        </table>

        <h3>Optimal Farming Route</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Day 1:</strong> Explore the outer rim of the Limveld.
            Mark any Field Boss locations on your map as you find them.
            Kill them if you can, but don&apos;t die &mdash; runes and
            exploration are the Day 1 priority.
          </li>
          <li>
            <strong>Day 2:</strong> The map resets with new loot. Rush
            directly to Field Boss spawn locations you found on Day 1.
            Pop Silver-Pickled Fowl Foot before each kill.
          </li>
          <li>
            <strong>Day 2 (continued):</strong> After clearing known
            Field Bosses, check for new spawns in areas you haven&apos;t
            visited. Each Day 2 run should yield 3&ndash;5 Field Boss
            kills.
          </li>
          <li>
            <strong>Day 3:</strong> Focus on the Nightlord. Pop Fowl
            Foot at 10% HP for the highest-value legendary drop chance
            in the entire expedition.
          </li>
        </ol>

        <TipBox type="tip" title="Co-op Farming">
          In co-op, split up on Day 2 to cover more ground. Each player
          marks Field Bosses they find, then the team converges to kill
          them together. With Ironeye on the team, everyone benefits from
          the +100 Eagle Eye Item Discovery bonus.
        </TipBox>

        {/* ── Nightlord Drops ── */}
        <h2>Nightlord Legendary Drops</h2>
        <p>
          Each Nightlord has a unique legendary drop pool. Farming a
          specific legendary weapon means targeting the right Nightlord:
        </p>
        <table>
          <thead>
            <tr>
              <th>Nightlord</th>
              <th>Exclusive Legendary Drops</th>
              <th>Base Drop Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tricephalos</td>
              <td>Dragon King&apos;s Cragblade, Bolt of Gransax</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>Maris (Augur)</td>
              <td>Staff of the Avatar, Tidal Scepter</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>Gnoster</td>
              <td>Pest&apos;s Glaive, Venomfang Blade</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>Caligo</td>
              <td>Eclipse Shotel, Fog Cutter</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>Heolstor</td>
              <td>
                Night of the Lord (relic), Moonlight Greatsword,
                Dark Moon Blade
              </td>
              <td>8%</td>
            </tr>
          </tbody>
        </table>

        <TipBox type="info" title="Heolstor Has the Best Drops">
          Heolstor has both the highest base legendary drop rate (8%)
          and the most valuable exclusive drops. If you can reliably
          clear Heolstor, he is by far the most efficient legendary
          source. See our{" "}
          <Link
            href="/guides/bosses/heolstor"
            className="text-primary hover:underline"
          >
            full Heolstor guide
          </Link>{" "}
          for strategies.
        </TipBox>

        {/* ── Weapon Upgrade System ── */}
        <h2>Weapon Upgrade System</h2>
        <p>
          While farming for legendaries, don&apos;t neglect weapon
          upgrades. A fully upgraded Rare weapon can match or even
          outperform an unupgraded Legendary, especially in the early
          and mid game.
        </p>
        <table>
          <thead>
            <tr>
              <th>Upgrade Level</th>
              <th>Damage Increase</th>
              <th>Materials Needed</th>
              <th>Where to Find</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>+1 to +3</td>
              <td>~10% per level</td>
              <td>Smithing Stone [1]</td>
              <td>Common drops, chests throughout Limveld</td>
            </tr>
            <tr>
              <td>+4 to +6</td>
              <td>~8% per level</td>
              <td>Smithing Stone [2]</td>
              <td>Elite enemies, Field Boss areas</td>
            </tr>
            <tr>
              <td>+7 to +9</td>
              <td>~6% per level</td>
              <td>Smithing Stone [3]</td>
              <td>Mini-boss drops, rare chests</td>
            </tr>
            <tr>
              <td>+10 (Max)</td>
              <td>~15% final boost</td>
              <td>Ancient Dragon Smithing Stone</td>
              <td>Nightlord drops only</td>
            </tr>
          </tbody>
        </table>

        <h3>Upgrade Priority</h3>
        <ul>
          <li>
            <strong>Always upgrade your main weapon first.</strong> A +3
            weapon at Level 5 is better than a +0 weapon at Level 10.
            Weapon upgrades are the single biggest damage increase in the
            game.
          </li>
          <li>
            <strong>
              Don&apos;t hoard Smithing Stones waiting for a legendary.
            </strong>{" "}
            Use them on your best current weapon. Stones are plentiful
            enough that you&apos;ll find more.
          </li>
          <li>
            <strong>Save Ancient Dragon Smithing Stones.</strong> These
            only drop from Nightlords and are extremely rare. Only use
            them on a weapon you plan to keep for the entire run.
          </li>
        </ul>

        <TipBox type="warning" title="Don't Wait for Legendaries">
          The biggest mistake new players make is refusing to upgrade
          Rare or Uncommon weapons because they&apos;re &quot;waiting
          for a legendary.&quot; A +6 Rare weapon deals more damage
          than a +0 Legendary. Upgrade what you have NOW and swap
          later if a legendary drops.
        </TipBox>

        {/* ── Best Legendary Weapons ── */}
        <h2>Best Legendary Weapons Tier List</h2>
        <p>
          Not all legendaries are equal. Here are the ones worth farming
          for:
        </p>
        <table>
          <thead>
            <tr>
              <th>Tier</th>
              <th>Weapon</th>
              <th>Type</th>
              <th>Best For</th>
              <th>Why It&apos;s Strong</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>S</td>
              <td>Moonlight Greatsword</td>
              <td>Greatsword</td>
              <td>Wylder, Raider</td>
              <td>
                Holy + Magic damage. Weapon art fires ranged projectiles.
                Best all-around weapon in the game.
              </td>
            </tr>
            <tr>
              <td>S</td>
              <td>Bolt of Gransax</td>
              <td>Spear</td>
              <td>Executor, Wylder</td>
              <td>
                Lightning damage + massive ranged weapon art. Trivializes
                aerial boss phases.
              </td>
            </tr>
            <tr>
              <td>S</td>
              <td>Black Knife</td>
              <td>Dagger</td>
              <td>Duchess, Executor</td>
              <td>
                Weapon art reduces boss max HP by 10%. Percentage-based
                damage that scales with boss size.
              </td>
            </tr>
            <tr>
              <td>S</td>
              <td>Marais Executioner&apos;s Sword</td>
              <td>Greatsword</td>
              <td>Wylder, Raider</td>
              <td>
                Unique passive: +0.8% permanent damage per kill. Stacks
                infinitely across the entire run, becoming the strongest
                weapon in extended expeditions.
              </td>
            </tr>
            <tr>
              <td>A</td>
              <td>Dark Moon Blade</td>
              <td>Katana</td>
              <td>Executor</td>
              <td>
                Frost + Magic damage. Fastest status buildup of any
                legendary weapon.
              </td>
            </tr>
            <tr>
              <td>A</td>
              <td>Erdtree Greatbow</td>
              <td>Greatbow</td>
              <td>Ironeye</td>
              <td>
                Holy damage at extreme range. Pairs perfectly with
                Ironeye&apos;s ranged kit.
              </td>
            </tr>
            <tr>
              <td>A</td>
              <td>Golden Greatshield</td>
              <td>Greatshield</td>
              <td>Guardian</td>
              <td>
                100% physical block + Holy damage on bash. Makes Guardian
                truly unkillable.
              </td>
            </tr>
            <tr>
              <td>B</td>
              <td>Dragon King&apos;s Cragblade</td>
              <td>Heavy Thrusting</td>
              <td>Executor</td>
              <td>
                Lightning + high poise damage. Good but outclassed by
                Bolt of Gransax.
              </td>
            </tr>
            <tr>
              <td>B</td>
              <td>Staff of the Avatar</td>
              <td>Staff</td>
              <td>Recluse</td>
              <td>
                Highest sorcery scaling of any weapon. Recluse-only value
                &mdash; useless for other classes.
              </td>
            </tr>
          </tbody>
        </table>

        <div className="bg-card border border-primary/30 rounded-xl p-5 my-6">
          <h3 className="text-lg font-semibold mb-3">
            Spotlight: Marais Executioner&apos;s Sword
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            The most unique legendary weapon in Nightreign. Every kill
            permanently adds <strong className="text-foreground">+0.8% damage</strong> to
            the weapon, with no cap. By Day 3, if you&apos;ve been farming
            aggressively, this sword can have 50&ndash;100+ stacks, making it
            deal significantly more damage than any other weapon in the game.
          </p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>
              <strong className="text-foreground">Best Strategy:</strong>{" "}
              Find it on Day 1 and never switch. Every kill counts.
            </li>
            <li>
              <strong className="text-foreground">Stack Count:</strong>{" "}
              ~60 kills on Day 1, ~80 on Day 2, ~30 on Day 3 = ~170 stacks
              = +136% damage by the Nightlord fight.
            </li>
            <li>
              <strong className="text-foreground">Best Nightfarer:</strong>{" "}
              Wylder (fast clear speed) or Raider (Strength scaling).
            </li>
          </ul>
        </div>

        {/* ── Farming Efficiency ── */}
        <h2>Farming Efficiency Comparison</h2>
        <p>
          Where should you spend your time to maximize legendary weapon
          chances per hour?
        </p>
        <table>
          <thead>
            <tr>
              <th>Method</th>
              <th>Kills/Hour</th>
              <th>Legendary Chance/Kill</th>
              <th>Expected Legendaries/Hour</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Field Boss rush (solo)</td>
              <td>4&ndash;6</td>
              <td>3&ndash;8%</td>
              <td>0.12&ndash;0.48</td>
            </tr>
            <tr>
              <td>Field Boss rush (co-op + Ironeye)</td>
              <td>6&ndash;8</td>
              <td>8&ndash;12%</td>
              <td>0.48&ndash;0.96</td>
            </tr>
            <tr>
              <td>Nightlord farming (co-op)</td>
              <td>3&ndash;4 (full runs)</td>
              <td>8&ndash;12%</td>
              <td>0.24&ndash;0.48</td>
            </tr>
            <tr>
              <td>Heolstor farming (co-op)</td>
              <td>2&ndash;3 (full runs)</td>
              <td>12&ndash;15%</td>
              <td>0.24&ndash;0.45</td>
            </tr>
          </tbody>
        </table>

        <TipBox type="tip" title="Most Efficient Method">
          Co-op Field Boss rushing with an Ironeye on the team is the
          most efficient farming method overall. You get more boss kills
          per hour than Nightlord farming, and the Item Discovery bonus
          from Eagle Eye applies to everyone.
        </TipBox>

        {/* ── Common Mistakes ── */}
        <h2>Common Farming Mistakes</h2>
        <ul>
          <li>
            <strong>Farming regular enemies for legendaries.</strong>{" "}
            They cannot drop legendary weapons. Period. Only Field Bosses
            and Nightlords can.
          </li>
          <li>
            <strong>Popping Fowl Foot at the start of the fight.</strong>{" "}
            It only lasts 60 seconds. Wait until the boss is low HP,
            then pop it for maximum uptime during the kill window.
          </li>
          <li>
            <strong>Ignoring Item Discovery stacking.</strong> The
            difference between 0 and +300 Item Discovery is roughly 3x
            the legendary drop rate. Always stack as much as possible.
          </li>
          <li>
            <strong>Skipping weapon upgrades while farming.</strong>{" "}
            Upgrade your current weapon to kill Field Bosses faster.
            Faster kills = more farming runs = more legendary chances.
          </li>
          <li>
            <strong>Solo farming without Wending Grace.</strong> Dying
            to a Field Boss on Day 2 ends your entire expedition. Always
            carry Wending Grace as insurance when farming difficult
            Field Bosses solo.
          </li>
          <li>
            <strong>Not bringing Ironeye in co-op.</strong> Eagle Eye
            gives +100 Item Discovery to the entire team. Even if nobody
            mains Ironeye, having one on the squad dramatically boosts
            everyone&apos;s drop rates.
          </li>
        </ul>

        {/* ── FAQ ── */}
        <h2>Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Can I get legendary weapons from chests?",
              a: "No. Chests can only drop Common through Rare weapons and relics. Legendary weapons are exclusive to Field Boss and Nightlord kill drops.",
            },
            {
              q: "Do legendary drop rates increase on higher difficulties?",
              a: "There is no difficulty selector in Nightreign. However, Heolstor (the hardest Nightlord) has the highest base legendary drop rate at 8%, compared to 5% for other Nightlords.",
            },
            {
              q: "Can I trade legendary weapons with teammates?",
              a: "No. All loot is personal in Nightreign. Each player rolls their own drop table independently.",
            },
            {
              q: "Do legendary weapons carry over between expeditions?",
              a: "No. Like all equipment in Nightreign, legendary weapons reset between expeditions. The only permanent unlocks are meta-progression items.",
            },
            {
              q: "Is it better to farm Field Bosses or Nightlords?",
              a: "For pure drop efficiency, Field Boss co-op rushing with Ironeye is the best method. You get more kills per hour. However, Nightlords drop exclusive legendaries that Field Bosses cannot, so farm Nightlords if you want specific weapons.",
            },
            {
              q: "What's the fastest way to get Moonlight Greatsword?",
              a: "Farm Heolstor repeatedly with maximum Item Discovery. It's his exclusive drop. With +300 Item Discovery, you have roughly a 12-15% chance per kill. Expect 7-10 Heolstor kills on average.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-4"
            >
              <h3 className="font-semibold text-foreground text-sm mb-2">
                {faq.q}
              </h3>
              <p className="text-sm text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>

        {/* ── Related Guides ── */}
        <h2>Related Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              href: "/guides/items",
              title: "Items & Relics Guide",
              desc: "Complete relic tier list and weapon overview",
            },
            {
              href: "/guides/bosses/heolstor",
              title: "Heolstor Boss Guide",
              desc: "Phase-by-phase strategy for the best legendary source",
            },
            {
              href: "/guides/builds",
              title: "Builds & Classes",
              desc: "Best weapons for every Nightfarer",
            },
            {
              href: "/guides/walkthrough",
              title: "Day-by-Day Walkthrough",
              desc: "Optimal routing for Field Boss farming",
            },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/30 hover:bg-card-hover transition-all"
            >
              <div>
                <div className="font-semibold text-foreground text-sm">
                  {link.title}
                </div>
                <div className="text-xs text-muted-foreground">
                  {link.desc}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
