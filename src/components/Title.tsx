import { Planet } from 'phosphor-react';

export function Title() {
  return (
    <div className="flex gap-2 items-center">
      <Planet weight="fill" size={48} color="#0f172a" />
      <p className="text-2xl text-slate-900 font-bold">Spacestagram</p>
    </div>
  );
}
