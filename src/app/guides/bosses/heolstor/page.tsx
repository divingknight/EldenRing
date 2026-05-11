import { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { TableOfContents } from "@/components/article/TableOfContents";
import { InfoBox } from "@/components/article/InfoBox";
import { PhaseCard } from "@/components/article/PhaseCard";
import { TipBox } from "@/components/article/TipBox";
import { FAQSection } from "@/components/article/FAQSection";
import { AttackTable } from "@/components/article/AttackTable";
import { LanguageSwitch } from "@/components/article/LanguageSwitch";
import { YouTubeEmbed } from "@/components/article/YouTubeEmbed";
import { WeaknessChart } from "@/components/article/WeaknessChart";
import { TeamCompCard } from "@/components/article/TeamCompCard";
import { PhaseTimeline } from "@/components/article/PhaseTimeline";
import { UnlockFlow } from "@/components/article/UnlockFlow";
import { PrepChecklist } from "@/components/article/PrepChecklist";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Beat Heolstor the Nightlord in Elden Ring Nightreign — Full Boss Guide",
  description:
    "Defeat Heolstor, the hardest Nightlord in Elden Ring Nightreign. Phase-by-phase breakdown, best team comps, attack patterns, weakness chart, and solo strategy. Updated for 2026.",
  keywords: [
    "Heolstor", "Nightlord", "Elden Ring Nightreign", "boss guide", "Night Aspect",
    "how to beat Heolstor", "Heolstor weakness", "best team comp", "solo guide",
  ],
  openGraph: {
    title: "How to Beat Heolstor the Nightlord — Elden Ring Nightreign Boss Guide",
    description: "Phase-by-phase strategy, weakness chart, best team comps & solo tips for the hardest Nightlord.",
    type: "article",
  },
};

const tocItems = [
  { id: "tldr", label: "TL;DR — Quick Summary" },
  { id: "video", label: "Full Fight Video Guide" },
  { id: "unlock", label: "How to Unlock Night Aspect" },
  { id: "preparation", label: "Pre-Fight Preparation Checklist" },
  { id: "weakness", label: "Weaknesses & Immunities" },
  { id: "phases", label: "Phase-by-Phase Breakdown" },
  { id: "team-comps", label: "Best Team Compositions" },
  { id: "solo", label: "Solo Strategy" },
  { id: "rewards", label: "Rewards & Unlocks" },
  { id: "pro-tips", label: "Pro Tips from Veteran Players" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const faqItems = [
  {
    q: "What level should I be to fight Heolstor?",
    a: "Minimum Level 13 for survivability. Level 14 is recommended for a comfortable fight. Below Level 13, most of Heolstor's attacks will one-shot non-tank characters.",
  },
  {
    q: "Can I beat Heolstor solo?",
    a: "Yes! Use Executor for deflection or Ironeye for safe ranged damage. Buy Wending Grace before Day 3 for a free revive. Solo mode gives ~60% more Runes, so you can hit Level 14 more easily.",
  },
  {
    q: "Is Bleed effective against Heolstor?",
    a: "No. Heolstor is completely immune to Bleed, Frostbite, and Poison. Use Holy damage (primary weakness) or Scarlet Rot instead.",
  },
  {
    q: "How many Nightlords do I need to beat first?",
    a: "You must defeat 4 different Nightlords to unlock the Night Aspect expedition: Tricephalos, Maris (Augur), Gnoster (Sentient Pest), and Fissure in the Fog (Caligo).",
  },
  {
    q: "What's the best weapon element against Heolstor?",
    a: "Holy damage is the strongest (+35% in Phase 1, +20% in Phase 2). Fire and Lightning are also effective at +20%. Scarlet Rot works well since it scales with the boss's massive HP pool.",
  },
  {
    q: "How long does the Heolstor fight take?",
    a: "With an optimized team at Level 14, expect 5-8 minutes. Solo runs take 8-12 minutes. Undergeared or first attempts may take 15+ minutes.",
  },
  {
    q: "What do I get for beating Heolstor?",
    a: "Night of the Lord relic, Primordial Nightlord's Rune, Sacred Erdtree Grail (unlocks 3 Yellow Relic slots for all characters), new Nightfarer skins, and a character-specific Remembrance cutscene.",
  },
  {
    q: "Does Heolstor's elemental infusion in Phase 4 change every run?",
    a: "Yes. In Phase 4, Heolstor absorbs a random element from other Nightlords each time he loses ~25% of his remaining HP. The element changes per run, so stay adaptable.",
  },
];

const prepItems = [
  { label: "Reach Level 13+ (14 recommended)", detail: "Visit gold Churches of Marika on the map for extra flask charges. Farm Field Bosses for fast Runes.", priority: "critical" as const },
  { label: "Equip a Holy damage weapon", detail: "Holy deals +35% in Phase 1 and +20% in Phase 2. Look for weapons with innate Holy scaling or apply Holy grease.", priority: "critical" as const },
  { label: "Bring Scarlet Rot as secondary", detail: "Scarlet Rot scales with Heolstor's massive HP pool (33,642 HP in co-op). Rot Pots or Rot incantations work.", priority: "important" as const },
  { label: "Max out healing flask charges", detail: "Every gold Church on the map adds a charge. Prioritize these during Day 1-2 exploration.", priority: "critical" as const },
  { label: "Buy Wending Grace (solo only)", detail: "Gives a full heal + death save during the Nightlord fight. Essential for solo runs.", priority: "important" as const },
  { label: "Equip elemental negation buffs", detail: "Phase 4 adds random elements. Broad negation talismans reduce surprise damage.", priority: "recommended" as const },
  { label: "Slot Holy-boosting Relics", detail: "Any relic that increases Holy damage output will significantly speed up the fight.", priority: "recommended" as const },
];

export default function HeolstorGuidePage() {
  return (
    <article className="max-w-4xl">
      {/* Breadcrumb + Language */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <Breadcrumb
          items={[
            { label: "Guides", href: "/" },
            { label: "Boss Guides", href: "/guides/bosses" },
            { label: "Heolstor the Nightlord" },
          ]}
        />
        <LanguageSwitch />
      </div>

      {/* Hero Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <span>Last updated: May 9, 2026</span>
          <span>·</span>
          <span>Patch: Launch Version (May 2026)</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          How to Beat <span className="text-primary">Heolstor the Nightlord</span> in Elden Ring Nightreign
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Heolstor is the <strong className="text-foreground">hardest Nightlord</strong> and the final boss of Elden Ring
          Nightreign. This guide gives you a complete phase-by-phase breakdown, the best team compositions,
          optimal gear, and a proven solo strategy — everything you need to defeat the origin of the Night
          and claim the <strong className="text-foreground">Night of the Lord</strong> relic.
        </p>
      </header>

      {/* Hero Video — full fight overview */}
      <YouTubeEmbed
        videoId="gzvFg7U40nc"
        title="Heolstor the Nightlord Full Boss Fight Guide — Elden Ring Nightreign"
        caption="Complete Heolstor boss fight walkthrough showing all 4 phases, attack patterns, and dodge timings."
      />

      {/* Quick Info Boxes */}
      <InfoBox
        items={[
          { label: "Difficulty", value: "★★★★★" },
          { label: "Rec. Level", value: "Lv.14" },
          { label: "Weakness", value: "Holy (+35%)" },
          { label: "Immune", value: "Bleed / Poison" },
        ]}
      />

      <TableOfContents items={tocItems} />

      {/* ===== SECTION: TL;DR ===== */}
      <section id="tldr" className="mb-10">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">
          TL;DR — Quick Summary
        </h2>
        <div className="bg-card border border-primary/30 rounded-xl p-5">
          <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
            <li>Reach <strong className="text-foreground">Level 14</strong> and equip a <strong className="text-foreground">Holy damage</strong> weapon before Day 3.</li>
            <li>Run the team comp: <strong className="text-foreground">Guardian (tank) + Ironeye (ranged DPS) + Wylder (melee DPS)</strong>.</li>
            <li>Phase 1 is easy — <strong className="text-foreground">conserve all flasks and Ultimates</strong>.</li>
            <li>Phase 2: dodge the aerial slam → run from delayed ground explosions.</li>
            <li>Phase 3: dodge sideways from projectiles, interrupt Cover of Darkness with your Ultimate.</li>
            <li>Phase 4: watch the ground fissures + boss simultaneously. Use Ultimate i-frames for the final slam.</li>
            <li>Collect rewards: <strong className="text-foreground">Night of the Lord relic</strong> + <strong className="text-foreground">Sacred Erdtree Grail</strong> (3 Yellow Relic slots).</li>
          </ol>
        </div>
      </section>

      {/* ===== SECTION: VIDEO ===== */}
      <section id="video" className="mb-10">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">
          Full Fight Video Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <YouTubeEmbed
            videoId="6Wb0F5AGI_k"
            title="How to Beat Heolstor EASY — Simplified Strategy"
            caption="Simplified strategy for first-timers. Covers the safest approach to each phase."
          />
          <YouTubeEmbed
            videoId="de8ILH1IDug"
            title="Heolstor Expert Guide — After 100+ Kills"
            caption="Advanced strategies from a veteran with 100+ Heolstor kills. Optimal DPS windows and timings."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <YouTubeEmbed
            videoId="-l6QR5b2weM"
            title="Best Build for Heolstor — Elden Ring Nightreign"
            caption="Best build and gear loadout specifically optimized for the Heolstor fight."
          />
          <YouTubeEmbed
            videoId="ubVtf-rgHAQ"
            title="How to Beat Heolstor EASY with Recluse"
            caption="Recluse-specific solo strategy — ideal for players who main this Nightfarer."
          />
        </div>
      </section>

      {/* ===== SECTION: UNLOCK ===== */}
      <section id="unlock" className="mb-10">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">
          How to Unlock Night Aspect
        </h2>
        <p className="text-muted-foreground mb-4">
          You must defeat <strong className="text-foreground">4 different Nightlords</strong> before the Night Aspect
          expedition becomes available. The order does not matter.
        </p>
        <UnlockFlow lang="en" />
      </section>

      {/* ===== SECTION: PREPARATION ===== */}
      <section id="preparation" className="mb-10">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">
          Pre-Fight Preparation Checklist
        </h2>
        <p className="text-muted-foreground mb-2">
          Check off each item as you prepare during Day 1 and Day 2. Enter Day 3 fully ready.
        </p>
        <PrepChecklist items={prepItems} lang="en" />
      </section>

      {/* ===== SECTION: WEAKNESS ===== */}
      <section id="weakness" className="mb-10">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">
          Weaknesses &amp; Immunities
        </h2>
        <WeaknessChart lang="en" />
        <TipBox type="tip" title="Damage Strategy">
          Lead with Holy for raw damage and stagger potential. Apply Scarlet Rot early — it ticks for percentage-based
          damage on Heolstor&apos;s enormous HP pool, effectively adding a free DPS player to your team.
        </TipBox>
      </section>

      {/* ===== SECTION: PHASES ===== */}
      <section id="phases" className="mb-10">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">
          Phase-by-Phase Breakdown
        </h2>
        <p className="text-muted-foreground mb-4">
          Heolstor has <strong className="text-foreground">two health bars</strong> across
          four distinct phases. Here is every phase, every attack, and exactly how to survive each one.
        </p>

        {/* Phase Timeline Overview */}
        <PhaseTimeline lang="en" />

        {/* Phase 1 */}
        <PhaseCard phase="Phase 1" title="Shape of Night — Spectral Sword" trigger="Fight begins — HP Bar 1 (100%–60%)" color="border-l-green-500">
          <p className="text-sm text-muted-foreground mb-3">
            The opening phase is deceptively easy. Heolstor is a slow spectral knight with predictable
            sword swings. <strong className="text-foreground">This is a resource conservation phase.</strong>
          </p>
          <YouTubeEmbed
            videoId="0O1R52BRC_I"
            title="How to Beat Heolstor Phase 1 — Shape of Night"
            caption="Phase 1 gameplay showing all attack patterns and safe punish windows."
          />
          <AttackTable
            attacks={[
              { name: "Dashing Slash", description: "Linear dash + horizontal sword swing", dodge: "Roll sideways", danger: "Low" },
              { name: "Pouncing Combo", description: "3 consecutive side-to-side slashes", dodge: "Roll backward after 3rd hit", danger: "Medium" },
              { name: "Winding Thrust", description: "Winds up, impales the ground", dodge: "Roll forward through it", danger: "Medium" },
            ]}
          />
          <TipBox type="warning" title="Golden Rule">
            Do NOT use healing flasks or Ultimates in Phase 1. You will desperately need them later.
            Guard Counters and backward dodges are enough to survive this phase with zero resource cost.
          </TipBox>
        </PhaseCard>

        {/* Phase 2 */}
        <PhaseCard phase="Phase 2" title="Greatsword Awakening" trigger="HP Bar 1 drops to ~60%" color="border-l-yellow-500">
          <p className="text-sm text-muted-foreground mb-3">
            Heolstor draws a second weapon and becomes dramatically faster.
            Multi-dash slashes with minimal windup make this the first real test.
          </p>
          <AttackTable
            attacks={[
              { name: "Sky Slam", description: "Flies up, slams sword into ground", dodge: "Sprint away → dodge delayed explosions", danger: "High" },
              { name: "Multi-Dash Slash", description: "Rapid 4-hit dash combo across arena", dodge: "Sprint sideways, don't roll", danger: "High" },
              { name: "Thrust + Explosion", description: "Stab forward → dark energy detonation", dodge: "Roll forward through stab → sprint away from blast", danger: "High" },
            ]}
          />
          <TipBox type="tip">
            Despite the increased speed, Heolstor has <strong>low poise in Phase 2</strong>. Heavy attacks
            and charged R2s can stagger him out of combos. Coordinate with your team: when one player
            staggers him, everyone goes in for free hits.
          </TipBox>
        </PhaseCard>

        {/* Phase 3 */}
        <PhaseCard phase="Phase 3" title="Moonlight Greatsword Awakening" trigger="HP Bar 2 begins — Full magic transformation" color="border-l-purple-500">
          <p className="text-sm text-muted-foreground mb-3">
            The real fight starts here. Heolstor ignites the Moonlight Greatsword, gaining
            magic and dark elemental attacks. Combos now end with AoE detonations.
          </p>
          <AttackTable
            attacks={[
              { name: "Chain Combo + AoE", description: "3-hit melee chain ending with magical explosion", dodge: "Roll through first 2 hits, sprint away from AoE", danger: "High" },
              { name: "Ground Drag → Projectiles", description: "Drags sword on ground, launches 5+ projectiles", dodge: "Sprint sideways or roll through them", danger: "High" },
              { name: "Cover of Darkness", description: "Channels darkness, rains homing projectiles", dodge: "Interrupt with Ultimate or sprint in circles", danger: "Lethal" },
              { name: "Backstab Teleport", description: "Teleports behind target, 3-hit combo", dodge: "Lock-on camera → immediate roll on teleport cue", danger: "High" },
            ]}
          />
          <TipBox type="danger" title="Critical Interrupt">
            When Heolstor begins channeling <strong>Cover of Darkness</strong> (dark aura + floating pose),
            use your Ultimate Art immediately. The i-frames will protect you AND the poise damage
            will stagger him out of the channel. If no one interrupts it, the projectile rain is
            nearly unsurvivable.
          </TipBox>
        </PhaseCard>

        {/* Phase 4 */}
        <PhaseCard phase="Phase 4" title="Elemental Infusion — Ground Eruption" trigger="HP Bar 2 drops to ~60%" color="border-l-red-500">
          <p className="text-sm text-muted-foreground mb-3">
            The final phase. Heolstor absorbs a random Nightlord&apos;s element, adding
            elemental hazards to every attack. Ground fissures erupt with delayed explosions.
            This is the ultimate test.
          </p>
          <YouTubeEmbed
            videoId="Ohuu_kVMeuY"
            title="Heolstor Phase 4 Night Aspect — All Attack Patterns and Dodge Timings"
            caption="Full Phase 4 footage showing ground fissures, elemental infusion, and the lethal Final Slam."
          />
          <AttackTable
            attacks={[
              { name: "Night of the Lord", description: "Flies up → slam → explosive fissures with random element", dodge: "Dodge slam → sprint to safe ground", danger: "Lethal" },
              { name: "Flaming Fissures", description: "Sword slashes creating ground-based fire trails", dodge: "Sprint perpendicular to slash direction", danger: "Lethal" },
              { name: "Sky Splitter", description: "Massive directional blast (frost or madness)", dodge: "Run laterally, never toward or away", danger: "Lethal" },
              { name: "Final Slam", description: "Extreme damage overhead slam", dodge: "Greatshield block OR Ultimate i-frames", danger: "Lethal" },
            ]}
          />
          <TipBox type="danger" title="Survival Priority">
            In Phase 4, you must track <strong>two things simultaneously</strong>: (1) Heolstor&apos;s
            attack animations above, and (2) ground fissures glowing below. Fissures erupt ~1.5 seconds
            after appearing. Position yourself on clean ground before focusing on dodge timing.
          </TipBox>
          <TipBox type="tip" title="DPS Race">
            Below 20% HP, go all-in. Pop every consumable, use all remaining Ultimates, and apply
            Scarlet Rot if it&apos;s worn off. The longer Phase 4 lasts, the more dangerous
            it becomes as elemental zones accumulate across the arena.
          </TipBox>
        </PhaseCard>
      </section>

      {/* ===== SECTION: TEAM COMPS ===== */}
      <section id="team-comps" className="mb-10">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">
          Best Team Compositions
        </h2>

        <TeamCompCard
          tag="Recommended"
          tagColor="bg-green-500/20 text-green-400"
          title="Safe Comp: Guardian + Ironeye + Wylder"
          members={[
            { icon: "🛡️", name: "Guardian", role: "Tank", color: "text-blue-400", skills: ["Greatshield", "Revival Ult", "Aggro Hold"], reason: "Absorbs all damage. Revival Ultimate saves failed dodges. Holds aggro so DPS works freely." },
            { icon: "🏹", name: "Ironeye", role: "Ranged DPS", color: "text-green-400", skills: ["Eagle Eye", "Single Shot", "Safe Revive"], reason: "Consistent damage during aerial phases. Eagle Eye boosts drops. Safe revives from distance." },
            { icon: "🗡️", name: "Wylder", role: "Melee DPS", color: "text-orange-400", skills: ["Grappling Hook", "Flaming Stake", "Death Cheat"], reason: "Hook closes gaps fast. Flaming Stake staggers Heolstor. Death-cheat passive forgives mistakes." },
          ]}
          note="Best overall comp. Guardian tanks, Ironeye chips from range, Wylder bursts during stagger windows."
        />

        <TeamCompCard
          tag="High Risk / High Reward"
          tagColor="bg-red-500/20 text-red-400"
          title="Nuclear Comp: Wylder + Ironeye + Duchess"
          members={[
            { icon: "🗡️", name: "Wylder", role: "Melee DPS", color: "text-orange-400", skills: ["Grappling Hook", "Flaming Stake"], reason: "Gap closer + stagger. Initiates combos for the team." },
            { icon: "🏹", name: "Ironeye", role: "Ranged DPS", color: "text-green-400", skills: ["Eagle Eye", "Single Shot"], reason: "Consistent ranged pressure. Covers during boss aerial phases." },
            { icon: "👑", name: "Duchess", role: "Burst DPS", color: "text-purple-400", skills: ["Confluence", "Loathsome Hex", "Trance"], reason: "Confluence chains Ultimates. Loathsome Hex deals devastating AoE. Trance boosts attack power." },
          ]}
          note="Maximum burst damage. No tank — all 3 players must dodge perfectly. Fastest kill times possible."
        />

        <TeamCompCard
          tag="Beginner Friendly"
          tagColor="bg-blue-500/20 text-blue-400"
          title="Tank Comp: Guardian + Raider + Ironeye"
          members={[
            { icon: "🛡️", name: "Guardian", role: "Tank", color: "text-blue-400", skills: ["Greatshield", "Revival Ult"], reason: "Holds the frontline. Revival Ultimate provides insurance." },
            { icon: "⚔️", name: "Raider", role: "Support DPS", color: "text-yellow-400", skills: ["Retaliate", "Battle Buff"], reason: "Retaliate boosts whole team's damage. Simple two-hand-and-hit loop." },
            { icon: "🏹", name: "Ironeye", role: "Ranged DPS", color: "text-green-400", skills: ["Eagle Eye", "Single Shot"], reason: "Safe consistent ranged damage. Can revive teammates from distance." },
          ]}
          note="Most forgiving comp. Guardian + Raider frontline absorbs pressure. Great for first clears."
        />
      </section>

      {/* ===== SECTION: SOLO ===== */}
      <section id="solo" className="mb-10">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">
          Solo Strategy
        </h2>
        <TipBox type="info" title="Solo Bonus">
          Solo mode awards ~60% more Runes from all sources, making it easier to hit Level 14
          before Day 3. You also receive fewer boss HP: only 4,984 + 11,214 instead of the
          co-op totals.
        </TipBox>
        <h3 className="text-lg font-semibold mt-4 mb-3">Best Solo Nightfarers</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="font-semibold text-foreground mb-1">⚔️ Executor — #1 Solo Pick</div>
            <p className="text-sm text-muted-foreground">
              Superior deflection mechanics let you parry Heolstor&apos;s combos instead of dodging.
              High skill ceiling but extremely rewarding.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="font-semibold text-foreground mb-1">🏹 Ironeye — Safest Solo Pick</div>
            <p className="text-sm text-muted-foreground">
              Ranged playstyle keeps you out of danger. Single Shot Ultimate ignores all defenses.
              Slower but much safer.
            </p>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-4 mb-3">Solo Video Guide</h3>
        <YouTubeEmbed
          videoId="ubVtf-rgHAQ"
          title="How to Beat Heolstor Solo with Recluse — Elden Ring Nightreign"
          caption="Full solo Heolstor kill demonstrating dodge timings and resource management without teammates."
        />

        <h3 className="text-lg font-semibold mt-4 mb-3">Solo Checklist</h3>
        <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
          <li>Buy <strong className="text-foreground">Wending Grace</strong> before Day 3 — free revive + full heal.</li>
          <li>Stack weapon passives: equip Scarlet Rot + Holy weapons (passives apply even when unequipped).</li>
          <li>Plan your Day 1-2 route to maximize Rune income and flask charges.</li>
          <li>Use all consumables before the Nightlord fight — you lose them all afterward anyway.</li>
          <li>In Phase 4, play extremely safe. One death without Wending Grace = run over.</li>
        </ol>
      </section>

      {/* ===== SECTION: REWARDS ===== */}
      <section id="rewards" className="mb-10">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">
          Rewards &amp; Unlocks
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="px-3 py-2.5 text-left font-semibold border border-border">Reward</th>
                <th className="px-3 py-2.5 text-left font-semibold border border-border">Type</th>
                <th className="px-3 py-2.5 text-left font-semibold border border-border">Effect</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/50"><td className="px-3 py-2 border border-border font-medium text-foreground">Night of the Lord</td><td className="px-3 py-2 border border-border text-muted-foreground">Relic</td><td className="px-3 py-2 border border-border text-muted-foreground">Unique relic for blue vessel slots</td></tr>
              <tr className="hover:bg-muted/50"><td className="px-3 py-2 border border-border font-medium text-foreground">Primordial Nightlord&apos;s Rune</td><td className="px-3 py-2 border border-border text-muted-foreground">Currency</td><td className="px-3 py-2 border border-border text-muted-foreground">High-value Rune reward</td></tr>
              <tr className="hover:bg-muted/50"><td className="px-3 py-2 border border-border font-medium text-foreground">Sacred Erdtree Grail</td><td className="px-3 py-2 border border-border text-muted-foreground">Unlock</td><td className="px-3 py-2 border border-border text-muted-foreground">All characters can equip 3 Yellow Relics</td></tr>
              <tr className="hover:bg-muted/50"><td className="px-3 py-2 border border-border font-medium text-foreground">Nightfarer Skins</td><td className="px-3 py-2 border border-border text-muted-foreground">Cosmetic</td><td className="px-3 py-2 border border-border text-muted-foreground">New skins unlocked at the Dresser</td></tr>
              <tr className="hover:bg-muted/50"><td className="px-3 py-2 border border-border font-medium text-foreground">Remembrance Cutscene</td><td className="px-3 py-2 border border-border text-muted-foreground">Story</td><td className="px-3 py-2 border border-border text-muted-foreground">Character-specific ending (if Remembrance completed)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SECTION: PRO TIPS ===== */}
      <section id="pro-tips" className="mb-10">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">
          Pro Tips from Veteran Players
        </h2>
        <div className="space-y-3">
          {[
            { icon: "🎯", tip: "Stagger windows are your best friend", detail: "Heolstor can be staggered out of long combos with Ultimate Arts. When he staggers, the whole team gets 3-4 seconds of free damage. Coordinate Ultimates — don't stack them." },
            { icon: "🔄", tip: "Phase 1 is a pattern study session", detail: "Every Phase 1 attack has a faster version in later phases. Learn the tells here when stakes are low. You'll recognize them at 2x speed later." },
            { icon: "🧪", tip: "Scarlet Rot is essentially a 4th player", detail: "On the co-op HP pool of 33,642, Rot ticks deal massive cumulative damage. Apply it at the start of each health bar and reapply when it wears off." },
            { icon: "🗺️", tip: "Position near the arena edge in Phase 4", detail: "Ground fissures spawn around the center. Staying near the edges gives you more clean ground to retreat to and better visibility of incoming eruptions." },
            { icon: "⏱️", tip: "Pop Silver-Pickled Fowl Foot before the kill", detail: "Increases item discovery for the Heolstor drop. Use it when he's below 10% HP to maximize your legendary weapon chances." },
            { icon: "🛡️", tip: "Guardian's revival Ultimate saves runs", detail: "If anyone dies in Phase 4, Guardian's Ultimate can revive them. Save it exclusively for this purpose — it's more valuable as insurance than as damage." },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 p-4 bg-card border border-border rounded-xl">
              <span className="text-2xl shrink-0">{item.icon}</span>
              <div>
                <div className="font-semibold text-foreground text-sm">{item.tip}</div>
                <div className="text-xs text-muted-foreground mt-1">{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SECTION: FAQ ===== */}
      <FAQSection items={faqItems} title="Frequently Asked Questions" />

      {/* ===== INTERNAL LINKS ===== */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">
          Related Guides
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/guides/bosses", icon: "👹", title: "All Boss Guides", desc: "Strategies for every Nightlord encounter" },
            { href: "/guides/builds", icon: "⚔️", title: "Best Builds & Classes", desc: "Optimized Nightfarer builds for every playstyle" },
            { href: "/guides/items", icon: "🛡️", title: "Legendary Weapons Guide", desc: "How to find and upgrade the best gear" },
            { href: "/guides/beginner", icon: "📖", title: "Beginner's Guide", desc: "New to Nightreign? Start here" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/30 hover:bg-card-hover transition-all"
            >
              <span className="text-2xl">{link.icon}</span>
              <div>
                <div className="font-semibold text-foreground text-sm">{link.title}</div>
                <div className="text-xs text-muted-foreground">{link.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== FOOTER NOTE ===== */}
      <div className="text-xs text-muted-foreground border-t border-border pt-6 space-y-2">
        <p>
          <strong>Disclaimer:</strong> This guide is based on community-verified strategies and official game data
          as of May 2026. Boss mechanics may change with future patches. We will update this guide after
          each major game update.
        </p>
        <p>
          <strong>Data Sources:</strong> Fextralife Wiki, Mobalytics, Bandai Namco official guides,
          and community testing by veteran players with 100+ Heolstor kills.
        </p>
      </div>
    </article>
  );
}
