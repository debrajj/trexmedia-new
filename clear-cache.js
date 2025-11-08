#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function deleteFolderRecursive(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
    console.log(`✅ Deleted: ${folderPath}`);
  }
}

console.log('🧹 Clearing Next.js caches...\n');

// Clear Next.js build cache
deleteFolderRecursive('.next');

// Clear node_modules cache
deleteFolderRecursive('node_modules/.cache');

// Clear npm cache (if exists)
deleteFolderRecursive('node_modules/.npm');

console.log('\n✨ Cache cleared! Run "npm run dev" to start fresh.\n');
console.log('💡 Pro tip: Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R) after starting the dev server.');