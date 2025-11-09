import { IconTool, IconDice6 } from "@tabler/icons-react";
import React from "react";

export function getLibraryByName(name: string | undefined) {
	if (!name) return undefined;
	const lib = LIBRARIES.find((lib) => lib.name === name);
	return lib;
}

export interface ILibraryData {
	icon: React.FC<any>;
	name: string;
	description: string;
	badges: string[];
	npm?: string;
	npmUrl?: string;
	github?: string;
	buildPath?: string;
	aside?: ILibraryAsideItem[];
}

export interface ILibraryAsideItem {
	id: string;
	title: string;
	icon?: React.FC<any>;
	markdown?: {
		url: string;
	};
	link?: {
		url: string;
		external?: boolean;
	};
}

export const LIBRARIES: ILibraryData[] = [
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
			{
				id: "readme",
				title: "Readme file in GitHub",
				markdown: {
					url: "https://raw.githubusercontent.com/hcollin/hcconfig/main/readme.md",
				},
				// link: {
				// 	url: "https://raw.githubusercontent.com/hcollin/hcconfig/main/readme.md",
				// 	external: true,
				// },
			},
			{
				id: "versionhistory",
				title: "Version history",
				markdown: {
					url: "https://raw.githubusercontent.com/hcollin/hcconfig/main/versionhistory.md",
				},
			},
		],
	},
	{
		icon: IconDice6,
		name: "rndlib",
		description: "Randomizer library for any JavaScript or TypeScript project",
		badges: ["node", "typescript", "stable"],
		npm: "rndlib",
		github: "hcollin/rndlib",
		aside: [
			{
				id: "readme",
				title: "Readme file in GitHub",
				markdown: {
					url: "https://raw.githubusercontent.com/hcollin/rndlib/main/readme.md",
				},
			}
		]
	},
];
