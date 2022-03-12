FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  yarn \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN yarn

COPY . .

CMD ["node", "."]
