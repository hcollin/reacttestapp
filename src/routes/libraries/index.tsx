import { Container } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import LibraryList from "../../components/LibraryList/LibraryList";
import PageTitle from "../../components/Titles/PageTitle";

export const Route = createFileRoute("/libraries/")({
    component: RouteComponent,
    staticData: {
        title: "Libraries",
        hideAside: true,
    },
});

function RouteComponent() {
    return (
        <Container size="lg">
            <PageTitle>Libraries</PageTitle>

            <LibraryList size="xl" />
        </Container>
    );
}
