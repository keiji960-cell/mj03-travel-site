import sharp from 'sharp';
import { readdirSync, statSync, renameSync } from 'fs';
import { join } from 'path';

const dir = 'public/images';
const files = readdirSync(dir).filter((f) => f.endsWith('.jpg'));

for (const file of files) {
  const path = join(dir, file);
  const tmpPath = path + '.tmp';
  const before = statSync(path).size;
  await sharp(path)
    .resize({ width: 1600, withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(tmpPath);
  renameSync(tmpPath, path);
  const after = statSync(path).size;
  console.log(`${file}: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024).toFixed(0)}KB`);
}
