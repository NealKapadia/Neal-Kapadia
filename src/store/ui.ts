"use client";

import { create } from "zustand";

type UIState = {
  liteMode: boolean;
  setLiteMode: (v: boolean) => void;
  toggleLiteMode: () => void;
};

export const useUI = create<UIState>((set) => ({
  liteMode: true,
  setLiteMode: (v) => set({ liteMode: v }),
  toggleLiteMode: () => set((s) => ({ liteMode: !s.liteMode })),
}));
