"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        color: "#d1d1d1",
        fontFamily: "sans-serif",
        position: "relative",
        overflow: "hidden",
        background: "#000",
      }}
    >
      {/* BACKGROUND */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>

        {/* Circuit Pattern */}
        <svg width="100%" height="100%" style={{ position: "absolute", opacity: 0.12 }}>
          <defs>
            <pattern id="circuit" width="140" height="140" patternUnits="userSpaceOnUse">
              <path d="M10 10 H130 M10 10 V130 M130 10 V70 M70 130 H130"
                stroke="#ff3b3b" strokeWidth="1" fill="none"
              />
              <circle cx="10" cy="10" r="2.5" fill="#ffd000" />
              <circle cx="130" cy="10" r="2.5" fill="#ffd000" />
              <circle cx="10" cy="130" r="2.5" fill="#ffd000" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>

        {/* Hexagon Pattern */}
        <svg width="100%" height="100%" style={{ position: "absolute", opacity: 0.06 }}>
          <defs>
            <pattern id="hex" width="90" height="80" patternUnits="userSpaceOnUse">
              <polygon
                points="45,0 90,20 90,60 45,80 0,60 0,20"
                stroke="#ffffff"
                strokeWidth="1"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex)" />
        </svg>

        {/* Glow Orbs */}
        <div
          style={{
            position: "absolute",
            width: "420px",
            height: "420px",
            background: "radial-gradient(circle, rgba(255,0,60,0.25), transparent 60%)",
            top: "10%",
            left: "10%",
            filter: "blur(60px)",
            animation: "float1 10s ease-in-out infinite",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(255,215,0,0.12), transparent 60%)",
            bottom: "5%",
            right: "5%",
            filter: "blur(70px)",
            animation: "float2 12s ease-in-out infinite",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.85) 70%)",
          }}
        />
      </div>

      {/* CONTENT */}
      <div style={{ position: "relative", zIndex: 2 }}>

        {/* NAVBAR */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px 25px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <div
            style={{
              color: "#ff3b3b",
              fontWeight: "bold",
              letterSpacing: "2px",
              fontSize: "18px",
            }}
          >
            AFFAF
          </div>

          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <span
                key={item}
                style={{ cursor: "pointer", opacity: 0.7 }}
              >
                {item}
              </span>
            ))}

            <a
              href="https://github.com/affafmp"
              target="_blank"
              style={{ color: "#ffd000", textDecoration: "none" }}
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/abolfazl-moemenpour-a53174283/"
              target="_blank"
              style={{ color: "#ff3b3b", textDecoration: "none" }}
            >
              LinkedIn
            </a>
          </div>
        </div>
        {/* HERO */}
        <div
          style={{
            height: "85vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            style={{
              padding: "60px 25px",
              maxWidth: "90%",
              borderRadius: "30px",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(25px)",
              border: "1px solid rgba(255,255,255,0.12)",
              textAlign: "center",
              boxShadow: "0 0 120px rgba(255,0,60,0.18)",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(40px, 10vw, 72px)",
                color: "#ff3b3b",
                margin: 0,
              }}
            >
              AFFAF
            </h1>

            <p style={{ fontSize: "18px", color: "#ffd000" }}>
              Electrical Engineer • Developer • Future Tech
            </p>

            <p style={{ opacity: 0.7 }}>
              Building intelligent systems with code & electronics ⚡
            </p>
          </motion.div>
        </div>

        {/* PROJECTS */}
        <div style={{ padding: "60px 20px", textAlign: "center" }}>
          <h2 style={{ color: "#ff3b3b", fontSize: "32px" }}>
            Projects
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "40px",
              flexWrap: "wrap",
            }}
          >
            {[
              { title: "Smart Electrical System", desc: "IoT + Embedded Systems" },
              { title: "AI Signal Analyzer", desc: "Machine Learning Project" },
              { title: "Proteus Circuit Design", desc: "Electrical Simulation" },
            ].map((p) => (
              <div
                key={p.title}
                style={{
                  width: "100%",
                  maxWidth: "280px",
                  padding: "20px",
                  borderRadius: "15px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.08)";
                  e.currentTarget.style.boxShadow =
                    "0 0 35px rgba(255,0,60,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <p style={{ color: "#ffd000", fontWeight: "bold" }}>
                  {p.title}
                </p>
                <p style={{ opacity: 0.6, fontSize: "12px" }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes float1 {
          0% { transform: translate(0,0) scale(1); }
          50% { transform: translate(40px,-30px) scale(1.1); }
          100% { transform: translate(0,0) scale(1); }
        }

        @keyframes float2 {
          0% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-40px,30px) scale(1.15); }
          100% { transform: translate(0,0) scale(1); }
        }
      `}</style>
    </main>
  );
}