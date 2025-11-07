import { AppShell, Box, Center, CloseButton, Group, NavLink, Title } from "@mantine/core";
import Logo from "../components/logo/Logo";
import { HEADERLINKS } from "../data/headerlinks";
import { Link } from "@tanstack/react-router";

// import { useRouterState } from "@tanstack/react-router";

// import classes from "./appnavbar.module.css";

interface AppNavbarProps {
    toggleMenu: () => void;
}

const AppNavbar = (props: AppNavbarProps) => {
    const { toggleMenu } = props;
    // const router = useRouterState();

    // const tsd = router.matches[1]?.staticData || {};

    return (
        <AppShell.Navbar>
            <AppShell.Section p="xs">
                <Group align="center" mb="md" justify="space-between">
                    <Box onClick={toggleMenu}>
                        <Logo size="sm" logoStyle="default" />
                    </Box>

                    <CloseButton onClick={toggleMenu} size="xl" />
                </Group>
            </AppShell.Section>

            <AppShell.Section grow p="md">
                {HEADERLINKS.map((link) => {
                    return (
                        <NavLink key={link.to} to={link.to} onClick={toggleMenu} component={Link} label={link.label} leftSection={<link.icon />} />
                    );
                })}
            </AppShell.Section>

            <AppShell.Section p="md">
                <Center>
                    <Title order={6}>&copy; {new Date().getFullYear()} hcollin</Title>
                </Center>
            </AppShell.Section>
        </AppShell.Navbar>
    );
};

export default AppNavbar;
