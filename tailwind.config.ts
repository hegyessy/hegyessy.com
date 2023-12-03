import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "site": "24px 1fr minmax(320px, 64ch) 1fr 14px",
      },
    },
  },
} as Config;
