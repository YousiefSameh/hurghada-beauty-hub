import { colors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';
import { radius } from './radius';
import { animations } from './animations';
import { breakpoints } from './breakpoints';
import { zIndex } from './z-index';

export const tokens = {
  colors,
  typography,
  spacing,
  radius,
  animations,
  breakpoints,
  zIndex,
} as const;

export type Tokens = typeof tokens;
export { colors, typography, spacing, radius, animations, breakpoints, zIndex };
export default tokens;
