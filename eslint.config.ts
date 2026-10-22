import path from "node:path";

import js from "@eslint/js";
import svelte from "eslint-plugin-svelte";
import { defineConfig, includeIgnoreFile } from "eslint/config";
import globals from "globals";
import ts from "typescript-eslint";

const gitignorePath = path.resolve(import.meta.dirname, ".gitignore");

export default defineConfig(
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	ts.configs.recommended,
	svelte.configs.recommended,
	{
		languageOptions: { globals: { ...globals.browser, ...globals.node } },
		rules: {
			"no-undef": "off",
		},
	},
	{
		files: ["src/**/*.ts", "src/**/*.tsx", "src/**/*.mts", "src/**/*.cts", "vite.config.ts"],
		languageOptions: {
			parserOptions: { projectService: true },
		},
		rules: {
			"@typescript-eslint/no-deprecated": "error",
		},
	},
	{
		files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: [".svelte"],
				parser: ts.parser,
			},
		},
		rules: {
			"@typescript-eslint/no-deprecated": "error",
			"svelte/valid-compile": ["error", { ignoreWarnings: false }],
		},
	},
);
