# Focus Services Restructure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Re-architect Homesync's service offerings to focus prominently on 13 primary trade and maintenance categories while repositioning other services into a lower-visibility secondary tier across all pages and quote forms.

**Architecture:** Split service data in `src/data/siteContent.js` into distinct `primaryServices` (13 focused categories) and `secondaryServices` (additional support services), while preserving `serviceItems` and `featuredServices` exports for backward compatibility. Update UI components (`ServicesPage`, `HomePage`, `GetQuotePage`, `ServiceCard`, `AboutPage`) to present the focused services with priority and group secondary services cleanly.

**Tech Stack:** React 19, Vite 8, React Router 7, Native Node.js Test Runner (`node:test`, `node:assert`).

**Spec:** User request:
- 13 Focused Services: General Handyman Services, HVAC & Appliances, Painting (Interior and Exterior), Drywall (Repair and Texture), Carpentry & Flooring, Fencing, Decking & Landscaping, Cleaning & Debris Removal, Pressure Wash, Garage Door, Roofing (Tarping & Repair), Plumbing & Electrical (Minor Repairs), Driveway Maintenance, Turnover.
- Other services (Securing & Locks, Inspections, Winterization, Health & Safety Repairs): Given lower priority ("little focus not fully focus").

## Global Constraints

- Zero new external npm dependencies: use native standard library (`node:test`) for tests.
- Maintain backward compatibility for existing exports (`serviceItems`, `featuredServices`).
- Maintain passing build (`npm run build`) and clean lint (`npm run lint`).
- Preserve all existing styling themes and responsive layout behavior.

## Review Focus

1. **Card index padding past 9:** Service index numbers past 9 must render cleanly as `10`, `11`, `12`, `13` instead of `010`, `011`.
2. **Quote Form Dropdown completeness:** All 13 primary services and all secondary services must be selectable in the quote request form with clear optgroup categorization.
3. **Outdated copy removal:** Remove obsolete references like "Eleven core service categories" from `ServicesPage.jsx`.
4. **Image fallback integrity:** Every service item must have valid image URLs and meaningful alt text.
5. **SEO consistency:** Update SEO descriptions on `ServicesPage` and `HomePage` to accurately reflect the new primary services.

---

### Task 1: Add Test Suite & Restructure Service Data

**Files:**
- Create: `tests/services.test.js`
- Modify: `src/data/siteContent.js`

**Interfaces:**
- Consumes: none
- Produces: `primaryServices: Array<ServiceItem>`, `secondaryServices: Array<ServiceItem>`, `serviceItems: Array<ServiceItem>`, `featuredServices: Array<ServiceItem>`

- [ ] **Step 1: Write the failing test in `tests/services.test.js`**

```javascript
import test from 'node:test'
import assert from 'node:assert/strict'
import { primaryServices, secondaryServices, serviceItems, featuredServices } from '../src/data/siteContent.js'

test('primaryServices contains exactly the 13 requested focused services', () => {
  const expectedTitles = [
    'General Handyman Services',
    'HVAC & Appliances',
    'Painting (Interior and Exterior)',
    'Drywall (Repair and Texture)',
    'Carpentry & Flooring',
    'Fencing, Decking & Landscaping',
    'Cleaning & Debris Removal',
    'Pressure Wash',
    'Garage Door',
    'Roofing (Tarping & Repair)',
    'Plumbing & Electrical (Minor Repairs)',
    'Driveway Maintenance',
    'Turnover',
  ]
  assert.strictEqual(primaryServices.length, 13)
  const actualTitles = primaryServices.map((s) => s.title)
  assert.deepStrictEqual(actualTitles, expectedTitles)
})

test('secondaryServices contains additional support services', () => {
  assert.ok(secondaryServices.length >= 3)
  for (const s of secondaryServices) {
    assert.ok(s.title && s.description && s.imageSrc && s.imageAlt)
  }
})

test('serviceItems and featuredServices maintain backward compatibility', () => {
  assert.strictEqual(serviceItems.length, primaryServices.length + secondaryServices.length)
  assert.strictEqual(featuredServices.length, 6)
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/services.test.js`
Expected: FAIL with "Cannot find module" or missing exports `primaryServices` / `secondaryServices`.

- [ ] **Step 3: Implement `primaryServices` and `secondaryServices` in `src/data/siteContent.js`**

Refactor `src/data/siteContent.js` to:
- Add card image mappings for trades (roofing, driveway, pressure wash, plumbing, HVAC, garage door).
- Define `primaryServices` array with all 13 items.
- Define `secondaryServices` with 'Securing & Lock Services', 'Initial Inspections & Reports', 'Winterization', 'Health & Safety Repairs'.
- Export `serviceItems = [...primaryServices, ...secondaryServices]` and `featuredServices = primaryServices.slice(0, 6)`.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/services.test.js`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add tests/services.test.js src/data/siteContent.js
git commit -m "feat: restructure service data into primary focus and secondary tiers"
```

---

### Task 2: Fix Index Formatting & Card Presentation in ServiceCard

**Files:**
- Modify: `src/components/ServiceCard.jsx`

**Interfaces:**
- Consumes: `ServiceCard({ service, index, isSecondary })`
- Produces: Correct two-digit index numbers (`01`, `02`, ..., `10`, `11`, `12`, `13`)

- [ ] **Step 1: Write verification test in `tests/services.test.js`**

Add assertion in `tests/services.test.js` checking that service index formatting utility produces padded 2-digit strings for indices 0 through 12.

- [ ] **Step 2: Run test to verify failure or need for update**

Run: `node --test tests/services.test.js`

- [ ] **Step 3: Update `src/components/ServiceCard.jsx`**

Update `ServiceCard.jsx` to format `index + 1` with `String(index + 1).padStart(2, '0')` so index 9 renders as `10` instead of `010`. Allow optional `badge` or `isSecondary` prop for visual differentiation.

- [ ] **Step 4: Run tests and build**

Run: `node --test tests/services.test.js && npm run build`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/ServiceCard.jsx tests/services.test.js
git commit -m "fix: format service card index with two-digit padding"
```

---

### Task 3: Restructure Services Page Layout & Hierarchy

**Files:**
- Modify: `src/pages/ServicesPage.jsx`

**Interfaces:**
- Consumes: `primaryServices`, `secondaryServices` from `../data/siteContent.js`
- Produces: Primary focused grid (13 services) + Secondary tier section ("Additional Support Services")

- [ ] **Step 1: Review current `ServicesPage.jsx` and prepare test**

Add an end-to-end integration check in `tests/services.test.js` or verify build.

- [ ] **Step 2: Update `src/pages/ServicesPage.jsx`**

- Import `primaryServices` and `secondaryServices` from `../data/siteContent.js`.
- Update hero header copy from "Eleven core service categories" to "Comprehensive trade, maintenance, and turnover services."
- Render `primaryServices` in the main `.services-grid`.
- Add an "Additional & Specialized Services" section below for `secondaryServices` with clear secondary hierarchy (concise cards or lighter presentation).
- Update `<Seo>` title and description to list the key focused services (Handyman, HVAC & Appliances, Painting, Drywall, Turnover, etc.).

- [ ] **Step 3: Run build and lint**

Run: `npm run lint && npm run build`
Expected: PASS with 0 errors.

- [ ] **Step 4: Commit**

```bash
git add src/pages/ServicesPage.jsx
git commit -m "feat: update services page with primary focus grid and secondary section"
```

---

### Task 4: Update Get Quote, Home, and About Pages

**Files:**
- Modify: `src/pages/GetQuotePage.jsx`
- Modify: `src/pages/HomePage.jsx`
- Modify: `src/pages/AboutPage.jsx`

**Interfaces:**
- Consumes: `primaryServices`, `secondaryServices`, `featuredServices`
- Produces: Categorized quote request dropdown (`<optgroup>`) and updated service mentions

- [ ] **Step 1: Update `src/pages/GetQuotePage.jsx`**

- Import `primaryServices` and `secondaryServices` from `../data/siteContent.js`.
- Set initial default service to `primaryServices[0].title`.
- Update `<select id="service">` to render:
  ```jsx
  <select id="service" name="service" value={formData.service} onChange={handleChange}>
    <optgroup label="Primary Services">
      {primaryServices.map((service) => (
        <option key={service.title} value={service.title}>
          {service.title}
        </option>
      ))}
    </optgroup>
    <optgroup label="Additional Services">
      {secondaryServices.map((service) => (
        <option key={service.title} value={service.title}>
          {service.title}
        </option>
      ))}
    </optgroup>
  </select>
  ```
- Update `<Seo>` description.

- [ ] **Step 2: Update `src/pages/HomePage.jsx` and `src/pages/AboutPage.jsx`**

- Ensure `HomePage.jsx` showcases `featuredServices` with an updated section title emphasizing the primary trades & maintenance capabilities, with an action link to view all 13 services on `/services`.
- Update `AboutPage.jsx` service representation.

- [ ] **Step 3: Run full verification suite**

Run: `node --test tests/services.test.js && npm run lint && npm run build`
Expected: All tests pass, lint passes, build passes.

- [ ] **Step 4: Commit**

```bash
git add src/pages/GetQuotePage.jsx src/pages/HomePage.jsx src/pages/AboutPage.jsx
git commit -m "feat: categorize quote form services and align home and about pages"
```
