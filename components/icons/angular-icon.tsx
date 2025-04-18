import { useTheme } from "next-themes";
import { FE_COLORS } from "@/utils/icons/util";

export const AngularIcon = () => {
	const { theme } = useTheme();
	return (
		<svg
			width="20px"
			height="20px"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>angular_outlined</title>
			<rect width="24" height="24" fill="none" />
			<path
				d="M12,2.5l8.84,3.15L19.5,17.35,12,21.5,4.5,17.35,3.16,5.65,12,2.5m0,2L5,7l1.08,9.22L12,19.5l5.92-3.28L19,7,12,4.5m0,1.22L16.58,16H14.87l-.93-2.28H10L9.12,16H7.41L12,5.72m1.34,6.58L12,9.07,10.66,12.3Z"
				fill={theme === "dark" ? FE_COLORS.darkTheme : FE_COLORS.lightTheme}
			/>
		</svg>
	);
};
