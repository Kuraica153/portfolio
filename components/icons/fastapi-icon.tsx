import { useTheme } from "next-themes";
import { BE_COLORS } from "@/utils/icons/util";
export const FastapiIcon = () => {
	const { theme } = useTheme();

	return (
		<svg
			fill="#000000"
			width="20px"
			height="20px"
			viewBox="0 0 24 24"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 0C5.375 0 0 5.375 0 12c0 6.627 5.375 12 12 12 6.626 0 12-5.373 12-12 0-6.625-5.373-12-12-12zm-.624 21.62v-7.528H7.19L13.203 2.38v7.528h4.029L11.376 21.62z"
				fill={theme === "dark" ? BE_COLORS.darkTheme : BE_COLORS.lightTheme}
			/>
		</svg>
	);
};
