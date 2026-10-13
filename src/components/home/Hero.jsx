import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Terminal,
  ArrowRight,
  Sparkles,
  CalendarDays,
  Users,
  FolderGit2,
} from "lucide-react";

import EventShuffleCarousel from "./EventShuffleCarousel";

import { departments } from "../../data/teamData.ts";
import event from "../../data/events";
import { projects } from "../../data/projects";
import { useTheme } from "../../context/ThemeContext";

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={`relative min-h-[92vh] overflow-hidden pt-28 pb-16 transition-colors duration-500 ${isDark ? "bg-[#050505]" : "bg-linear-to-b from-white via-slate-50 to-slate-100"}`}>
      {/* =========================================================
          VIDEO BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-fill
            object-center
          "
        >
          <source src="/videos/hero-background.MP4" type="video/mp4" />
        </video>

        {/* Dark readability layer */}
        <div className="absolute inset-0 bg-black/0" />

        {/* Cinematic layer */}
        <div
          className={`
            absolute
            inset-0
            transition-opacity
            duration-500
            ${
              isDark
                ? "bg-linear-to-r from-black/80 via-[#120606]/55 to-[#180505]/55"
                : "bg-linear-to-r from-black/50 via-blue/85 to-black/50"
            }
          `}
        />

        {/* Dot grid */}
        <div className={`absolute inset-0 bg-dot-grid transition-opacity ${isDark ? "opacity-[0.13]" : "opacity-[0.25]"}`} />

        {/* Bottom fade */}
        <div
          className={`
            absolute
            inset-x-0
            bottom-0
            h-52
            bg-gradient-to-t
            transition-colors
            duration-500
            ${
              isDark
                ? "from-[#020617] via-[#020617]/70 to-transparent"
                : "from-[#f8fafc] via-[#f8fafc]/80 to-transparent"
            }
          `}
        />
      </div>

      {/* =========================================================
          AMBIENT GLOW
      ========================================================= */}
      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, -20, 0],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[15%]
          top-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-red-500/10
          blur-[130px]
        "
      />

      <motion.div
        animate={{
          x: [0, -35, 0],
          y: [0, 25, 0],
          opacity: [0.06, 0.15, 0.06],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          right-[5%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-red-700/10
          blur-[140px]
        "
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12 xl:gap-8">
          {/* =====================================================
              LEFT SIDE
          ===================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: -45,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative z-20 lg:col-span-6"
          >
            {/* =================================================
                BADGE
            ================================================= */}
            <motion.div
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              className={`
                group
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                ${isDark ? "border-red-400/35 bg-red-400/[0.08] text-red-200" : "border-red-500/35 bg-red-500/[0.08] text-red-600"}
                px-4
                py-2
                font-mono
                text-[11px]
                font-bold
                tracking-wider
                backdrop-blur-xl
                shadow-[0_0_25px_rgba(239,68,68,0.10)]
                transition-all
                duration-300
                hover:border-red-400
              `}
            >
              <Terminal
                size={14}
                className="
                  text-red-400
                  transition-transform
                  duration-300
                  group-hover:rotate-12
                "
              />

              <span>OSCODE CIT CHAPTER</span>

              <span className="text-red-500">•</span>

              <span>2026</span>

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-red-500
                  shadow-[0_0_10px_rgba(239,68,68,0.9)]
                  animate-pulse
                "
              />
            </motion.div>

            {/* =================================================
                HEADING
            ================================================= */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.8,
              }}
              className="
                text-5xl
                font-black
                leading-[0.98]
                tracking-[-0.045em]
                sm:text-6xl
                lg:text-[4.15rem]
                xl:text-[4.6rem]
              "
            >
              <span className={`block transition-colors duration-300 text-white`}>
                Open Source.
              </span>

              <span className={`block transition-colors duration-300 text-white`}>
                Real Engineering.
              </span>

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-red-500
                  via-rose-500
                  to-red-600
                  bg-clip-text
                  text-transparent
                "
              >
                Zero Boundaries.
              </span>
            </motion.h1>

            {/* =================================================
                DESCRIPTION
            ================================================= */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.7,
              }}
              className={`
                mt-6
                max-w-xl
                text-[17px]
                leading-relaxed
                sm:text-[18px]
                transition-colors
                duration-300
                ${isDark ? "text-white/70" : "text-white"}
              `}
            >
              Build. Collaborate. Innovate.
              <span className={`font-semibold ${isDark ? "text-red-300" : "text-red-600"}`}>
                {" "}
                Turning ideas into impactful open-source projects.
              </span>
            </motion.p>

            {/* =================================================
                BUTTONS
            ================================================= */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.45,
                duration: 0.7,
              }}
              className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-3
              "
            >
              {/* Projects */}
              <Link
                to="/projects"
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  gap-2
                  overflow-hidden
                  rounded-xl
                  bg-gradient-to-r
                  from-red-400
                  via-red-500
                  to-red-600
                  px-6
                  py-3.5
                  text-sm
                  font-black
                  text-white
                  shadow-lg
                  shadow-red-500/25
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:scale-[1.03]
                  hover:shadow-[0_15px_35px_rgba(239,68,68,0.35)]
                  active:scale-95
                "
              >
                <span
                  className="
                    absolute
                    inset-y-0
                    -left-[100%]
                    w-[65%]
                    skew-x-[-20deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/40
                    to-transparent
                    transition-all
                    duration-700
                    group-hover:left-[130%]
                  "
                />

                <FolderGit2 size={17} className="relative" />

                <span className="relative">Explore Projects</span>

                <ArrowRight
                  size={17}
                  className="
                    relative
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              {/* Team */}
              <Link
                to="/team"
                className={`
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  active:scale-95
                  ${
                    isDark
                      ? "border-red-400/30 bg-white/[0.05] text-red-200 hover:border-red-300/70 hover:bg-red-500/10 hover:shadow-[0_15px_30px_rgba(239,68,68,0.15)]"
                      : "border-red-500/30 bg-white text-red-600 shadow-sm hover:border-red-500 hover:bg-red-50 hover:shadow-[0_8px_20px_rgba(239,68,68,0.12)]"
                  }
                `}
              >
                <Sparkles
                  size={17}
                  className="
                    transition-transform
                    duration-500
                    group-hover:rotate-180
                  "
                />

                <span>Meet Team</span>
              </Link>

              {/* Events */}
              <Link
                to="/events"
                className={`
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  px-5
                  py-3.5
                  text-sm
                  font-bold
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  active:scale-95
                  ${
                    isDark
                      ? "border-white/15 bg-white/[0.04] text-white/70 hover:border-red-400/50 hover:bg-red-500/10 hover:text-white"
                      : "border-slate-300 bg-white text-slate-700 shadow-sm hover:border-red-400 hover:text-red-600 hover:bg-red-50/50"
                  }
                `}
              >
                <CalendarDays size={16} />

                <span>View Events</span>
              </Link>
            </motion.div>

            {/* =================================================
                STATS
            ================================================= */}
            <div
              className="
                mt-10
                grid
                max-w-xl
                grid-cols-3
                gap-3
              "
            >
              {/* EVENTS HOSTED */}
              <motion.div
                whileHover={{
                  y: -7,
                  scale: 1.025,
                }}
                className={`
                  group
                  rounded-2xl
                  border
                  p-4
                  transition-all
                  duration-300
                  ${
                    isDark
                      ? "border-red-400/20 bg-transparent hover:border-red-400/55 hover:shadow-[0_15px_35px_rgba(34,211,238,0.12)]"
                      : "border-slate-200 bg-white/80 backdrop-blur-md shadow-sm hover:border-red-400/50 hover:shadow-md"
                  }
                `}
              >
                <CalendarDays
                  size={17}
                  className={`
                    mb-3
                    transition-transform
                    duration-300
                    group-hover:scale-110
                    ${isDark ? "text-red-300" : "text-red-500"}
                  `}
                />

                <div
                  className={`
                    font-mono
                    text-2xl
                    font-black
                    ${
                      isDark
                        ? "bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent"
                        : "text-slate-900"
                    }
                  `}
                >
                  {event.length - 1}+
                </div>

                <div className={`mt-1 text-xs ${isDark ? "text-slate-400" : "text-slate-500 font-medium"}`}>
                  Events Hosted
                </div>
              </motion.div>

              {/* CLUB MEMBERS */}
              <motion.div
                whileHover={{
                  y: -7,
                  scale: 1.025,
                }}
                className={`
                  group
                  rounded-2xl
                  border
                  p-4
                  transition-all
                  duration-300
                  ${
                    isDark
                      ? "border-red-400/20 bg-transparent hover:border-red-400/55 hover:shadow-[0_15px_35px_rgba(239,68,68,0.12)]"
                      : "border-slate-200 bg-white/80 backdrop-blur-md shadow-sm hover:border-red-400/50 hover:shadow-md"
                  }
                `}
              >
                <Users
                  size={17}
                  className={`
                    mb-3
                    transition-transform
                    duration-300
                    group-hover:scale-110
                    ${isDark ? "text-red-300" : "text-red-500"}
                  `}
                />

                <div
                  className={`
                    font-mono
                    text-2xl
                    font-black
                    ${isDark ? "text-white" : "text-slate-900"}
                  `}
                >
                  {departments.reduce((total, department)=> total+=department.members.length,0)}+
                </div>

                <div className={`mt-1 text-xs ${isDark ? "text-slate-400" : "text-slate-500 font-medium"}`}>
                  Club Members
                </div>
              </motion.div>

              {/* MAJOR PROJECTS */}
              <motion.div
                whileHover={{
                  y: -7,
                  scale: 1.025,
                }}
                className={`
                  group
                  rounded-2xl
                  border
                  p-4
                  transition-all
                  duration-300
                  ${
                    isDark
                      ? "border-red-400/20 bg-transparent hover:border-red-400/55 hover:shadow-[0_15px_35px_rgba(239,68,68,0.12)]"
                      : "border-slate-200 bg-white/80 backdrop-blur-md shadow-sm hover:border-red-400/50 hover:shadow-md"
                  }
                `}
              >
                <FolderGit2
                  size={17}
                  className={`
                    mb-3
                    transition-transform
                    duration-300
                    group-hover:scale-110
                    ${isDark ? "text-red-300" : "text-red-500"}
                  `}
                />

                <div
                  className={`
                    font-mono
                    text-2xl
                    font-black
                    ${isDark ? "text-white" : "text-slate-900"}
                  `}
                >
                  {projects.length - 1}+
                </div>

                <div className={`mt-1 text-xs ${isDark ? "text-slate-400" : "text-slate-500 font-medium"}`}>
                  Major Projects
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM LINE
      ========================================================= */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-red-400/60
          to-transparent
        "
      />
    </section>
  );
}

                            
                          
