import Base from "./base";

const Menu = () => (<>
    <a data-link="about">About</a>
    <a data-link="examples">Examples</a>
    <a data-link="pricing">Pricing</a>
</>);

export default function Home() {
    const age = new Date(new Date().getTime() - new Date(2006, 11, 27).getTime()).getFullYear() - 1970;

    return <Base
        title="Home"
        Menu={Menu}
        meta={{
            description: "Potato",
            keywords: [],
            og: {
                title: "",
                description: "",
                image: "",
                url: ""
            }
        }}
        head={<script src="/static/js/home" type="module" />}
    >
        
        <div class="md:flex bg-primaries-light md:*:w-1/2">
            <div class="py-8 md:p-8 p-4 my-auto">
                <h1 class="md:text-9xl text-6xl md:text-left">Trevor Yates</h1>
                <h3 class="md:text-left normal-case">Programmer, website builder & world traveler</h3>
            </div>
            <div class="grid grid-cols-3 grid-rows-2 gap-0">
                <img class="col-span-2" src="/static/goodme" />
                <img class="row-span-2" src="/static/me" />
                <img class="col-span-2 md:rounded-bl-full" src="/static/sunset" />
            </div>
        </div>

        <div class="flex md:flex-row flex-col bg-primaries-light md:*:w-1/2" id="about">
            <div class="grid grid-cols-3 grid-rows-2 md:order-1 order-2">
                <img class="row-span-2" src="/static/volcano" />
                <img class="row-span-2" src="/static/library" />
                <img class="row-span-2 md:rounded-r-full" src="/static/code" />
            </div>
            <div class="py-8 md:p-8 p-4 my-auto md:order-2 order-1">
                <h2 class="text-primaries-dark">About Me</h2>
                <div class="md:px-16 px-8 child-p:pb-8">
                    <p><span class="font-semibold text-2xl">Hey there!</span> My name's Trevor, and I'm an {age} year-old programmer and world traveler.</p>
                    <p>I've spent years learning about cybersecurity, programming, web design, and the inner workings of the computers that make our world go round.</p>
                    <p>Along the way, I've built dozens of sites, whether with Wordpress or coding them from scratch—like this one—gaining experience and improving every time.</p>
                </div>
            </div>
        </div>

        <div class="bg-gradient-to-b from-primaries-light to-secondary md:p-16 p-8" id="examples">
            <h2>samples of my work</h2>
            <div class="*:fade-image md:flex *:overflow-hidden *:rounded-t-2xl md:*:w-1/3 md:*:max-h-192 *:max-h-96 hover:*:scale-110">
                <a href="https://worldschoolcamp.com" target="_blank">
                    <img src="/static/wsc" />
                </a>
                <a href="https://thekarenyates.com" target="_blank">
                    <img src="/static/tky" />
                </a>
                <a href="https://inspiremydreams.com" target="_blank">
                    <img src="/static/imd" />
                </a>
            </div>
        </div>
    </Base>
};