"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!glowRef.current) return;

      glowRef.current.style.left = e.clientX + "px";
      glowRef.current.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="page">

      <div ref={glowRef} className="glow" />

      <section className="hero">
        <h1 className="glassTitle">AFFAF</h1>

        <p className="bio">
          Embedded Systems • Electronics • AI • Microcontrollers
        </p>

        <p className="scroll">Scroll Down ↓</p>
      </section>

      <section className="flow">

        <MagneticLink href="/dashboard">Dashboard</MagneticLink>
        <Arrow />

        <MagneticLink href="/projects">Projects</MagneticLink>
        <Arrow />

        <MagneticLink href="/skills">Skills</MagneticLink>
        <Arrow />

        <MagneticLink href="/contact">Contact</MagneticLink>
        <Arrow />

        <Social href="https://github.com" color="#bdbdbd">
          GitHub
        </Social>

        <Arrow />

        <Social href="https://linkedin.com" color="#0A66C2">
          LinkedIn
        </Social>

      </section>
      
    </div>
  );
}

/* ================= MAGNETIC COMPONENT ================= */

function MagneticLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const move = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <Link
      href={href}
      ref={ref}
      className="flowItem"
      onMouseMove={move}
      onMouseLeave={reset}
    >
      {children}
    </Link>
  );
}

function Social({
  href,
  color,
  children,
}: {
  href: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="flowItem"
      style={{ color }}
      target="_blank"
    >
      {children}
    </a>
  );
}

function Arrow() {
  return <span className="arrow">➜</span>;
}