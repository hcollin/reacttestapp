import { AppShell } from "@mantine/core";
import FollowingFoo from "../configs/FollowingFoo";
import AllConfigs from "../configs/AllConfigs";

const AppMain = () => {
    return (
        <AppShell.Main>
            <FollowingFoo />

            <AllConfigs />
        </AppShell.Main>
    );
};

export default AppMain;
