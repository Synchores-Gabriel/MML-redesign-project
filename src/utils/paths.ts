/**
 * Resolve asset paths based on environment configuration.
 * Considers NEXT_PUBLIC_BASE_PATH and NEXT_PUBLIC_ASSET_URL for subdomain/subdirectory resilience.
 */
export function getAssetPath(path: string): string {
  if (!path) return "";
  
  // If it's already an absolute URL, return as is
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }

  // Ensure path starts with a slash if it doesn't
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  // Priority 1: External Asset URL (CDN or shared domain)
  const assetUrl = process.env.NEXT_PUBLIC_ASSET_URL;
  if (assetUrl) {
    const baseUrl = assetUrl.endsWith("/") ? assetUrl.slice(0, -1) : assetUrl;
    return `${baseUrl}${normalizedPath}`;
  }

  // Priority 2: Local Base Path (Subdirectory hosting)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  if (basePath) {
    const normalizedBase = basePath.startsWith("/") ? basePath : `/${basePath}`;
    const cleanBase = normalizedBase.endsWith("/") ? normalizedBase.slice(0, -1) : normalizedBase;
    
    // Prevent double slashing if path already starts with the base
    if (normalizedPath.startsWith(cleanBase)) {
      return normalizedPath;
    }
    
    return `${cleanBase}${normalizedPath}`;
  }

  return normalizedPath;
}

/**
 * Returns a set of paths for a tiered asset loading strategy.
 * Primary: WebP/WebM (HQ)
 * Secondary: LQ (Small/Compressed)
 * Legacy: Original (JPG/MP4)
 */
export function getAdaptiveAsset(path: string) {
  const original = getAssetPath(path);
  
  // Images
  if (/\.(jpg|jpeg|png|heic)$/i.test(path)) {
    const base = path.replace(/\.(jpg|jpeg|png|heic)$/i, "");
    return {
      hq: getAssetPath(`${base}.webp`),
      lq: getAssetPath(`${base}.lq.webp`),
      legacy: original,
      poster: original, // Images can use themselves as posters
      type: "image" as const
    };
  }

  // Videos
  if (/\.mp4$/i.test(path)) {
    const base = path.replace(/\.mp4$/i, "");
    return {
      hq: getAssetPath(`${base}.webm`),
      legacy: original,
      poster: getAssetPath(`${base}.jpg`), // Assuming a .jpg poster exists or falls back
      type: "video" as const
    };
  }

  return { hq: original, legacy: original, poster: original, type: "other" as const };
}
