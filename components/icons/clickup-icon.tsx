import { useTheme } from "next-themes";
import { DEVOPS_COLORS } from "@/utils/icons/util";

export const ClickupIcon = () => {
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
			<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				<path
					d="m2 18.439 3.69-2.828c1.961 2.56 4.044 3.739 6.363 3.739 2.307 0 4.33-1.166 6.203-3.704L22 18.405C19.298 22.065 15.941 24 12.053 24 8.178 24 4.788 22.078 2 18.439zM12.04 6.15l-6.568 5.66-3.036-3.52L12.055 0l9.543 8.296-3.05 3.509z"
					fill={
						theme === "dark"
							? DEVOPS_COLORS.darkTheme
							: DEVOPS_COLORS.lightTheme
					}
				></path>
			</g>
		</svg>
	);
};
