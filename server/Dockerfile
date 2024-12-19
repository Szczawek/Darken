# Stage 1: Build Stage
FROM node:22.9.0-alpine AS build

WORKDIR /usr/src/server

COPY package.json package-lock.json ./

RUN --mount=type=cache,target=/root/.npm \
    npm ci

COPY . .

FROM node:22.9.0-alpine

WORKDIR /usr/src/server

COPY --from=build /usr/src/server /usr/src/server

RUN npm ci --omit=dev

EXPOSE 3000

CMD ["node", "server.js"]
