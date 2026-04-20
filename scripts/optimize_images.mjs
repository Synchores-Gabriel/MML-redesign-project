import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const ASSET_DIR = 'public/asset';

async function processDirectory(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            await processDirectory(fullPath);
        } else if (/\.(jpg|jpeg|png|heic)$/i.test(entry.name)) {
            const webpPath = fullPath.replace(/\.(jpg|jpeg|png|heic)$/i, '.webp');
            const lqWebpPath = fullPath.replace(/\.(jpg|jpeg|png|heic)$/i, '.lq.webp');

            try {
                // HQ WebP
                if (!await fileExists(webpPath)) {
                    console.log(`Converting ${entry.name} to HQ WebP...`);
                    await sharp(fullPath)
                        .webp({ quality: 85 })
                        .toFile(webpPath);
                }

                // LQ WebP
                if (!await fileExists(lqWebpPath)) {
                    console.log(`Generating LQ WebP for ${entry.name}...`);
                    await sharp(fullPath)
                        .resize(400, 400, { fit: 'inside', withoutEnlargement: true })
                        .webp({ quality: 20 })
                        .toFile(lqWebpPath);
                }
            } catch (err) {
                console.error(`Error processing ${entry.name}:`, err.message);
            }
        }
    }
}

async function fileExists(path) {
    try {
        await fs.access(path);
        return true;
    } catch {
        return false;
    }
}

console.log('Starting Image Optimization...');
processDirectory(ASSET_DIR).then(() => console.log('Image Optimization Complete.'));
