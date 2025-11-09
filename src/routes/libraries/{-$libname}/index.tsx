import { Container, Group, Title, Box, Text, Badge, Grid, Anchor, Flex, Divider } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";

import { useConfig } from "hcconfig";
import { IconBrandGithub, IconExternalLink, IconMarkdown } from "@tabler/icons-react";
import AnchorLink from "../../../components/AnchorLink/AnchorLink";
import LibraryList from "../../../components/LibraryList/LibraryList";
import appConfig from "../../../configs/appConfig";
import { getLibraryByName, type ILibraryAsideItem } from "../../../data/libraries";

export const Route = createFileRoute("/libraries/{-$libname}/")({
	component: LibraryComponent,
	staticData: {
		title: "Library",
	},
});

function LibraryComponent() {
	const { libname } = Route.useParams();

	const [confIsMobile] = useConfig(appConfig, "isMobile");

	const lib = getLibraryByName(libname);

	const npmVer = lib && lib.npm ? `https://img.shields.io/npm/v/${lib.npm}.svg` : null;
	const buildStatus = lib && lib.buildPath && lib.github ? `https://github.com/${lib.github}/${lib.buildPath}/badge.svg` : null;

	const asideItems: ILibraryAsideItem[] = [];

	if (lib?.github) {
		asideItems.push({
			id: "github",
			title: "GitHub Repository",
			icon: IconBrandGithub,
			link: {
				url: `https://github.com/${lib.github}`,
				external: true,
			},
		});
	}

	if (lib?.npm) {
		asideItems.push({
			id: "npm",
			title: "NPM Package",
			link: {
				url: `https://www.npmjs.com/package/${lib.npm}`,
				external: true,
			},
		});
	}

	if (lib && lib.aside) {
		if (asideItems.length > 0) {
			asideItems.push({
				id: "divider-1",
				title: "Additional links",
			});
		}
		asideItems.push(...lib.aside);
	}

	const showAside = asideItems.length > 0 && !confIsMobile;
	const menuSize = confIsMobile ? 0 : 2;
	const asideSize = showAside ? 3 : 0;
	const mainSize = 12 - menuSize - asideSize;

	return (
		<Container size="lg">
			<Grid mt="xl" mb="lg" gutter="xl">
				{!confIsMobile && (
					<Grid.Col span={lib ? menuSize : 12}>
						<Title order={4} mb="sm">Libraries</Title>
						<LibraryList size="sm" activeName={libname} />
					</Grid.Col>
				)}
				{lib && (
					<>
						<Grid.Col span={mainSize}>
							<Group mb="sm" align="space-between" justify="flex-start" grow>
								<Title order={1} mt="lg" mb="md">
									Library: {lib?.name}
								</Title>

								<Group gap="xs" align="center" justify="flex-end">
									{npmVer && (
										<Box>
											<img src={npmVer} alt={`${lib.name} npm version`} style={{ height: 20 }} />
										</Box>
									)}
									{buildStatus && (
										<Box>
											<img src={buildStatus} alt={`${lib.name} build status`} style={{ height: 20 }} />
										</Box>
									)}
								</Group>
							</Group>

							<Group gap="xs" mb="md">
								{lib.badges.map((badge) => (
									<Badge key={badge} variant="outline" size="sm">
										{badge}
									</Badge>
								))}
							</Group>

							<Text mb="md">{lib?.description}</Text>
						</Grid.Col>
						{showAside && (
							<Grid.Col span={asideSize}>
								{asideItems.map((asi) => {
									if (asi.link && asi.link.external) {
										return (
											<Anchor href={asi.link?.url} target="_blank" rel="noopener noreferrer" mb="md" key={asi.title}>
												<Flex key={asi.title} mb="md" justify="flex-start" align="center">
													{asi.icon && <asi.icon size="1.75rem" />}
													<Text span style={!asi.icon ? { marginLeft: "2rem" } : { marginLeft: "0.25rem" }}>
														{asi.title}
													</Text>
													<IconExternalLink size="1rem" style={{ marginLeft: 4 }} />
												</Flex>
											</Anchor>
										);
									}
									if (asi.markdown) {
										return (
											<Box key={asi.title} mb="md">
												<AnchorLink
													to="/libraries/{-$libname}/md/{-$markdown}"
													params={(prev) => ({ ...prev, libname: lib.name, markdown: asi.id })}
												>
													{asi.icon && <asi.icon size="1.75rem" />}
													<Text span style={!asi.icon ? { marginLeft: "2rem" } : { marginLeft: "0.25rem" }}>
														{asi.title}
													</Text>
													<IconMarkdown size="1rem" style={{ marginLeft: 4 }} />
												</AnchorLink>
											</Box>
										);
									}

									if (asi.id.startsWith("divider-")) {
										return <Divider key={asi.id} my="sm" label={asi.title} />;
									}
									return (
										<Box key={asi.title} mb="md">
											{asi.title}
										</Box>
									);
								})}
							</Grid.Col>
						)}
					</>
				)}
			</Grid>
		</Container>
	);
}
