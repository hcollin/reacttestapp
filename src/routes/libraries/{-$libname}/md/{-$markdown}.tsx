import { Code, Container, Divider, Grid, Title } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { getLibraryByName } from "../../../../data/libraries";
import { useEffect, useState } from "react";
import { useConfig } from "hcconfig";
import appConfig from "../../../../configs/appConfig";
import LibraryList from "../../../../components/LibraryList/LibraryList";
import { IconMarkdown } from "@tabler/icons-react";
import Markdown from "react-markdown";

export const Route = createFileRoute("/libraries/{-$libname}/md/{-$markdown}")({
	component: RouteComponent,
	staticData: {
		title: "Library Markdown",
	},
});

function RouteComponent() {
	const { libname, markdown: asideid } = Route.useParams();

	const [md, setMd] = useState<string | null>(null);

	const [confIsMobile] = useConfig(appConfig, "isMobile");

	useEffect(() => {
		const lib = getLibraryByName(libname);
		if (lib && lib.aside) {
			const asideItem = lib.aside.find((asi) => asi.id === asideid);
			if (asideItem && asideItem.markdown) {
				console.log("Fetching markdown from ", asideItem.markdown.url);
				fetch(asideItem.markdown.url)
					.then((res) => res.text())
					.then((text) => setMd(text));
			}
		}
	}, [libname, asideid]);

	const lib = getLibraryByName(libname);

	const asideData = lib && lib.aside ? lib.aside.find((asi) => asi.id === asideid) : null;

	const menuSize = confIsMobile ? 0 : 2;

	const mainSize = 12 - menuSize;

	return (
		<Container size="lg">
			<Grid mt="xl" mb="lg" gutter="xl">
				{!confIsMobile && (
					<Grid.Col span={lib ? menuSize : 12}>
						<Title order={4}>Libraries</Title>
						<LibraryList size="sm" activeName={libname} />
					</Grid.Col>
				)}
				<Grid.Col span={mainSize}>
					<Title order={1} mt="lg" mb="md">
						Library: {lib?.name} / {asideData ? asideData.title : "Markdown"} <IconMarkdown size="1.2rem" />
					</Title>
					<Divider mt="md" mb="md" />
					{md ? (
						<Markdown
							components={{
								pre(props) {
									return (
										<pre
											{...props}
											style={{
												padding: "0.5rem 1rem",
												// border: "1px solid var(--mantine-color-gray-7)",
												backgroundColor: "var(--mantine-color-black)",
                        boxShadow: "3px 3px 6px 3px rgba(0,0,0,0.2), inset 0 0 5px rgba(255,255,255,0.1)",
											}}
										>
											{props.children}
										</pre>
									);
								},
								code(props) {
									// Remove last newline added by react-markdown inside code blocks
									if (!props.children) return <Code {...props} />;
									const childLines = props.children?.toString().split("\n");
									childLines[childLines.length - 1] === "" && childLines.pop();

									props = { ...props, children: childLines.join("\n") };

									const style: React.CSSProperties = {
										...props.style,
										backgroundColor: "transparent",
									};
									return (
										<Code {...props} style={style}>
											{props.children}
										</Code>
									);
								},
							}}
						>
							{md}
						</Markdown>
					) : (
						<Title order={4}>Loading...</Title>
					)}
				</Grid.Col>
			</Grid>
		</Container>
	);
}
