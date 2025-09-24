"use client";
import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer
      style={{
        background: "white",
        width: "100%",
        padding: 0,
        margin: 0,
        position: "fixed", // keeps footer stuck to bottom
        bottom: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          borderRadius: "32px 32px 0 0",
          background: "black",
          boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
          padding: "48px 48px 0 48px",
        }}
      >
        {/* Top Row: Logo + Navigation & Social Icons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 32,
          }}
        >
          {/* Left: E-CELL IARE Heading with Symbol */}
          <div style={{ display: "flex", alignItems: "center", marginRight: 40 }}>
            <span
              style={{
                display: "inline-flex",
                width: 32,
                height: 32,
                background: "#fff",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 10,
              }}
            >
              <img
                src="/mic_extras/bigstar.png"
                alt="E-CELL IARE Star"
                style={{ width: 22, height: 22 }}
              />
            </span>
            <h2
              style={{
                color: "#fff",
                fontSize: 22,
                fontWeight: 1000,
                margin: 0,
              }}
            >
              E-CELL IARE
            </h2>
          </div>

          {/* Navigation */}
          <nav style={{ display: "flex", gap: 32, fontSize: 18 }}>
            <a
              href="#"
              style={{
                color: "#fff",
                textDecoration: "underline",
                fontWeight: 700,
              }}
            >
              About us
            </a>
            <a
              href="#"
              style={{
                color: "#fff",
                textDecoration: "underline",
                fontWeight: 700,
              }}
            >
              Services
            </a>
            <a
              href="#"
              style={{
                color: "#fff",
                textDecoration: "underline",
                fontWeight: 700,
              }}
            >
              Use Cases
            </a>
            <a
              href="#"
              style={{
                color: "#fff",
                textDecoration: "underline",
                fontWeight: 700,
              }}
            >
              Pricing
            </a>
            <a
              href="#"
              style={{
                color: "#fff",
                textDecoration: "underline",
                fontWeight: 700,
              }}
            >
              Blog
            </a>
          </nav>

          {/* Social Icons */}
          <div style={{ display: "flex", gap: 16 }}>
            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              style={{
                background: "#fff",
                borderRadius: "50%",
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #23242A",
              }}
            >
              <svg width="18" height="18" fill="currentColor">
                <circle cx="9" cy="9" r="9" fill="#fff" />
                <path
                  d="M6.5 7.5h2v5h-2v-5zm1-1.5a1 1 0 110-2 1 1 0 010 2zm2.5 1.5h2v.7c.3-.4.9-.7 1.5-.7 1.1 0 2 .8 2 1.8v3.2h-2v-2.4c0-.5-.4-.8-1-.8s-1 .3-1 .8v2.4h-2v-5z"
                  fill="#23242A"
                />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              style={{
                background: "#fff",
                borderRadius: "50%",
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #23242A",
              }}
            >
              <svg width="18" height="18" fill="currentColor">
                <circle cx="9" cy="9" r="9" fill="#fff" />
                <path
                  d="M11.5 7.5h1.2V6h-1.2c-.9 0-1.6.7-1.6 1.6v.8H8v1.6h1.2v3.2h1.6v-3.2h1.6l.4-1.6h-2z"
                  fill="#23242A"
                />
              </svg>
            </a>
            {/* Twitter */}
            <a
              href="#"
              aria-label="Twitter"
              style={{
                background: "#fff",
                borderRadius: "50%",
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #23242A",
              }}
            >
              <svg width="18" height="18" fill="currentColor">
                <circle cx="9" cy="9" r="9" fill="#fff" />
                <path
                  d="M14.5 6.5c-.4.2-.8.3-1.2.4.4-.2.7-.6.8-1-.4.2-.8.4-1.2.5-.4-.4-1-.7-1.6-.7-1.2 0-2.1 1-2.1 2.1 0 .2 0 .4.1.6-1.7-.1-3.2-.9-4.2-2.1-.2.4-.3.7-.3 1.1 0 .7.4 1.3 1 1.6-.4 0-.7-.1-1-.3v.1c0 1 .7 1.8 1.6 2-.2.1-.5.1-.7.1-.2 0-.3 0-.5-.1.3.9 1.1 1.5 2.1 1.5-1 .8-2.2 1.2-3.5 1.2-.2 0-.4 0-.6-.1 1.2.8 2.6 1.3 4.1 1.3 4.9 0 7.6-4.1 7.6-7.6v-.3c.5-.4.8-.7 1.1-1.1z"
                  fill="#23242A"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Middle Row: Contact + Tagline */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 32,
            marginBottom: 32,
          }}
        >
          {/* Contact */}
          <div style={{ minWidth: 260 }}>
            <h3
              style={{
                background: "#A6FF6F",
                color: "#23242A",
                fontWeight: 900,
                fontSize: 19,
                padding: "6px 16px",
                borderRadius: 6,
                display: "inline-block",
                marginBottom: 14,
              }}
            >
              Contact us:
            </h3>
            <div
              style={{
                color: "#fff",
                fontSize: 17,
                fontWeight: 600,
                marginTop: 10,
                marginBottom: 10,
                lineHeight: 1.6,
              }}
            >
              <div>Email: ecell@iare.ac.in</div>
              <div>Phone: 555-567-8901</div>
              <br />
              <div>
                Address: Institute of Aeronautical Engineering
                <br />
                Dundigal, Hyderabad, Telangana 500043
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div
            style={{
              background: "black",
              borderRadius: 16,
              padding: "24px 32px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              minWidth: 300,
              boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
            }}
          >
            <h2
              style={{
                fontSize: 35,
                fontWeight: 800,
                color: "#A6FF6F",
                margin: 0,
                marginBottom: 8,
              }}
            >
              Ideate · Innovate · Incubate
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#fff",
                opacity: 0.9,
                margin: 0,
              }}
            >
              {/* Empowering ideas to become impactful ventures. */}
            </p>
          </div>
        </div>

        {/* Bottom */}
        <hr
          style={{
            border: "none",
            borderTop: "2px solid #393A40",
            margin: "32px 0 18px 0",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#B0B1B8",
            fontSize: 16,
            paddingBottom: 24,
          }}
        >
          <span>© 2025 E-CELL IARE. All Rights Reserved.</span>
          <a href="#" style={{ color: "#B0B1B8", textDecoration: "underline" }}>
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
