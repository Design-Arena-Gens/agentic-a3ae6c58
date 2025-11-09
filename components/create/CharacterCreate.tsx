"use client";

import { useState } from "react";
import { useGameStore } from "@/lib/store";

const clans = [
  { key: 'uzumaki', name: '???????', bonus: '+20 ?????' },
  { key: 'uchiha', name: '?????', bonus: '+5% ????' },
  { key: 'hyuga', name: '?????', bonus: '+10 ?????????' },
  { key: 'nara', name: '????', bonus: '+10% ????????' },
];

export function CharacterCreate() {
  const [name, setName] = useState("");
  const [clan, setClan] = useState(clans[0].key);
  const create = useGameStore((s) => s.createPlayer);

  return (
    <div className="card space-y-4">
      <div className="h2">???????? ?????????</div>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="space-y-1">
          <div className="small">??? ??????</div>
          <input
            className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--ring)]/50"
            placeholder="??????"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={20}
          />
        </label>
        <label className="space-y-1">
          <div className="small">????</div>
          <select
            className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--ring)]/50"
            value={clan}
            onChange={(e) => setClan(e.target.value)}
          >
            {clans.map((c) => (
              <option key={c.key} value={c.key}>{c.name} ({c.bonus})</option>
            ))}
          </select>
        </label>
      </div>
      <button
        className="button"
        onClick={() => {
          if (!name.trim()) return;
          create({ name: name.trim(), clan });
        }}
      >?????? ???? ??????</button>
    </div>
  );
}
