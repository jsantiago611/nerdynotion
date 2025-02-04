import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

import config from "./constants-config.json";
const key_value_from_json = { ...config };
const theme_config_font_fonts = key_value_from_json["theme"]["fontfamily-google-fonts"];

const fontFamilySans =
	theme_config_font_fonts && theme_config_font_fonts["sans-font-name"]
		? [theme_config_font_fonts["sans-font-name"], ...fontFamily.sans]
		: [...fontFamily.sans];
const fontFamilySerif =
	theme_config_font_fonts && theme_config_font_fonts["serif-font-name"]
		? [theme_config_font_fonts["serif-font-name"], ...fontFamily.serif]
		: [...fontFamily.serif];
const fontFamilyMono =
	theme_config_font_fonts && theme_config_font_fonts["mono-font-name"]
		? [theme_config_font_fonts["mono-font-name"], ...fontFamily.mono]
		: [...fontFamily.mono];

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
	darkMode: "class",
	corePlugins: {
		// disable aspect ratio as per docs -> @tailwindcss/aspect-ratio
		aspectRatio: false,
		// disable some core plugins as they are included in the CSS even when unused
		touchAction: false,
		ringOffsetWidth: false,
		ringOffsetColor: false,
		scrollSnapType: false,
		borderOpacity: false,
		textOpacity: false,
		fontVariantNumeric: false,
	},
	theme: {
		extend: {
			screens: {
				print: { raw: "print" },
				screen: { raw: "screen" },
			},
			colors: {
				bgColor: "rgb(var(--theme-bg) / <alpha-value>)",
				textColor: "rgb(var(--theme-text) / <alpha-value>)",
				link: "rgb(var(--theme-link) / <alpha-value>)",
				accent: "rgb(var(--theme-accent) / <alpha-value>)",
				"accent-2": "rgb(var(--theme-accent-2) / <alpha-value>)",
				quote: "rgb(var(--theme-quote) / <alpha-value>)",
				ngray: {
					"txt-light": "#787774",
					"txt-dark": "#9B9B9B",
					"bg-light": "#F1F1EF",
					"bg-dark": "#2F2F2F", // this is Notion's choice
					// 'bg-dark': '#566670', // this is my choice,
					"bg-tag-light": "#E3E2E0",
					"bg-tag-dark": "#5A5A5A",
					"table-header-bg-light": "#F7F6F3",
					"table-header-bg-dark": "#FFFFFF",
					"callout-border-light": "#DFDFDE",
					"callout-border-dark": "#373737",
				},
				nlgray: {
					"bg-tag-light": "#F1F1F0",
					"bg-tag-dark": "#373737",
				},
				nbrown: {
					"txt-light": "#9F6B53",
					"txt-dark": "#BA856F",
					"bg-light": "#F4EEEE",
					"bg-dark": "#4A3228",
					// 'bg-dark': '#514E4B',
					"bg-tag-light": "#EEE0DA",
					"bg-tag-dark": "#603B2C",
				},
				norange: {
					"txt-light": "#D9730D",
					"txt-dark": "#C77D48",
					"bg-light": "#FBECDD",
					"bg-dark": "#5C3B23",
					// 'bg-dark': '#70544A',
					"bg-tag-light": "#FADEC9",
					"bg-tag-dark": "#854C1D",
				},
				nyellow: {
					"txt-light": "#CB912F",
					"txt-dark": "#CA9849",
					"bg-light": "#FBEDD6",
					"bg-dark": "#56452F",
					// 'bg-dark': '#707049',
					"bg-tag-light": "#F9E4BC",
					"bg-tag-dark": "#835E33",
				},
				ngreen: {
					"txt-light": "#448361",
					"txt-dark": "#529E72",
					"bg-light": "#EDF3EC",
					"bg-dark": "#243D30",
					// 'bg-dark': '#41706A',
					"bg-tag-light": "#DBEDDB",
					"bg-tag-dark": "#2B593F",
				},
				nblue: {
					"txt-light": "#337EA9",
					"txt-dark": "#5E87C9",
					"bg-light": "#E7F3F8",
					"bg-dark": "#143A4E",
					// 'bg-dark': '#41727A',
					"bg-tag-light": "#D3E5EF",
					"bg-tag-dark": "#28456C",
				},
				npurple: {
					"txt-light": "#9065B0",
					"txt-dark": "#9D68D3",
					"bg-light": "#F7F3F8",
					"bg-dark": "#3C2D49",
					// 'bg-dark': '#5A5672',
					"bg-tag-light": "#E8DEEE",
					"bg-tag-dark": "#492F64",
				},
				npink: {
					"txt-light": "#C14C8A",
					"txt-dark": "#9D68D3",
					"bg-light": "#FBF2F5",
					"bg-dark": "#4E2C3C",
					// 'bg-dark': '#6A4C64',
					"bg-tag-light": "#F5E0E9",
					"bg-tag-dark": "#69314C",
				},
				nred: {
					"txt-light": "#D44C47",
					"txt-dark": "#DF5452",
					"bg-light": "#FDEBEC",
					"bg-dark": "#522E2A",
					// 'bg-dark': '#6A4545',
					"bg-tag-light": "#FFE2DD",
					"bg-tag-dark": "#6E3630",
				},
			},
			fontFamily: {
				// Set Untitled Sans as the sans font
				sans: ['"Untitled Sans"', ...fontFamilySans],
				serif: fontFamilySerif,
				// Set Dinamit Bold as the mono font
				mono: ['"Dinamit"', ...fontFamilyMono],
			},
			transitionProperty: {
				height: "height",
			},
		},
	},
	plugins: [
		// require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
		plugin(function ({ addComponents }) {
			addComponents({
				".site-page-link": {
					"@apply underline decoration-from-font decoration-accent-2/20 hover:decoration-accent-2/40 underline-offset-2 hover:underline": {},
				},
				".title": {
					"@apply text-4xl sm:text-5xl tracking-tight font-bold text-accent-2 leading-[1.1] !mb-5": {},
				},
			});
		}),
		// Use Tailwind's addBase to include the @font-face rules for our custom fonts.
		plugin(function ({ addBase }) {
			addBase([
				// Dinamit font variants
				{
					"@font-face": {
						fontFamily: "Dinamit",
						src: 'url(/fonts/Dinamit_Bold.woff2) format("woff2")',
						// This variant is used as the mono font.
						fontWeight: "700",
						fontStyle: "normal",
					},
				},
				{
					"@font-face": {
						fontFamily: "Dinamit",
						src: 'url(/fonts/Dinamit_Regular.woff2) format("woff2")',
						fontWeight: "400",
						fontStyle: "normal",
					},
				},
				{
					"@font-face": {
						fontFamily: "Dinamit",
						src: 'url(/fonts/Dinamit_Extralight.woff2) format("woff2")',
						fontWeight: "200",
						fontStyle: "normal",
					},
				},
				// Untitled Sans font variants
				{
					"@font-face": {
						fontFamily: "Untitled Sans",
						src: 'url(/fonts/UntitledSansWeb-Light.woff2) format("woff2")',
						fontWeight: "300",
						fontStyle: "normal",
					},
				},
				{
					"@font-face": {
						fontFamily: "Untitled Sans",
						src: 'url(/fonts/UntitledSansWeb-Regular.woff2) format("woff2")',
						fontWeight: "400",
						fontStyle: "normal",
					},
				},
				{
					"@font-face": {
						fontFamily: "Untitled Sans",
						src: 'url(/fonts/UntitledSansWeb-RegularItalic.woff2) format("woff2")',
						fontWeight: "400",
						fontStyle: "italic",
					},
				},
				{
					"@font-face": {
						fontFamily: "Untitled Sans",
						src: 'url(/fonts/UntitledSansWeb-Medium.woff2) format("woff2")',
						fontWeight: "500",
						fontStyle: "normal",
					},
				},
				{
					"@font-face": {
						fontFamily: "Untitled Sans",
						src: 'url(/fonts/UntitledSansWeb-Bold.woff2) format("woff2")',
						fontWeight: "700",
						fontStyle: "normal",
					},
				},
				{
					"@font-face": {
						fontFamily: "Untitled Sans",
						src: 'url(/fonts/UntitledSansWeb-Black.woff2) format("woff2")',
						fontWeight: "900",
						fontStyle: "normal",
					},
				},
			]);
		}),
	],
} satisfies Config;
