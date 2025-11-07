import { Stack, Card, Group, Title, Badge, Text, type TitleOrder, Anchor } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import { LIBRARIES } from "../../data/libraries";

interface LibraryListProps {
    badges?: boolean;
    size?: "sm" | "md" | "lg" | "xl";
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
                return (
                    <Card key={lib.name} shadow="sm" padding={SIZES.padding[ss]}>
                        <Anchor to={lib.topath} style={{ textDecoration: "none" }} component={Link}>
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
                        </Anchor>
                    </Card>
                );
            })}
        </Stack>
    );
};

export default LibraryList;
