import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
import Skills from "./components/Skills";
import Contato from "./components/Contato";
import { useIsMobile } from "./hooks/useIsMobile";

export default function App() {
  const isMobile = useIsMobile();
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div
      className="relative min-h-screen text-white"
      style={{ background: "#0a0a0f", overflowX: "hidden" }}
    >
      <div className="fixed inset-0 -z-0 overflow-hidden pointer-events-none">
        <div
          style={{
            position: "absolute",
            top: -80,
            left: -80,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(139,92,246,0.18)",
            filter: "blur(120px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "33%",
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(6,255,165,0.12)",
            filter: "blur(120px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "33%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(236,72,153,0.12)",
            filter: "blur(120px)",
          }}
        />
      </div>

      <div className="relative z-10">
        <Header
          isMobile={isMobile}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
        <Hero />
        <Sobre />
        <Projetos />
        <Skills />
        <Contato />
      </div>
    </div>
  );
}