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
		aspectRatio: false,
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
			fontSize: {
				'size-step--2': 'clamp(.8247rem, .7329rem + .4588vw, 1.12rem)',
				'size-step--1': 'clamp(.9896rem, .8621rem + .6375vw, 1.4rem)',
				'size-step-0': 'clamp(1.1875rem, 1.0127rem + .8738vw, 1.75rem)',
				'size-step-1': 'clamp(1.425rem, 1.1881rem + 1.1845vw, 2.1875rem)',
				'size-step-2': 'clamp(1.71rem, 1.3917rem + 1.5913vw, 2.7344rem)',
				'size-step-3': 'clamp(2.052rem, 1.6276rem + 2.1219vw, 3.418rem)',
				'size-step-4': 'clamp(2.4624rem, 1.9001rem + 2.8117vw, 4.2725rem)',
				'size-step-5': 'clamp(2.9549rem, 2.2137rem + 3.7059vw, 5.3406rem)',
				'size-step-6': 'clamp(3.5459rem, 2.5735rem + 4.8619vw, 6.6757rem)',
			},
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
					"bg-dark": "#2F2F2F",
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
					"bg-tag-light": "#EEE0DA",
					"bg-tag-dark": "#603B2C",
				},
				norange: {
					"txt-light": "#D9730D",
					"txt-dark": "#C77D48",
					"bg-light": "#FBECDD",
					"bg-dark": "#5C3B23",
					"bg-tag-light": "#FADEC9",
					"bg-tag-dark": "#854C1D",
				},
				nyellow: {
					"txt-light": "#CB912F",
					"txt-dark": "#CA9849",
					"bg-light": "#FBEDD6",
					"bg-dark": "#56452F",
					"bg-tag-light": "#F9E4BC",
					"bg-tag-dark": "#835E33",
				},
				ngreen: {
					"txt-light": "#448361",
					"txt-dark": "#529E72",
					"bg-light": "#EDF3EC",
					"bg-dark": "#243D30",
					"bg-tag-light": "#DBEDDB",
					"bg-tag-dark": "#2B593F",
				},
				nblue: {
					"txt-light": "#337EA9",
					"txt-dark": "#5E87C9",
					"bg-light": "#E7F3F8",
					"bg-dark": "#143A4E",
					"bg-tag-light": "#D3E5EF",
					"bg-tag-dark": "#28456C",
				},
				npurple: {
					"txt-light": "#9065B0",
					"txt-dark": "#9D68D3",
					"bg-light": "#F7F3F8",
					"bg-dark": "#3C2D49",
					"bg-tag-light": "#E8DEEE",
					"bg-tag-dark": "#492F64",
				},
				npink: {
					"txt-light": "#C14C8A",
					"txt-dark": "#9D68D3",
					"bg-light": "#FBF2F5",
					"bg-dark": "#4E2C3C",
					"bg-tag-light": "#F5E0E9",
					"bg-tag-dark": "#69314C",
				},
				nred: {
					"txt-light": "#D44C47",
					"txt-dark": "#DF5452",
					"bg-light": "#FDEBEC",
					"bg-dark": "#522E2A",
					"bg-tag-light": "#FFE2DD",
					"bg-tag-dark": "#6E3630",
				},
			},
			fontFamily: {
				sans: ['"Earth"', ...fontFamilySans],
				serif: ['"SharpSerif"', ...fontFamilySerif],
				mono: ['"Earth"', ...fontFamilyMono],
			},
			transitionProperty: {
				height: "height",
			},
		},
	},
	plugins: [
		require("@tailwindcss/aspect-ratio"),
		// Add CSS variables for font sizes
		plugin(function({ addBase }) {
			addBase({
				':root': {
					'--size-step--2': 'clamp(.8247rem, .7329rem + .4588vw, 1.12rem)',
					'--size-step--1': 'clamp(.9896rem, .8621rem + .6375vw, 1.4rem)',
					'--size-step-0': 'clamp(1.1875rem, 1.0127rem + .8738vw, 1.75rem)',
					'--size-step-1': 'clamp(1.425rem, 1.1881rem + 1.1845vw, 2.1875rem)',
					'--size-step-2': 'clamp(1.71rem, 1.3917rem + 1.5913vw, 2.7344rem)',
					'--size-step-3': 'clamp(2.052rem, 1.6276rem + 2.1219vw, 3.418rem)',
					'--size-step-4': 'clamp(2.4624rem, 1.9001rem + 2.8117vw, 4.2725rem)',
					'--size-step-5': 'clamp(2.9549rem, 2.2137rem + 3.7059vw, 5.3406rem)',
					'--size-step-6': 'clamp(3.5459rem, 2.5735rem + 4.8619vw, 6.6757rem)',
				}
			});
		}),
		plugin(function ({ addComponents }) {
			addComponents({
				".site-page-link": {
					"@apply underline decoration-from-font decoration-accent-2/20 hover:decoration-accent-2/40 underline-offset-2 hover:underline": {},
				},
				".title": {
					"@apply text-size-step-4 tracking-[-0.08ch] font-bold text-accent-2 leading-[1.1] !mb-5": {},
				},
				"body": {
					"@apply text-size-step--1": {},
				},
        ".text-2xl": {
          "@apply !text-[length:var(--size-step-3)] !tracking-[-0.08ch] !leading-[1.1]": {},
        },
			});
		}),
    plugin(function ({ addBase }) {
			addBase([
				{
					"@font-face": {
						fontFamily: "Martina",
						src: 'url(/fonts/MartinaPlantijn-Light.woff) format("woff")',
						fontWeight: "400",
						fontStyle: "normal",
					},
				},
				{
					"@font-face": {
						fontFamily: "Martina",
						src: 'url(/fonts/MartinaPlantijn-LightItalic.woff) format("woff")',
						fontWeight: "400",
						fontStyle: "italic",
					},
				},
				{
					"@font-face": {
						fontFamily: "Martina",
						src: 'url(/fonts/MartinaPlantijn-Black.woff) format("woff")',
						fontWeight: "700",
						fontStyle: "normal",
					},
				},
				{
					"@font-face": {
						fontFamily: "Martina",
						src: 'url(/fonts/MartinaPlantijn-BlackItalic.woff) format("woff")',
						fontWeight: "700",
						fontStyle: "italic",
					},
				},
				{
					"@font-face": {
						fontFamily: "Family",
						src: 'url(/fonts/Family-Light.woff2) format("woff2")',
						fontWeight: "300",
						fontStyle: "normal",
					},
				},
				{
					"@font-face": {
						fontFamily: "Family",
						src: 'url(/fonts/Family-LightItalic.woff2) format("woff2")',
						fontWeight: "300",
						fontStyle: "italic",
					},
				},
				{
					"@font-face": {
						fontFamily: "Family",
						src: 'url(/fonts/Family-Regular.woff2) format("woff2")',
						fontWeight: "400",
						fontStyle: "normal",
					},
				},
				{
					"@font-face": {
						fontFamily: "Family",
						src: 'url(/fonts/Family-RegularItalic.woff2) format("woff2")',
						fontWeight: "400",
						fontStyle: "italic",
					},
				},
				{
					"@font-face": {
						fontFamily: "Family",
						src: 'url(/fonts/Family-Medium.woff2) format("woff2")',
						fontWeight: "500",
						fontStyle: "normal",
					},
				},
				{
					"@font-face": {
						fontFamily: "Family",
						src: 'url(/fonts/Family-MediumItalic.woff2) format("woff2")',
						fontWeight: "500",
						fontStyle: "italic",
					},
				},
				{
					"@font-face": {
						fontFamily: "Family",
						src: 'url(/fonts/Family-Bold.woff2) format("woff2")',
						fontWeight: "700",
						fontStyle: "normal",
					},
				},
				{
					"@font-face": {
						fontFamily: "Family",
						src: 'url(/fonts/Family-BoldItalic.woff2) format("woff2")',
						fontWeight: "700",
						fontStyle: "italic",
					},
				},
        {
					"@font-face": {
						fontFamily: "Calibre",
						src: 'url(/fonts/CalibreWeb-Light.woff) format("woff")',
						fontWeight: "300",
						fontStyle: "normal",
					},
				},
         {
					"@font-face": {
						fontFamily: "Calibre",
						src: 'url(/fonts/CalibreWeb-LightItalic.woff) format("woff")',
						fontWeight: "300",
						fontStyle: "italic",
					},
				},
        {
					"@font-face": {
						fontFamily: "Calibre",
						src: 'url(/fonts/CalibreWeb-Regular.woff) format("woff")',
						fontWeight: "400",
						fontStyle: "regular",
					},
				},
        {
					"@font-face": {
						fontFamily: "Calibre",
						src: 'url(/fonts/CalibreWeb-Medium.woff) format("woff")',
						fontWeight: "500",
						fontStyle: "regular",
					},
				},
        {
					"@font-face": {
						fontFamily: "Calibre",
						src: 'url(/fonts/CalibreWeb-Semibold.woff) format("woff")',
						fontWeight: "700",
						fontStyle: "regular",
					},
				},
        {
					"@font-face": {
						fontFamily: "Earth",
						src: 'url(/fonts/SharpEarthOLPE-Regular.woff2) format("woff2")',
						fontWeight: "400",
						fontStyle: "regular",
					},
				},
        {
					"@font-face": {
						fontFamily: "Earth",
						src: 'url(/fonts/SharpEarthOLPE-Italic.woff2) format("woff2")',
						fontWeight: "400",
						fontStyle: "italic",
					},
				},
        {
					"@font-face": {
						fontFamily: "Earth",
						src: 'url(/fonts/BradfordLLWeb-Light.woff2) format("woff2")',
						fontWeight: "700",
						fontStyle: "regular",
					},
				},
        {
					"@font-face": {
						fontFamily: "Earth",
						src: 'url(/fonts/BradfordLLWeb-LightItalic.woff2) format("woff2")',
						fontWeight: "700",
						fontStyle: "italic",
					},
				},
        {
					"@font-face": {
						fontFamily: "SharpSerif",
						src: 'url(/fonts/Sharp Serif Text-Regular.woff2) format("woff2")',
						fontWeight: "400",
						fontStyle: "regular",
					},
				},
        {
					"@font-face": {
						fontFamily: "SharpSerif",
						src: 'url(/fonts/Sharp Serif Text-Italic.woff2) format("woff2")',
						fontWeight: "400",
						fontStyle: "italic",
					},
				},
        {
					"@font-face": {
						fontFamily: "SharpSerif",
						src: 'url(/fonts/Sharp Serif Text-Bold.woff2) format("woff2")',
						fontWeight: "700",
						fontStyle: "regular",
					},
				},
        {
					"@font-face": {
						fontFamily: "SharpSerif",
						src: 'url(/fonts/Sharp Serif Text-Bold Italic.woff2) format("woff2")',
						fontWeight: "700",
						fontStyle: "italic",
					},
				},
			]);
		}),
		plugin(function ({ addBase }) {
			addBase({
				body: {
					fontSize: "var(--size-step-0)",
				},
			});
		}),
	],
} satisfies Config;
