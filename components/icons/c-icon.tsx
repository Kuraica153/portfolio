import { useTheme } from "next-themes";
import { LANGUAGES_COLORS } from "@/utils/icons/util";

export const CIcon = () => {
	const { theme } = useTheme();

	return (
		<svg
			width="20px"
			height="20px"
			viewBox="0 0 32 32"
			xmlns="http://www.w3.org/2000/svg"
			fill={
				theme === "dark"
					? LANGUAGES_COLORS.darkTheme
					: LANGUAGES_COLORS.lightTheme
			}
		>
			<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				<title>file_type_cpp2</title>
				<path
					d="M26.914,13.8V15.34H25.372v1.543h1.542v1.543h1.543V16.883H30V15.34H28.457V13.8Zm-3.5,0H21.87V15.34H20.327v1.543H21.87v1.543h1.543V16.883h1.543V15.34H23.413Zm-3.654,5.226a6.167,6.167,0,1,1-.04-6.118l5.39-3.1a12.384,12.384,0,1,0,.032,12.34Z"
					fill={
						theme === "dark"
							? LANGUAGES_COLORS.darkTheme
							: LANGUAGES_COLORS.lightTheme
					}
				></path>
			</g>
		</svg>
	);
};
