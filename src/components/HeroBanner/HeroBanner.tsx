import { Box, Overlay } from "@mantine/core";

interface HeroBannerProps {
    children: React.ReactNode;
    height?: number;
    gradientToggle?: boolean;

    gradientOverlay?: {
        start?: {
            color?: string;
            isVar?: boolean;
            percent?: number;
        };

        end?: {
            color?: string;
            isVar?: boolean;
            percent?: number;
        };

        angle?: number;
        opacity?: number;
    };

    colorOverlay?: {
        color?: string;
        opacity?: number;
    };

    filterColor?: string;
    filterColorOpacity?: number;

    imageUrl?: string;
    imageFilter?: string;
}

const HeroBanner = (props: HeroBannerProps) => {
    const style: React.CSSProperties = {
        position: "relative",
        height: `calc(${props.height || 100}vh - var(--app-shell-header-height, 0px))`,
        overflow: "hidden",
    };
    // if (props.imageUrl) {
    //     style.backgroundImage = `url(${props.imageUrl})`;
    //     style.backgroundSize = "cover";
    //     style.backgroundPosition = "center";
    //     style.filter = props.imageFilter || "none";
    // }

    const gs = props.gradientOverlay?.start;
    const ge = props.gradientOverlay?.end;

    const startColor =
        gs?.isVar && gs?.color ? `var(${gs.color})` : gs?.color ? gs.color : "var(--mantine-primary-color-7)";

    const endColor = ge?.isVar && ge?.color ? `var(${ge.color})` : ge?.color ? ge.color : "var(--mantine-color-body)";

    const startPoint = gs?.percent !== undefined ? `${gs.percent}%` : "0%";
    const endPoint = ge?.percent !== undefined ? `${ge.percent}%` : "100%";

    const gradient =
        props.gradientToggle !== false
            ? `linear-gradient(${props.gradientOverlay?.angle || "180"}deg, ${startColor} ${startPoint}, ${endColor} ${endPoint})`
            : undefined;

    
    const showGradientOverlay = props.gradientToggle !== false;
    const showColorOverlay = props.colorOverlay !== undefined;

    return (
        <Box style={style}>
            {props.imageUrl && (
                <img
                    src={props.imageUrl}
                    alt="Hero Banner"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        filter: props.imageFilter || "none",
                    }}
                    className="hero-banner-image"
                />
            )}

            {showColorOverlay && (
                <Box
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: props.colorOverlay?.color || "var(--mantine-primary-color-filled)",
                        opacity: props.colorOverlay?.opacity !== undefined ? props.colorOverlay?.opacity : 0.5,
                        zIndex: 1,
                    }}
                    className="hero-banner-color-overlay"
                />
            )}
            {showGradientOverlay && (
                <Overlay
                    opacity={props.gradientOverlay?.opacity || 1}
                    zIndex={2}
                    gradient={gradient}
                    className="hero-banner-gradient-overlay"
                />
            )}
            {props.children}
        </Box>
    );
};

export default HeroBanner;
