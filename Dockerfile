FROM node:lts-alpine3.23

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm ci

COPY ./index.html .
COPY ./app.js .

EXPOSE 3000

CMD ["npm", "run", "node"]





