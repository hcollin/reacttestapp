import { Container, Group, Title, Box, Text, Badge, Grid } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { getLibraryByName } from "../../data/libraries";
import LibraryList from "../../components/LibraryList/LibraryList";

export const Route = createFileRoute("/libraries/{-$libname}")({
    component: LibraryComponent,
    staticData: {
        title: "Library",
    },
});

function LibraryComponent() {
    const { libname } = Route.useParams();

    const lib = getLibraryByName(libname);

    const npmVer = lib && lib.npm ? `https://img.shields.io/npm/v/${lib.npm}.svg` : null;
    const buildStatus =
        lib && lib.buildPath && lib.github ? `https://github.com/${lib.github}/${lib.buildPath}/badge.svg` : null;

    const showAside = lib && lib.aside && lib.aside.length > 0;

    const menuSize = 2;

    const asideSize = showAside ? 3 : 0;

    const mainSize = 12 - menuSize - asideSize;

    return (
        <Container size="lg">
            <Grid mt="xl" mb="lg" gutter="xl">
                <Grid.Col span={lib ? menuSize : 12}>
                    <LibraryList size="sm" />
                </Grid.Col>
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
                                            <img
                                                src={buildStatus}
                                                alt={`${lib.name} build status`}
                                                style={{ height: 20 }}
                                            />
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
                                {lib.aside.map((asideItem, index) => (
                                    <Box key={index} mb="md">
                                        {asideItem[0]}
                                    </Box>
                                ))}
                            </Grid.Col>
                        )}
                    </>
                )}
            </Grid>
        </Container>
    );
}
