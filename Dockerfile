FROM node:22-alpine3.18

WORKDIR /app

COPY . .

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

CMD ["npm", "start"]

