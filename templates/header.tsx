import type { ElementF } from "types";
//import { Html } from "@elysiajs/html";

export default function Header({ Menu }: { Menu: ElementF }) {
	return (
		<>
			<header class="xl:px-72 lg:px-32 md:px-32 px-2 py-2 flex justify-between items-center z-10">
				<div class="md:w-1/3 w-1/4">
					<img class="md:block hidden shadow-none w-auto h-24" src="/static/logo_long" />
					<img class="md:hidden block shadow-none" src="/static/logo" />
				</div>
				<div class="md:block flex flex-col items-end">
					<div class="md:hidden block text-4xl" id="menu-toggle">
						&#9776;
					</div>
					<nav class="md:block md:h-auto md:overflow-visible h-0 overflow-hidden duration-200 flex flex-col text-right md:w-2/3 lg:*:px-6 md:*:px-4 *:px-2 *:font-semibold hover:*:text-slate-600 *:duration-200">
						<Menu />
					</nav>
				</div>
			</header>
			<div
				class="md:hidden h-0 opacity-0 overflow-hidden duration-500 flex justify-evenly *:font-semibold"
				id="mobile-menu"
			>
				<Menu />
			</div>
		</>
	);
}
