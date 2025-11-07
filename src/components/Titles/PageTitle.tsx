import { Text, type TextProps } from "@mantine/core";

interface PageTitleProps extends TextProps {
    children: React.ReactNode;
}

const PageTitle = (props: PageTitleProps) => {
    return (
        <Text
            mt="xl"
            mb="lg"
            fw={700}
            size="2.2rem"
            variant={props.gradient ? "gradient" : "h1"}
            c="var(--mantine-primary-color-7)"
            {...props}
            
            style={{ fontFamily: "Quantico, sans-serif", letterSpacing: "-1px", ...props.style }}
        >
            {props.children}
        </Text>
    );
};

export default PageTitle;
