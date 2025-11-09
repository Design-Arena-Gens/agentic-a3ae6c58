"use client";

import { useGameStore } from "@/lib/store";
import { CharacterCreate } from "./create/CharacterCreate";
import { HUD } from "./hud/HUD";
import { MapView } from "./map/MapView";
import { Battle } from "./battle/Battle";

export function GameShell() {
  const mode = useGameStore((s) => s.ui.mode);

  return (
    <div className="grid gap-4 md:grid-cols-[280px,1fr]">
      <div className="space-y-4">
        <HUD />
      </div>
      <div>
        {mode === 'create' && <CharacterCreate />}
        {mode === 'map' && <MapView />}
        {mode === 'battle' && <Battle />}
      </div>
    </div>
  );
}
