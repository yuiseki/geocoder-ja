FROM node:14

WORKDIR /
ADD src /app
WORKDIR /app
RUN npm ci

EXPOSE $PORT
CMD node /app/index.js