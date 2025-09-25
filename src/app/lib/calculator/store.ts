import { create } from 'zustand'

import { areas, cleaningTypes } from './cleaning-types'

interface CalculatorState {
  selectedType: any | null
  selectedArea: string | null
  selectedAddons: string[]
  setSelectedType: (type: any) => void
  setSelectedArea: (area: string) => void
  addAddon: (addonId: string) => void
  removeAddon: (addonId: string) => void
  setSelectedAddons: (addons: string[]) => void
}

export const useCalculatorStore = create<CalculatorState>((set) => ({
  selectedType: cleaningTypes.deep,
  selectedArea: areas[0],
  selectedAddons: [],
  setSelectedType: (type: string) => set({ selectedType: type }),
  setSelectedArea: (area: string) => set({ selectedArea: area }),
  addAddon: (addonId: string) =>
    set((state) => ({
      selectedAddons: [...state.selectedAddons, addonId],
    })),
  removeAddon: (addonId: string) =>
    set((state) => ({
      selectedAddons: state.selectedAddons.filter((id) => id !== addonId),
    })),
  setSelectedAddons: (addons: string[]) => set({ selectedAddons: addons }),
}))
