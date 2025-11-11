export interface Client {
  name: string;
  viktKg: number;
  fettProcent: number;
}

export interface Metrics {
  fruktKcalPerDag: [number, number];
  friaKcalPerVecka: [number, number];
  extraKHInforHI: [number, number];
  KHUnderLangtPass: [number, number];
}

export interface Ingredient {
  name: string;
  p1: number;
  p2: number;
  tot: number;
}

export interface Recipe {
  id: string;
  title: string;
  category: "A" | "B";
  ingredients: Ingredient[];
  steps: string[];
  image?: string;
}

export interface DaySchedule {
  times: string[];
  meals: string[];
}

export interface WeekSchedule {
  [key: string]: DaySchedule;
}

export interface SnackItem {
  name: string;
  p1: number;
  p2: number;
  tot: number;
}

export interface Snacks {
  A: SnackItem[];
  B: SnackItem[];
}

export interface PeriodData {
  periodId: string;
  title: string;
  weeks: string;
  clients: [Client, Client];
  metrics: Metrics;
  info: string;
  schedule: WeekSchedule;
  recipes: Recipe[];
  snacks: Snacks;
  morningMeal: string;
}
