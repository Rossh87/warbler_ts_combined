FROM node:13.6.0-alpine3.10

WORKDIR /usr/src/app

COPY . .

RUN yarn install

RUN yarn tsc

EXPOSE 3000

CMD ["yarn", "docker-start"]