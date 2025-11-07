import { AppShell } from "@mantine/core";
import { createRootRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import AppHeader from "../layout/AppHeader";
import AppSide from "../layout/AppSide";
import AppFooter from "../layout/AppFooter";
import AppNavbar from "../layout/AppNavbar";
import { useDisclosure } from "@mantine/hooks";

const RootLayout = () => {
    const router = useRouterState();

    const [navOpenMobile, { toggle: toggleMobile }] = useDisclosure();

    const tsd = router.matches[1]?.staticData || {};

    const hideFooter = tsd.hideFooter !== undefined ? tsd.hideFooter : false;

    // const mainPadding = tsd.mainPadding !== undefined ? tsd.mainPadding : "md";

    const includesAppShellMain = tsd.includesAppShellMain !== undefined ? tsd.includesAppShellMain : false;

    const homeHeader = tsd.useHomeHeader === true;

    const headerOffset = tsd.useHomeHeader !== true;

    return (
        <>
            <AppShell
                padding={0}
                layout="alt"
                withBorder={false}
                header={{ height: 80, offset: headerOffset }}
                navbar={{
                    width: "100%",
                    breakpoint: "sm",
                    collapsed: { mobile: !navOpenMobile, desktop: !navOpenMobile },
                }}
                aside={{
                    width: 200,
                    collapsed: { mobile: true, desktop: true },
                    breakpoint: "lg",
                }}
                // footer={{ height: 40 }}
            >
                <AppHeader home={homeHeader} toggleMenu={toggleMobile} menuOpen={navOpenMobile} />

                <AppNavbar toggleMenu={toggleMobile} />

                {includesAppShellMain && <Outlet />}
                {!includesAppShellMain && (
                    <AppShell.Main>
                        <Outlet />
                    </AppShell.Main>
                )}

                <AppSide />

                {!hideFooter && <AppFooter />}
            </AppShell>

            <TanStackRouterDevtools />
        </>
    );
};

export const Route = createRootRoute({
    component: RootLayout,
    staticData: {
        title: "React Test Bench",
    },
});
