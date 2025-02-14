import fs from 'fs';
import path from 'path';

const modelPath = path.join(process.cwd(), 'public', 'models', 'iphone', 'iphone-15-pro.glb');

try {
  if (fs.existsSync(modelPath)) {
    console.log('Model file exists at:', modelPath);
    const stats = fs.statSync(modelPath);
    console.log('File size:', stats.size, 'bytes');
  } else {
    console.error('Model file not found at:', modelPath);
  }
} catch (err) {
  console.error('Error checking model file:', err);
}
