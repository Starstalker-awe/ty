import { SITE_NAME } from "../constants";
import type { ElementF } from "types";
//import { Html } from "@elysiajs/html";

export default function Footer({ Menu }: { Menu: ElementF }) {
    const currentYear = new Date().getFullYear();
    return (
        <footer class="xl:py-8 md:py-6 py-4 xl:px-32 lg:px-24 md:px-16 px-4 flex justify-between bg-zinc-100">
            <nav class="justify-evenly flex md:flex-row flex-col w-1/3 *:block *:font-semibold *:duration-300 text-primary hover:*:text-primary-dark">
                <Menu />
            </nav>
            <div class="justify-evenly flex w-1/3">
                &#169; {currentYear} {SITE_NAME}
            </div>
        </footer>
    );
};