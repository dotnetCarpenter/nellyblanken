// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import { fileURLToPath, URL } from 'node:url';

// https://astro.build/config
export default defineConfig({
	vite: {
		resolve: {
			alias: {
				"@assets": fileURLToPath(
					new URL("./src/assets", import.meta.url),
				),
			},
		},
	},
	// https://docs.astro.build/en/reference/font-provider-reference/#the-font-provider-object
	fonts: [
		// {
		// 	provider: fontProviders.google(),
		// 	name: "Playfair Display",
		// 	cssVariable: "--font-serif",
		// 	weights: [400, 500, 600, 700],
		// 	fallbacks: ["serif"],
		// },
		{
			provider: fontProviders.google(),
			name: "DM Sans",
			cssVariable: "--font-serif",
			weights: [100, 400, 500, 600, 700, 1000],
			fallbacks: ["serif"],
		},
	],
});
