import { Planet } from 'phosphor-react';

export function Title() {
  return (
    <div className="flex gap-2 items-center">
      <Planet weight="fill" size={48} />
      <p className="text-2xl font-bold">Spacestagram</p>
    </div>
  );
}
