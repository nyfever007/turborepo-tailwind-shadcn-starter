/** @type {import('tailwindcss').Config} */
const sharedConfig = require('@repo/ui/tailwind.config');
module.exports = {
  ...sharedConfig,
  theme: {
    extend: {},
  },
  plugins: [],
};
