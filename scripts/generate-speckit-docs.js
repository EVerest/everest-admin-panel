#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function safeRead(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    return null;
  }
}

const repoRoot = path.resolve(__dirname, '..');
const pkgPath = path.join(repoRoot, 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

const outDir = path.join(repoRoot, 'docs');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

let content = `# Speckit Generated Project Summary

**Name:** ${pkg.name}
**Version:** ${pkg.version}

## Stack Summary

### Dependencies
${Object.keys(pkg.dependencies || {}).length ? Object.keys(pkg.dependencies).map(d => `- ${d}`).join('\n') : '- (none)'}

### DevDependencies
${Object.keys(pkg.devDependencies || {}).length ? Object.keys(pkg.devDependencies).map(d => `- ${d}`).join('\n') : '- (none)'}

## Key folders
- src/ — application source code
- public/ — public assets
- cypress/ — end-to-end tests
- build-tools/ — build helpers

## NPM Scripts

${Object.entries(pkg.scripts || {}).map(([k, v]) => `- ${k}: ${v}`).join('\n')}

`;

// include copilot instructions if available
const copilotPath = path.join(repoRoot, '.github', 'copilot-instructions.md');
const copilot = safeRead(copilotPath);
if (copilot) {
  content += '\n## Development Notes (copilot-instructions)\n\n';
  content += copilot + '\n';
}

// include README if present
const readmePath = path.join(repoRoot, 'README.md');
const readme = safeRead(readmePath);
if (readme) {
  const excerpt = readme.split('\n').slice(0, 50).join('\n');
  content += '\n## README excerpt\n\n' + excerpt + '\n';
}

const outPath = path.join(outDir, 'speckit-generated.md');
fs.writeFileSync(outPath, content, 'utf8');

// copy README to docs if present
if (readme) {
  fs.copyFileSync(readmePath, path.join(outDir, 'README.md'));
}

console.log('Speckit docs generated at', outPath);
