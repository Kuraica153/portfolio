import { useTheme } from "next-themes";
import { FE_COLORS } from "@/utils/icons/util";
export const ShadcnIcon = () => {
	const { theme } = useTheme();

	return (
		<svg
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			viewBox="0 0 256 256"
			width="20px"
			height="20px"
		>
			<rect className="st0" width="256" height="256" style={{ fill: "none" }} />
			<line
				className="st1"
				x1="208"
				y1="128"
				x2="128"
				y2="208"
				style={{
					stroke: theme === "dark" ? FE_COLORS.darkTheme : FE_COLORS.lightTheme,
					strokeLinecap: "round",
					strokeLinejoin: "round",
					strokeWidth: "32px",
				}}
			/>
			<line
				className="st1"
				x1="192"
				y1="40"
				x2="40"
				y2="192"
				style={{
					stroke: theme === "dark" ? FE_COLORS.darkTheme : FE_COLORS.lightTheme,
					strokeLinecap: "round",
					strokeLinejoin: "round",
					strokeWidth: "32px",
				}}
			/>
		</svg>
	);
};
