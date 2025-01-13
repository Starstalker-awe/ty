//import { Html } from "@elysiajs/html";
import Base from "./base";

export default function Login({ error }: { error: boolean }) {
    return (<Base
        title="Login"
        indexable={false}
        Menu={() => <></>}
        header={false}
        footer={false}
    >
        <div class="h-screen flex justify-center items-center">
            <div class="md:w-1/4 md:px-16 md:h-1/4 mx-4 px-8 py-16 border-t-1 border-slate-300/25 shadow-2xl rounded-2xl flex flex-col justify-center">
                <h3>Login</h3>
                <form method="POST" action="/admin/view">
                    <input class="border-t-1 border-slate-300/25 shadow-lg" type="password" name="password" placeholder="Password" />
                    <button class="main-button w-full">Submit</button>
                    {error && <p class="text-red-600 text-center">Incorrect password</p>}
                </form>
            </div>
        </div>
    </Base>);
};