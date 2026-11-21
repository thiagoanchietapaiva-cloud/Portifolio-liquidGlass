import { LuMenu, LuX, LuGamepad2 } from "react-icons/lu";

const LINKS = [
  { href: "#sobre", label: "SOBRE" },
  { href: "#projetos", label: "PROJETOS" },
  { href: "#skills", label: "SKILLS" },
  { href: "#contato", label: "CONTATO" },
];

export default function Header({ isMobile, mobileMenu, setMobileMenu }) {
  const irParaJogo = () => {
    setMobileMenu(false);
    document.getElementById("jogo")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const irPara = (href) => {
    setMobileMenu(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <header
        className="fixed top-3 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-32px)] max-w-"
      >
        <div className="glass-liquid-strong rounded-2xl flex justify-between items-center px-4 md:px-7 py-3">
          {!isMobile && (
            <nav className="flex gap-7 text-xl font-bold items-center">
              {LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => irPara(link.href)}
                  className="hover:text-violet-300 transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          )}

          {isMobile && (
            <span className="font-black text-lg">TA.</span>
          )}

          {!isMobile && (
            <button
              onClick={irParaJogo}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm font-bold cursor-pointer hover:scale-105 transition-transform"
            >
              <LuGamepad2 size={16} /> JOGAR
            </button>
          )}

          {isMobile && (
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="w-9 h-9 rounded-lg bg-white/10 border border-white/10 grid place-items-center"
            >
              {mobileMenu ? <LuX size={18} /> : <LuMenu size={18} />}
            </button>
          )}
        </div>
      </header>

      {mobileMenu && (
        <div className="fixed top- left-0 right-0 z-[90] px-4">
          <div className="glass-liquid-strong rounded-2xl p-4 flex flex-col gap-2">
            {LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => irPara(link.href)}
                className="p-3 bg-white/5 rounded-xl font-bold text-sm text-left"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={irParaJogo}
              className="p-3 bg-white rounded-xl text-black font-extrabold text-sm text-center flex items-center justify-center gap-2"
            >
              <LuGamepad2 size={16} /> JOGAR
            </button>
          </div>
        </div>
      )}
    </>
  );
}