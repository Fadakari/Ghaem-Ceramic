/**
 * Helper to ensure media and static images resolve cleanly without SSRF or host mismatches.
 */
export function getSafeImageUrl(
  url?: string | null,
  fallback: string = '/images/products/beef-sirloin.jpg'
): string {
  if (!url || typeof url !== 'string') return fallback;

  // Clean absolute localhost/127.0.0.1 Django addresses into relative Next.js paths
  let clean = url.trim();
  clean = clean.replace(/^https?:\/\/127\.0\.0\.1:8000/, '');
  clean = clean.replace(/^https?:\/\/localhost:8000/, '');

  if (clean.startsWith('/media/') || clean.startsWith('/images/')) {
    return clean;
  }

  if (clean.startsWith('media/')) {
    return `/${clean}`;
  }

  if (clean.startsWith('products/') || clean.startsWith('articles/') || clean.startsWith('hero/') || clean.startsWith('facilities/')) {
    return `/media/${clean}`;
  }

  if (clean.startsWith('http://') || clean.startsWith('https://')) {
    return clean;
  }

  return clean.startsWith('/') ? clean : `/${clean}`;
}
