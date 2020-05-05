FROM node:12-alpine

WORKDIR /usr/src/app

ADD ./package.json ./yarn.lock ./

RUN yarn

CMD ["yarn", "start"]