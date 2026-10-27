# Stitch UI & Visual Asset Generation Plan for Homesync LLC

> **For agentic workers:** REQUIRED SUB-SKILL: Use `call_mcp_tool` with `ServerName: "stitch"` to execute this plan screen-by-screen. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a dedicated Stitch project and generate pixel-perfect, high-fidelity UI screens and photographic assets for all 5 pages of Homesync LLC based on the 3-Pillar architecture (Maintenance, Preservation, Turnover).

**Architecture:** Initialize a unified Stitch project (`Homesync LLC - 3-Pillar Property Solutions`) with an institutional slate/navy and amber accent design system. Use `generate_screen_from_text` with rich prompts covering all sections, components, photo assets, and micro-interactions for Desktop viewport. Once generated, inspect and download screen assets for frontend integration.

**Tech Stack:** Stitch MCP (`create_project`, `generate_screen_from_text`, `get_screen`, `download_file`, `list_screens`), Material Design / Tailwind tokens, Lucide Iconography.

**Spec Reference:** [`docs/superpowers/plans/2026-10-28-focus-services-restructure.md`](file:///home/mhcybroot/Projects/Homesync/docs/superpowers/plans/2026-10-28-focus-services-restructure.md) and [`5-page-design-specification.md`](file:///home/mhcybroot/.gemini/antigravity/brain/a4b1d43a-cfad-4b00-83d4-ed6b844d6591/5-page-design-specification.md).

---

## Global Constraints

- Device Type: `DESKTOP` for comprehensive layouts (tablet and mobile variants generated subsequently if needed).
- Brand Palette: Deep Slate `#0F172A`, High-Contrast White `#FFFFFF`, Accent Ember `#F97316` or Gold `#EAB308`, Muted Slate `#94A3B8`.
- Model: `GEMINI_3_8_FLASH` for ultra-detailed, compliant UI generation.
- All 13 Maintenance services, 6 Preservation services, and Turnover workflow must be represented with authentic photographic imagery and clean typographic hierarchy.

---

## Task 1: Initialize Project & Shared Design Tokens in Stitch

**Action:** Call `stitch:create_project` to initialize a clean design canvas container.

- [ ] **Step 1: Execute `create_project`**
  - Tool: `call_mcp_tool`
  - Arguments:
    ```json
    {
      "ServerName": "stitch",
      "ToolName": "create_project",
      "Arguments": {
        "title": "Homesync LLC - 3-Pillar Property Platform"
      }
    }
    ```
- [ ] **Step 2: Capture `projectId` from response for subsequent screen generation calls.**

---

## Task 2: Generate Page 1 — Homepage UI & Visual Assets

**Screen Focus:** Cinematic video hero, live dispatch pill, pinned 3-Pillar scroll showcase, interactive before/after slider, and client persona pathways.

- [ ] **Step 1: Execute `generate_screen_from_text` for Homepage**
  - Tool: `call_mcp_tool`
  - Arguments:
    - `projectId`: `<PROJECT_ID>`
    - `deviceType`: `DESKTOP`
    - `modelId`: `GEMINI_3_8_FLASH`
    - `prompt`:
      ```text
      A world-class, ultra-modern corporate property services homepage for 'Homesync LLC' (Richmond, Virginia). 
      Theme: High-end dark slate (#0F172A) with energetic amber (#F97316) accents and crisp white typography.

      Header:
      - Clean top banner: 'Richmond, VA · Licensed & Insured · 24/7 Rapid Dispatch: (804) 292-2009'
      - Navbar: Logo 'Homesync LLC', Navigation links ('Home', 'Services', 'About Us', 'Get Quote', 'Contact'), and a prominent CTA button 'Get an Estimate'.

      Section 1 - Cinematic Hero:
      - Headline: 'Complete Property Care: Maintenance, Preservation & Turnovers'
      - Subhead: 'One trusted partner for routine repairs, vacant property protection, and fast tenant turnarounds across Greater Richmond.'
      - Buttons: 'Get a Free Quote' (Primary Amber) and 'Explore 3 Core Services ↓' (Glass Ghost)
      - Interactive Floating Pill Widget: 'Live Dispatch Tracker' showing real-time updates: 'Roof Tarping in Henrico — Completed 14m ago', 'Unit Turnover in Richmond — Active'.
      - High-impact background showing skilled technicians and residential property transformation.

      Section 2 - Pinned 3-Pillar Scroll Showcase:
      - Headline: 'Three Pillars of Property Excellence'
      - Subtitle: 'Select a pillar to explore our specialized capabilities'
      - Card 1 (Maintenance - Primary Focus): Badge 'Everyday Trade & Handyman Care'. Includes service tag chips for: General Handyman, HVAC & Appliances, Painting, Drywall Repair, Carpentry & Flooring, Fencing & Landscaping, Cleaning & Debris, Pressure Wash, Garage Door, Roofing, Plumbing & Minor Electrical, Driveway. CTA: 'Explore Maintenance Services →'. High quality photo of professional trade tools and newly painted interior.
      - Card 2 (Preservation - Asset Defense): Badge 'Bank & Vacant Property Defense'. Service chips: Securing & Locks, Lawn Care, Trash-Outs, 24/48hr Initial Inspections, Health & Safety Repairs, Winterization. High quality photo of secured exterior and clean yard. CTA: 'Explore Preservation Services →'.
      - Card 3 (Turnover - Make-Ready): Badge 'Fast-Track Turnaround for Landlords'. Service chips: Complete Trash-out, Deep Clean, Drywall Patch & Paint, Hardware & Locks, Move-In Punch List. High quality photo of spotless turned apartment. CTA: 'Book a Unit Turnover →'.

      Section 3 - Interactive Before/After Transformation:
      - Split slider card showing a distressed vacant unit on the left and a pristine renovated rental unit on the right.
      - Stat badges: '99.4% On-Time Completion', '< 48 Hr Standard Turnover', '100% Photo Verified'.

      Section 4 - Client Persona Pathways:
      - 3 Cards: 'Property Managers & Landlords', 'Banks & REO Asset Managers', 'Homeowners & Real Estate Investors'.

      Section 5 - Conversion CTA Banner:
      - 'Ready to Streamline Your Property Work Orders?' with phone '(804) 292-2009' and 'Request Free Quote' button.

      Footer:
      - Company info, service locations (Richmond, Henrico, Chesterfield, Midlothian, Petersburg, Hanover), license notice, and quick links.
      ```

- [ ] **Step 2: Verify screen generation status and record `screenId`.**

---

## Task 3: Generate Page 2 — Services Catalog UI & Photo Assets

**Screen Focus:** Exhaustive 3-Pillar interactive catalog with tab navigation, detailed service cards with scope checklists, and individual quote request actions.

- [ ] **Step 1: Execute `generate_screen_from_text` for Services Page**
  - Tool: `call_mcp_tool`
  - Arguments:
    - `projectId`: `<PROJECT_ID>`
    - `deviceType`: `DESKTOP`
    - `modelId`: `GEMINI_3_8_FLASH`
    - `prompt`:
      ```text
      A comprehensive, structured Services Catalog page for 'Homesync LLC'.
      Theme: Modern dark slate (#0F172A) with crisp white cards and amber (#F97316) highlights.

      Header:
      - Page Eyebrow: 'Comprehensive Property Solutions'
      - Title: 'Our Three Operational Pillars'
      - Subtitle: 'From routine handyman maintenance to bank preservation and 48-hour rental turnovers.'
      - Sticky Tab Selector: '[All Services]' | '[Pillar 1: Maintenance (12)]' | '[Pillar 2: Preservation (6)]' | '[Pillar 3: Unit Turnovers]'

      Pillar 1: Maintenance & Handyman Services (Primary Trade Focus):
      - 12 Rich Service Cards in a 3-column grid, each with an authentic photo, title, scope checklist, and 'Request Quote' link:
        1. General Handyman Services (punch list, fixtures, mounting, repairs)
        2. HVAC & Appliances (filter swaps, coil cleaning, diagnostic, installs)
        3. Painting (Interior & Exterior, caulking, color matching)
        4. Drywall (Repair, water damage, texture matching, mud/tape)
        5. Carpentry & Flooring (baseboard, trim, LVP, subfloor, door frames)
        6. Fencing, Decking & Landscaping (board replacements, staining, trimming)
        7. Cleaning & Debris Removal (estate trash-outs, haul-away, disposal)
        8. Pressure Washing (driveways, siding, concrete, gutters)
        9. Garage Door Services (spring inspection, tracks, openers, sensors)
        10. Roofing (Tarping & Repair, shingle patch, leak defense)
        11. Plumbing & Minor Electrical (fixtures, faucets, disposals, outlets, switches)
        12. Driveway Maintenance (asphalt crack fill, sealcoat, gravel leveling)

      Pillar 2: Property Preservation (Asset Protection):
      - 6 Dedicated Cards tailored for asset managers:
        1. Securing & Lock Services (re-keying, deadbolts, lockbox HUD compliant)
        2. Lawn & Landscape Care (up to 24in cut, weed-whacking, tree perimeter)
        3. Debris Removal / Trash-Out (hazard segregation, broom clean)
        4. Initial Inspections & Reports (50+ photo condition report in 24-48hrs)
        5. Health & Safety Priority Repairs (boarding, handrails, hazards)
        6. Exterior Maintenance & Winterization (freeze defense, water shutoff)

      Pillar 3: Unit Turnover Workflow (Make-Ready):
      - A visual 4-step horizontal process diagram:
        Stage 1: Trash-Out & Deep Clean -> Stage 2: Plumbing & Fixture Audit -> Stage 3: Patch, Paint & Refresh -> Stage 4: Re-Key & Final Move-In Walk.
      - Guaranteed 48-72 hour turnover SLA badge.

      Bottom CTA:
      - 'Need a Customized Service Package?' with direct quote button.
      ```

- [ ] **Step 2: Record `screenId`.**

---

## Task 4: Generate Page 3 — About Us UI & Visual Assets

**Screen Focus:** Authentic local company presence, team capabilities, standards, licenses, and coverage map.

- [ ] **Step 1: Execute `generate_screen_from_text` for About Page**
  - Tool: `call_mcp_tool`
  - Arguments:
    - `projectId`: `<PROJECT_ID>`
    - `deviceType`: `DESKTOP`
    - `modelId`: `GEMINI_3_8_FLASH`
    - `prompt`:
      ```text
      An authoritative, trust-building 'About Us' page for 'Homesync LLC'.
      Theme: High-end corporate trade aesthetic (#0F172A slate with amber #F97316 accents).

      Section 1 - Hero:
      - Headline: 'Built for Property Performance. Engineered for Reliability.'
      - Subhead: 'Connecting Richmond property managers, investors, and homeowners with accountable, photo-verified trade services.'
      - Authentic image of field coordination, branded work vehicles, and quality control reviews.

      Section 2 - Why Homesync Exists (The Problem We Solve):
      - Two-column visual layout comparing 'The Traditional Way' (chasing 5 different sub-contractors, delays, no photos) vs 'The Homesync Way' (1 single point of contact, 3 pillars under one roof, 100% photo verification).

      Section 3 - The Homesync Standard:
      - 3 Key Value Pillars:
        1. 100% Photographic Verification: Every work order receives before/during/after high-res photo proof.
        2. Commercial Licensing & Full Insurance: Comprehensive general liability for asset protection.
        3. Local Richmond Roots: Rapid dispatch across Richmond, Henrico, Chesterfield, Midlothian, and Hanover.

      Section 4 - Richmond Geographic Coverage Map:
      - Stylized dark map graphic highlighting primary service areas with average dispatch times (< 2 hours for emergencies).

      Section 5 - Leadership & Commitment to Quality:
      - Message from the founder, emphasis on integrity, transparent pricing, and zero hidden fees.
      ```

- [ ] **Step 2: Record `screenId`.**

---

## Task 5: Generate Page 4 — Dedicated 'Get Quote' Interactive Hub

**Screen Focus:** The primary conversion engine featuring the 4-step guided quote builder for the 3 pillars.

- [ ] **Step 1: Execute `generate_screen_from_text` for Get Quote Page**
  - Tool: `call_mcp_tool`
  - Arguments:
    - `projectId`: `<PROJECT_ID>`
    - `deviceType`: `DESKTOP`
    - `modelId`: `GEMINI_3_8_FLASH`
    - `prompt`:
      ```text
      A high-conversion, modern 4-step Interactive Quote Request Page for 'Homesync LLC'.
      Theme: Dark slate (#0F172A) with high-contrast form panels, illuminated active steps, and vibrant amber (#F97316) submit action.

      Header:
      - Title: 'Request a Fast, Itemized Quote'
      - Subtitle: 'Tell us about your property requirement. Most estimates delivered within 4 business hours.'
      - Trust badges: '✓ 100% Free Estimates' | '✓ No Obligation' | '✓ Same-Day Dispatch Available'

      Interactive 4-Step Quote Builder Widget (Prominent Centered Card):
      - Step Indicator: [1. Select Pillar] -> [2. Choose Services] -> [3. Property & Urgency] -> [4. Contact & Photos]

      Step 1 - Select Primary Service Pillar (3 large clickable cards with icons & badges):
      - [Card 1 - Maintenance & Repairs] (Handyman, HVAC, Paint, Drywall, Plumbing, Electrical)
      - [Card 2 - Property Preservation] (Securing, Trash-Out, Inspection, Lawn, Winterization)
      - [Card 3 - Full Unit Turnover] (Make-Ready Unit Package for Landlords)

      Step 2 - Multi-Select Specific Services:
      - Multi-column checklist with checkboxes for all trade services (e.g., Painting, Drywall Texture, Pressure Wash, Garage Door, Roofing, Plumbing).

      Step 3 - Property & Urgency Details:
      - Fields: Property Address, City, ZIP.
      - Property Type Pills: [Single Family] [Multi-Family / Apartment] [Commercial] [Vacant Asset]
      - Urgency Radios: [Immediate / Emergency (24h)] [Within 48 Hours] [This Week] [Flexible Planning]
      - Access Notes: [Lockbox Code input] [Tenant Occupied] [Key at Leasing Office]

      Step 4 - Contact Info & File Upload:
      - Inputs: Full Name, Company / Entity, Phone Number, Email Address.
      - Drag-and-drop Photo Upload Box: 'Upload property photos or inspection sheets for accurate pricing (PNG, JPG, PDF)'.
      - Scope textarea: 'Additional details or special instructions'.
      - Large Amber Button: 'Submit Quote Request →'

      Side Information / What Happens Next:
      - 3 Step Timeline: 1. Scope Review (< 2 hrs) -> 2. Itemized Estimate Sent -> 3. Fast Field Dispatch.
      - Emergency Banner: 'Need immediate emergency dispatch? Call (804) 292-2009 now.'
      ```

- [ ] **Step 2: Record `screenId`.**

---

## Task 6: Generate Page 5 — Contact Page UI & Dispatch Hub

**Screen Focus:** Direct inquiries, 24/7 emergency dispatch hotline, office address, and service area map.

- [ ] **Step 1: Execute `generate_screen_from_text` for Contact Page**
  - Tool: `call_mcp_tool`
  - Arguments:
    - `projectId`: `<PROJECT_ID>`
    - `deviceType`: `DESKTOP`
    - `modelId`: `GEMINI_3_8_FLASH`
    - `prompt`:
      ```text
      A professional, responsive Contact & Rapid Dispatch Page for 'Homesync LLC'.
      Theme: Deep slate (#0F172A) with safety amber/red accents for emergency callouts and clean white contact cards.

      Section 1 - Emergency Dispatch Alert Banner:
      - High-visibility banner: 'Active Property Emergency? (Water leak, fallen tree, broken entry) Call Rapid Dispatch: (804) 292-2009 (24/7 Available)'

      Section 2 - Contact Information Grid (3 Pillars of Contact):
      - Card 1 (Direct Phone): '(804) 292-2009' - Hours: Mon-Sun 7:00 AM - 7:00 PM EST (24/7 Emergency).
      - Card 2 (Direct Email): 'info@homesyncllc.org' - Fast response for work orders, vendor inquiries, and general questions.
      - Card 3 (Physical Office): '3540 Pump Rd, Richmond, VA 23233' - Central dispatch hub.

      Section 3 - Direct Message Form:
      - Clean two-column card with input fields: Name, Email, Phone, Subject dropdown ('General Question', 'Billing', 'Vendor Partnership', 'Emergency Dispatch').
      - Textarea: 'Your Message'.
      - SMS Consent Checkbox: 'I agree to receive service status updates and dispatch SMS from Homesync LLC.'
      - Button: 'Send Message'

      Section 4 - Interactive Coverage Map & County Directory:
      - Styled map graphic of Greater Richmond highlighting service boundaries: Richmond City, Henrico County, Chesterfield County, Hanover County, Midlothian, Glen Allen, Petersburg.
      ```

- [ ] **Step 2: Record `screenId`.**

---

## Task 7: Review, Asset Extraction & Frontend Handoff

- [ ] **Step 1: List all generated screens using `stitch:list_screens`.**
- [ ] **Step 2: Inspect visual preview links and screenshots for each screen.**
- [ ] **Step 3: Extract and download generated photographic assets and component structures into `src/assets/images/` and the React components.**
