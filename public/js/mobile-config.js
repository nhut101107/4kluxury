/*
 * Set only a public HTTPS origin here before building a release IPA.
 * No key, password, cookie, or administrator credential belongs in this file.
 * Empty uses the current origin for the normal web deployment.
 */
window.PHIM4K_MOBILE_CONFIG = Object.freeze({
  // Empty uses the current origin for normal web deployment (Cloudflare Pages 4kluxury.pages.dev)
  apiBaseUrl: (typeof window !== 'undefined' && window.location?.origin && !window.location.origin.includes('localhost') && !window.location.origin.includes('127.0.0.1')) ? window.location.origin : "https://4kluxury.pages.dev",
  // Keep identity/admin traffic on the D1 Worker so Cloudflare records the
  // viewer's real edge IP instead of a Pages-to-Worker subrequest address.
  licenseApiBaseUrl: "https://phim4k-license-api.phim4k-pwdbhdz.workers.dev"
});
