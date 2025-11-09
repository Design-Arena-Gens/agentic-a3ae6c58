"use client";

import { useGameStore } from "@/lib/store";

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded border border-white/10 bg-white/5 px-2 py-1 text-xs"><span className="text-neutral-400">{label}:</span> <b>{value}</b></div>
  );
}

export function Battle() {
  const { enemy, player, log } = useGameStore((s) => ({ enemy: s.enemy, player: s.player, log: s.log }));
  const useJutsu = useGameStore((s) => s.useJutsu);
  const attack = useGameStore((s) => s.basicAttack);
  const useRamen = useGameStore((s) => s.useRamen);
  const flee = useGameStore((s) => s.tryFlee);

  if (!player || !enemy) return null;

  return (
    <div className="card space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="h2">?????: {enemy.name}</div>
          <div className="small">??????? {enemy.level} ? ??????? {enemy.rewardGold} ?? / {enemy.rewardExp} ?????</div>
        </div>
        <div className="flex gap-2">
          <Stat label="HP ?????" value={`${enemy.hp}/${enemy.maxHp}`} />
          <Stat label="HP" value={`${player.hp}/${player.maxHp}`} />
          <Stat label="?????" value={`${player.chakra}/${player.maxChakra}`} />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          <div className="font-medium">????????</div>
          <div className="grid grid-cols-2 gap-2">
            <button className="button" onClick={attack}>?????</button>
            <button className="button" onClick={() => useJutsu('fireball')}>?????: ???????? ???</button>
            <button className="button" onClick={() => useJutsu('rasengan')}>????????</button>
            <button className="button" onClick={() => useJutsu('shadow_clone')}>??????? ????????????</button>
            <button className="button" onClick={useRamen}>?????? ?????</button>
            <button className="button" onClick={flee}>???????</button>
          </div>
        </div>
        <div className="space-y-2">
          <div className="font-medium">??????</div>
          <div className="h-40 overflow-auto rounded border border-white/10 bg-black/30 p-2 text-sm">
            {log.map((l, i) => (
              <div key={i} className="opacity-90">{l}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
