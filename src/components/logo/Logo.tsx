import { Box } from "@mantine/core";

import "./logo.css";

interface LogoProps {
    logoStyle?: "default" | "white" | "black" | "text";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const Logo = (props: LogoProps) => {
    const classes = ["logo"];

    if (props.logoStyle === "white") {
        classes.push("whitelogo");
    } else if (props.logoStyle === "black") {
        classes.push("blacklogo");
    } else if (props.logoStyle === "text") {
        classes.push("textlogo");
    } else {
        classes.push("defaultlogo");
    }

    classes.push(props.size ? `logo-${props.size}` : "logo-md");

    return (
        <Box className={classes.join(" ")}>
            <h1>
                <span className="first-letter letter-r">R</span>
                <span className="pop">e</span>
                <span className="rotate-letter d-10">a</span>
                <span className="rotate-letter d10">c</span>t<span className="first-letter letter-t new-word">T</span>e
                <span className="flip">s</span>
                <span className="rotate-letter d5">t</span>
                <span className="first-letter letter-b new-word">B</span>
                <span className="drop">e</span>
                <span className="flip">n</span>
                <span className="rotate-letter d-10">c</span>h
            </h1>
        </Box>
    );
};

export default Logo;
