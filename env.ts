// env.ts
export const API_KEY =
  import.meta.env?.VITE_API_KEY || process.env.VITE_API_KEY || "";
export const MAPS_API_KEY =
  import.meta.env?.VITE_MAPS_API_KEY || process.env.VITE_MAPS_API_KEY || "";
