import fs from 'fs';
import path from 'path';

const requiredFiles = [
  'public/models/iphone/iphone-15-pro.glb',
];

function verifyDeployment() {
  let allFilesExist = true;
  
  requiredFiles.forEach(file => {
    const fullPath = path.join(process.cwd(), file);
    if (!fs.existsSync(fullPath)) {
      console.error(`Missing required file: ${file}`);
      allFilesExist = false;
    } else {
      const stats = fs.statSync(fullPath);
      console.log(`✓ ${file} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
    }
  });

  return allFilesExist;
}

// Add this to package.json scripts
if (verifyDeployment()) {
  console.log('✓ All required files present');
  process.exit(0);
} else {
  console.error('× Missing required files');
  process.exit(1);
}
