FROM node:20-alpine

WORKDIR /usr/src/app

COPY time-and-date/package*.json ./
RUN npm install

COPY time-and-date/ .
RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
