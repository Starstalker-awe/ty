import "./tailwind.config";
import "./build";

const { default: secrets } = await import(`${Bun.env.DATA_DIR}/secrets.json`);

import * as middleware from "middleware";
import { MailtrapTransport } from "mailtrap";
import { html } from "@elysiajs/html";
import Nodemailer from "nodemailer";
import Elysia, { t } from "elysia";
import log from "logging";

// Import page templates here
import Home from "./templates/home";
import Login from "./templates/login";
import Base from "./templates/base";

const files = {
	password: Bun.file(`${Bun.env.DATA_DIR}/password.txt`),
	submissions: Bun.file(`${Bun.env.DATA_DIR}/entries.txt`),
};

const sstart = performance.now();
const server = new Elysia()
	.use(middleware.rateLimiter)
	.use(middleware.staticFiles)
	.decorate(
		"email",
		Nodemailer.createTransport(MailtrapTransport({ token: secrets.mailtrap_token }))
	)
	.use(html())

	.onError(({ code, redirect }) => {
		if (code === "NOT_FOUND") return redirect("/");
	})
	// Add routes here
	.get("/", () => <Home />)
	.get("/verification", () => (
		<Base
			title=""
			head={
				<meta
					name="impact-site-verification"
					content="e9b19ea6-43c8-410e-8a6a-e9fce752bbb9"
				/>
			}
			indexable={false}
		/>
	))
	.group("/admin", (app) =>
		app
			.get("/", () => <Login error={false} />)

			.get("/view", ({ redirect }) => redirect("/admin"))
			.post(
				"/view",
				async ({ body }) => {
					try {
						await files.password.text();
						if (
							!(await Bun.password.verify(body.password, await files.password.text()))
						) {
							return <Login error={true} />;
						}
					} catch (e) {
						await Bun.write(
							files.password,
							await Bun.password.hash(body.password, {
								algorithm: "argon2id",
								timeCost: 31,
							})
						);
					}

					return "page";
				},
				{ body: t.Object({ password: t.String() }) }
			)
	)

	.group("/api", (app) =>
		app.post(
			"/contact",
			async ({ body, email }) => {
				console.log(body);
				await files.submissions.write(
					`${Object.values(body).join("\u200b")}\n${await files.submissions.text()}`
				);

				email.sendMail({
					text: "",
					from: {
						address: secrets.from_email,
						name: "Trevor Yates",
					},
					to: {
						address: "trevoryatesawesome@gmail.com",
						name: "Trevor Yates",
					},
					subject: "New submission to form",
					html: `
                <!doctype html>
                <html>
                    <head>
                        <meta http-equiv="Content-Type" content="text/html;" charset="UTF-8">
                    </head>
                    <body>
                        <h1 style="text-align: center;">New Message!</h1>
                        <h3>${body.fname} (${body.email}) ${body.phone && `(${body.phone})`}</h3>
                        <div style="margin: 0 32px 16px 32px 0; font-family: monospace">
                            ${body.message}
                        </div>
                    </body>
                </html>
            `,
				});
			},
			{
				body: t.Object({
					fname: t.String(),
					phone: t.MaybeEmpty(t.String()),
					email: t.String({ format: "email", default: "" }),
					message: t.String(),
				}),
			}
		)
	);

try {
	server.listen({ port: 3000 });

	log(performance.now() - sstart, "Start server");
	log(performance.now(), "Total start time");
} catch (e: any) {
	console.log("Houston we have a problem.");
	process.exit(0);
}
