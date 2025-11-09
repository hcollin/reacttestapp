import { IconTool, IconDice6 } from "@tabler/icons-react";

export function getLibraryByName(name: string | undefined) {
	if (!name) return undefined;
	const lib = LIBRARIES.find((lib) => lib.name === name);
	return lib;
}

export const LIBRARIES = [
	{
		icon: IconTool,
		name: "hcconfig",
		description:
			"Multilevel configuration library for React. This library allows user to set configurations at different levels (Default, Environment, Backend, User & Dynamic) where each level can override the previous one. It also includes subscription to configuration changes and automatic loading from the backend. Configuration class itself is pure TypeScript and can be used outside React, but some hooks are provided out of the box for convenience.",
		badges: ["react", "typescript", "experimental"],
		npm: "hcconfig",
		github: "hcollin/hcconfig",
		buildPath: "actions/workflows/build.yml",
		aside: [
			["Readme", "https://raw.githubusercontent.com/hcollin/hcconfig/main/readme.md"],
			["Version history", "https://raw.githubusercontent.com/hcollin/hcconfig/main/versionhistory.md"],
		],
	},
	{
		icon: IconDice6,
		name: "rndlib",
		description: "Randomizer library for any JavaScript or TypeScript project",
		badges: ["node", "typescript", "stable"],
		npm: "rndlib",
		github: "hcollin/rndlib",
	},
];
