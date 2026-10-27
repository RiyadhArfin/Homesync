import test from 'node:test';
import assert from 'node:assert/strict';
import {
  companyInfo,
  maintenanceServices,
  preservationServices,
  turnoverSteps,
  serviceAreas,
} from '../src/data/friendlyContent.ts';

test('companyInfo contains required business details and no jargon', () => {
  assert.equal(companyInfo.name, 'Homesync LLC');
  assert.equal(companyInfo.phone, '(804) 292-2009');
  assert.ok(companyInfo.email.includes('@homesyncllc.org'));
  assert.ok(companyInfo.hours.includes('7:00 AM'));
  
  // Verify NO 24/7 or 24-hour response claims
  assert.ok(!companyInfo.hours.toLowerCase().includes('24/7'));
  assert.ok(!companyInfo.hours.toLowerCase().includes('24-hour'));
  assert.ok(!companyInfo.tagline.toLowerCase().includes('24/7'));
});

test('maintenanceServices contains exactly 12 requested trade services', () => {
  assert.equal(maintenanceServices.length, 12);
  const titles = maintenanceServices.map((s) => s.title);
  
  const expectedServices = [
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
  ];

  for (const expected of expectedServices) {
    assert.ok(titles.includes(expected), `Missing maintenance service: ${expected}`);
  }
});

test('preservationServices contains exactly 6 vacant property services', () => {
  assert.equal(preservationServices.length, 6);
  const titles = preservationServices.map((s) => s.title);

  const expectedPreservation = [
    'Securing & Lock Services',
    'Lawn & Landscape Care',
    'Debris Removal',
    'Initial Inspections & Reports',
    'General Repairs',
    'Exterior Maintenance',
  ];

  for (const expected of expectedPreservation) {
    assert.ok(titles.includes(expected), `Missing preservation service: ${expected}`);
  }
});

test('turnoverSteps contains 4 make-ready steps', () => {
  assert.equal(turnoverSteps.length, 4);
  assert.equal(turnoverSteps[0].step, 1);
  assert.equal(turnoverSteps[3].step, 4);
});

test('no robotic or telemetry jargon in content', () => {
  const allText = JSON.stringify({
    companyInfo,
    maintenanceServices,
    preservationServices,
    turnoverSteps,
    serviceAreas,
  }).toLowerCase();

  const bannedKeywords = [
    'telemetry',
    'hud ',
    'sla triage',
    'coordinates',
    'latency',
    'protocol',
    '24/7',
    '24-hour response',
    '24 hour response',
  ];

  for (const word of bannedKeywords) {
    assert.ok(
      !allText.includes(word),
      `Found banned robotic jargon or 24/7 claim: "${word}"`
    );
  }
});
