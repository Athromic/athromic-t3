/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {

  images: {
    domains: ["avatars.githubusercontent.com", "vercel.com", "images.unsplash.com", "assets.aceternity.com", "api.microlink.io"],
 },

};

export default config;
