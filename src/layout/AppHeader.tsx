import { AppShell, Box, Burger, Button, Container, Group, Text } from "@mantine/core";
import { Link, useRouterState } from "@tanstack/react-router";

import classes from "./appheader.module.css";
import Logo from "../components/logo/Logo";
import { useElementSize } from "@mantine/hooks";
import { HEADERLINKS } from "../data/headerlinks";

interface AppHeaderProps {
    toggleMenu: () => void;
    menuOpen: boolean;
    home?: boolean;
}

const AppHeader = (props: AppHeaderProps) => {
    const { home, toggleMenu, menuOpen } = props;
    const router = useRouterState();

    const { ref, width } = useElementSize();

    // const [opened, { toggle }] = useDisclosure();

    const headerStyles: React.CSSProperties = {};
    if (home) {
        headerStyles.backgroundColor = "#0002";
    }
    // if (props.customHeight) {
    //     headerStyles.height = props.customHeight;
    // }
    // if (props.transparent) {
    //     headerStyles.backgroundColor = "transparent";
    // }
    // if (props.bgColor) {
    //     headerStyles.backgroundColor = props.bgColor;
    // }

    const isMobile = width < 900;

    return (
        <AppShell.Header className={classes.appheader} style={headerStyles} withBorder={!home} ref={ref}>
            <Container size="lg">
                <Group grow justify="space-between" align="center" className={classes.headergroup}>
                    <Box>
                        <Logo logoStyle={home ? "white" : "default"} size={isMobile ? "xs" : "md"} />
                    </Box>
                    {/* <Title order={2} className={props.transparent ? classes.titletransparent : classes.titletext}>
                        React Test Bench
                    </Title> */}
                    {isMobile && (
                        <Box style={{ position: "absolute", right: 15 }}>
                            <Burger opened={menuOpen} onClick={toggleMenu} aria-label="Toggle navigation" />
                        </Box>
                    )}
                    {!isMobile && (
                        <Group gap={20} className={classes.headermenu}>
                            {HEADERLINKS.map((link) => {
                                const isActive =
                                    link.to !== "/"
                                        ? router.location.pathname.startsWith(link.to)
                                        : router.location.pathname === "/";
                                return (
                                    <Button
                                        variant={isActive ? "filled" : !home ? "subtle" : "filled"}
                                        color={
                                            !home
                                                ? "var(--mantine-primary-filled)"
                                                : isActive
                                                  ? "var(--mantine-primary-filled)"
                                                  : "var(--mantine-color-body)"
                                        }
                                        key={link.to}
                                        to={link.to}
                                        component={Link}
                                        style={{ display: "flex", alignItems: "center" }}
                                    >
                                        {<link.icon />}
                                        <Text ml="xs" size="lg">
                                            {link.label}
                                        </Text>
                                    </Button>
                                );
                            })}
                        </Group>
                    )}
                </Group>
            </Container>
        </AppShell.Header>
    );
};

export default AppHeader;
