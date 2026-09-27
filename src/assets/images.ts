/**
 * Central Image Assets Module
 * Imports images so Vite bundles them during production builds (Netlify, Vercel, GitHub Pages, etc.)
 * with static public path fallbacks.
 */
import heroImg from './images/hero_modern_renovation_1790495714934.jpg';
import kitchenImg from './images/kitchen_luxury_island_1790495728853.jpg';
import bathroomImg from './images/bathroom_spa_retreat_1790495742338.jpg';
import craftsmanImg from './images/craftsman_detail_work_1790495752212.jpg';

export const IMAGES = {
  hero: heroImg,
  kitchen: kitchenImg,
  bathroom: bathroomImg,
  craftsman: craftsmanImg,
} as const;

export default IMAGES;
