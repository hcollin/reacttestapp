import { Container, Title, Text, Group, Badge, SimpleGrid, Card, CardSection } from "@mantine/core";
import { createFileRoute, Link } from "@tanstack/react-router";
import HeroBanner from "../components/HeroBanner/HeroBanner";

import fontstyles from "../styles/fontstyles.module.css";
import { LIBRARIES } from "../data/libraries";
import PageTitle from "../components/Titles/PageTitle";

export const Route = createFileRoute("/")({
    component: Index,
    staticData: {
        title: "React Test Bench",
        hideAside: true,
        hideNavbar: true,

        useHomeHeader: true,
        // mainPadding: "0",
    },
});

function Index() {
    return (
        <>
            <HeroBanner
                height={50}
                imageUrl="herobanner01.jpg"
                imageFilter="grayscale(90%) brightness(125%) blur(2px)"
                gradientToggle={true}
                gradientOverlay={{
                    start: { color: "transparent", percent: 0 },
                    end: { percent: 100, color: "--mantine-color-body", isVar: true },
                    angle: 180,
                    opacity: 1,
                }}
                colorOverlay={{}}
            >
                <Container
                    size="lg"
                    style={{
                        position: "relative",
                        zIndex: 10,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center",
                    }}
                    // className="yb"
                >
                    <PageTitle
                        mb="xs"
                        size="3rem"
                        gradient={{
                            from: "var(--mantine-primary-color-9)",
                            to: "var(--mantine-primary-color-1)",
                            deg: 180,
                        }}
                        style={{
                            textShadow: "2px 1px 2px rgba(0, 0, 0, 0.5)",
                        }}
                    >
                        Welcome to the React Test Bench
                    </PageTitle>

                    <Text size="lg">
                        Home of <span className={fontstyles.wacky}>wacky</span> library experiments!
                    </Text>
                </Container>
            </HeroBanner>

            <Container size="lg">
                <Title order={2} style={{ marginTop: 40, marginBottom: 20 }}>
                    Libraries currently included in this test bench
                </Title>

                <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg" mt="xl">
                    {LIBRARIES.map((lib) => {
                        const LibIcon = lib.icon;

                        // const npmVer = `https://img.shields.io/npm/v/${lib.npm}.svg`;
                        // const buildStatus = `https://github.com/${lib.github}/${lib.buildPath}/badge.svg`;

                        return (
                            <Card key={lib.name} className="library-card" shadow="sm" p="xs">
                                <CardSection p="sm" withBorder>
                                    <Link to={lib.topath} style={{ textDecoration: "none" }}>
                                        <Group>
                                            <LibIcon
                                                size={48}
                                                className="library-icon"
                                                color="var(--mantine-primary-color-7)"
                                            />
                                            <Title order={3} c="var(--mantine-primary-color-7)">
                                                {lib.name}
                                            </Title>
                                        </Group>
                                    </Link>
                                </CardSection>

                                <CardSection p="lg">
                                    <Text lineClamp={3}>{lib.description}</Text>
                                </CardSection>
                                <CardSection
                                    p="sm"
                                    style={{
                                        flex: "1 1 auto",
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        flexDirection: "column",
                                    }}
                                >
                                    <Group gap="xs" mb="md">
                                        {lib.badges.map((badge) => (
                                            <Badge key={badge} variant="outline" size="sm">
                                                {badge}
                                            </Badge>
                                        ))}
                                    </Group>
                                    {/* <Group gap="md">
                                        {lib.npm && (
                                            <Box>
                                                <img
                                                    src={npmVer}
                                                    alt={`${lib.name} npm version`}
                                                    style={{ height: 20 }}
                                                />
                                            </Box>
                                        )}
                                        {lib.buildPath && (
                                            <Box>
                                                <img
                                                    src={buildStatus}
                                                    alt={`${lib.name} build status`}
                                                    style={{ height: 20 }}
                                                />
                                            </Box>
                                        )}
                                    </Group> */}
                                </CardSection>
                            </Card>
                        );
                    })}
                </SimpleGrid>
            </Container>
        </>
    );
}
