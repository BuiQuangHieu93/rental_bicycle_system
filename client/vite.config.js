import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.REACT_APP_WEATHER_API": JSON.stringify(
      process.env.REACT_APP_WEATHER_API
    ),
  },
});
