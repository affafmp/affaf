import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        fontFamily: "Inter, sans-serif",
        background: "radial-gradient(circle at top, #111, #000)",
        color: "white"
      }}>

        {/* TOP NAV (SaaS STYLE) */}
        <header style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 40px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(10px)",
          position: "sticky",
          top: 0,
          background: "rgba(0,0,0,0.6)",
          zIndex: 1000
        }}>

          <div style={{
            fontWeight: "bold",
            letterSpacing: "2px",
            color: "#ff3b3b"
          }}>
            AFFAF
          </div>

          <nav style={{
            display: "flex",
            gap: "25px",
            fontSize: "14px"
          }}>
            <Link href="/" style={linkStyle}>Home</Link>
            <Link href="/dashboard" style={linkStyle}>Dashboard</Link>
            <Link href="/projects" style={linkStyle}>Projects</Link>
            <Link href="/skills" style={linkStyle}>Skills</Link>
            <Link href="/contact" style={linkStyle}>Contact</Link>
          </nav>

        </header>

        <main>
          {children}
        </main>

      </body>
    </html>
  );
}

const linkStyle = {
  color: "rgba(255,255,255,0.7)",
  textDecoration: "none",
  transition: "0.2s"
};