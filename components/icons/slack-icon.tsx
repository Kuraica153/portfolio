import { useTheme } from "next-themes";
import { DEVOPS_COLORS } from "@/utils/icons/util";

export const SlackIcon = () => {
	const { theme } = useTheme();

	return (
		<svg
			width="20px"
			height="20px"
			viewBox="0 0 24 24"
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
					fillRule="evenodd"
					clipRule="evenodd"
					d="M21.9495 12C22.5978 11.3647 23 10.4793 23 9.5C23 7.567 21.433 6 19.5 6C18.9632 6 18.4546 6.12085 18 6.33682V4.5C18 2.567 16.433 1 14.5 1C13.5207 1 12.6353 1.40223 12 2.05051C11.3647 1.40223 10.4793 1 9.5 1C7.567 1 6 2.567 6 4.5C6 5.0368 6.12085 5.54537 6.33682 6H4.5C2.567 6 1 7.567 1 9.5C1 10.4793 1.40223 11.3647 2.05051 12C1.40223 12.6353 1 13.5207 1 14.5C1 16.433 2.567 18 4.5 18C5.0368 18 5.54537 17.8792 6 17.6632V19.5C6 21.433 7.567 23 9.5 23C10.4793 23 11.3647 22.5978 12 21.9495C12.6353 22.5978 13.5207 23 14.5 23C16.433 23 18 21.433 18 19.5C18 18.9632 17.8792 18.4546 17.6632 18H19.5C21.433 18 23 16.433 23 14.5C23 13.5207 22.5978 12.6353 21.9495 12ZM9.5 3C10.3284 3 11 3.67157 11 4.5V6H9.5C8.67157 6 8 5.32843 8 4.5C8 3.67157 8.67157 3 9.5 3ZM13 4.5C13 3.67157 13.6716 3 14.5 3C15.3284 3 16 3.67157 16 4.5V11H13V4.5ZM11 11V8H4.5C3.67157 8 3 8.67157 3 9.5C3 10.3284 3.67157 11 4.5 11H11ZM18 11H19.5C20.3284 11 21 10.3284 21 9.5C21 8.67157 20.3284 8 19.5 8C18.6716 8 18 8.67157 18 9.5V11ZM19.5 13H13V16H19.5C20.3284 16 21 15.3284 21 14.5C21 13.6716 20.3284 13 19.5 13ZM14.5 18H13V19.5C13 20.3284 13.6716 21 14.5 21C15.3284 21 16 20.3284 16 19.5C16 18.6716 15.3284 18 14.5 18ZM11 13H8V19.5C8 20.3284 8.67157 21 9.5 21C10.3284 21 11 20.3284 11 19.5V13ZM4.5 13H6V14.5C6 15.3284 5.32843 16 4.5 16C3.67157 16 3 15.3284 3 14.5C3 13.6716 3.67157 13 4.5 13Z"
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
