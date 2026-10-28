import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

function getFilesRecursively(dir, extensions) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(fullPath, extensions));
    } else if (extensions.some((ext) => file.endsWith(ext))) {
      results.push(fullPath);
    }
  }
  return results;
}

test('no legacy orange or amber accent colors exist in src/', () => {
  const srcDir = path.resolve('src');
  const files = getFilesRecursively(srcDir, ['.tsx', '.ts', '.css']);
  
  const forbiddenRegex = /(#f97316|#ea580c|#c2410c|#9d4300|#fff7ed|#fdba74|#fb923c|#fed7aa|#ffedd5|#9a3412|rgba\(249,\s*115,\s*22)/i;

  const violations = [];

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    lines.forEach((line, index) => {
      if (forbiddenRegex.test(line)) {
        violations.push(`${path.relative(process.cwd(), file)}:${index + 1}: ${line.trim()}`);
      }
    });
  }

  assert.equal(
    violations.length,
    0,
    `Found legacy orange/amber colors in codebase:\n${violations.join('\n')}`
  );
});

test('brand blue #0063a6 is active in primary CSS definitions', () => {
  const cssContent = fs.readFileSync(path.resolve('src/index.css'), 'utf8');
  assert.ok(/#0063a6/i.test(cssContent), 'index.css should define #0063a6');
  assert.ok(cssContent.includes('.tactile-button-primary'), 'index.css should contain .tactile-button-primary');
});
