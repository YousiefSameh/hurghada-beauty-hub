export const routesConfig = {
  marketing: {
    home: '/',
    treatments: '/treatments',
    blog: '/blog',
    reviews: '/reviews',
    gallery: '/gallery',
    contact: '/contact',
    consultation: '/consultation',
    medicalTourism: '/medical-tourism',
  },
  admin: {
    dashboard: '/admin/dashboard',
    patients: '/admin/patients',
    appointments: '/admin/appointments',
    leads: '/admin/leads',
    reviews: '/admin/reviews',
    blog: '/admin/blog',
    services: '/admin/services',
    settings: '/admin/settings',
  },
  auth: {
    login: '/auth/login',
    forgotPassword: '/auth/forgot-password',
  },
} as const;

export type RoutesConfig = typeof routesConfig;
