import { motion } from "framer-motion";
import {
  Code2,
  Trophy,
  Boxes,
  GitBranch,
  UsersRound,
  Cpu,
  ArrowUpRight,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const cultureItems = [
  {
    id: 1,
    title: "Open Source Engineering",
    subtitle: "CORE FOCUS",
    description:
      "Building software in the open with industrial Git workflows.",
    details:
      "We contribute to production-ready open-source repositories, manage pull requests, organize code reviews, and build real-world software tools for developers.",
    icon: Code2,
    color: "cyan",
    position: "top",
  },
  {
    id: 2,
    title: "Hackathons & Innovation Sprints",
    subtitle: "NATIONAL STAGE",
    description:
      "Solving real problem statements in 24 to 48-hour marathons.",
    details:
      "From Smart India Hackathon to Microsoft TechSys, our students pitch lab prototypes, build AI & hardware solutions, and secure accolades.",
    icon: Trophy,
    color: "amber",
    position: "left-top",
  },
  {
    id: 3,
    title: "End-to-End Product Design",
    subtitle: "STUDENT BUILDS",
    description:
      "Translating concepts into deployed web & mobile products.",
    details:
      "Members build AI copywriters, live collaboration workspaces, campus navigation hubs, and web IDE tools.",
    icon: Boxes,
    color: "emerald",
    position: "right-top",
  },
  {
    id: 4,
    title: "GSoC & Global Mentorship",
    subtitle: "GLOBAL MENTORSHIP",
    description:
      "Structured roadmaps to crack international open-source programs.",
    details:
      "Preparation sessions break down organization triage, community bonding, IRC/Discord etiquette, and high-scoring proposal writing.",
    icon: GitBranch,
    color: "violet",
    position: "left-bottom",
  },
  {
    id: 5,
    title: "Building Together",
    subtitle: "COMMUNITY",
    description:
      "A student-driven environment where ideas turn into action.",
    details:
      "We create an environment where students learn from each other, collaborate on ambitious ideas, experiment with emerging technologies, and grow through real engineering experiences.",
    icon: UsersRound,
    color: "rose",
    position: "bottom",
  },
  {
    id: 6,
    title: "Workshops & Tech Sessions",
    subtitle: "HANDS-ON LABS",
    description:
      "Peer-led hardware, drone, and full-stack technical bootcamps.",
    details:
      "Practical bootcamps on Git version control, LinkedIn branding, quadcopter hardware assembly, and cloud deployment pipelines.",
    icon: Cpu,
    color: "blue",
    position: "right-bottom",
  },
];

const colorMap = {
  cyan: {
    text: "text-cyan-300",
    lightText: "text-cyan-700",
    border: "border-cyan-400/30",
    icon: "border-cyan-400/20 bg-cyan-400/5 text-cyan-300",
    lightIcon: "border-cyan-700/20 bg-cyan-500/10 text-cyan-700",
    line: "bg-cyan-400/30",
    glow: "rgba(34,211,238,.16)",
  },
  amber: {
    text: "text-amber-300",
    lightText: "text-amber-700",
    border: "border-amber-400/30",
    icon: "border-amber-400/20 bg-amber-400/5 text-amber-300",
    lightIcon: "border-amber-700/20 bg-amber-500/10 text-amber-700",
    line: "bg-amber-400/25",
    glow: "rgba(251,191,36,.14)",
  },
  emerald: {
    text: "text-emerald-300",
    lightText: "text-emerald-700",
    border: "border-emerald-400/30",
    icon: "border-emerald-400/20 bg-emerald-400/5 text-emerald-300",
    lightIcon: "border-emerald-700/20 bg-emerald-500/10 text-emerald-700",
    line: "bg-emerald-400/25",
    glow: "rgba(52,211,153,.14)",
  },
  violet: {
    text: "text-violet-300",
    lightText: "text-violet-700",
    border: "border-violet-400/30",
    icon: "border-violet-400/20 bg-violet-400/5 text-violet-300",
    lightIcon: "border-violet-700/20 bg-violet-500/10 text-violet-700",
    line: "bg-violet-400/25",
    glow: "rgba(167,139,250,.14)",
  },
  rose: {
    text: "text-rose-300",
    lightText: "text-rose-700",
    border: "border-rose-400/30",
    icon: "border-rose-400/20 bg-rose-400/5 text-rose-300",
    lightIcon: "border-rose-700/20 bg-rose-500/10 text-rose-700",
    line: "bg-rose-400/25",
    glow: "rgba(251,113,133,.14)",
  },
  blue: {
    text: "text-blue-300",
    lightText: "text-blue-700",
    border: "border-blue-400/30",
    icon: "border-blue-400/20 bg-blue-400/5 text-blue-300",
    lightIcon: "border-blue-700/20 bg-blue-500/10 text-blue-700",
    line: "bg-blue-400/25",
    glow: "rgba(96,165,250,.14)",
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function CultureCard({ item }) {
  const Icon = item.icon;
  const theme = colorMap[item.color];
  const { isDark } = useTheme();

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{
        y: -7,
        scale: 1.025,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={`
        group
        relative
        w-full
        rounded-2xl
        border
        ${isDark ? "border-white/10 bg-[#07101d]/90" : "border-slate-200 bg-white/90"}
        p-5
        ${isDark ? "shadow-[0_18px_50px_rgba(0,0,0,.32)]" : "shadow-[0_12px_30px_rgba(15,23,42,.08)]"}
        backdrop-blur-xl
        transition-colors
        duration-500
        ${isDark ? "hover:border-white/20" : "hover:border-slate-300"}
      `}
      style={{
        "--card-glow": theme.glow,
      }}
    >
      {/* Hover glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-2xl
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
        style={{
          background:
            "radial-gradient(circle at 50% 0%, var(--card-glow), transparent 65%)",
        }}
      />

      {/* Top accent line */}
      <div
        className={`
          absolute
          left-5
          right-5
          top-0
          h-px
          opacity-60
          ${theme.line}
        `}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div
            className={`
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              ${isDark ? theme.icon : theme.lightIcon}
              transition-transform
              duration-500
              group-hover:scale-110
              group-hover:rotate-3
            `}
          >
            <Icon size={18} />
          </div>

          <span
            className={`
              rounded-full
              border
              ${theme.border}
              ${isDark ? "bg-white/[0.025]" : "bg-slate-100/80"}
              px-3
              py-1
              font-mono
              text-[10px]
              font-bold
              uppercase
              tracking-[0.08em]
              ${isDark ? theme.text : theme.lightText}
            `}
          >
            {item.subtitle}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`
            mt-4
            text-[17px]
            font-extrabold
            leading-snug
            tracking-tight
            ${isDark ? "text-white" : "text-slate-900"}
            transition-colors
            duration-300
            ${isDark ? "group-hover:text-white" : "group-hover:text-slate-950"}
          `}
        >
          {item.title}
        </h3>

        {/* Sub-description */}
        <p
          className={`
            mt-1.5
            font-mono
            text-[11px]
            font-medium
            leading-relaxed
            ${isDark ? theme.text : theme.lightText}
          `}
        >
          {item.description}
        </p>

        {/* Details paragraph */}
        <p
          className={`
            mt-3
            text-[13px]
            leading-[1.6]
            ${isDark ? "text-white/75" : "text-slate-600"}
          `}
        >
          {item.details}
        </p>

        {/* Card Footer */}
        <div
          className={`
            mt-5
            flex
            items-center
            justify-between
            border-t
            ${isDark ? "border-white/[0.07]" : "border-slate-200"}
            pt-3
          `}
        >
          <span className={`font-mono text-[10px] uppercase tracking-[0.18em] ${isDark ? "text-white/40" : "text-slate-400"}`}>
            OSCode CIT
          </span>

          <ArrowUpRight
            size={15}
            className={`
              ${isDark ? "text-white/40" : "text-slate-400"}
              transition-all
              duration-300
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
              ${isDark ? "group-hover:text-white/80" : "group-hover:text-slate-700"}
            `}
          />
        </div>
      </div>
    </motion.article>
  );
}

function ConnectionLine({ className = "", style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1 }}
      className={`
        pointer-events-none
        absolute
        hidden
        lg:block
        ${className}
      `}
      style={style}
    >
      <motion.div
        animate={{
          opacity: [0.25, 0.7, 0.25],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="h-full w-full bg-gradient-to-r from-cyan-400/0 via-cyan-300/30 to-cyan-400/0"
      />
    </motion.div>
  );
}

export default function EngineeringCulture() {
  const { isDark } = useTheme();

  return (
    <section
      id="engineering-culture"
      className={`
        relative
        isolate
        overflow-hidden
        ${isDark ? "bg-[#020305]" : "bg-slate-50"}
        py-24
        sm:py-28
        lg:py-32
      `}
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className={`absolute inset-0 ${isDark ? "bg-[#020305]" : "bg-slate-50"}`} />

        <div
          className="
            absolute
            left-[5%]
            top-[30%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-cyan-500/[0.035]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            right-[4%]
            top-[20%]
            h-[480px]
            w-[480px]
            rounded-full
            bg-blue-500/[0.025]
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-[400px]
            w-[600px]
            -translate-x-1/2
            rounded-full
            bg-violet-500/[0.018]
            blur-[150px]
          "
        />

        <div
          className={`
            absolute
            inset-0
            opacity-[0.045]
            ${isDark ? "[background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)]" : "[background-image:linear-gradient(rgba(15,23,42,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.08)_1px,transparent_1px)]"}
            [background-size:70px_70px]
          `}
        />

        <div
          className={`
            absolute
            inset-0
            ${isDark ? "bg-[radial-gradient(circle_at_center,transparent_20%,#020305_85%)]" : "bg-[radial-gradient(circle_at_center,transparent_20%,#f8fafc_85%)]"}
          `}
        />
      </div>

      {/* HEADER */}
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className={`
            inline-flex
            rounded-full
            border
            border-cyan-400/40
            bg-cyan-400/5
            px-4
            py-1.5
            font-mono
            text-[11px]
            font-bold
            uppercase
            tracking-[0.22em]
            ${isDark ? "text-cyan-300" : "text-cyan-700"}
          `}
        >
          WHAT WE DO & BUILD
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`
            mx-auto
            mt-6
            max-w-3xl
            text-3xl
            font-black
            leading-tight
            tracking-tight
            ${isDark ? "text-white" : "text-slate-900"}
            sm:text-4xl
            lg:text-5xl
          `}
        >
          Fostering Practical Engineering
          <br />
          <span className={isDark ? "text-white/95" : "text-slate-800"}>
            Culture
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`
            mx-auto
            mt-5
            max-w-2xl
            text-base
            leading-7
            ${isDark ? "text-white/65" : "text-slate-600"}
            sm:text-lg
          `}
        >
          OSCode CIT bridges academic learning with real-world developer
          practices through hands-on open source, hackathons, and technical
          mentorship.
        </motion.p>
      </div>

      {/* RADIAL SYSTEM */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className={`
          relative
          mx-auto
          mt-20
          min-h-[920px]
          max-w-7xl
          px-5
          sm:px-8
        `}
      >
        {/* CONNECTORS */}
        <ConnectionLine className="left-1/2 top-[180px] h-[170px] w-px" />
        <ConnectionLine className="left-[23%] top-[450px] h-px w-[27%]" />
        <ConnectionLine className="right-[23%] top-[450px] h-px w-[27%]" />
        <ConnectionLine className="left-1/2 top-[530px] h-[170px] w-px" />

        {/* CENTER NODE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, type: "spring", stiffness: 100 }}
          className="
            absolute
            left-1/2
            top-[450px]
            z-30
            hidden
            -translate-x-1/2
            -translate-y-1/2
            lg:block
          "
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className={`
              absolute
              -inset-12
              rounded-full
              border
              border-dashed
              border-cyan-400/25
            `}
          />

          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className={`
              absolute
              -inset-6
              rounded-full
              border
              border-cyan-400/20
            `}
          />

          <div
          className={`
              relative
              flex
              h-32
              w-32
              flex-col
              items-center
              justify-center
              rounded-full
              border
              border-cyan-400/30
              ${isDark ? "bg-[#07101b]" : "bg-white"}
              shadow-[0_0_55px_rgba(34,211,238,.10)]
          `}
          >
            <Code2 size={30} className="text-cyan-300" />
            <span className={`mt-1 text-base font-black ${isDark ? "text-white" : "text-slate-900"}`}>OSCode</span>
            <span className={`mt-0.5 font-mono text-[7.5px] uppercase tracking-[0.2em] ${isDark ? "text-cyan-300/70" : "text-cyan-700/80"}`}>
              CIT BANGALORE
            </span>
          </div>
        </motion.div>

        {/* DESKTOP CARDS */}
        {/* Top Center */}
        <div className="absolute left-1/2 top-0 hidden w-[340px] -translate-x-1/2 lg:block">
          <CultureCard item={cultureItems[0]} />
        </div>

        {/* Left Top */}
        <div className="absolute left-[2%] top-[150px] hidden w-[330px] lg:block xl:left-[4%]">
          <CultureCard item={cultureItems[1]} />
        </div>

        {/* Right Top */}
        <div className="absolute right-[2%] top-[150px] hidden w-[330px] lg:block xl:right-[4%]">
          <CultureCard item={cultureItems[2]} />
        </div>

        {/* Left Bottom */}
        <div className="absolute left-[2%] top-[480px] hidden w-[330px] lg:block xl:left-[4%]">
          <CultureCard item={cultureItems[3]} />
        </div>

        {/* Bottom Center */}
        <div className="absolute left-1/2 top-[620px] hidden w-[340px] -translate-x-1/2 lg:block">
          <CultureCard item={cultureItems[4]} />
        </div>

        {/* Right Bottom */}
        <div className="absolute right-[2%] top-[480px] hidden w-[330px] lg:block xl:right-[4%]">
          <CultureCard item={cultureItems[5]} />
        </div>

        {/* MOBILE / TABLET */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:hidden">
          {cultureItems.map((item) => (
            <CultureCard key={item.id} item={item} />
          ))}
        </div>
      </motion.div>

      <div className={`pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${isDark ? "from-black" : "from-slate-50"} to-transparent`} />
    </section>
  );
}
