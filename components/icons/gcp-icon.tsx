import { useTheme } from "next-themes";
import { DEVOPS_COLORS } from "@/utils/icons/util";

export const GCPIcon = () => {
	const { theme } = useTheme();

	return (
		<svg
			width="20px"
			height="20px"
			fill="#000000"
			viewBox="0 0 32 32"
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
					d="M16.255 3.172c-5.729-0.13-10.813 3.661-12.313 9.193 0.068-0.026-0.073 0.016 0 0-5.167 3.401-5.229 10.812-0.328 14.589l0.005-0.010-0.010 0.042c1.568 1.182 3.474 1.813 5.438 1.807h6.896l0.042 0.036h6.922c8.917 0.073 12.5-11.469 5.115-16.464-0.635-2.349-1.943-4.458-3.76-6.068l-0.057 0.057 0.005-0.068c-2.203-1.943-5.021-3.047-7.953-3.115zM15.776 8.703c1.656-0.057 3.359 0.49 4.646 1.531 1.609 1.344 2.526 3.344 2.484 5.438v0.693c4.708-0.094 4.708 7.016 0 6.922h-6.922l-0.010 0.010v-0.052h-6.927c-0.49 0-0.974-0.104-1.422-0.307-2.203-0.995-2.729-3.891-1.021-5.604 1.714-1.708 4.604-1.182 5.604 1.021l4.016-4.016c-1.333-1.74-3.26-2.932-5.411-3.354 0.026-0.010 0.052-0.031 0.073-0.026 1.26-1.385 3.026-2.198 4.896-2.255z"
					fill={
						theme === "dark"
							? DEVOPS_COLORS.darkTheme
							: DEVOPS_COLORS.lightTheme
					}
				></path>{" "}
			</g>
		</svg>
	);
};
