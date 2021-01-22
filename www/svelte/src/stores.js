import { writable } from "svelte/store";

const createMainStore = () => {
  const { subscribe, set, update } = writable({ stories: [] });

  return {
    subscribe,
    set: (d) => set({ d }),
  };
};

export const MainStore = createMainStore();
