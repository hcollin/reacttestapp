import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

import AppLayout from "./layout/AppLayout";
import "./App.css";


function App() {
    return (
        <MantineProvider defaultColorScheme="dark">
            <AppLayout />
        </MantineProvider>
    );
}

export default App;
