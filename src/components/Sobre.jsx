import fotoThiago from "../assets/foto-thiago.jpg";
import SectionTitle from "./SectionTitle";
import { BIO } from "../data/portfolio";

const TAGS = ["#Java", "#JavaScript", "#HTML", "#CSS", "#React", "#TypeScript", "#Tailwind", "#ADS"];

export default function Sobre() {
  return (
    <section id="sobre" className="max-w-300 mx-auto px-5 pt-12 scroll-mt-28">
      <SectionTitle cor="#8b5cf6" titulo="SOBRE_MIM" />
      <div className="grid md:grid-cols-[320px_1fr] gap-4">
        <div className="glass-liquid p-4">
          <div className="rounded-2xl p-4 border border-white/10 text-center bg-linear-to-b from-violet-950 to-emerald-950/30">
            <img src={fotoThiago} alt="Thiago Anchieta" className="w-35 h-35 rounded-full object-cover mx-auto block border-2 border-violet-500/40 shadow-[0_0_20px_rgba(139,92,246,0.3)]" />
            <div className="font-bold mt-2.5">Thiago Anchieta</div>
            <div className="text- opacity-60">• Fullstack •</div>
            <div className="mt-2.5 text- px-2.5 py-1.5 rounded-full bg-emerald-400/15 border border-emerald-400/30 text-emerald-300 inline-block">
              - disponível para freela
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-3">
            <div className="glass-liquid rounded-xl! text-center py-2.5"><b>3</b><div className="text- opacity-50">Projetos</div></div>
            <div className="glass-liquid rounded-xl! text-center py-2.5"><b>340+</b><div className="text- opacity-50">Commits</div></div>
            <div className="glass-liquid rounded-xl! text-center py-2.5"><b>∞</b><div className="text- opacity-50">Cafés</div></div>
          </div>
        </div>
        <div className="glass-liquid p-5">
          <div className="text- tracking-[0.15em] opacity-40 mb-3">• BIO •</div>
          <p className="leading-relaxed text- opacity-85">{BIO}</p>
          <div className="flex gap-2.5 mt-10 flex-wrap">
            {TAGS.map((t) => (
              <span key={t} className="text-xs px-3 py-2 rounded-full border border-white/10 bg-white/5">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}