FROM starstalkerawe/bun:latest AS base
WORKDIR /home/bun/site

FROM base AS install
RUN mkdir -p /temp/prod
COPY package.json bun.lock /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

FROM base
COPY --from=install /temp/prod/node_modules node_modules
COPY . .

RUN chown -R 1000:1000 /home/bun/site/public

EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "main.tsx" ]