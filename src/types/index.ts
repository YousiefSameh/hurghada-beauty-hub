export type UserRole = 'ADMIN' | 'DOCTOR' | 'STAFF';

export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface Clinic extends BaseEntity {
  name: string;
  domain?: string | null;
}

export interface User extends BaseEntity {
  clinicId: string;
  name?: string | null;
  email: string;
  role: UserRole;
}

export interface Patient extends BaseEntity {
  clinicId: string;
  firstName: string;
  lastName: string;
  email?: string | null;
  phone: string;
  dateOfBirth?: string | null;
}

export interface Appointment extends BaseEntity {
  clinicId: string;
  patientId: string;
  dateTime: string;
  status: 'SCHEDULED' | 'COMPLETED' | 'CANCELLED';
  notes?: string | null;
}

export interface Lead extends BaseEntity {
  clinicId: string;
  name: string;
  email?: string | null;
  phone: string;
  source?: string | null;
  status: 'NEW' | 'CONTACTED' | 'QUALIFIED' | 'LOST';
}
