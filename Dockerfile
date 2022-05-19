FROM node:14-alpine3.10

WORKDIR .

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]