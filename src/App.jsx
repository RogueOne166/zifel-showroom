import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  ShoppingBag,
  ShieldCheck,
  Plane,
  Briefcase,
} from "lucide-react";

const products = [
  {
    name: "Cabin Suitcase",
    category: "Travel",
    price: "From €89",
    image:"https://cdnphotos.fastmag.fr/photos/116/1200x1200/td193.50cm/rose%20gold/1/photo.jpg",
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
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(10,10,10,0.9)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>Zifel</h1>

          <nav
            style={{
              display: "flex",
              gap: "30px",
              fontSize: "15px",
            }}
          >
            <a href="#products" style={{ color: "white", textDecoration: "none" }}>
              Products
            </a>
            <a href="#about" style={{ color: "white", textDecoration: "none" }}>
              About
            </a>
            <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src="https://img.freepik.com/premium-photo/travel-concept-with-luggages-assortment_23-2149030586.jpg"
          alt="Travel"
          style={{
            width: "100%",
            height: "700px",
            objectFit: "cover",
            opacity: 0.4,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(10,10,10,1), rgba(10,10,10,0.7), rgba(10,10,10,0.2))",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: "650px" }}
          >
            <p
              style={{
                display: "inline-block",
                padding: "10px 18px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.1)",
                marginBottom: "20px",
              }}
            >
              Luggage showroom based in France
            </p>

            <h2
              style={{
                fontSize: "72px",
                lineHeight: 1.1,
                fontWeight: "bold",
                marginBottom: "25px",
              }}
            >
              Travel smarter with elegant luggage.
            </h2>

            <p
              style={{
                fontSize: "20px",
                color: "#d1d5db",
                lineHeight: 1.7,
                marginBottom: "35px",
              }}
            >
              Discover Zifel products through a modern showroom website built
              to present suitcases, bags and travel accessories clearly.
            </p>

            <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
              <button
                style={{
                  background: "white",
                  color: "black",
                  border: "none",
                  padding: "15px 28px",
                  borderRadius: "999px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                View Products
                <ArrowRight size={18} />
              </button>

              <button
                style={{
                  background: "transparent",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.2)",
                  padding: "15px 28px",
                  borderRadius: "999px",
                  cursor: "pointer",
                }}
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "100px 20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
        }}
      >
        {categories.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                padding: "35px",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "20px",
                  background: "rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <Icon size={28} />
              </div>

              <h3 style={{ fontSize: "24px", marginBottom: "12px" }}>
                {item.title}
              </h3>

              <p style={{ color: "#9ca3af", lineHeight: 1.7 }}>
                {item.text}
              </p>
            </div>
          );
        })}
      </section>

      {/* PRODUCTS */}
	<section
	  id="products"
	  style={{
	    background: "#e9e7e4",
	    color: "#111111",
	    padding: "100px 20px",
	  }}
	>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              marginBottom: "60px",
            }}
          >
            <p
              style={{
                textTransform: "uppercase",
                letterSpacing: "4px",
                color: "#6b7280",
                marginBottom: "15px",
              }}
            >
              Featured Products
            </p>

	<h2
	  style={{
	    fontSize: "56px",
	    fontWeight: "bold",
	    color: "#222222",
	  }}
	>
              Showroom Selection
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: "30px",
            }}
          >
            {products.map((product) => (
              <motion.div
                key={product.name}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 220 }}
                style={{
                  background: "#f1efec",
                  borderRadius: "30px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "320px",
                    objectFit: "cover",
                  }}
                />

                <div style={{ padding: "30px" }}>
                  <p style={{ color: "#6b7280", marginBottom: "10px" }}>
                    {product.category}
                  </p>

                  <h3
                    style={{
                      fontSize: "30px",
                      marginBottom: "20px",
                    }}
                  >
                    {product.name}
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontWeight: "bold" }}>
                      {product.price}
                    </span>

                    <button
                      style={{
                        padding: "12px 20px",
                        borderRadius: "999px",
                        border: "1px solid #d1d5db",
                        background: "white",
                        cursor: "pointer",
                      }}
                    >
                      Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "120px 20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "60px",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "4px",
              color: "#9ca3af",
              marginBottom: "20px",
            }}
          >
            About Zifel
          </p>

          <h2
            style={{
              fontSize: "56px",
              lineHeight: 1.2,
            }}
          >
            A modern brand presentation for luggage products.
          </h2>
        </div>

        <div>
          <p
            style={{
              color: "#d1d5db",
              lineHeight: 1.9,
              fontSize: "18px",
              marginBottom: "25px",
            }}
          >
            This prototype focuses on a showroom experience with strong visuals,
            elegant layouts and premium product presentation.
          </p>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px",
              padding: "30px",
              display: "flex",
              gap: "20px",
            }}
          >
            <ShieldCheck size={30} />

            <p
              style={{
                color: "#d1d5db",
                lineHeight: 1.8,
              }}
            >
              Later we can add product filtering, admin dashboard, animations,
              multilingual support, contact forms and real Zifel inventory.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          background: "#111111",
          padding: "100px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "32px",
            padding: "50px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2
            style={{
              fontSize: "48px",
              marginBottom: "20px",
            }}
          >
            Ready to present the showroom?
          </h2>

          <p
            style={{
              color: "#d1d5db",
              marginBottom: "40px",
            }}
          >
            This section can later become the official contact area.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <MapPin size={20} />
              France
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Mail size={20} />
              contact@zifel.fr
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Phone size={20} />
              +33 0 00 00 00 00
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          textAlign: "center",
          padding: "30px",
          color: "#6b7280",
        }}
      >
        © 2026 Zifel — Showroom Prototype
      </footer>
    </div>
  );
}
