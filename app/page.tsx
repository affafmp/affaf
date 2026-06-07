"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      color: "#eaeaea",
      fontFamily: "sans-serif",
      position: "relative",
      overflow: "hidden",
      background: "radial-gradient(circle at top, #111 0%, #000 100%)"
    }}>

      {/* Background Grid / Circuit Style */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        opacity: 0.2,
        zIndex: 0
      }} />

      {/* Floating Glows */}
      <div style={{
        position: "absolute",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(255,59,59,0.3), transparent 70%)",
        top: "10%",
        left: "10%",
        filter: "blur(60px)"
      }} />

      <div style={{
        position: "absolute",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(255,208,0,0.2), transparent 70%)",
        bottom: "10%",
        right: "10%",
        filter: "blur(80px)"
      }} />

      {/* NAVBAR */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 40px",
        position: "relative",
        zIndex: 2,
        borderBottom: "1px solid rgba(255,255,255,0.1)"
      }}>
        <div style={{ color: "#ff3b3b", fontWeight: "bold", letterSpacing: "2px" }}>
          AFFAF
        </div>

        <div style={{ display: "flex", gap: "20px", fontSize: "14px" }}>
          <span style={{ cursor: "pointer" }}>Dashboard</span>
          <span style={{ cursor: "pointer" }}>Projects</span>
          <span style={{ cursor: "pointer" }}>Skills</span>
          <span style={{ cursor: "pointer" }}>Contact</span>

          <a href="https://github.com/affafmp" target="_blank" style={{ color: "#ffd000" }}>
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/abolfazl-moemenpour-a53174283/" target="_blank" style={{ color: "#4da3ff" }}>
            LinkedIn
          </a>
        </div>
      </div>

      {/* HERO DASHBOARD */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        position: "relative",
        zIndex: 2
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            padding: "50px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(20px)",
            textAlign: "center",
            maxWidth: "700px"
          }}
        >
          <h1 style={{
            fontSize: "64px",
            margin: 0,
            color: "#ff3b3b",
            letterSpacing: "4px"
          }}>
            AFFAF
          </h1>

          <p style={{ fontSize: "18px", color: "#ffd000", marginTop: "10px" }}>
            Private Engineering Dashboard
          </p>

          <p style={{ opacity: 0.7, marginTop: "10px" }}>
            Electrical Engineering • Embedded Systems • AI • Software Development
          </p>

          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginTop: "25px"
          }}>
            <button style={{
              padding: "10px 20px",
              background: "#ff3b3b",
              border: "none",
              borderRadius: "10px",
              color: "white",
              cursor: "pointer"
            }}>
              View Projects
            </button>

            <button style={{
              padding: "10px 20px",
              background: "transparent",
              border: "1px solid #ffd000",
              borderRadius: "10px",
              color: "#ffd000",
              cursor: "pointer"
            }}>
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>

      {/* CARDS SECTION */}
      <div style={{
        position: "relative",
        zIndex: 2,
        padding: "60px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ color: "#ff3b3b" }}>Core Systems</h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "30px"
        }}>

          {[
            { title: "Embedded Systems", desc: "Microcontrollers & Hardware" },
            { title: "AI Systems", desc: "Machine Learning Projects" },
            { title: "Circuit Design", desc: "Proteus & Simulation" }
          ].map((item, i) => (
            <div key={i} style={{
              width: "250px",
              padding: "20px",
              borderRadius: "15px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)"
            }}>
              <h3 style={{ color: "#ffd000" }}>{item.title}</h3>
              <p style={{ opacity: 0.6 }}>{item.desc}</p>
            </div>
          ))}

        </div>
      </div>

    </main>
  );
}