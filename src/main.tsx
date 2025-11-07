// IMPORT: Core Libraries
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashHistory, createRouter } from "@tanstack/react-router";
import { MantineProvider, type AppShellResponsiveSize, type MantineSpacing } from "@mantine/core";

// IMPORT: Mantine : Custom themes
import hctheme from "./theme/hctheme";

// IMPORT: TenStack Router: generated route tree
import { routeTree } from "./routeTree.gen";

// IMPORT: Mantine : styles
import "@mantine/core/styles.css";

// IMPORT: Custom css
import "./index.css";

// Create a hash history instance for GitHub Pages compatibility
const hashHistory = createHashHistory()

// Create a new router instance
const router = createRouter({ routeTree, history: hashHistory });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }

    interface StaticDataRouteOption {
        title: string;

        // HEADER OPTIONS
        useHomeHeader?: boolean;

        // NAVBAR OPTIONS
        hideNavbar?: boolean;
        floatingNavbar?: boolean;

        // ASIDE OPTIONS
        hideAside?: boolean;

        includesAppShellMain?: boolean;

        customLayout?: boolean;

        // FOOTER OPTIONS
        hideFooter?: boolean;

        mainPadding?: AppShellResponsiveSize | MantineSpacing;
    }
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <StrictMode>
            <MantineProvider defaultColorScheme="dark" theme={hctheme}>
                <RouterProvider router={router} />
            </MantineProvider>
        </StrictMode>
    );
}
