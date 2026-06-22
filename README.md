# Beauty Hub Hurghada

Luxury Aesthetic Clinic Platform built with Next.js 15, TypeScript, Tailwind CSS, Prisma, PostgreSQL, and a SaaS-ready architecture.

---

# Overview

Beauty Hub Hurghada is a multilingual digital platform designed for aesthetic clinics and medical tourism businesses.

The platform consists of two major systems:

## 1. Marketing Website

A high-converting luxury website designed to:

* Generate consultation requests
* Generate appointment bookings
* Increase Google visibility
* Showcase treatments
* Build trust with international visitors

---

## 2. Admin Portal

A clinic management portal designed to:

* Manage appointments
* Manage patients
* Manage leads
* Manage reviews
* Manage content
* Manage gallery assets

---

# Vision

The first implementation is for:

Beauty Hub Hurghada

However, the architecture is intentionally designed to evolve into a multi-tenant SaaS platform serving multiple aesthetic clinics.

Every major entity in the system is scoped by:

```ts
clinicId
```

This allows future expansion without requiring major refactoring.

---

# Target Audience

Primary:

* European Tourists
* German Tourists
* Russian Tourists
* Polish Tourists
* English Speaking Visitors

Secondary:

* Hurghada Residents
* Local Patients

---

# Supported Languages

| Language | Code |
| -------- | ---- |
| English  | en   |
| Arabic   | ar   |
| German   | de   |
| Russian  | ru   |
| Polish   | pl   |

English is the default language.

---

# Tech Stack

## Frontend

* Next.js 15
* TypeScript
* Tailwind CSS v4
* Shadcn UI
* Framer Motion
* React Hook Form
* Zod
* Redux Toolkit
* React Query

---

## Backend

* Next.js Server Actions
* Prisma ORM
* PostgreSQL

---

## Authentication

* NextAuth

---

## Storage

* Cloudinary

---

## Deployment

* Vercel

---

## Analytics

* Google Analytics 4
* Google Tag Manager
* Google Search Console

---

# Project Goals

## Business Goals

* Increase bookings
* Increase consultations
* Improve conversion rates
* Improve clinic visibility
* Improve clinic operations

---

## Technical Goals

* Scalability
* Maintainability
* SaaS readiness
* Performance
* SEO excellence

---

# Architecture

The project follows:

## Atomic Design

```txt
Atoms
Molecules
Organisms
Templates
Sections
```

---

## Feature-Based Architecture

```txt
features/
```

Each feature owns its:

```txt
components
hooks
services
types
schemas
actions
constants
```

This prevents large monolithic codebases.

---

# Project Structure

```txt
src/

├── app
│
├── actions
│
├── components
│   ├── atoms
│   ├── molecules
│   ├── organisms
│   ├── templates
│   └── sections
│
├── features
│
├── hooks
│
├── providers
│
├── store
│
├── services
│
├── lib
│
├── utils
│
├── constants
│
├── config
│
├── types
│
├── i18n
│
├── prisma
│
├── styles
│
└── middleware
```

---

# Routing Structure

## Marketing

```txt
/
```

```txt
/treatments
```

```txt
/blog
```

```txt
/reviews
```

```txt
/gallery
```

```txt
/contact
```

```txt
/consultation
```

```txt
/medical-tourism
```

---

## Admin

```txt
/admin
```

```txt
/admin/patients
```

```txt
/admin/appointments
```

```txt
/admin/leads
```

```txt
/admin/reviews
```

```txt
/admin/blog
```

```txt
/admin/services
```

```txt
/admin/settings
```

---

## Auth

```txt
/login
```

```txt
/forgot-password
```

---

# Core Features

## Public Website

### Homepage

* Hero Section
* Trust Indicators
* Treatments
* Before & After
* Doctor Profile
* Reviews
* Medical Tourism
* CTA

---

### Treatments

Dedicated SEO pages:

```txt
/treatments/botox-hurghada
```

```txt
/treatments/fillers-hurghada
```

```txt
/treatments/prp-hurghada
```

```txt
/treatments/hair-treatment-hurghada
```

```txt
/treatments/laser-hair-removal-hurghada
```

```txt
/treatments/skin-care-hurghada
```

---

### Before & After

Case studies.

Image comparison slider.

Category filters.

---

### Reviews

* Google Reviews
* Testimonials
* Video Reviews

---

### Gallery

* Clinic
* Team
* Devices
* Treatments

---

### Medical Tourism

* Why Hurghada
* Travel Information
* Treatment Journey
* FAQ

---

### Blog

SEO-driven content marketing.

---

### Consultation Request

Lead generation form.

---

# Admin Features

## Dashboard

KPIs:

* Leads
* Patients
* Appointments
* Conversions

---

## Patients

Store:

* Personal Data
* Treatment History
* Notes

---

## Appointments

Statuses:

```txt
Pending
Confirmed
Completed
Cancelled
```

---

## Leads

Track consultation requests.

Statuses:

```txt
New
Contacted
Converted
Closed
```

---

## Reviews Management

CRUD support.

---

## Blog Management

CRUD support.

---

## Gallery Management

CRUD support.

---

## Before & After Management

CRUD support.

---

## Services Management

CRUD support.

---

# Design System

All UI components are wrapped using Atomic Design.

Example:

```tsx
import { Button } from "@/components/atoms/button";
```

Never import directly from:

```tsx
@/components/ui/*
```

outside atoms.

---

# Performance Targets

## Lighthouse

Performance:

```txt
95+
```

SEO:

```txt
95+
```

Accessibility:

```txt
90+
```

Best Practices:

```txt
95+
```

---

# SEO Requirements

## Technical SEO

* SSR
* Metadata API
* Sitemap
* Robots
* Structured Data

---

## Schema

* MedicalClinic
* LocalBusiness
* Review
* FAQ

---

# Internationalization

Implemented using:

```txt
next-intl
```

Supported Locales:

```txt
en
ar
de
ru
pl
```

English is the default locale.

---

# Coding Standards

## Naming

Components:

```txt
PascalCase
```

Hooks:

```txt
useCamelCase
```

Utilities:

```txt
camelCase
```

Constants:

```txt
UPPER_SNAKE_CASE
```

Files:

```txt
kebab-case
```

---

# Git Workflow

Branch Naming:

```txt
feature/appointments
```

```txt
feature/patients
```

```txt
feature/blog
```

```txt
fix/auth
```

---

Commit Convention:

```txt
feat:
```

```txt
fix:
```

```txt
refactor:
```

```txt
docs:
```

```txt
chore:
```

Example:

```txt
feat(appointments): add appointment status workflow
```

---

# Future SaaS Roadmap

Planned Features:

* Multi Clinic Support
* Staff Management
* CRM
* Inventory
* Billing
* Subscription Plans
* Payments
* AI Skin Analysis
* AI Appointment Assistant

---

# Project Principle

Build for one clinic.

Architect for one hundred clinics.

The codebase should always prioritize:

1. Scalability
2. Maintainability
3. Type Safety
4. Performance
5. SEO
6. Developer Experience
7. SaaS Readiness

---

Version

```txt
v1.0.0
```

Project Status

```txt
Planning Phase
```
