'use client';

import { useEffect } from 'react';
import { GameShell } from '@/components/GameShell';
import { useGameStore } from '@/lib/store';

export default function Page() {
  const hydrate = useGameStore((s) => s.hydrateFromStorage);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  return (
    <main className="space-y-4">
      <header className="flex items-center justify-between">
        <h1 className="h1">??????: ??? ?????</h1>
        <div className="small">v1.0</div>
      </header>
      <GameShell />
      <footer className="small mt-6 opacity-80">????????????? ???-????. ???????? ??????????? ????????.</footer>
    </main>
  );
}
