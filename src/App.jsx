import React, { useState } from "react";
import { motion } from "framer-motion";
import headerImage from "./assets/header.jpg";

import {
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  ShoppingBag,
  ShieldCheck,
  Plane,
  Briefcase,
  Menu,
  X,
} from "lucide-react";

const products = [
  {
    name: "Cabin Suitcase",
    category: "Travel",
    price: "From €89",
    image:
      "https://cdnphotos.fastmag.fr/photos/116/1200x1200/td193.50cm/rose%20gold/1/photo.jpg",
  },
  {
    name: "Business Backpack",
    category: "Work",
    price: "From €59",
    image:
      "https://cdnphotos.fastmag.fr/photos/116/400x400/fk273.50/rouge/1/photo.jpg",
  },
  {
    name: "Large Travel Bag",
    category: "Adventure",
    price: "From €79",
    image:
      "https://cdnphotos.fastmag.fr/photos/116/1200x1200/td193.80cm/light%20champagne/1/photo.jpg",
  },
];

const categories = [
  {
    title: "Suitcases",
    text: "Elegant and durable luggage for short and long trips.",
    icon: Plane,
  },
  {
    title: "Business Bags",
    text: "Modern bags designed for work, laptops and daily travel.",
    icon: Briefcase,
  },
  {
    title: "Travel Accessories",
    text: "Useful accessories to organize and protect your essentials.",
    icon: ShoppingBag,
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Products", "About", "Contact"];

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
        backgroundColor: "#f7f5f2",
        color: "#171717",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 1px 20px rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{
            width: "100%",
            padding: "20px clamp(18px, 5vw, 60px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          <h1 style={{ fontSize: "clamp(26px, 7vw, 34px)", fontWeight: "bold" }}>
            Zifel
          </h1>

          <nav className="desktop-nav">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  color: "#222",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                {item}
              </a>
            ))}
          </nav>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "#111",
              color: "white",
              border: "none",
              borderRadius: "14px",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {menuOpen && (
            <div
              className="mobile-dropdown"
              style={{
                position: "absolute",
                top: "75px",
                left: "18px",
                right: "18px",
                background: "white",
                borderRadius: "22px",
                padding: "20px",
                boxShadow: "0 18px 40px rgba(0,0,0,0.14)",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: "#111",
                    textDecoration: "none",
                    fontWeight: 800,
                    fontSize: "18px",
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      <section
        style={{
          position: "relative",
          minHeight: "clamp(620px, 90vh, 760px)",
          overflow: "hidden",
        }}
      >
        <img
          src={headerImage}
          alt="Travel"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            inset: 0,
            objectFit: "cover",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.85), rgba(255,255,255,0.45))",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            minHeight: "clamp(620px, 90vh, 760px)",
            display: "flex",
            alignItems: "center",
            padding: "60px clamp(22px, 6vw, 60px)",
            boxSizing: "border-box",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: "720px" }}
          >
            <p
              style={{
                display: "inline-block",
                padding: "10px 18px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.65)",
                color: "#333",
                marginBottom: "20px",
                fontWeight: 700,
              }}
            >
              Luggage showroom based in France
            </p>

            <h2
              style={{
                fontSize: "clamp(44px, 11vw, 82px)",
                lineHeight: 1.05,
                fontWeight: "900",
                marginBottom: "25px",
                color: "#111",
                maxWidth: "100%",
              }}
            >
              Travel smarter with elegant luggage.
            </h2>

            <p
              style={{
                fontSize: "clamp(18px, 4vw, 22px)",
                color: "#444",
                lineHeight: 1.7,
                marginBottom: "35px",
                maxWidth: "680px",
              }}
            >
              Discover Zifel products through a modern showroom website built to
              present suitcases, bags and travel accessories clearly.
            </p>

            <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
              <button
                style={{
                  background: "#111",
                  color: "white",
                  border: "none",
                  padding: "15px 28px",
                  borderRadius: "999px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  whiteSpace: "nowrap",
                }}
              >
                View Products <ArrowRight size={18} />
              </button>

              <button
                style={{
                  background: "white",
                  color: "#111",
                  border: "1px solid #d4d4d4",
                  padding: "15px 28px",
                  borderRadius: "999px",
                  cursor: "pointer",
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                }}
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        style={{
          padding: "80px clamp(22px, 6vw, 60px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "25px",
          background: "#f7f5f2",
        }}
      >
        {categories.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              style={{
                background: "white",
                borderRadius: "28px",
                padding: "clamp(28px, 6vw, 42px)",
                boxShadow: "0 14px 35px rgba(0,0,0,0.06)",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "20px",
                  background: "#f1f1f1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}
              >
                <Icon size={30} color="#111" />
              </div>

              <h3
                style={{
                  fontSize: "clamp(28px, 7vw, 36px)",
                  marginBottom: "14px",
                  color: "#111",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: 1.8,
                  fontSize: "clamp(18px, 4vw, 22px)",
                }}
              >
                {item.text}
              </p>
            </div>
          );
        })}
      </section>

      <section
        id="products"
        style={{
          background: "#ece8e3",
          color: "#111",
          padding: "90px clamp(22px, 6vw, 60px)",
        }}
      >
        <div style={{ marginBottom: "60px" }}>
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "clamp(4px, 1.3vw, 8px)",
              color: "#6b7280",
              marginBottom: "15px",
              textAlign: "center",
              fontSize: "clamp(15px, 3.5vw, 22px)",
            }}
          >
            Featured Products
          </p>

          <h2
            style={{
              fontSize: "clamp(44px, 11vw, 72px)",
              fontWeight: "900",
              color: "#222",
              textAlign: "center",
              lineHeight: 1.05,
            }}
          >
            Showroom Selection
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "30px",
          }}
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 220 }}
              style={{
                background: "white",
                borderRadius: "30px",
                overflow: "hidden",
                boxShadow: "0 14px 35px rgba(0,0,0,0.07)",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "clamp(300px, 65vw, 420px)",
                  objectFit: "contain",
                  background: "white",
                }}
              />

              <div style={{ padding: "clamp(26px, 6vw, 34px)" }}>
                <p style={{ color: "#6b7280", marginBottom: "10px", fontSize: "18px" }}>
                  {product.category}
                </p>

                <h3
                  style={{
                    fontSize: "clamp(28px, 7vw, 36px)",
                    marginBottom: "20px",
                    color: "#111",
                    lineHeight: 1.1,
                  }}
                >
                  {product.name}
                </h3>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                    {product.price}
                  </span>

                  <button
                    style={{
                      padding: "12px 20px",
                      borderRadius: "999px",
                      border: "1px solid #d1d5db",
                      background: "white",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="about"
        style={{
          padding: "90px clamp(22px, 6vw, 60px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "45px",
          alignItems: "center",
          background: "#f7f5f2",
        }}
      >
        <div>
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "6px",
              color: "#9ca3af",
              marginBottom: "20px",
              fontSize: "clamp(15px, 3.5vw, 20px)",
            }}
          >
            About Zifel
          </p>

          <h2
            style={{
              fontSize: "clamp(42px, 10vw, 64px)",
              lineHeight: 1.08,
              color: "#111",
              fontWeight: "900",
            }}
          >
            A modern brand presentation for luggage products.
          </h2>
        </div>

        <div>
          <p
            style={{
              color: "#444",
              lineHeight: 1.8,
              fontSize: "clamp(19px, 4vw, 24px)",
              marginBottom: "25px",
            }}
          >
            This prototype focuses on a showroom experience with strong visuals,
            elegant layouts and premium product presentation.
          </p>

          <div
            style={{
              background: "white",
              borderRadius: "24px",
              padding: "30px",
              display: "flex",
              gap: "20px",
              boxShadow: "0 14px 35px rgba(0,0,0,0.06)",
            }}
          >
            <ShieldCheck size={30} color="#111" />

            <p style={{ color: "#444", lineHeight: 1.8, fontSize: "18px" }}>
              Later I can add product filtering, admin dashboard, animations,
              multilingual support, contact forms and real Zifel inventory.
            </p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        style={{
          background: "#ece8e3",
          padding: "90px clamp(22px, 6vw, 60px)",
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: "32px",
            padding: "clamp(34px, 7vw, 55px)",
            boxShadow: "0 14px 35px rgba(0,0,0,0.06)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(38px, 10vw, 58px)",
              marginBottom: "20px",
              color: "#111",
              lineHeight: 1.1,
              fontWeight: "900",
            }}
          >
            Ready to present the showroom?
          </h2>

          <p
            style={{
              color: "#444",
              marginBottom: "40px",
              fontSize: "clamp(18px, 4vw, 22px)",
              lineHeight: 1.6,
            }}
          >
            This section can later become the official contact area.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              color: "#111",
              fontSize: "clamp(17px, 4vw, 22px)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <MapPin size={22} /> France
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Mail size={22} /> contact@zifel.fr
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Phone size={22} /> +33 0 00 00 00 00
            </div>
          </div>
        </div>
      </section>

      <footer
        style={{
          textAlign: "center",
          padding: "30px 20px",
          color: "#6b7280",
          background: "#f7f5f2",
          fontSize: "15px",
        }}
      >
        © 2026 Zifel — Showroom Prototype by HMSK_CREATIVE
      </footer>

      <style>{`
        .desktop-nav {
          display: flex;
          gap: clamp(16px, 4vw, 34px);
          font-size: 16px;
          align-items: center;
        }

        .mobile-menu-button {
          display: none;
        }

        @media (max-width: 700px) {
          .desktop-nav {
            display: none;
          }

          .mobile-menu-button {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
