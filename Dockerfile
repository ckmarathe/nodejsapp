FROM node:10.21-alpine

WORKDIR /usr/src/app

COPY . .

EXPOSE 3000

CMD [ "node", "hello.js" ]
