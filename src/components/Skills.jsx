import SectionTitle from "./SectionTitle";
import { SKILLS } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="max-w-300 mx-auto px-5 pt-16 scroll-mt-28">
      <SectionTitle cor="#f472b6" titulo="SKILLS" />
      <div className="glass-liquid p-4 grid grid-cols-2 md:grid-cols-4 gap-3">
        {SKILLS.map((s) => (
          <div key={s.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 hover:-translate-y-1 hover:border-white/20 transition-all">
            <div className="w-10 h-10 rounded-xl grid place-items-center font-bold text-base" style={{ background: `${s.color}1a`, border: `1px solid ${s.color}33`, color: s.color }}>
              {s.icon}
            </div>
            <div className="mt-5 font-bold text-">{s.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}