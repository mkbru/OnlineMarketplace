FROM node:alpine

RUN apk add --no-cache git

RUN apk add --no-cache openssh

WORKDIR /data

RUN git clone https://github.com/mkbru/OnlineMarketplace.git /data/app

WORKDIR /data/app/OnlineMarketplace

EXPOSE 3000

ENTRYPOINT ["npm","start"]

