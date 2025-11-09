import { Stack, Card, Group, Title, Badge, Text, type TitleOrder } from "@mantine/core";
import { LIBRARIES } from "../../data/libraries";
import AnchorLink from "../AnchorLink/AnchorLink";

interface LibraryListProps {
	badges?: boolean;
	size?: "sm" | "md" | "lg" | "xl";
	activeName?: string;
}

const SIZES = {
	text: {
		sm: 6,
		md: 4,
		lg: 3,
		xl: 3,
	},
	icon: {
		sm: 24,
		md: 32,
		lg: 48,
		xl: 48,
	},
	padding: {
		sm: "xs",
		md: "xs",
		lg: "md",
		xl: "md",
	},
};

const LibraryList = (props: LibraryListProps) => {
	const { badges, size } = props;

	const ss = size ?? "md";

	let showBadges = badges ?? true;
	if (ss !== "lg" && ss !== "xl") {
		showBadges = false;
	}

	const textSize = SIZES.text[ss];

	const iconSize = SIZES.icon[ss];

	return (
		<Stack>
			{LIBRARIES.map((lib) => {
				const Icon = lib.icon;
				const active = props.activeName === lib.name;
				return (
					<Card
						key={lib.name}
						shadow="sm"
						padding={SIZES.padding[ss]}
						withBorder={true}
						style={active ? { borderColor: "var(--mantine-primary-color-2)" } : {}}
					>
						<AnchorLink
							to="/libraries/{-$libname}"
							params={(prev) => ({ ...prev, libname: lib.name })}
							style={{ textDecoration: "none" }}
							c={active ? "var(--mantine-primary-color-2)" : undefined}
						>
							<Group>
								<Icon size={iconSize} />

								<Title order={textSize as TitleOrder}>{lib.name}</Title>

								{showBadges && (
									<Group gap="xs" ml="auto">
										{lib.badges.map((badge) => (
											<Badge
												key={badge}
												size={ss}
												// className="nowrap"
												// c="var(--mantine-primary-color-7)"
											>
												{badge}
											</Badge>
										))}
									</Group>
								)}
							</Group>
							{ss === "xl" && (
								<Text size="sm" lineClamp={1} c="var(--mantine-text-color)" mt="sm">
									{lib.description}
								</Text>
							)}
						</AnchorLink>
						{/* <Anchor
							renderRoot={({ className, ...others }) => {
								return (
									<Link to="/libraries/{-$libname}" params={(prev) => ({ ...prev, libname: lib.name })} className={className} {...others}>
										<Group>
											<Icon size={iconSize} />

											<Title order={textSize as TitleOrder}>{lib.name}</Title>

											{showBadges && (
												<Group gap="xs" ml="auto">
													{lib.badges.map((badge) => (
														<Badge
															key={badge}
															size={ss}
															// className="nowrap"
															// c="var(--mantine-primary-color-7)"
														>
															{badge}
														</Badge>
													))}
												</Group>
											)}
										</Group>
										{ss === "xl" && (
											<Text size="sm" lineClamp={1} c="var(--mantine-text-color)" mt="sm">
												{lib.description}
											</Text>
										)}
									</Link>
								);
							}}
							style={{ textDecoration: "none" }}
						></Anchor> */}
					</Card>
				);
			})}
		</Stack>
	);
};

export default LibraryList;
