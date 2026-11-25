from node:22-alpine/node

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "node","start" ]