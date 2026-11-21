export default function SectionTitle({ cor, titulo }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-8 rounded-lg shrink-0" style={{ background: cor }} />
      <h2 className="text-2xl font-extrabold">{titulo}</h2>
      <div className="flex-1 h-px ml-3" style={{ background: `linear-gradient(90deg, ${cor}4d, transparent)` }} />
    </div>
  );
}