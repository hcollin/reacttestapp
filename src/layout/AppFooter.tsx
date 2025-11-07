import { AppShell, Center, Container, Text } from "@mantine/core";

import classes from "./appfooter.module.css";

const AppFooter = () => {
    return (
        <AppShell.Footer className={classes.appfooter}>
            <Container>
                <Center>
                    <Text size="xs">&copy; {new Date().getFullYear()} hcollin</Text>
                    </Center>
            </Container>
        </AppShell.Footer>
    );
};

export default AppFooter;
