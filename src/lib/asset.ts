/**
 * Build a URL for a file served from `public/`, respecting Vite's base path.
 *
 * On GitHub Pages project sites the app is served from a subpath
 * (e.g. `/omp-site/`), so hardcoded root-absolute paths like `/brand/x.jpg`
 * would 404. `import.meta.env.BASE_URL` always ends with a slash.
 */
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
