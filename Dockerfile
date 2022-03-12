FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  yarn \
  imagemagick \
  webp

COPY package.json .

RUN yarn

COPY . .

CMD ["yarn run build", "npm start"]
