import { create } from 'zustand'

interface CalculatorState {
  selectedType: any | null
  selectedArea: string | null
  setSelectedType: (type: any) => void
  setSelectedArea: (area: string) => void
}

export const useCalculatorStore = create<CalculatorState>((set) => ({
  selectedType: null,
  selectedArea: null,
  setSelectedType: (type: string) => set({ selectedType: type }),
  setSelectedArea: (area: string) => set({ selectedArea: area }),
}))
