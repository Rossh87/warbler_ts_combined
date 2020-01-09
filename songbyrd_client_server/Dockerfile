FROM node:13.6.0-alpine3.10

WORKDIR /usr/src/app

COPY . .

RUN yarn install

RUN yarn build

EXPOSE 3001

CMD ["yarn", "docker-start"]