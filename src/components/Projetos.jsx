import { useEffect, useState } from "react";
import { PROJECTS } from "../data/portfolio";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Projetos() {
  const [isMobile, setIsMobile] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [hoverBtn, setHoverBtn] = useState(null);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768);
    };
    check();
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("resize", check);
    };
  }, []);

  const sectionStyle = {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "20px 20px",
  };

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  };

  const iconBoxStyle = {
    width: 32,
    height: 32,
    borderRadius: 8,
    background: "#06ffa5",
    display: "grid",
    placeItems: "center",
    color: "#000",
  };

  const lineStyle = {
    flex: 1,
    height: 1,
    background:
      "linear-gradient(90deg, rgba(6,255,165,0.3), transparent)",
    marginLeft: 12,
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: isMobile
      ? "1fr"
      : "repeat(3, minmax(0, 1fr))",
    gap: 14,
  };

  const topRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <section id="projetos" style={sectionStyle}>
      <div style={headerStyle}>
        <div style={iconBoxStyle}></div>
        <h2 style={{ fontSize: 24, fontWeight: 800 }}>
          PROJETOS
        </h2>
        <div style={lineStyle} />
      </div>

      <div style={gridStyle}>
        {PROJECTS.map((p) => {
          const isHover = hovered === p.id;

          const cardStyle = {
            padding: 18,
            display: "flex",
            flexDirection: "column",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.05) 40%, rgba(255,255,255,0.10))",
            backdropFilter: "blur(20px) saturate(160%)",
            WebkitBackdropFilter: "blur(20px) saturate(160%)",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: 24,
            boxShadow: isHover
              ? "inset 0 1px 0 rgba(255,255,255,0.35), 0 24px 44px rgba(0,0,0,0.4)"
              : "inset 0 1px 0 rgba(255,255,255,0.35), 0 20px 40px rgba(0,0,0,0.35)",
            transform: isHover
              ? "translateY(-4px)"
              : "translateY(0)",
            transition: "transform 0.18s ease-out, box-shadow 0.18s ease-out",
            cursor: "pointer",
          };

          const badgeStyle = {
            width: 36,
            height: 36,
            borderRadius: 10,
            background: p.color,
            color: "#000",
            display: "grid",
            placeItems: "center",
            fontWeight: 800,
            fontSize: 12,
          };

          const titleStyle = {
            fontWeight: 700,
            marginTop: 12,
            color: "#fff",
          };

          const descStyle = {
            fontSize: 11,
            opacity: 0.6,
            marginTop: 8,
            lineHeight: 1.5,
          };

          const stackWrapStyle = {
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            marginTop: "auto",
            paddingTop: 12,
          };

          const getBtnStyle = (key) => {
            const active = hoverBtn === key;
            return {
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: active
                ? p.color + "14"
                : "rgba(255,255,255,0.06)",
              border: active
                ? "1.5px solid " + p.color
                : "1px solid rgba(255,255,255,0.1)",
              display: "grid",
              placeItems: "center",
              color: active ? p.color : "#fff",
              textDecoration: "none",
              transform: active
                ? "scale(1.15)"
                : "scale(1)",
              boxShadow: active
                ? "0 0 12px " + p.color + "55, inset 0 0 8px " + p.color + "22"
                : "none",
              transition: "all 0.18s ease-out",
            };
          };

          return (
            <div
              key={p.id}
              className="glass project-card"
              style={cardStyle}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => {
                setHovered(null);
                setHoverBtn(null);
              }}
            >
              <div style={topRowStyle}>
                <div style={badgeStyle}>{p.id}</div>
                <div style={{ display: "flex", gap: 6 }}>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver no GitHub"
                    style={getBtnStyle(p.id + "-gh")}
                    onMouseEnter={() =>
                      setHoverBtn(p.id + "-gh")
                    }
                    onMouseLeave={() => setHoverBtn(null)}
                  >
                    <FaGithub size={16} />
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver demo"
                    style={getBtnStyle(p.id + "-demo")}
                    onMouseEnter={() =>
                      setHoverBtn(p.id + "-demo")
                    }
                    onMouseLeave={() => setHoverBtn(null)}
                  >
                    <FiExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div style={titleStyle}>{p.title}</div>
              <div style={descStyle}>{p.desc}</div>

              <div style={stackWrapStyle}>
                {p.stack.map((s) => {
                  const tagStyle = {
                    fontSize: 9,
                    padding: "4px 8px",
                    borderRadius: 12,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid " + p.color + "30",
                    color: p.color,
                  };
                  return (
                    <span key={s} style={tagStyle}>
                      {s}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}