import { Container, Group, Title, Box, Text, Badge, Grid, Anchor } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";

import { useConfig } from "hcconfig";
import { IconExternalLink, IconMarkdown } from "@tabler/icons-react";
import AnchorLink from "../../components/AnchorLink/AnchorLink";

import appConfig from "../../configs/appConfig";
import { getLibraryByName } from "../../data/libraries";
import LibraryList from "../../components/LibraryList/LibraryList";

export const Route = createFileRoute("/libraries/{-$library}")({
	component: LibraryComponent,
	staticData: {
		title: "Library",
	},
});

function LibraryComponent() {
	const { library } = Route.useParams();

	const libname = library; // Adjusted to match the param name

	const [confIsMobile] = useConfig(appConfig, "isMobile");

	const lib = getLibraryByName(libname);

	const npmVer = lib && lib.npm ? `https://img.shields.io/npm/v/${lib.npm}.svg` : null;
	const buildStatus = lib && lib.buildPath && lib.github ? `https://github.com/${lib.github}/${lib.buildPath}/badge.svg` : null;

	const showAside = lib && lib.aside && lib.aside.length > 0 && !confIsMobile;

	const menuSize = confIsMobile ? 0 : 2;

	const asideSize = showAside ? 3 : 0;

	const mainSize = 12 - menuSize - asideSize;

	return (
		<Container size="lg">
			<Grid mt="xl" mb="lg" gutter="xl">
				{!confIsMobile && (
					<Grid.Col span={lib ? menuSize : 12}>
						<LibraryList size="sm" />
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
								{lib.aside &&
									lib.aside.map((asi) => {
										if (asi.link && asi.link.external) {
											return (
												<Box key={asi.title} mb="md">
													<Anchor href={asi.link?.url} target="_blank" rel="noopener noreferrer">
														{asi.title} <IconExternalLink size="1rem" />
													</Anchor>
												</Box>
											);
										}
										if (asi.markdown !== undefined) {
											return (
												<Box key={asi.title} mb="md">
													<AnchorLink
														to="/libraries/{-$libname}/md/{-$markdown}"
														params={(prev) => ({ ...prev, libname: lib.name, markdown: asi.id })}
													>
														{asi.title} <IconMarkdown size="1rem" />
													</AnchorLink>
												</Box>
											);
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
