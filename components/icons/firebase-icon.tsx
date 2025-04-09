import { useTheme } from "next-themes";
import { DB_COLORS } from "@/utils/icons/util";

export const FirebaseIcon = () => {
	const { theme } = useTheme();

	return (
		<svg
			viewBox="0 0 15 15"
			width="20px"
			height="20px"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				{" "}
				<path
					d="M2.5 11.5L11.5 3.5L12.5 12.5L7.5 14.5L2.5 11.5ZM2.5 11.5L7.5 2.5L9.5 5.5M2.5 11.5L3.5 0.5L6.5 3.5"
					stroke={theme === "dark" ? DB_COLORS.darkTheme : DB_COLORS.lightTheme}
					strokeLinejoin="round"
				></path>{" "}
			</g>
		</svg>
	);
};
