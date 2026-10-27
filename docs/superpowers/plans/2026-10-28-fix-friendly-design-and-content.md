# Implementation Plan: Friendly Home Services Design & Content Overhaul

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Overhaul the Homesync LLC website across all 5 pages to feature a crisp white architectural theme with subtle micro-grid, rich scrolling animations, and 100% human, friendly, user-centric home contractor copy—eliminating all robotic telemetry/software jargon.

**Architecture:** 
1. Build a clean, lightweight white theme with a subtle blueprint micro-grid pattern in `src/index.css` and `src/App.css`.
2. Restructure services into the 3 Pillars (`Maintenance & Handyman`, `Property Preservation`, `Rental Turnovers`) in a dedicated content helper `src/data/friendlyContent.ts`.
3. Update `src/router.tsx` to include `get-quote` route.
4. Refactor `HomePage.tsx`, `ServicesPage.tsx`, `AboutPage.tsx`, `ContactPage.tsx`, and add `GetQuotePage.tsx` using natural American contractor copy and maximum scrolling interactions.
5. Update `Header.tsx` and `Footer.tsx` with light styling and clean navigation.

**Tech Stack:** React 19, TypeScript, Vite 7, React Router 7, Lucide React, CSS Scroll-driven animations.

**Spec Reference:** [`5-page-design-specification.md`](file:///home/mhcybroot/.gemini/antigravity/brain/a4b1d43a-cfad-4b00-83d4-ed6b844d6591/5-page-design-specification.md).

---

## Global Constraints

- Zero new npm dependencies: use existing React, Lucide, and CSS capabilities.
- Pure White Theme (`#FFFFFF`) with subtle micro-pattern (`#E2E8F0`), deep slate text (`#0F172A`), and safety amber accents (`#F97316`).
- Absolutely zero robotic/tech/telemetry jargon (no "HUD", no "telemetry", no "SLA triage", no "coordinates").
- Absolutely NO unrealistic time-guarantee claims (no "24-hour response", no "24/7 dispatch", no "48-72h guarantees"). Use honest, dependable terms: "Prompt Service", "Reliable Turnarounds", and "Convenient Scheduling".
- Build (`npm run build`) and lint (`npm run lint`) must pass with 0 errors.

---

### Task 1: Friendly Content & Services Data Layer

**Files:**
- Create: `src/data/friendlyContent.ts`
- Create: `tests/friendlyContent.test.js`

- [ ] **Step 1: Write test for content completeness in `tests/friendlyContent.test.js`**
  - Verify that `maintenanceServices` contains exactly the 12 requested trade services.
  - Verify that `preservationServices` contains the 6 vacant property services.
  - Verify that `turnoverSteps` contains the 4 make-ready steps.
  - Verify all descriptions are non-empty and free of tech jargon ("telemetry", "HUD", "coordinates").

- [ ] **Step 2: Implement `src/data/friendlyContent.ts`**
  - Define `companyInfo`: name, phone `(804) 292-2009`, email `info@homesyncllc.org`, address `3540 Pump Rd, Richmond, VA 23233`.
  - Define `maintenanceServices` (12 items with friendly titles, scopes, and icons).
  - Define `preservationServices` (6 items with friendly scopes).
  - Define `turnoverSteps` (4 steps: Trash-Out, Repairs & Checks, Patch & Paint, Deep Clean & Re-Key).
  - Define `serviceAreas` (Richmond City, Henrico, Chesterfield, Midlothian, Short Pump, Glen Allen, Hanover, Petersburg).

- [ ] **Step 3: Run test with Node native runner**
  - Run: `node --test tests/friendlyContent.test.js`
  - Expected: PASS

---

### Task 2: Pure White Theme Styling & Subtle Micro-Grid Pattern

**Files:**
- Modify: `src/index.css`
- Modify: `src/App.css`

- [ ] **Step 1: Add white background micro-grid utility & animation classes**
  - Add `.bg-blueprint-grid`: pure `#FFFFFF` background with an ultra-subtle `24px x 24px` grid pattern using `#E2E8F0` at 0.5px.
  - Add scroll animation utilities (`.scroll-indicator`, `.sticky-nav`, `.pinned-panel`, `.reveal-on-scroll`).
  - Add high-contrast typography variables: `--text-primary: #0F172A`, `--text-secondary: #64748B`, `--accent-amber: #F97316`, `--border-subtle: #E2E8F0`.

- [ ] **Step 2: Test build**
  - Run: `npm run build`
  - Expected: PASS

---

### Task 3: Overhaul HomePage (`src/pages/HomePage.tsx`)

**Files:**
- Modify: `src/pages/HomePage.tsx`

- [ ] **Step 1: Refactor HomePage layout and copy**
  - Top scroll progress bar advancing with viewport.
  - Hero section: "Home Repairs & Property Care Made Simple" with direct buttons (`Get a Free Estimate`, `See Our Services ↓`).
  - Pinned 3-Pillar scroll showcase (Maintenance & Handyman, Property Preservation, Rental Turnovers).
  - Interactive Before & After transformation slider.
  - 3 Friendly persona cards (Homeowners, Landlords, Real Estate Investors).
  - Richmond service coverage strip and conversion CTA.

- [ ] **Step 2: Verify build and lint**
  - Run: `npm run build`
  - Expected: PASS

---

### Task 4: Overhaul ServicesPage (`src/pages/ServicesPage.tsx`)

**Files:**
- Modify: `src/pages/ServicesPage.tsx`

- [ ] **Step 1: Refactor ServicesPage layout and copy**
  - Sticky pillar selector tabs: `[All Services]`, `[Maintenance & Handyman]`, `[Property Preservation]`, `[Rental Turnovers]`.
  - 12 Maintenance service cards with scope checklists and "Get a Quote" action.
  - 6 Property Preservation cards for vacant home care.
  - 4-Stage Rental Turnover make-ready timeline.
  - Bottom friendly consultation CTA with direct phone call link.

- [ ] **Step 2: Verify build and lint**
  - Run: `npm run build`
  - Expected: PASS

---

### Task 5: Create Dedicated GetQuotePage & Update Router

**Files:**
- Create: `src/pages/GetQuotePage.tsx`
- Modify: `src/router.tsx`
- Modify: `src/components/Header.tsx`
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Implement `GetQuotePage.tsx`**
  - 4-Step interactive guided quote builder:
    - Step 1: Select Pillar (Maintenance / Preservation / Turnover).
    - Step 2: Select specific services from dynamic checklist.
    - Step 3: Property address, urgency, and access info (lockbox).
    - Step 4: Contact details & photo upload dropzone.
  - Clear timeline side card: What happens next (Quick Scope Review -> Written Quote -> Scheduled Service).

- [ ] **Step 2: Register `/get-quote` route in `src/router.tsx`**

- [ ] **Step 3: Update `Header.tsx` and `Footer.tsx`**
  - Add `Get Quote` to top navigation.
  - Ensure links and phone numbers are active and styled in pure white theme.

- [ ] **Step 4: Verify build and lint**
  - Run: `npm run build`
  - Expected: PASS

---

### Task 6: Overhaul AboutPage & ContactPage

**Files:**
- Modify: `src/pages/AboutPage.tsx`
- Modify: `src/pages/ContactPage.tsx`

- [ ] **Step 1: Update AboutPage**
  - Friendly story of why Homesync was founded (ending the headache of unreliable contractors).
  - 4 Trust pillars: Show up on time, upfront pricing, photo proof of work, licensed & insured.
  - Local Richmond community roots and service area directory.

- [ ] **Step 2: Update ContactPage**
  - Quick emergency phone banner for active leaks or broken locks.
  - 3 Ways to reach us: Call/Text `(804) 292-2009`, Email `info@homesyncllc.org`, Office at `3540 Pump Rd`.
  - Simple, friendly contact form with SMS update consent.

- [ ] **Step 3: Run full verification suite**
  - Run: `node --test tests/friendlyContent.test.js && npm run lint && npm run build`
  - Expected: All pass with 0 errors.
