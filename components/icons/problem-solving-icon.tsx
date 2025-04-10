import { useTheme } from "next-themes";
import { SOFTSKILLS_COLORS } from "@/utils/icons/util";

export const ProblemSolvingIcon = () => {
	const { theme } = useTheme();

	return (
		<svg
			fill={
				theme === "dark"
					? SOFTSKILLS_COLORS.darkTheme
					: SOFTSKILLS_COLORS.lightTheme
			}
			width="20px"
			height="20px"
			viewBox="0 0 64 64"
			id="Layer_1_1_"
			version="1.1"
			xmlSpace="preserve"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				{" "}
				<g>
					{" "}
					<path
						d="M63,47.776v-7.553l-3.729-0.955c-0.292-0.945-0.669-1.858-1.125-2.725l1.96-3.309l-5.34-5.341l-3.31,1.961 c-0.866-0.457-1.779-0.834-2.724-1.126L47.776,25h-7.553l-0.955,3.729c-0.945,0.292-1.858,0.669-2.724,1.126l-3.31-1.961L33,28.13 V25h-3c-0.843,0-1.653-0.358-2.221-0.983c-0.576-0.633-0.847-1.454-0.765-2.314C27.159,20.188,28.546,19,30.172,19H33v-9 c0-1.654-1.346-3-3-3h-8V6.172c0-2.646-1.982-4.907-4.512-5.148c-1.408-0.138-2.811,0.33-3.851,1.276C12.597,3.245,12,4.595,12,6v1 H4c-1.654,0-3,1.346-3,3v9h2.828c1.626,0,3.013,1.188,3.158,2.702c0.082,0.86-0.189,1.682-0.765,2.314C5.653,24.642,4.843,25,4,25 H1v9c0,1.654,1.346,3,3,3h10v-2.828c0-1.626,1.187-3.014,2.702-3.158c0.862-0.073,1.683,0.19,2.315,0.766 C19.642,32.347,20,33.156,20,34v3h9.641c-0.356,0.731-0.67,1.485-0.912,2.269L25,40.224v7.553l3.729,0.955 c0.292,0.945,0.669,1.858,1.125,2.725l-1.96,3.309l5.34,5.341l3.31-1.961c0.866,0.457,1.779,0.834,2.724,1.126L40.224,63h7.553 l0.955-3.729c0.945-0.292,1.858-0.669,2.724-1.126l3.31,1.961l5.34-5.341l-1.96-3.309c0.457-0.866,0.833-1.779,1.125-2.725 L63,47.776z M20.363,30.3c-1.04-0.946-2.446-1.417-3.851-1.276C13.982,29.265,12,31.526,12,34.172V35H4c-0.551,0-1-0.448-1-1v-7h1 c1.406,0,2.754-0.597,3.701-1.638c0.945-1.04,1.411-2.443,1.276-3.85C8.735,18.982,6.474,17,3.828,17H3v-7c0-0.552,0.449-1,1-1h10 V6c0-0.844,0.358-1.653,0.983-2.221c0.633-0.575,1.452-0.842,2.315-0.766C18.813,3.158,20,4.546,20,6.172V9h10c0.551,0,1,0.448,1,1 v7h-0.828c-2.646,0-4.907,1.982-5.149,4.513c-0.134,1.406,0.331,2.81,1.276,3.85C27.246,26.403,28.594,27,30,27h1v3.13 l-3.105,3.105L28.94,35H22v-1C22,32.595,21.403,31.245,20.363,30.3z M57.655,47.08l-0.152,0.564 c-0.316,1.174-0.779,2.294-1.376,3.329l-0.292,0.507l1.758,2.968l-3.145,3.146l-2.968-1.759l-0.506,0.292 c-1.036,0.597-2.157,1.06-3.331,1.376l-0.564,0.152L46.224,61h-4.447l-0.856-3.345l-0.564-0.152 c-1.174-0.316-2.294-0.779-3.331-1.376l-0.506-0.292l-2.968,1.759l-3.145-3.146l1.758-2.968l-0.292-0.507 c-0.597-1.035-1.06-2.155-1.376-3.329l-0.152-0.564L27,46.224v-4.447l3.345-0.856l0.152-0.564c0.316-1.174,0.779-2.294,1.376-3.329 l0.292-0.507l-1.758-2.968l3.145-3.146l2.968,1.759l0.506-0.292c1.036-0.597,2.157-1.06,3.331-1.376l0.564-0.152L41.776,27h4.447 l0.856,3.345l0.564,0.152c1.174,0.316,2.294,0.779,3.331,1.376l0.506,0.292l2.968-1.759l3.145,3.146l-1.758,2.968l0.292,0.507 c0.597,1.035,1.06,2.155,1.376,3.329l0.152,0.564L61,41.776v4.447L57.655,47.08z"
						fill={
							theme === "dark"
								? SOFTSKILLS_COLORS.darkTheme
								: SOFTSKILLS_COLORS.lightTheme
						}
					></path>{" "}
					<path
						d="M44,36c-4.411,0-8,3.589-8,8s3.589,8,8,8c1.74,0,3.4-0.557,4.8-1.61l-1.202-1.598C46.547,49.582,45.303,50,44,50 c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6c0,1.303-0.417,2.547-1.208,3.599l1.599,1.201C51.443,47.399,52,45.74,52,44 C52,39.589,48.411,36,44,36z"
						fill={
							theme === "dark"
								? SOFTSKILLS_COLORS.darkTheme
								: SOFTSKILLS_COLORS.lightTheme
						}
					></path>{" "}
					<path
						d="M44,32c-6.617,0-12,5.383-12,12s5.383,12,12,12s12-5.383,12-12S50.617,32,44,32z M44,54c-5.514,0-10-4.486-10-10 s4.486-10,10-10s10,4.486,10,10S49.514,54,44,54z"
						fill={
							theme === "dark"
								? SOFTSKILLS_COLORS.darkTheme
								: SOFTSKILLS_COLORS.lightTheme
						}
					></path>{" "}
					<rect
						height="2"
						width="2"
						x="52"
						y="7"
						fill={
							theme === "dark"
								? SOFTSKILLS_COLORS.darkTheme
								: SOFTSKILLS_COLORS.lightTheme
						}
					></rect>{" "}
					<rect
						height="2"
						width="2"
						x="52"
						y="11"
						fill={
							theme === "dark"
								? SOFTSKILLS_COLORS.darkTheme
								: SOFTSKILLS_COLORS.lightTheme
						}
					></rect>{" "}
					<rect
						height="2"
						width="2"
						x="54"
						y="9"
						fill={
							theme === "dark"
								? SOFTSKILLS_COLORS.darkTheme
								: SOFTSKILLS_COLORS.lightTheme
						}
					></rect>{" "}
					<rect
						height="2"
						width="2"
						x="50"
						y="9"
						fill={
							theme === "dark"
								? SOFTSKILLS_COLORS.darkTheme
								: SOFTSKILLS_COLORS.lightTheme
						}
					></rect>{" "}
					<rect
						height="2"
						width="2"
						x="42"
						y="15"
						fill={
							theme === "dark"
								? SOFTSKILLS_COLORS.darkTheme
								: SOFTSKILLS_COLORS.lightTheme
						}
					></rect>{" "}
					<rect
						height="2"
						width="2"
						x="42"
						y="19"
						fill={
							theme === "dark"
								? SOFTSKILLS_COLORS.darkTheme
								: SOFTSKILLS_COLORS.lightTheme
						}
					></rect>{" "}
					<rect
						height="2"
						width="2"
						x="44"
						y="17"
						fill={
							theme === "dark"
								? SOFTSKILLS_COLORS.darkTheme
								: SOFTSKILLS_COLORS.lightTheme
						}
					></rect>{" "}
					<rect
						height="2"
						width="2"
						x="40"
						y="17"
						fill={
							theme === "dark"
								? SOFTSKILLS_COLORS.darkTheme
								: SOFTSKILLS_COLORS.lightTheme
						}
					></rect>{" "}
					<rect
						height="2"
						width="2"
						x="56"
						y="19"
						fill={
							theme === "dark"
								? SOFTSKILLS_COLORS.darkTheme
								: SOFTSKILLS_COLORS.lightTheme
						}
					></rect>{" "}
					<rect
						height="2"
						width="2"
						x="56"
						y="23"
						fill={
							theme === "dark"
								? SOFTSKILLS_COLORS.darkTheme
								: SOFTSKILLS_COLORS.lightTheme
						}
					></rect>{" "}
					<rect
						height="2"
						width="2"
						x="58"
						y="21"
						fill={
							theme === "dark"
								? SOFTSKILLS_COLORS.darkTheme
								: SOFTSKILLS_COLORS.lightTheme
						}
					></rect>{" "}
					<rect
						height="2"
						width="2"
						x="54"
						y="21"
						fill={
							theme === "dark"
								? SOFTSKILLS_COLORS.darkTheme
								: SOFTSKILLS_COLORS.lightTheme
						}
					></rect>{" "}
					<rect
						height="2"
						width="2"
						x="37"
						y="3"
						fill={
							theme === "dark"
								? SOFTSKILLS_COLORS.darkTheme
								: SOFTSKILLS_COLORS.lightTheme
						}
					></rect>{" "}
					<rect
						height="2"
						width="2"
						x="37"
						y="7"
						fill={
							theme === "dark"
								? SOFTSKILLS_COLORS.darkTheme
								: SOFTSKILLS_COLORS.lightTheme
						}
					></rect>{" "}
					<rect
						height="2"
						width="2"
						x="39"
						y="5"
						fill={
							theme === "dark"
								? SOFTSKILLS_COLORS.darkTheme
								: SOFTSKILLS_COLORS.lightTheme
						}
					></rect>{" "}
					<rect
						height="2"
						width="2"
						x="35"
						y="5"
						fill={
							theme === "dark"
								? SOFTSKILLS_COLORS.darkTheme
								: SOFTSKILLS_COLORS.lightTheme
						}
					></rect>{" "}
					<rect
						height="2"
						width="2"
						x="18"
						y="47"
						fill={
							theme === "dark"
								? SOFTSKILLS_COLORS.darkTheme
								: SOFTSKILLS_COLORS.lightTheme
						}
					></rect>{" "}
					<rect
						height="2"
						width="2"
						x="18"
						y="51"
						fill={
							theme === "dark"
								? SOFTSKILLS_COLORS.darkTheme
								: SOFTSKILLS_COLORS.lightTheme
						}
					></rect>{" "}
					<rect
						height="2"
						width="2"
						x="20"
						y="49"
						fill={
							theme === "dark"
								? SOFTSKILLS_COLORS.darkTheme
								: SOFTSKILLS_COLORS.lightTheme
						}
					></rect>{" "}
					<rect
						height="2"
						width="2"
						x="16"
						y="49"
						fill={
							theme === "dark"
								? SOFTSKILLS_COLORS.darkTheme
								: SOFTSKILLS_COLORS.lightTheme
						}
					></rect>{" "}
					<rect
						height="2"
						width="2"
						x="8"
						y="41"
						fill={
							theme === "dark"
								? SOFTSKILLS_COLORS.darkTheme
								: SOFTSKILLS_COLORS.lightTheme
						}
					></rect>{" "}
					<rect
						height="2"
						width="2"
						x="8"
						y="45"
						fill={
							theme === "dark"
								? SOFTSKILLS_COLORS.darkTheme
								: SOFTSKILLS_COLORS.lightTheme
						}
					></rect>{" "}
					<rect
						height="2"
						width="2"
						x="10"
						y="43"
						fill={
							theme === "dark"
								? SOFTSKILLS_COLORS.darkTheme
								: SOFTSKILLS_COLORS.lightTheme
						}
					></rect>{" "}
					<rect
						height="2"
						width="2"
						x="6"
						y="43"
						fill={
							theme === "dark"
								? SOFTSKILLS_COLORS.darkTheme
								: SOFTSKILLS_COLORS.lightTheme
						}
					></rect>{" "}
				</g>{" "}
			</g>
		</svg>
	);
};
