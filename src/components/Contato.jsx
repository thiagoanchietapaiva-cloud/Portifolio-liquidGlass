import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { LuArrowUpRight } from "react-icons/lu";

export default function Contato() {
  const [formData, setFormData] = useState({ nome: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);

  const enviar = () => {
    if (!formData.nome || !formData.msg) {
      alert("Preencha nome e mensagem!");
      return;
    }
    const texto = `Olá Thiago! Sou ${formData.nome} (${formData.email}).\n\n${formData.msg}`;
    window.open(`https://wa.me/5585994062045?text=${encodeURIComponent(texto)}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contato" className="max-w-300 mx-auto px-5 pt-16 pb-16 scroll-mt-28">
      <SectionTitle cor="#fbbf24" titulo="CONTATO" />
      <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-4">
        <div className="glass-liquid p-6">
          <div className="text- tracking-[0.15em] opacity-40 mb-4">FORMULÁRIO</div>
          <div className="grid md:grid-cols-2 gap-2.5">
            <input className="input-liquid" placeholder="Seu nome" value={formData.nome} onChange={(e) => setFormData({ ...formData, nome: e.target.value })} />
            <input className="input-liquid" placeholder="Seu e-mail" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          </div>
          <textarea className="input-liquid mt-2.5 h-28 resize-none" placeholder="Fala, Thiago! Curti seu portfólio game..." value={formData.msg} onChange={(e) => setFormData({ ...formData, msg: e.target.value })} />
          <button onClick={enviar} className={`mt-3 w-full p-3 rounded-xl font-bold cursor-pointer transition-colors ${sent ? "bg-emerald-400 text-black" : "bg-white text-black"}`}>
            {sent ? "Abrindo WhatsApp..." : "Enviar no WhatsApp"}
          </button>
        </div>
        <div className="glass-liquid p-6">
          <div className="font-bold mb-4">Links diretos</div>
          <div className="grid gap-2.5">
            <a href="https://github.com/thiagoanchietapaiva-cloud?tab=repositories" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs flex justify-between hover:bg-white/10 transition-colors">
              github.com/thiagoanchieta <LuArrowUpRight size={14} />
            </a>
            <a href="https://wa.me/5585994062045" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex justify-between hover:bg-emerald-500/20 transition-colors">
              WhatsApp: +55 (85) 99406-2045 <LuArrowUpRight size={14} />
            </a>
            <a href="mailto:thiagoanchietapaiva@gmail.com" className="p-3 rounded-xl bg-white/5 border border-white/10 text- flex justify-between hover:bg-white/10 transition-colors">
              thiagoanchietapaiva@gmail.com <LuArrowUpRight size={14} />
            </a>
          </div>
          <div className="mt-3.5 p-2.5 rounded- bg-fuchsia-500/20 border border-fuchsia-500/20 text- opacity-70 leading-relaxed">
            Respondo em até 24h. Bora tirar sua ideia do papel?
          </div>
        </div>
      </div>
    </section>
  );
}