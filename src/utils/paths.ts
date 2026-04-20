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
