import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, statSync, mkdirSync } from 'fs';

// Get current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function verifyModel() {
  const modelPath = join(process.cwd(), 'public', 'models', 'iphone', 'iphone-15-pro.glb');
  const modelDir = dirname(modelPath);

  console.log('Checking model directory:', modelDir);
  
  if (!existsSync(modelDir)) {
    console.error('Model directory does not exist!');
    console.log('Creating directory structure...');
    mkdirSync(modelDir, { recursive: true });
  }

  if (existsSync(modelPath)) {
    const stats = statSync(modelPath);
    console.log('Model file exists:', {
      size: `${(stats.size / 1024 / 1024).toFixed(2)} MB`,
      lastModified: stats.mtime
    });
  } else {
    console.error('Model file not found at:', modelPath);
    console.log('Please ensure you have placed the model file at the correct location:');
    console.log('- The model should be in: public/models/iphone/iphone-15-pro.glb');
  }
}

verifyModel();
