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
  title: "艾尔登法环：夜袭 Heolstor 夜王攻略 — 全阶段打法详解",
  description:
    "最详细的 Heolstor 夜王打法攻略：四阶段拆解、最佳队伍搭配、弱点一览、独狼攻略。2026年最新版。",
  keywords: [
    "Heolstor", "夜王", "艾尔登法环夜袭", "Boss攻略", "夜之面相",
    "怎么打Heolstor", "弱点", "最佳阵容", "单人攻略",
  ],
};

const tocItems = [
  { id: "tldr", label: "速览 — 核心要点" },
  { id: "unlock", label: "如何解锁夜之面相" },
  { id: "preparation", label: "战前准备清单" },
  { id: "weakness", label: "弱点与免疫一览" },
  { id: "phases", label: "四阶段逐步拆解" },
  { id: "team-comps", label: "最佳队伍搭配" },
  { id: "solo", label: "单人通关攻略" },
  { id: "rewards", label: "击杀奖励" },
  { id: "pro-tips", label: "老手经验分享" },
  { id: "faq", label: "常见问题" },
];

const faqItems = [
  {
    q: "打 Heolstor 需要几级？",
    a: "最低13级可以存活，推荐14级。低于13级时，Heolstor的大部分攻击会秒杀非坦克角色。",
  },
  {
    q: "能单人打过 Heolstor 吗？",
    a: "可以！推荐使用处刑者（弹反流）或鹰眼（安全远程输出）。Day 3前购买迂回恩典获得免死复活。单人模式多给约60%符文，更容易练到14级。",
  },
  {
    q: "出血对 Heolstor 有效吗？",
    a: "无效。Heolstor 完全免疫出血、冻伤和毒。请使用神圣伤害（主弱点）或腐败。",
  },
  {
    q: "需要先打几个夜王才能解锁？",
    a: "需要击败4个不同的夜王：三头王、玛丽丝（占卜者）、诺斯特（知觉虫）、雾中裂隙（卡利戈）。",
  },
  {
    q: "什么属性打 Heolstor 最强？",
    a: "神圣伤害最强（一阶段+35%，二阶段+20%）。火焰和雷电也有效（+20%）。腐败按Boss最大HP比例扣血，效果极好。",
  },
  {
    q: "打 Heolstor 大概需要多久？",
    a: "配置好的队伍14级约5-8分钟。单人约8-12分钟。首次尝试或装备不足可能需要15分钟以上。",
  },
  {
    q: "打赢 Heolstor 有什么奖励？",
    a: "夜之王者遗物、原始夜王符文、圣树圣杯（解锁所有角色3个黄色遗物槽位）、新皮肤、角色专属追忆动画。",
  },
  {
    q: "第四阶段的元素附魔每次都一样吗？",
    a: "不一样。第四阶段中 Heolstor 每损失约25%血量就会吸收一个随机夜王元素，每局都不同，需要随机应变。",
  },
];

export default function HeolstorGuideZhPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb + Language */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <Breadcrumb
          items={[
            { label: "攻略首页", href: "/" },
            { label: "Boss攻略", href: "/guides/bosses" },
            { label: "Heolstor 夜王" },
          ]}
        />
        <LanguageSwitch />
      </div>

      {/* Hero Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <span>最后更新：2026年5月9日</span>
          <span>·</span>
          <span>适用版本：首发版（2026年5月）</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          艾尔登法环：夜袭 — <span className="text-primary">Heolstor 夜王</span>完全攻略
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Heolstor 是艾尔登法环：夜袭中<strong className="text-foreground">最难的夜王</strong>，也是游戏的最终Boss。
          本攻略提供完整的<strong className="text-foreground">四阶段逐步拆解</strong>、最佳队伍搭配、最优装备选择和经过验证的单人通关策略，
          助你击败夜之起源，夺取<strong className="text-foreground">夜之王者</strong>遗物。
        </p>
      </header>

      {/* Hero Video */}
      <YouTubeEmbed
        videoId="gzvFg7U40nc"
        title="Heolstor 夜王完整Boss战攻略 — 艾尔登法环夜袭"
        caption="Heolstor 夜王完整战斗演示，包含全部4个阶段的攻击模式和闪避时机。"
      />

      {/* Quick Info */}
      <InfoBox
        items={[
          { label: "难度", value: "★★★★★" },
          { label: "推荐等级", value: "Lv.14" },
          { label: "主弱点", value: "神圣 (+35%)" },
          { label: "免疫", value: "出血 / 毒" },
        ]}
      />

      <TableOfContents items={tocItems} />

      {/* ===== TL;DR ===== */}
      <section id="tldr" className="mb-10">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">速览 — 核心要点</h2>
        <div className="bg-card border border-primary/30 rounded-xl p-5">
          <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
            <li>Day 3前练到<strong className="text-foreground">14级</strong>，装备<strong className="text-foreground">神圣属性</strong>武器。</li>
            <li>推荐阵容：<strong className="text-foreground">守卫者（坦克）+ 鹰眼（远程输出）+ 荒野人（近战输出）</strong>。</li>
            <li>一阶段很简单 — <strong className="text-foreground">不要用药瓶和大招</strong>，全部留着。</li>
            <li>二阶段：躲避空中猛砸 → 跑开延迟地面爆炸。</li>
            <li>三阶段：侧移躲弹幕，暗幕吟唱时立刻用大招打断。</li>
            <li>四阶段：同时关注Boss动作和脚下裂缝。用大招无敌帧扛终结猛砸。</li>
            <li>通关奖励：<strong className="text-foreground">夜之王者遗物</strong> + <strong className="text-foreground">圣树圣杯</strong>（全角色解锁3个黄色遗物槽）。</li>
          </ol>
        </div>
      </section>

      {/* ===== UNLOCK ===== */}
      <section id="unlock" className="mb-10">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">如何解锁夜之面相</h2>
        <p className="text-muted-foreground mb-4">
          你必须先击败<strong className="text-foreground">4个不同的夜王</strong>，才能开启夜之面相远征：
        </p>
        <UnlockFlow lang="zh" />
      </section>

      {/* ===== PREPARATION ===== */}
      <section id="preparation" className="mb-10">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">战前准备清单</h2>
        <p className="text-muted-foreground mb-2">
          逐项勾选，确保Day 3前全部完成。
        </p>
        <PrepChecklist
          lang="zh"
          items={[
            { label: "练到13级以上（推荐14级）", detail: "地图上金色玛莉卡教堂可增加药瓶次数。刷野外Boss获取快速符文。", priority: "critical" },
            { label: "装备神圣属性武器", detail: "神圣伤害一阶段+35%，二阶段+20%。找神圣属性原生武器或使用神圣松脂。", priority: "critical" },
            { label: "准备腐败作为副输出", detail: "腐败按Boss最大HP比例扣血（共斗33,642血量），效果极其显著。腐败壶或腐败咒语均可。", priority: "important" },
            { label: "药瓶次数拉满", detail: "地图上每个金色教堂增加一次药瓶。Day 1-2探索时优先跑教堂。", priority: "critical" },
            { label: "购买迂回恩典（仅限单人）", detail: "夜王战中提供一次免死复活+满血回复，单人必备。", priority: "important" },
            { label: "装备元素减伤Buff", detail: "四阶段随机附加元素，广谱减伤护符能减少意外伤害。", priority: "recommended" },
            { label: "镶嵌神圣增伤遗物", detail: "任何增加神圣输出的遗物都能显著加速战斗。", priority: "recommended" },
          ]}
        />
      </section>

      {/* ===== WEAKNESS ===== */}
      <section id="weakness" className="mb-10">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">弱点与免疫一览</h2>
        <WeaknessChart lang="zh" />
        <TipBox type="tip" title="输出策略">
          主输出用神圣武器打伤害+攒韧性槽。开局就上腐败——Heolstor血量极厚，腐败按百分比扣血，
          相当于白送一个队友的输出量。
        </TipBox>
      </section>

      {/* ===== PHASES ===== */}
      <section id="phases" className="mb-10">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">四阶段逐步拆解</h2>
        <p className="text-muted-foreground mb-6">
          Heolstor 拥有<strong className="text-foreground">两条血条</strong>，共四个明确阶段。
          以下是每个阶段的攻击模式和应对方法。
        </p>

        <PhaseTimeline lang="zh" />

        {/* Phase 1 */}
        <PhaseCard phase="一阶段" title="夜之形态 — 幽灵剑士" trigger="战斗开始 — 第一条血（100%→60%）" color="border-l-green-500">
          <p className="text-sm text-muted-foreground mb-3">
            开场阶段看似简单。Heolstor是缓慢的幽灵剑士，动作可预判。
            <strong className="text-foreground">这是资源保存阶段。</strong>
          </p>
          <YouTubeEmbed videoId="0O1R52BRC_I" title="Heolstor一阶段攻击模式与安全惩罚窗口" caption="一阶段实战演示：缓慢可预判——保存所有资源。" />
          <AttackTable attacks={[
            { name: "冲刺斩", description: "直线冲刺+水平斩击", dodge: "侧翻", danger: "Low" },
            { name: "跳扑连击", description: "连续3次左右横斩", dodge: "第3击后后翻", danger: "Medium" },
            { name: "蓄力突刺", description: "蓄力后刺入地面", dodge: "向前翻滚穿过", danger: "Medium" },
          ]} />
          <TipBox type="warning" title="铁律">
            一阶段绝对不要用药瓶和大招！后面的阶段你会急需它们。弹反和后翻足以零消耗通过此阶段。
          </TipBox>
        </PhaseCard>

        {/* Phase 2 */}
        <PhaseCard phase="二阶段" title="巨剑觉醒" trigger="第一条血降至约60%" color="border-l-yellow-500">
          <p className="text-sm text-muted-foreground mb-3">
            Heolstor拔出第二把武器，速度大幅提升。多段冲刺斩无预兆发动，是第一个真正的考验。
          </p>
          <AttackTable attacks={[
            { name: "空中猛砸", description: "飞起后剑砸地面", dodge: "跑开→躲延迟爆炸", danger: "High" },
            { name: "多段冲刺斩", description: "4连冲刺横穿场地", dodge: "持续侧跑，不要翻滚", danger: "High" },
            { name: "突刺+爆炸", description: "前刺→暗能量引爆", dodge: "前翻穿刺击→跑开爆炸范围", danger: "High" },
          ]} />
          <TipBox type="tip">
            虽然速度变快，但二阶段Heolstor的<strong>韧性很低</strong>。重击和蓄力R2可以打出硬直。
            队伍协调：一人打出硬直后，全员冲上去输出。
          </TipBox>
        </PhaseCard>

        {/* Phase 3 */}
        <PhaseCard phase="三阶段" title="月光大剑觉醒" trigger="第二条血条开始 — 完全魔化变身" color="border-l-purple-500">
          <p className="text-sm text-muted-foreground mb-3">
            真正的战斗从这里开始。Heolstor点燃月光大剑，获得魔法和暗属性攻击，连招末尾带AoE爆炸。
          </p>
          <AttackTable attacks={[
            { name: "连击+AoE", description: "3连近战收尾魔法爆炸", dodge: "前翻穿过前两击，跑开AoE", danger: "High" },
            { name: "拖剑→弹幕", description: "剑拖地后射出5+弹幕", dodge: "侧移或翻滚穿过", danger: "High" },
            { name: "暗幕吟唱", description: "吟唱黑暗，降下追踪弹幕", dodge: "用大招打断或绕圈跑", danger: "Lethal" },
            { name: "背刺瞬移", description: "瞬移到背后打3连", dodge: "锁定视角→瞬移信号时立刻翻滚", danger: "High" },
          ]} />
          <TipBox type="danger" title="关键打断">
            当Heolstor开始吟唱<strong>暗幕</strong>（黑气环绕+悬浮姿势）时，立刻用大招打断。
            大招的无敌帧保护你的同时，韧性伤害能打断吟唱。如果没人打断，弹幕雨几乎无法存活。
          </TipBox>
        </PhaseCard>

        {/* Phase 4 */}
        <PhaseCard phase="四阶段" title="元素灌注 — 大地裂变" trigger="第二条血降至约60%" color="border-l-red-500">
          <p className="text-sm text-muted-foreground mb-3">
            最终阶段。Heolstor吸收随机夜王元素，每次攻击都附带元素地面灾害。裂缝延迟爆炸。终极考验。
          </p>
          <YouTubeEmbed videoId="Ohuu_kVMeuY" title="Heolstor四阶段全攻击模式与闪避时机" caption="四阶段实战：地面裂缝+元素灌注+终结猛砸的完整应对。" />
          <AttackTable attacks={[
            { name: "夜之王者", description: "飞起→砸地→元素裂缝爆炸", dodge: "躲砸击→跑到安全地面", danger: "Lethal" },
            { name: "烈焰裂缝", description: "剑砍产生地面火焰轨迹", dodge: "垂直于斩击方向跑", danger: "Lethal" },
            { name: "裂天", description: "巨型方向性冲击波（冰/疯）", dodge: "横向移动，绝不前后移动", danger: "Lethal" },
            { name: "终结猛砸", description: "超高伤害overhead砸击", dodge: "大盾格挡或大招无敌帧", danger: "Lethal" },
          ]} />
          <TipBox type="warning" title="终结猛砸应对">
            终结猛砸几乎无法闪避——在剑落下的瞬间开大招吃无敌帧。守卫者可用大盾格挡，其他职业务必预留大招。
          </TipBox>
          <TipBox type="danger" title="生存要诀">
            四阶段你必须<strong>同时追踪两件事</strong>：(1) 上方Boss的攻击动作；(2) 脚下发光的裂缝。
            裂缝出现约1.5秒后爆炸。先站到干净地面，再关注闪避时机。
          </TipBox>
          <TipBox type="tip" title="DPS竞速">
            血量低于20%后全力输出。吃掉所有增益道具，用完剩余大招，腐败掉了就补上。
            四阶段拖得越久越危险——元素地面灾害会在场地中不断累积。
          </TipBox>
        </PhaseCard>
      </section>

      {/* ===== TEAM COMPS ===== */}
      <section id="team-comps" className="mb-10">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">最佳队伍搭配</h2>
        <div className="space-y-4">
          <TeamCompCard
            tag="推荐"
            tagColor="bg-green-500/20 text-green-400"
            title="稳妥阵容：守卫者 + 鹰眼 + 荒野人"
            members={[
              { icon: "🛡️", name: "守卫者", role: "坦克", color: "text-blue-400", skills: ["大盾格挡", "复活大招", "仇恨拉取"], reason: "扛住一切伤害，保持仇恨让输出安心打。" },
              { icon: "🏹", name: "鹰眼", role: "远程输出", color: "text-green-400", skills: ["绝杀射击", "掉落率被动", "远程复活"], reason: "空中阶段持续输出，远距离安全复活队友。" },
              { icon: "🗡️", name: "荒野人", role: "近战输出", color: "text-orange-400", skills: ["钩锁", "烈焰桩", "免死被动"], reason: "快速缩短距离，硬直输出窗口，免死被动容错高。" },
            ]}
            note="最佳综合阵容。守卫者扛伤，鹰眼远程消耗，荒野人硬直窗口爆发。"
          />
          <TeamCompCard
            tag="高风险高回报"
            tagColor="bg-red-500/20 text-red-400"
            title="爆发阵容：荒野人 + 鹰眼 + 女公爵"
            members={[
              { icon: "🗡️", name: "荒野人", role: "近战爆发", color: "text-orange-400", skills: ["钩锁", "烈焰桩"], reason: "快速接近并打出硬直窗口。" },
              { icon: "🏹", name: "鹰眼", role: "远程输出", color: "text-green-400", skills: ["绝杀射击", "鹰眼被动"], reason: "稳定远程输出，覆盖空中阶段。" },
              { icon: "👑", name: "女公爵", role: "连锁爆发", color: "text-purple-400", skills: ["汇流被动", "厌世咒", "恍惚"], reason: "连锁大招制造毁灭性输出窗口。" },
            ]}
            note="最大爆发伤害。无坦克——全员必须完美闪避。击杀速度最快。"
          />
          <TeamCompCard
            tag="新手友好"
            tagColor="bg-blue-500/20 text-blue-400"
            title="坦克阵容：守卫者 + 掠夺者 + 鹰眼"
            members={[
              { icon: "🛡️", name: "守卫者", role: "坦克", color: "text-blue-400", skills: ["大盾", "复活大招"], reason: "稳住战线，关键时刻复活队友。" },
              { icon: "⚔️", name: "掠夺者", role: "辅助输出", color: "text-yellow-400", skills: ["反击技能", "战斗增益"], reason: "反击提升全队伤害，操作简单。" },
              { icon: "🏹", name: "鹰眼", role: "远程输出", color: "text-green-400", skills: ["绝杀射击", "鹰眼被动"], reason: "安全稳定远程输出，可远距离复活。" },
            ]}
            note="容错率最高。守卫者+掠夺者前排吸收压力，非常适合首次通关。"
          />
        </div>
      </section>

      {/* ===== SOLO ===== */}
      <section id="solo" className="mb-10">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">单人通关攻略</h2>
        <YouTubeEmbed videoId="ubVtf-rgHAQ" title="Heolstor单人通关演示" />
        <TipBox type="info" title="单人加成">
          单人模式所有来源符文+60%，更容易练到14级。Boss血量也大幅降低：仅 4,984 + 11,214（而非共斗的14,952 + 33,642）。
        </TipBox>
        <h3 className="text-lg font-semibold mt-4 mb-3">最佳单人角色</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="font-semibold text-foreground mb-1">⚔️ 处刑者 — 单人首选</div>
            <p className="text-sm text-muted-foreground">优秀的弹反机制可以弹开Heolstor的连招。上限极高但回报极大。</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="font-semibold text-foreground mb-1">🏹 鹰眼 — 最安全选择</div>
            <p className="text-sm text-muted-foreground">远程玩法远离危险。绝杀大招无视一切防御。慢但非常安全。</p>
          </div>
        </div>
        <h3 className="text-lg font-semibold mt-4 mb-3">单人清单</h3>
        <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
          <li>Day 3前购买<strong className="text-foreground">迂回恩典</strong>——免死一次+满血复活。</li>
          <li>叠加武器被动：同时携带腐败+神圣武器（被动即使不拿也生效）。</li>
          <li>规划Day 1-2路线，最大化符文收益和药瓶次数。</li>
          <li>夜王战前用掉所有消耗品——战后全部清零。</li>
          <li>四阶段极度保守。没有迂回恩典时死一次就结束。</li>
        </ol>
      </section>

      {/* ===== REWARDS ===== */}
      <section id="rewards" className="mb-10">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">击杀奖励</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="px-3 py-2.5 text-left font-semibold border border-border">奖励</th>
                <th className="px-3 py-2.5 text-left font-semibold border border-border">类型</th>
                <th className="px-3 py-2.5 text-left font-semibold border border-border">效果</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/50"><td className="px-3 py-2 border border-border font-medium text-foreground">夜之王者</td><td className="px-3 py-2 border border-border text-muted-foreground">遗物</td><td className="px-3 py-2 border border-border text-muted-foreground">蓝色容器槽位专属遗物</td></tr>
              <tr className="hover:bg-muted/50"><td className="px-3 py-2 border border-border font-medium text-foreground">原始夜王符文</td><td className="px-3 py-2 border border-border text-muted-foreground">货币</td><td className="px-3 py-2 border border-border text-muted-foreground">高价值符文奖励</td></tr>
              <tr className="hover:bg-muted/50"><td className="px-3 py-2 border border-border font-medium text-foreground">圣树圣杯</td><td className="px-3 py-2 border border-border text-muted-foreground">解锁</td><td className="px-3 py-2 border border-border text-muted-foreground">全角色可装备3个黄色遗物</td></tr>
              <tr className="hover:bg-muted/50"><td className="px-3 py-2 border border-border font-medium text-foreground">夜行者皮肤</td><td className="px-3 py-2 border border-border text-muted-foreground">外观</td><td className="px-3 py-2 border border-border text-muted-foreground">梳妆台解锁新皮肤</td></tr>
              <tr className="hover:bg-muted/50"><td className="px-3 py-2 border border-border font-medium text-foreground">追忆动画</td><td className="px-3 py-2 border border-border text-muted-foreground">剧情</td><td className="px-3 py-2 border border-border text-muted-foreground">角色专属结局（需完成追忆）</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== PRO TIPS ===== */}
      <section id="pro-tips" className="mb-10">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">老手经验分享</h2>
        <div className="space-y-3">
          {[
            { icon: "🎯", tip: "硬直窗口是最大的输出机会", detail: "大招可以打断Heolstor的长连招。硬直时全队有3-4秒自由输出时间。协调大招使用——不要叠放。" },
            { icon: "🔄", tip: "一阶段是模式学习期", detail: "一阶段的每个攻击在后面阶段都有加速版。在低风险时学会识别前摇，后面2倍速时就能认出来。" },
            { icon: "🧪", tip: "腐败相当于多一个队友输出", detail: "共斗模式33,642血量下，腐败的百分比扣血累积伤害极为可观。每条血条开头上一次，掉了就补。" },
            { icon: "🗺️", tip: "四阶段站场地边缘", detail: "地面裂缝主要出现在中心区域。站边缘能获得更多干净地面和更好的爆炸观察视角。" },
            { icon: "⏱️", tip: "击杀前吃银腌禽足", detail: "提升物品发现率以增加Heolstor掉落传说武器的概率。Boss低于10%血量时使用。" },
            { icon: "🛡️", tip: "守卫者大招救人优先", detail: "四阶段队友倒地时守卫者大招可以复活。专门为此保留——作为保险比作为伤害更有价值。" },
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

      {/* ===== FAQ ===== */}
      <FAQSection items={faqItems} title="常见问题" />

      {/* ===== INTERNAL LINKS ===== */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">相关攻略</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/guides/bosses", icon: "👹", title: "全部Boss攻略", desc: "每个夜王的打法策略" },
            { href: "/guides/builds", icon: "⚔️", title: "最佳Build搭配", desc: "每个夜行者的最优Build" },
            { href: "/guides/items", icon: "🛡️", title: "传说武器获取指南", desc: "如何获取和升级最强装备" },
            { href: "/guides/beginner", icon: "📖", title: "新手入门指南", desc: "刚入坑夜袭？从这里开始" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/30 hover:bg-card-hover transition-all">
              <span className="text-2xl">{link.icon}</span>
              <div>
                <div className="font-semibold text-foreground text-sm">{link.title}</div>
                <div className="text-xs text-muted-foreground">{link.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <div className="text-xs text-muted-foreground border-t border-border pt-6 space-y-2">
        <p>
          <strong>免责声明：</strong>本攻略基于社区验证策略和官方游戏数据（截至2026年5月）。
          Boss机制可能随版本更新变化，我们会在每次重大更新后修订本文。
        </p>
        <p>
          <strong>数据来源：</strong>Fextralife Wiki、Mobalytics、万代南梦宫官方指南、
          以及100次以上击杀经验的资深玩家社区测试。
        </p>
      </div>
    </article>
  );
}
