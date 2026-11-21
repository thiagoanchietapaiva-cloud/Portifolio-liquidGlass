import { useEffect, useRef, useState } from "react";
import { FiExternalLink } from "react-icons/fi";

const ISLANDS = [
  { id: "sobre", x: 0.1, y: 0.12, w: 0.22, h: 0.32 },
  { id: "skills", x: 0.72, y: 0.08, w: 0.2, h: 0.28 },
  { id: "projetos", x: 0.38, y: 0.58, w: 0.26, h: 0.34 },
  { id: "contato", x: 0.74, y: 0.6, w: 0.18, h: 0.28 },
];

const LABELS = {
  sobre: "SOBRE",
  skills: "SKILLS",
  projetos: "PROJETOS",
  contato: "CONTATO",
};

const COLORS = {
  sobre: "#a855f7",
  skills: "#ec4899",
  projetos: "#06ffa5",
  contato: "#facc15",
};

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const gameRef = useRef(null);
  const keysRef = useRef({});
  const nearRef = useRef(null);
  const [near, setNear] = useState(null);

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

  useEffect(() => {
    const canvas = gameRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = 0;
    let H = 0;
    let raf = 0;
    let player = { x: 0.5, y: 0.5, vx: 0, vy: 0 };
    let stars = [];
    let lastHit = "";

    const resize = () => {
      const parent = canvas.parentElement;
      W = parent.clientWidth;
      H = parent.clientHeight;
      canvas.width = W;
      canvas.height = H;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 120; i++) {
      stars.push({
        x: Math.random(),
        y: Math.random(),
        r: Math.random() * 1.4 + 0.3,
        tw: Math.random() * Math.PI * 2,
      });
    }

    const down = (e) => {
      const key = e.key.toLowerCase();
      if (
        key === "arrowup" ||
        key === "arrowdown" ||
        key === "arrowleft" ||
        key === "arrowright" ||
        key === " "
      ) {
        e.preventDefault();
      }
      keysRef.current[key] = true;
    };
    const up = (e) => {
      keysRef.current[e.key.toLowerCase()] = false;
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);

    const drawAstronaut = (x, y, vx, vy) => {
      ctx.save();
      ctx.translate(x, y);

      ctx.fillStyle = "rgba(0,0,0,0.35)";
      ctx.beginPath();
      ctx.ellipse(0, 16, 14, 4, 0, 0, Math.PI * 2);
      ctx.fill();

      const moving =
        Math.abs(vx) > 0.002 || Math.abs(vy) > 0.002;
      if (moving) {
        const t = Date.now() / 1000;
        const flick = Math.sin(t * 30) * 3;
        const bx = -vx * 30;
        const by = -vy * 30;

        const flame = ctx.createRadialGradient(
          bx, by, 0, bx, by, 14 + flick
        );
        flame.addColorStop(0, "rgba(250,204,21,0.95)");
        flame.addColorStop(0.5, "rgba(249,115,22,0.7)");
        flame.addColorStop(1, "rgba(249,115,22,0)");
        ctx.fillStyle = flame;
        ctx.beginPath();
        ctx.arc(bx, by, 12 + flick, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#fde68a";
        ctx.beginPath();
        ctx.arc(bx, by, 5 + flick * 0.4, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.fillStyle = "#e5e7eb";
      ctx.beginPath();
      ctx.roundRect(-9, -2, 18, 20, 8);
      ctx.fill();

      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(0, -12, 11, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#06ffa5";
      ctx.beginPath();
      ctx.arc(0, -12, 7, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.beginPath();
      ctx.arc(-2, -14, 2, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#cbd5e1";
      ctx.beginPath();
      ctx.roundRect(-13, 0, 5, 10, 2);
      ctx.fill();
      ctx.beginPath();
      ctx.roundRect(8, 0, 5, 10, 2);
      ctx.fill();

      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.roundRect(-7, 16, 5, 6, 2);
      ctx.fill();
      ctx.beginPath();
      ctx.roundRect(2, 16, 5, 6, 2);
      ctx.fill();

      ctx.restore();
    };

    const loop = () => {
      const k = keysRef.current;
      let ax = 0;
      let ay = 0;
      if (k.a || k.arrowleft) ax = -0.0006;
      if (k.d || k.arrowright) ax = 0.0006;
      if (k.w || k.arrowup) ay = -0.0006;
      if (k.s || k.arrowdown) ay = 0.0006;

      player.vx = player.vx * 0.92 + ax;
      player.vy = player.vy * 0.92 + ay;
      player.x += player.vx;
      player.y += player.vy;

      if (player.x < 0.03) player.x = 0.03;
      if (player.x > 0.97) player.x = 0.97;
      if (player.y < 0.04) player.y = 0.04;
      if (player.y > 0.96) player.y = 0.96;

      ctx.fillStyle = "#070713";
      ctx.fillRect(0, 0, W, H);

      const neb1 = ctx.createRadialGradient(
        W * 0.2, H * 0.2, 0, W * 0.2, H * 0.2, W * 0.4
      );
      neb1.addColorStop(0, "rgba(139,92,246,0.28)");
      neb1.addColorStop(1, "rgba(139,92,246,0)");
      ctx.fillStyle = neb1;
      ctx.fillRect(0, 0, W, H);

      const neb2 = ctx.createRadialGradient(
        W * 0.85, H * 0.85, 0, W * 0.85, H * 0.85, W * 0.4
      );
      neb2.addColorStop(0, "rgba(6,255,165,0.16)");
      neb2.addColorStop(1, "rgba(6,255,165,0)");
      ctx.fillStyle = neb2;
      ctx.fillRect(0, 0, W, H);

      const t = Date.now() / 1000;

      ctx.fillStyle = "#fff";
      stars.forEach((s) => {
        const alpha = 0.4 + Math.sin(t * 2 + s.tw) * 0.4;
        ctx.globalAlpha = Math.max(0.2, alpha);
        ctx.beginPath();
        ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      let found = null;

      ISLANDS.forEach((is, idx) => {
        const floatY = Math.sin(t * 0.8 + idx * 1.5) * 3;
        const floatX = Math.cos(t * 0.6 + idx * 1.5) * 2;
        const sx = is.x * W + floatX;
        const sy = is.y * H + floatY;
        const sw = is.w * W;
        const sh = is.h * H;
        const color = COLORS[is.id];

        ctx.fillStyle = "rgba(0,0,0,0.45)";
        ctx.beginPath();
        ctx.ellipse(
          sx + sw / 2, sy + sh + 10, sw / 2.2, 8, 0, 0, Math.PI * 2
        );
        ctx.fill();

        ctx.save();
        ctx.shadowColor = color;
        ctx.shadowBlur = 22;
        ctx.fillStyle = "rgba(12,12,24,0.95)";
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(sx, sy, sw, sh, 12);
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        const shine = ctx.createLinearGradient(
          sx, sy, sx, sy + sh
        );
        shine.addColorStop(0, "rgba(255,255,255,0.14)");
        shine.addColorStop(0.4, "rgba(255,255,255,0)");
        ctx.fillStyle = shine;
        ctx.beginPath();
        ctx.roundRect(sx, sy, sw, sh, 12);
        ctx.fill();

        ctx.fillStyle = color;
        ctx.fillRect(sx + 12, sy + 10, sw - 24, 3);

        ctx.fillStyle = "#fff";
        ctx.font = "bold 13px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(
          LABELS[is.id],
          sx + sw / 2,
          sy + sh / 2 + 5
        );

        const px = player.x * W;
        const py = player.y * H;
        const inside =
          px > sx && px < sx + sw && py > sy && py < sy + sh;
        if (inside) {
          found = { ...is, x: sx / W, y: sy / H };
        }
      });

      const foundId = found ? found.id : null;
      if (foundId !== nearRef.current) {
        nearRef.current = foundId;
        setNear(found);
      }

      if (found && found.id !== lastHit) {
        lastHit = found.id;
        setTimeout(() => {
          const el = document.getElementById(found.id);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 400);
      }
      if (!found) lastHit = "";

      drawAstronaut(
        player.x * W,
        player.y * H,
        player.vx,
        player.vy
      );

      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  const sectionStyle = {
    maxWidth: 1200,
    margin: "0 auto",
    padding: isMobile ? "24px 16px" : "48px 20px",
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1.15fr 0.85fr",
    gap: isMobile ? 20 : 24,
    alignItems: "start",
    paddingTop: isMobile ? "100px" : "120px",
  };

  const titleStyle = {
    fontSize: "clamp(48px, 6vw, 84px)",
    lineHeight: 0.9,
    fontWeight: 800,
  };

  const gradStyle = {
    background:
      "linear-gradient(90deg, #8b5cf6, #06ffa5)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const descStyle = {
    opacity: 0.7,
    marginTop: 30,
    lineHeight: 1.6,
    fontSize: 14,
    maxWidth: 420,
  };

  const pillStyle = {
    fontSize: 11,
    padding: "6px 10px",
    borderRadius: 20,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.08)",
  };

  const btnWhite = {
    padding: "15px 25px",
    borderRadius: 14,
    background: "#fff",
    color: "#000",
    fontWeight: 700,
    border: "none",
    display: "flex",
    alignItems: "center",
    gap: 6,
    cursor: "pointer",
  };

  const btnDark = {
    padding: "15px 25px",
    borderRadius: 14,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#fff",
    cursor: "pointer",
  };

  const gameWrap = {
    padding: "1px",
    borderRadius: 22,
    background:
      "linear-gradient(135deg, rgba(139,92,246,0.6), rgba(6,255,165,0.35))",
    boxShadow: "0 0 30px rgba(139,92,246,0.18)",
  };

  const gameInner = {
    borderRadius: 20,
    overflow: "hidden",
    background: "rgba(12,12,18,0.96)",
    border: "1px solid rgba(255,255,255,0.08)",
  };

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section style={sectionStyle}>
      <div>
        <h1 style={titleStyle}>
          THIAGO
          <br />
          <span style={gradStyle}>ANCHIETA</span>
        </h1>

        <p style={descStyle}>
          Portfolio que você navega jogando. Controle o
          astronauta dev, pouse nas ilhas e explore meu
          trabalho. Venha me conhecer um pouco mais.
        </p>

        <div
          style={{
            display: "flex",
            gap: 10,
            marginTop: 30,
            flexWrap: "wrap",
          }}
        >
          <span style={pillStyle}>Interativo</span>
          <span style={pillStyle}>
            Navegue pelo meu portfólio
          </span>
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 30,
            flexWrap: "wrap",
          }}
        >
          <button
            style={btnWhite}
            onClick={() => goTo("projetos")}
          >
            Ver projetos
            <FiExternalLink size={14} />
          </button>
          <button
            style={btnDark}
            onClick={() => goTo("sobre")}
          >
            Sobre mim
          </button>
        </div>
      </div>

      <div id="jogo" style={gameWrap}>
        <div style={gameInner}>
          <div
            style={{
              padding: "10px 12px",
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
            }}
          >
            <span style={pillStyle}>
              USE AS SETAS PARA MOVER
            </span>
            <span style={pillStyle}>
              COLIDA PARA NAVEGAR
            </span>
          </div>

          <div style={{ position: "relative", height: 360 }}>
            <canvas
              ref={gameRef}
              style={{
                width: "100%",
                height: "100%",
                display: "block",
              }}
            />
            {near && (
              <div
                style={{
                  position: "absolute",
                  left: (near.x + near.w / 2) * 100 + "%",
                  top: near.y * 100 - 4 + "%",
                  transform: "translate(-50%, -100%)",
                  background: "#fff",
                  color: "#000",
                  padding: "5px 10px",
                  borderRadius: 16,
                  fontSize: 10,
                  fontWeight: 700,
                }}
              >
                Entrando em {LABELS[near.id]}...
              </div>
            )}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 6,
              padding: 10,
              flexWrap: "wrap",
            }}
          >
            {ISLANDS.map((is) => {
              const active = near && near.id === is.id;
              const color = COLORS[is.id];
              return (
                <span
                  key={is.id}
                  style={{
                    fontSize: 8,
                    padding: "4px 10px",
                    borderRadius: 20,
                    background: active
                      ? color + "22"
                      : "rgba(255,255,255,0.04)",
                    border:
                      "1px solid " +
                      (active
                        ? color + "66"
                        : "rgba(255,255,255,0.08)"),
                    color: active
                      ? color
                      : "rgba(255,255,255,0.45)",
                  }}
                >
                  {LABELS[is.id]}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}