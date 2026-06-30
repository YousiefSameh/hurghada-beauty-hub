export const routesConfig = {
  marketing: {
    home: '/',
    doctor: '/doctor',
    services: '/services',
  }
} as const;

export type RoutesConfig = typeof routesConfig;
