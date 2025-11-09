"use client";

import { useGameStore } from "@/lib/store";
import { clsx } from "clsx";

function Bar({ label, value, max, color }: { label: string; value: number; max: number; color: string }) {
  const pct = Math.max(0, Math.min(100, Math.round((value / max) * 100)));
  return (
    <div className="space-y-1">
      <div className="small flex justify-between"><span>{label}</span><span>{value}/{max}</span></div>
      <div className="h-2 w-full overflow-hidden rounded bg-white/10">
        <div className={clsx("h-full", color)} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export function HUD() {
  const player = useGameStore((s) => s.player);
  const gold = useGameStore((s) => s.gold);
  const reset = useGameStore((s) => s.resetAll);
  if (!player) {
    return (
      <div className="card">
        <div className="h2">???????</div>
        <div className="small">???????? ?????????, ????? ??????.</div>
      </div>
    );
  }
  return (
    <div className="card space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <div className="h2">{player.name} ? {player.clanName}</div>
          <div className="small">??????? {player.level} ? ???? {player.exp}/{player.nextExp}</div>
        </div>
        <button className="button" onClick={reset}>?????</button>
      </div>
      <Bar label="????????" value={player.hp} max={player.maxHp} color="bg-red-500" />
      <Bar label="?????" value={player.chakra} max={player.maxChakra} color="bg-sky-500" />
      <div className="flex items-center justify-between text-sm">
        <div>?????: <b>{player.attack}</b> ? ??????: <b>{player.defense}</b> ? ????: <b>{player.crit}%</b></div>
        <div>?? <b>{gold}</b></div>
      </div>
    </div>
  );
}
