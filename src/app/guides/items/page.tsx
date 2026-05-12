import { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { YouTubeEmbed } from "@/components/article/YouTubeEmbed";
import { TipBox } from "@/components/article/TipBox";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Elden Ring Nightreign Items & Relics Guide — Relic Tier List, Best Weapons & Flask Upgrades",
  description:
    "Complete guide to relics, weapons, flask charges, and consumables in Elden Ring Nightreign. Relic tier list, best weapons by Nightfarer, Church of Marika locations, and merchant items.",
};

export default function ItemsPage() {
  return (
    <article>
      <Breadcrumb
        items={[
          { label: "Guides", href: "/" },
          { label: "Items & Relics" },
        ]}
      />

      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Items &amp; Relics</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Everything you need to know about relics, weapons, flask charges,
          and consumables in Elden Ring: Nightreign.
        </p>
      </header>

      <div className="guide-content">
        {/* ── Overview ── */}
        <h2>How Loot Works in Nightreign</h2>
        <p>
          Nightreign is a roguelike, which means{" "}
          <strong>all loot resets between expeditions</strong>. Weapons,
          relics, flask charges, and consumables are found fresh each run.
          The only things that persist are meta-progression unlocks earned by
          completing expeditions. Understanding what to prioritize each run
          is the key to consistent victories.
        </p>

        {/* ── Video ── */}
        <YouTubeEmbed
          videoId="pEHEGYBNBiE"
          title="Best Items & Relics for Every Character — Elden Ring Nightreign"
        />

        {/* ── Relic System ── */}
        <h2>Relic System Explained</h2>
        <p>
          Relics are powerful modifiers found in chests, dropped by
          mini-bosses, and sold by merchants. Each relic equips into one of
          three color-coded slots:
        </p>
        <table>
          <thead>
            <tr>
              <th>Slot Color</th>
              <th>Type</th>
              <th>Effect</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Yellow</td>
              <td>Passive</td>
              <td>
                Stat bonuses and passive effects that are always active
              </td>
              <td>+15% stamina recovery, +20 poise</td>
            </tr>
            <tr>
              <td>Blue</td>
              <td>Powerful</td>
              <td>
                Strong active or passive effects that can define your build
              </td>
              <td>Holy damage boost, weapon scaling modifier</td>
            </tr>
            <tr>
              <td>Red</td>
              <td>Ultimate</td>
              <td>
                Modifies or enhances your Nightfarer&apos;s Ultimate Art
              </td>
              <td>Extended duration, additional damage element</td>
            </tr>
          </tbody>
        </table>
        <p>
          You start with limited relic slots and unlock more through
          meta-progression. Defeating Heolstor unlocks the{" "}
          <strong>Sacred Erdtree Grail</strong>, which grants all characters
          3 Yellow Relic slots.
        </p>

        {/* ── Relic Tier List ── */}
        <h2>Relic Tier List</h2>
        <p>
          Not all relics are created equal. Here are the strongest relics
          you should prioritize when they appear:
        </p>
        <table>
          <thead>
            <tr>
              <th>Tier</th>
              <th>Relic</th>
              <th>Slot</th>
              <th>Effect</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>S</td>
              <td>Night of the Lord</td>
              <td>Blue</td>
              <td>
                Unique drop from Heolstor. Massive stat boost in all
                categories.
              </td>
            </tr>
            <tr>
              <td>S</td>
              <td>Sacred Erdtree Blessing</td>
              <td>Yellow</td>
              <td>
                Regenerates HP over time. Stacks with flask healing for
                extreme sustain.
              </td>
            </tr>
            <tr>
              <td>S</td>
              <td>Moonlight Resonance</td>
              <td>Blue</td>
              <td>
                Boosts Holy damage by 30%. Best-in-slot for Nightlord
                fights.
              </td>
            </tr>
            <tr>
              <td>A</td>
              <td>Eagle&apos;s Crest</td>
              <td>Yellow</td>
              <td>
                Increases item discovery for the whole team. Essential for
                farming runs.
              </td>
            </tr>
            <tr>
              <td>A</td>
              <td>Crucible Horn</td>
              <td>Red</td>
              <td>
                Extends Ultimate Art duration by 40%. Huge for sustained DPS
                windows.
              </td>
            </tr>
            <tr>
              <td>A</td>
              <td>Flame of the Fell God</td>
              <td>Blue</td>
              <td>
                Adds fire explosion to heavy attacks. Strong stagger and AoE
                damage.
              </td>
            </tr>
            <tr>
              <td>B</td>
              <td>Stalwart Shield Talisman</td>
              <td>Yellow</td>
              <td>
                +50% guard stability. Makes Guardian nearly unkillable when
                blocking.
              </td>
            </tr>
            <tr>
              <td>B</td>
              <td>Scarlet Rot Essence</td>
              <td>Yellow</td>
              <td>
                Adds passive Rot buildup to all attacks. Great for boss
                fights.
              </td>
            </tr>
            <tr>
              <td>B</td>
              <td>Erdtree Favor</td>
              <td>Yellow</td>
              <td>
                Boosts HP, stamina, and equip load. Solid all-around pick.
              </td>
            </tr>
          </tbody>
        </table>

        <TipBox type="tip" title="Relic Priority">
          Always check relic shops and chests carefully. A single S-tier
          relic can carry an entire run. If you find Moonlight Resonance or
          Sacred Erdtree Blessing, equip them immediately.
        </TipBox>

        {/* ── Best Weapons ── */}
        <h2>Best Weapons by Nightfarer</h2>
        <p>
          Weapons in Nightreign are found randomly each run. You cannot
          guarantee a specific weapon, but knowing which ones to look for
          helps you make fast decisions.
        </p>
        <table>
          <thead>
            <tr>
              <th>Nightfarer</th>
              <th>Best Weapon</th>
              <th>Type</th>
              <th>Why</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Guardian</td>
              <td>Coded Sword / Cipher Pata</td>
              <td>Holy</td>
              <td>Innate Holy scaling pairs perfectly with Greatshield</td>
            </tr>
            <tr>
              <td>Ironeye</td>
              <td>Erdtree Greatbow</td>
              <td>Greatbow</td>
              <td>Holy + massive single-target damage from range</td>
            </tr>
            <tr>
              <td>Wylder</td>
              <td>Blasphemous Blade</td>
              <td>Greatsword</td>
              <td>
                Fire damage + HP recovery on kill. Best sustain weapon in
                the game.
              </td>
            </tr>
            <tr>
              <td>Executor</td>
              <td>Moonveil / Rivers of Blood</td>
              <td>Katana</td>
              <td>
                Fast attacks with built-in weapon arts for parry follow-ups
              </td>
            </tr>
            <tr>
              <td>Duchess</td>
              <td>Reduvia / Great Knife</td>
              <td>Dagger</td>
              <td>
                Fast status buildup + pairs with invisibility for backstabs
              </td>
            </tr>
            <tr>
              <td>Raider</td>
              <td>Giant-Crusher</td>
              <td>Colossal Weapon</td>
              <td>
                Highest stagger in the game. One charged R2 staggers most
                enemies.
              </td>
            </tr>
            <tr>
              <td>Recluse</td>
              <td>Lusat&apos;s Glintstone Staff</td>
              <td>Staff</td>
              <td>
                Highest sorcery scaling. Massive damage with Int investment.
              </td>
            </tr>
            <tr>
              <td>Revenant</td>
              <td>Erdtree Seal</td>
              <td>Sacred Seal</td>
              <td>
                Best incantation scaling for Faith builds. Boosts summon
                damage.
              </td>
            </tr>
          </tbody>
        </table>

        <TipBox type="warning" title="Weapon Upgrades Matter">
          Upgrading your weapon is more impactful than leveling stats in the
          early game. Always upgrade at every opportunity &mdash; a +3
          common weapon outperforms a +0 rare weapon.
        </TipBox>

        <div className="my-6">
          <Link
            href="/guides/items/legendary-weapons"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Legendary Weapons Farming Guide &rarr;
          </Link>
        </div>

        {/* ── Flask Charges ── */}
        <h2>Flask Charges &amp; Churches of Marika</h2>
        <p>
          Your healing flasks start with limited charges each expedition.
          Finding <strong>golden Churches of Marika</strong> scattered
          across the Limveld permanently adds a flask charge for the rest of
          the run. This is one of the most important mechanics in Nightreign
          &mdash; entering Day 3 with 3 flasks vs 6 flasks is often the
          difference between victory and defeat.
        </p>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Target Flask Count</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Day 1</td>
              <td>3&ndash;4</td>
              <td>Find at least 1 Church during exploration</td>
            </tr>
            <tr>
              <td>Day 2</td>
              <td>5&ndash;6</td>
              <td>
                Actively hunt Churches &mdash; this is your main Day 2
                priority
              </td>
            </tr>
            <tr>
              <td>Day 3</td>
              <td>6+</td>
              <td>
                Check remaining areas before the final shrink
              </td>
            </tr>
          </tbody>
        </table>

        <TipBox type="danger" title="Don't Skip Churches">
          Every Church of Marika you miss is one less heal in the Nightlord
          fight. On Day 2, prioritize Churches over everything else
          &mdash; they are more valuable than relics or runes.
        </TipBox>

        {/* ── Consumables ── */}
        <h2>Key Consumables</h2>
        <p>
          Merchants appear throughout the Limveld selling consumables that
          can make or break your Nightlord fight. Buy these before Day 3:
        </p>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Effect</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wending Grace</td>
              <td>
                Free resurrection + full heal during boss fights. Essential
                for solo players.
              </td>
              <td>Critical (Solo)</td>
            </tr>
            <tr>
              <td>Holy Grease</td>
              <td>
                Adds Holy damage to your weapon for 60 seconds. +35% vs
                most Nightlords.
              </td>
              <td>Critical</td>
            </tr>
            <tr>
              <td>Scarlet Rot Grease</td>
              <td>
                Applies Rot buildup. Percentage-based damage is devastating
                on high-HP bosses.
              </td>
              <td>High</td>
            </tr>
            <tr>
              <td>Fire Grease</td>
              <td>
                Adds Fire damage. Effective against Tricephalos, Gnoster,
                and Maris.
              </td>
              <td>Medium</td>
            </tr>
            <tr>
              <td>Lightning Grease</td>
              <td>
                Adds Lightning damage. Strong against Tricephalos and
                Caligo.
              </td>
              <td>Medium</td>
            </tr>
            <tr>
              <td>Silver-Pickled Fowl Foot</td>
              <td>
                Increases item discovery. Use before killing the Nightlord
                for better drops.
              </td>
              <td>Low</td>
            </tr>
          </tbody>
        </table>

        <TipBox type="tip" title="Use Consumables Before the Fight">
          Apply weapon greases before entering the Nightlord arena. You may
          not have time to buff mid-fight, and consumables reset after the
          expedition anyway &mdash; there&apos;s no reason to save them.
        </TipBox>

        {/* ── Weapon Scaling ── */}
        <h2>Weapon Scaling &amp; Damage Types</h2>
        <p>
          Weapons in Nightreign scale with your Nightfarer&apos;s stats.
          Understanding scaling helps you choose the right weapon for your
          build:
        </p>
        <table>
          <thead>
            <tr>
              <th>Scaling Stat</th>
              <th>Weapon Types</th>
              <th>Best Nightfarer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Strength</td>
              <td>Greatswords, Axes, Hammers, Colossal Weapons</td>
              <td>Wylder, Raider</td>
            </tr>
            <tr>
              <td>Dexterity</td>
              <td>Katanas, Curved Swords, Bows, Daggers</td>
              <td>Executor, Ironeye, Duchess</td>
            </tr>
            <tr>
              <td>Intelligence</td>
              <td>Staves, Glintstone weapons</td>
              <td>Recluse</td>
            </tr>
            <tr>
              <td>Faith</td>
              <td>Sacred Seals, Holy weapons</td>
              <td>Revenant, Guardian</td>
            </tr>
          </tbody>
        </table>

        {/* ── Meta-Progression ── */}
        <h2>Meta-Progression Unlocks</h2>
        <p>
          While most items reset between expeditions, certain unlocks persist
          permanently. These are earned by completing expeditions and
          defeating Nightlords:
        </p>
        <ul>
          <li>
            <strong>Additional Relic Slots</strong> &mdash; Unlocked by
            completing expeditions. More slots means more power each run.
          </li>
          <li>
            <strong>Sacred Erdtree Grail</strong> &mdash; Defeat Heolstor
            to unlock 3 Yellow Relic slots for all characters permanently.
          </li>
          <li>
            <strong>Nightfarer Skins</strong> &mdash; Cosmetic rewards for
            defeating specific Nightlords with specific characters.
          </li>
          <li>
            <strong>Remembrance Cutscenes</strong> &mdash; Story endings
            unlocked by completing character-specific challenges.
          </li>
          <li>
            <strong>Starting Loadout Upgrades</strong> &mdash; Improved
            starting equipment unlocked through repeated clears.
          </li>
        </ul>
      </div>
    </article>
  );
}
