import { useTheme } from "next-themes";
import { DB_COLORS } from "@/utils/icons/util";

export const SupabaseIcon = () => {
	const { theme } = useTheme();

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			width="20px"
			height="20px"
			viewBox="0 0 48 48"
		>
			<g id="Ð¡Ð»Ð¾Ð¹_1">
				<path
					fill="none"
					stroke={theme === "dark" ? DB_COLORS.darkTheme : DB_COLORS.lightTheme}
					strokeMiterlimit="10"
					strokeWidth="3"
					d="M23.5,30.5v-24c0-1.9-2.3-2.7-3.4-1.2l-16,21c-1.3,1.7-0.1,4.2,2,4.2H23.5z"
				></path>
				<path
					fill="none"
					stroke={theme === "dark" ? DB_COLORS.darkTheme : DB_COLORS.lightTheme}
					strokeMiterlimit="10"
					strokeWidth="3"
					d="M23.5,18.5v24c0,1.9,2.4,2.7,3.6,1.2l16.8-21c1.4-1.7,0.1-4.2-2.1-4.2H23.5z"
				></path>
			</g>
		</svg>
	);
};
