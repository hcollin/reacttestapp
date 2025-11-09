import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
	base: "/reacttestapp/",
	build: {
		rollupOptions: {
			output: {
                // Disable code splitting for GitHub Pages deployment
				manualChunks: undefined,
			},
		},
	},
	plugins: [
		tanstackRouter({
			target: "react",

			// This option disables automatic code splitting and is necessary for GitHub Pages deployments
			autoCodeSplitting: false,
		}),
		react(),
	],
});
