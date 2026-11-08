FROM ubuntu

WORKDIR /usr/src/app

EXPOSE 5001

RUN apt-get update

RUN apt install -y curl

RUN curl -sL https://deb.nodesource.com/setup_16.x | bash

RUN apt install -y nodejs

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

CMD ["serve", "-s", "-l", "5001", "build"]
