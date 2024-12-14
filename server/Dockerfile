# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

ARG NODE_VERSION=22.9.0

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.


WORKDIR /usr/src/app

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

USER node

COPY . .

EXPOSE 8443

CMD npm start

FROM nginx:latest

# Copy custom Nginx configuration
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# Copy SSL certificates
COPY ./ssl/server.cert /etc/nginx/ssl/server.cert
COPY ./ssl/server.key /etc/nginx/ssl/server.key
# Expose port 80 for HTTP traffic
EXPOSE 443

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]