import { Anchor, Container, List, ListItem, Space, Text, Title } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import PageTitle from "../components/Titles/PageTitle";

export const Route = createFileRoute("/about")({
    component: About,
    staticData: {
        title: "About This App",
        hideAside: true,
        hideNavbar: true,
        // navBarContent: "about"
    },
});

function About() {
    return (
        <Container size="lg">
            <PageTitle>About this site</PageTitle>

            <Text>
                This site is a playground for experimenting with various React libraries and technologies. Creating new
                libraries for React or plain TypeScript need to be tested somewhere and this is the site where I can
                test libraries I build.
            </Text>

            <Title order={2} mt="xl" mb="md">
                Technologies used
            </Title>

            <Text>
                This site was also an experiment for trying out various technologies. The main libraries and
                technologies used in this site are:
            </Text>

            <List mt="lg" spacing="xs" withPadding>
                <ListItem>
                    <Anchor href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                        <Text size="lg" fw={700}>
                            React
                        </Text>
                    </Anchor>
                    - The old venerable but still valid library and my choice of web weapon for the past decade
                </ListItem>
                <ListItem>
                    <Anchor href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                        <Text size="lg" fw={700}>
                            TypeScript
                        </Text>
                    </Anchor>
                    - Although JavaScript still holds a dear place in my heart, TypeScript has become my go-to language
                    as I mainly work on large scale critical web applications
                </ListItem>
                <ListItem>
                    <Text size="lg" fw={700}>
                        <Anchor href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer" size="lg" fw={700}>
                            Vite{" "}
                        </Anchor>
                        &{" "}
                        <Anchor href="https://vitest.dev/" target="_blank" rel="noopener noreferrer" size="lg" fw={700}>
                            Vitest
                        </Anchor>
                    </Text>
                    - My choice of build tool and test runner for modern web applications at the moment.
                </ListItem>
                <ListItem>
                    <Anchor href="https://mantine.dev/" target="_blank" rel="noopener noreferrer">
                        <Text size="lg" fw={700}>
                            Mantine UI
                        </Text>
                    </Anchor>
                    - This is first time using Mantine as I got quite fed up with Material UI's lack of some components
                    I needed and overly complex theming system
                </ListItem>
                <ListItem>
                    <Anchor href="https://tanstack.com/router" target="_blank" rel="noopener noreferrer">
                        <Text size="lg" fw={700}>
                            TanStack Router
                        </Text>
                    </Anchor>
                    - I tend to work with web apps that have no real need for routing. Also did not really like React
                    Router, so I wanted try something else and TanStack Router got some good recommendations.
                </ListItem>
            </List>

            <Title order={2} mt="xl" mb="md">
                Author
            </Title>

            <Text>I am old... too old.</Text>
            <Text mt="sm">
                I have been working in the IT industry for over 25 years and have been coding and messing around with
                various technologies since the late 1980s. My main focus has always been on web development from the
                turn of the millennium and especially on the front-end side of things. I still remember{" "}
                <span style={{ fontSize: "0.9em", opacity: 0.9 }}>
                    when css was still just in its infancy and javascript was only used to change the button colors when
                    hovering. Backend was written{" "}
                    <span style={{ fontSize: "0.9em", opacity: 0.8 }}>
                        on Perl or some other obscure god forsaken language in cgi-bin.{" "}
                        <span style={{ fontSize: "0.9em", opacity: 0.7 }}>
                            And cloud was just a fluffy white thing in the sky. Grumble, grumble...
                        </span>
                    </span>
                </span>
            </Text>
            <Text mt="sm">
                Nowadays I mostly work as a front-end, solution and enterprise architect for mission critical
                applications. Most of my work will never reach the public eye if everything goes well. This site and
                there libraries are my outlet from the tons of powerpoint presentations and tender documents.
            </Text>
            <Text mt="sm">
                You can find me on GitHub as <a href="https://github.com/hcollin">hcollin</a>. I avoid most of the
                social media like plague.
            </Text>
            <Space h="xl" />
        </Container>
    );
}
