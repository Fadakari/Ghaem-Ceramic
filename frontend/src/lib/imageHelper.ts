export function getSafeImageUrl(
  url?: string | null,
  fallback: string = '/images/brand/logo-mark.svg'
): string {
  if (!url || typeof url !== 'string') return fallback;

  let clean = url.trim();
  clean = clean.replace(/^https?:\/\/127\.0\.0\.1:8000/, '');
  clean = clean.replace(/^https?:\/\/localhost:8000/, '');
  clean = clean.replace(/^https?:\/\/api\.behbodceramic\.ir/, '');

  if (clean.startsWith('/media/') || clean.startsWith('/images/')) {
    return clean;
  }

  if (clean.startsWith('media/')) {
    return `/${clean}`;
  }

  if (clean.startsWith('brand/') || clean.startsWith('products/')) {
    return `/media/${clean}`;
  }

  if (clean.startsWith('http://') || clean.startsWith('https://')) {
    return clean;
  }

  return clean.startsWith('/') ? clean : `/${clean}`;
}
