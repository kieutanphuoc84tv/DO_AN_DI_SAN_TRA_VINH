const fs = require('fs');
const path = require('path');

const dataPath = path.resolve(__dirname, '../../BACKEND/tvroots/src/data/data.json');
const publicImagePath = path.resolve(__dirname, '../public/image');

function normalizeFilename(name) {
  return name.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9.]/g, '');
}

function findFileInsensitive(dir, target) {
  const files = fs.readdirSync(dir);
  const targetNorm = normalizeFilename(target);
  for (const file of files) {
    if (normalizeFilename(file) === targetNorm) {
      return file;
    }
  }
  return null;
}

function main() {
  if (!fs.existsSync(dataPath)) {
    console.error('data.json not found at', dataPath);
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  const sites = data.sites || [];

  sites.forEach(site => {
    const imagePath = site.image;
    if (!imagePath) return;

    const imageFullPath = path.join(publicImagePath, imagePath);
    if (fs.existsSync(imageFullPath)) {
      // File exists with correct name
      return;
    }

    // File does not exist, try to find file with similar name ignoring spaces and case
    const dir = path.dirname(imageFullPath);
    const baseName = path.basename(imagePath);
    const foundFile = findFileInsensitive(dir, baseName);

    if (foundFile) {
      const oldPath = path.join(dir, foundFile);
      const newPath = imageFullPath;
      console.log('Renaming "' + oldPath + '" to "' + newPath + '"');
      fs.renameSync(oldPath, newPath);
    } else {
      console.warn('File for image "' + imagePath + '" not found in ' + dir);
    }
  });

  console.log('Image filename fix completed.');
}

main();
