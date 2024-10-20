/**
 * An array of roues that are accesisable to public
 * these routes do not require authentications
 * @type {string[]}
 */
export const publicRoutes = [
  "/",
  "/components",
  "/docs",
  "/auth/new-verification",
];

/**
 * An array of roues that are use for authentication
 * these routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * The prefix for api authentication route
 * routes that starts with this prefix are used to API
 * authentication purpose
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * the default redirect path after logged in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
