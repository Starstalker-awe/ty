//import { Html } from "@elysiajs/html";
import Icon from "./components/icon";
import Base from "./base";


import letter from "./icons/letter.txt" with { type: "text" };
import phone from "./icons/phone.txt" with { type: "text" };
import whatsapp from "./icons/whatsapp.txt" with { type: "text" };

const Menu = () => (<>
    <a data-link="about">About</a>
    <a data-link="examples">Examples</a>
    <a data-link="pricing">Pricing</a>
    <a data-link="contact">Contact</a>
</>);

export default function Home() {
    const age = new Date(new Date().getTime() - new Date(2006, 11, 27).getTime()).getFullYear() - 1970;

    const shared = (<>
        <li>Fully secured</li>
        <li>Professional design</li>
        <li>3 updates per month</li>
        <hr class="my-3" />
    </>);

    return <Base
        title="Home"
        Menu={Menu}
        meta={{
            description: "Trevor Yates; Programmer, website builder, and world traveler!",
            keywords: [],
            og: {
                title: "The Trevor Yates",
                description: "Trevor Yates; Programmer, website builder, and world traveler!",
                image: "goodme",
                url: ""
            }
        }}
        head={<script src="/static/js/home" type="module" />}
    >
        <div class="flex md:flex-row flex-col items-start pb-16 bg-primaries-light md:*:w-1/2">
            <div class="py-8 md:p-8 p-4 my-auto">
                <h1 class="md:text-9xl text-6xl md:text-left">Trevor Yates</h1>
                <h3 class="md:text-left normal-case">Programmer, website builder & world traveler</h3>
            </div>
            <div class="grid grid-cols-3 grid-rows-2 gap-0">
                <img class="col-span-2" src="/static/goodme" />
                <img class="row-span-2" src="/static/library" />
                <img class="col-span-2 md:rounded-bl-full" src="/static/sunset" />
            </div>
        </div>

        <div class="flex md:flex-row flex-col pb-16 bg-primaries-light md:*:w-1/2" id="about">
            <div class="grid grid-cols-3 grid-rows-2 md:order-1 order-2">
                <img class="row-span-2" src="/static/me" />
                <img class="row-span-2" src="/static/volcano" />
                <img class="row-span-2 md:rounded-r-full" src="/static/code" />
            </div>
            <div class="py-8 md:p-8 p-4 my-auto md:order-2 order-1">
                <h2 class="text-primaries-dark">About Me</h2>
                <div class="md:px-16 px-8 child-p:pb-8">
                    <p><span class="font-semibold text-2xl">Hi there!</span> I'm Trevor—an {age}-year-old programmer, web developer, and world traveler with a passion for creating exceptional websites.</p>
                    <p>Over the years, I've delved deep into cybersecurity, programming, web design, and the intricate systems that power our digital world. This journey has fueled my love for building fast, secure, and beautifully designed websites that stand the test of time.</p>
                    <p>From crafting WordPress sites to coding fully custom projects (like this one), I've honed my skills with every project I take on, striving to deliver better results with each line of code.</p>
                </div>
            </div>
        </div>

        <div class="bg-gradient-to-b from-primaries-light to-secondary/95 md:p-16 p-8" id="examples">
            <h2 class="md:mb-8 mb-4">samples of my work</h2>
            <div class="*:fade-image flex md:flex-row flex-col *:overflow-hidden *:rounded-t-2xl md:*:w-1/3 lg:*:max-h-192 *:max-h-96">
                <div><img src="/static/wsc" /></div>
                <div><img src="/static/tky" /></div>
                <div><img src="/static/imd" /></div>
            </div>
        </div>

        <div class="bg-gradient-to-b from-secondary/95 from-5% md:p-16 p-8" id="pricing">
            <h2 class="mb-8">pricing</h2>
            <div class="grid md:grid-cols-3 md:mx-16 gap-6 *:grow *:flex *:flex-col *:items-center *:rounded-2xl *:pt-8 *:pb-12 *:shadow-2xl *:border-t-1 *:border-slate-200 *:last:border-transparent heir-h4:text-shadow-tiny heir-h3:mb-8">
                <div class="bg-white">
                    <h5 class="font-sans font-semibold">Good</h5>
                    <hr class="border-primary border-1 mx-auto w-1/2 mb-4" />
                    <h3 class="font-sans text-shadow-none">$600</h3>
                    <ul>
                        {shared}
                        <li>1 Page</li>
                        <li>1 Embed</li>
                    </ul>
                </div>
                <div class="bg-white">
                    <h5 class="font-sans font-semibold">Better</h5>
                    <hr class="border-primary border-1 mx-auto w-1/2 mb-4" />
                    <h3 class="font-sans text-shadow-none">$750</h3>
                    <ul>
                        {shared}
                        <li>3 Pages</li>
                        <li>3 Embeds</li>
                        <li>1 Form</li>
                        <li>Basic SEO</li>
                    </ul>
                </div>
                <div class="bg-gradient-to-br from-primary-dark to-primary *:text-white">
                    <h5 class="font-sans font-semibold text-white">Best</h5>
                    <hr class="border-primary border-1 mx-auto w-1/2 mb-4" />
                    <h3 class="font-sans text-shadow-none">$800</h3>
                    <ul>
                        {shared}
                        <li>5 Pages</li>
                        <li>5 Embeds</li>
                        <li>3 Forms w/ on-site viewer</li>
                        <li>Optimized SEO</li>
                        <li>1 year free hosting</li>
                        <li>1 year free uptime monitoring</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="md:p-16 py-8 px-2" id="contact">
            <h2>Get in touch</h2>
            <div class="flex md:flex-row flex-col justify-center md:items-start md:gap-12 gap-4 md:px-16 px-3">
                <div>
                    <form class="grid grid-cols-2 gap-2 *:shadow-lg *:border-1 *:border-primaries-dark/25">
                        <input class="col-span-1" type="text" name="fname" placeholder="Your name..." required />
                        <input class="hidden" type="text" name="lname" />
                        <input class="col-span-1" type="tel" name="phone" placeholder="Phone number... (optional)" />
                        <input class="col-span-2" type="email" name="email" placeholder="Email..." required />
                        <textarea class="col-span-2" rows="3" name="message" placeholder="And message..." required />
                        <button class="main-button col-span-2" type="submit">Send Me A Message</button>
                    </form>
                    <div class="msg opacity-0 text-red-600 text-emerald-600 shadow-none border-none p-8 text-center"></div>
                </div>
                <div class="shadow-2xl p-8 rounded-lg overflow-hidden *:p-1 *:flex *:items-center">
                    <a href="mailto:trevoryatesawesome@gmail.com"><Icon src={letter} width={30} />trevoryatesawesome@gmail.com</a>
                    <a href="tel:+1-725-252-6491"><Icon src={phone} width={30} />(725) 252-6491</a>
                    <a href="https://wa.me/50237983898" target="_blank"><Icon src={whatsapp} width={30} />Whatsapp</a>
                </div>
            </div>
        </div>
    </Base>
};